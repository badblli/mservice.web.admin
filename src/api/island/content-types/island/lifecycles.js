let isUpdating = false;
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




module.exports = {
    async afterCreate(event) {
        const { result } = event;
        console.log('Created entry:', result);

        const locales = await strapi.plugins['i18n'].services.locales.find();
        const channels = await strapi.db.query('api::channel.channel').findMany();
        console.log('Channels:', channels);

        if (!isUpdating) {
            isUpdating = true;
            try {
                const saleChannelID = getIdFromChannel(channels, result.saleChannel);
                const subSaleChannelID = getIdFromChannel(channels, result.subSaleChannel);

                console.log('Sale Channel:', result.saleChannel, 'Sale Channel ID:', saleChannelID);
                console.log('Sub Sale Channel:', result.subSaleChannel, 'Sub Sale Channel ID:', subSaleChannelID);

                await strapi.entityService.update('api::island.island', result.id, {
                    data: {
                        saleChannel: result.saleChannel,
                        saleChannelID: saleChannelID,
                        subSaleChannel: result.subSaleChannel,
                        subSaleChannelID: subSaleChannelID
                    }
                });

                const filteredData = removeIds(result);
                for (const locale of locales) {
                    console.log(`Checking locale entry for ${locale.code}...`);
                    if (locale.code !== filteredData.locale) {
                        console.log(`Creating locale entry for ${locale.code}...`);
                        try {
                            const localeIsland = await strapi.entityService.create('api::island.island', {
                                data: {
                                    ...filteredData,
                                    saleChannelID: getIdFromChannel(channels, filteredData.saleChannel),
                                    subSaleChannelID: getIdFromChannel(channels, filteredData.subSaleChannel),
                                    locale: locale.code,
                                }
                            });
                            console.log(`Created locale entry for ${locale.code}:`, localeIsland);
                        } catch (error) {
                            console.error(`Error creating locale entry for ${locale.code}:`, error);
                        }
                    }
                }

            } catch (error) {
                console.error('Error during afterCreate:', error);
            }
            isUpdating = false;
        }
    },

    async afterUpdate(event) {
        const { result } = event;
        console.log('Updated entry:', result);
        const locales = await strapi.plugins['i18n'].services.locales.find();
        const channels = await strapi.db.query('api::channel.channel').findMany();
        console.log('Channels:', channels);
        if (!isUpdating) {
            isUpdating = true;
            try {
                const saleChannelID = getIdFromChannel(channels, result.saleChannel);
                const subSaleChannelID = getIdFromChannel(channels, result.subSaleChannel);

                console.log('Sale Channel:', result.saleChannel, 'Sale Channel ID:', saleChannelID);
                console.log('Sub Sale Channel:', result.subSaleChannel, 'Sub Sale Channel ID:', subSaleChannelID);
                await strapi.entityService.update('api::island.island', result.id, {
                    data: {
                        saleChannel: result.saleChannel,
                        saleChannelID: saleChannelID,
                        subSaleChannel: result.subSaleChannel,
                        subSaleChannelID: subSaleChannelID
                    }
                });

                // const filteredData = removeIds(result);
                // for (const locale of locales) {
                //     console.log(`Checking locale entry for ${locale.code}...`);
                //     if (locale.code !== filteredData.locale) {
                //         console.log(`Creating locale entry for ${locale.code}...`);
                //         try {
                //             const localeIsland = await strapi.entityService.create('api::island.island', {
                //                 data: {
                //                     ...filteredData,
                //                     saleChannelID: getIdFromChannel(channels, filteredData.saleChannel),
                //                     subSaleChannelID: getIdFromChannel(channels, filteredData.subSaleChannel),
                //                     locale: locale.code,
                //                 }
                //             });
                //             console.log(`Created locale entry for ${locale.code}:`, localeIsland);
                //         } catch (error) {
                //             console.error(`Error creating locale entry for ${locale.code}:`, error);
                //         }
                //     }
                // }
            } catch (error) {
                console.error('Error during afterUpdate:', error);
            }
            isUpdating = false;
        }
    },


};
