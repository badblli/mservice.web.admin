// Fonksiyonu tanımlayalım
function removeIds(data) {
    // İlk olarak verinin bir kopyasını oluşturalım
    const newData = { ...data };

    // Veriden 'id' alanını kaldıralım
    delete newData.id;

    // Veriden 'localizations' alanını kaldıralım
    delete newData.localizations;

    // Veriden 'createdBy' alanını kaldıralım
    delete newData.createdBy;

    // Veriden 'updatedBy' alanını kaldıralım
    delete newData.updatedBy;

    // Eğer 'layout' alanı varsa içindeki her bir nesneyi kontrol edelim ve içindeki 'id' alanlarını kaldıralım
    if (newData.layout) {
        newData.layout = newData.layout.map(item => {
            const newItem = { ...item };
            delete newItem.id;
            return newItem;
        });
    }

    // Fonksiyon, güncellenmiş veriyi döndürsün
    return newData;
}
function getIdFromChannel(channels, channelName) {
    for (const channel of channels) {
        if (channel.channelList[channelName] !== undefined) {
            return channel.channelList[channelName];
        }
    }
    return undefined; // or some default value/error handling
}

let isUpdating = false;
module.exports = {


    async afterCreate(event) {
        if (!isUpdating) {
            isUpdating = true;
            const { result } = event;
            console.log('Created entry:', result);
            const locales = await strapi.plugins['i18n'].services.locales.find();
            const channels = await strapi.db.query('api::channel.channel').findMany();
            console.log('Channels:', channels);
            const saleChannelID = getIdFromChannel(channels, result.saleChannel);
            const subSaleChannelID = getIdFromChannel(channels, result.subSaleChannel);

            console.log('Sale Channel:', result.saleChannel, 'Sale Channel ID:', saleChannelID);
            console.log('Sub Sale Channel:', result.subSaleChannel, 'Sub Sale Channel ID:', subSaleChannelID);
            // Update the saleChannel field
            // Update the hamburger menu items within the layout
            const updatedLayout = result.layout.map(layoutItem => {
                if (layoutItem.__component === 'global.navbar') {
                    const updatedHamburgerMenu = layoutItem.hamburgerMenu.map(item => {
                        return {
                            ...item,
                            subSaleChannelID: getIdFromChannel(channels, item.label)
                        };
                    });
                    return {
                        ...layoutItem,
                        hamburgerMenu: updatedHamburgerMenu
                    };
                }
                return layoutItem;
            });

            await strapi.entityService.update('api::page.page', result.id, {
                data: {
                    layout: updatedLayout,
                    saleChannelID: saleChannelID,
                }
            });
            const filteredData = removeIds(result);
            for (const locale of locales) {
                console.log(`Checking locale entry for ${locale.code}...`);
                if (locale.code !== filteredData.locale) {
                    console.log(`Creating locale entry for ${locale.code}...`);
                    try {
                        const localeIsland = await strapi.entityService.create('api::page.page', {
                            data: {
                                ...filteredData,
                                saleChannelID: getIdFromChannel(channels, filteredData.saleChannel),
                                locale: locale.code,
                            }
                        });
                        console.log(`Created locale entry for ${locale.code}:`, localeIsland);
                    } catch (error) {
                        console.error(`Error creating locale entry for ${locale.code}:`, error);
                    }
                }
            }
            isUpdating = false;
        }
    },

    async afterUpdate(event) {
        if (!isUpdating) {
            isUpdating = true;
            const { result } = event;
            console.log('Updated entry:', result);
            const channels = await strapi.db.query('api::channel.channel').findMany();

            // Update the hamburger menu items within the layout
            const updatedLayout = result.layout.map(layoutItem => {
                if (layoutItem.__component === 'global.navbar') {
                    const updatedHamburgerMenu = layoutItem.hamburgerMenu.map(item => {
                        return {
                            ...item,
                            subSaleChannelID: getIdFromChannel(channels, item.label)
                        };
                    });
                    return {
                        ...layoutItem,
                        hamburgerMenu: updatedHamburgerMenu
                    };
                }
                return layoutItem;
            });

            // Update the entry with the new layout
            await strapi.entityService.update('api::page.page', result.id, {
                data: {
                    layout: updatedLayout,
                    saleChannelID: getIdFromChannel(channels, result.saleChannel)
                }
            });

            isUpdating = false;
        }
    }
};

