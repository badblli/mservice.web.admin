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
function getIdFromChannel(channel) {
    console.log('Channel:', channel);
    const channels = {
        "Samosa": 1,
        "Samos": 1,     // English name: Samos, Greek name: Σάμος (Samos)
        "Σάμος": 1,     // Greek name: Σάμος (Samos)
        "Rodosa": 2,
        "Rodos": 2,     // English name: Rhodes, Greek name: Ρόδος (Rodos)
        "Rhodes": 2,
        "Ρόδος": 2,     // Greek name: Ρόδος (Rodos)
        "Midilliye": 3,
        "Midilli": 3,   // English name: Lesbos, Greek name: Λέσβος (Lesvos)
        "Lesbos": 3,
        "Λέσβος": 3,    // Greek name: Λέσβος (Lesvos)
        "Kosa": 4,
        "Kos": 4,       // English name: Kos, Greek name: Κως (Kos)
        "Κως": 4,       // Greek name: Κως (Kos)
        "Meise": 5,
        "Meis": 5,      // English name: Kastellorizo, Greek name: Καστελλόριζο (Kastellorizo)
        "Kastellorizo": 5,
        "Καστελλόριζο": 5, // Greek name: Καστελλόριζο (Kastellorizo)
        "Sakıza": 6,
        "Sakız": 6,     // English name: Chios, Greek name: Χίος (Chios)
        "Chios": 6,
        "Χίος": 6,      // Greek name: Χίος (Chios)
        "Meander": 7,   // English name: Meander (Menderes), Greek name: Μαίανδρος (Maiandros)
        "Μαίανδρος": 7  // Greek name: Μαίανδρος (Maiandros)
    }

    console.log('Channels:', channels[channel]);
    return channels[channel] || null;
}

let isUpdating = false;
module.exports = {

    // async afterUpdate(event) {
    //     const { result } = event;
    //     console.log('Created entry:', result);
    //     console.log('Strapi plugins:', strapi.plugins);

    //     // const locales = Object.values(await strapi.plugins['i18n'].services.locales.list());
    //     const locales = [
    //         { code: 'tr', name: 'Turkish' },
    //         { code: 'en', name: 'English' },
    //         { code: 'ru', name: 'Russian' },
    //         { code: 'uk', name: 'Ukrainian' },
    //         { code: 'de', name: 'German' },
    //         { code: 'el', name: 'Greek' }
    //     ];
    //     console.log('Locales:', locales);

    //     const saleChannels = ['Samosa', 'Rodosa', 'Midilliye', 'Kosa', 'Meise', 'Sakıza'];
    //     console.log('Sale Channels:', saleChannels);

    //     const defaultLocale = 'tr';
    //     console.log('Default Locale:', defaultLocale);

    //     if (result.locale === defaultLocale) {
    //         console.log(`Processing entries for other locales...`);
    //         for (const locale of locales) {
    //             if (locale.code !== defaultLocale) {
    //                 console.log(`Creating entry for locale ${locale.code}...`);
    //                 try {
    //                     // Veriyi filtreleyelim
    //                     const filteredData = removeIds(result);

    //                     // Her bir saleChannel için yeni giriş oluşturalım
    //                     for (const saleChannel of saleChannels) {
    //                         console.log(`Creating entry for saleChannel ${saleChannel}...`);
    //                         await strapi.entityService.create('api::page.page', {
    //                             data: {
    //                                 ...filteredData,
    //                                 locale: locale.code,
    //                                 saleChannel: saleChannel
    //                             },
    //                         });
    //                         console.log(`Successfully created entry for locale ${locale.code} and saleChannel ${saleChannel}`);
    //                     }
    //                 } catch (error) {
    //                     console.error(`Error creating entry for locale ${locale.code}:`, error);
    //                 }
    //             }
    //         }
    //     } else {
    //         console.log(`Entry locale is not the default locale (${defaultLocale}). No additional entries created.`);
    //     }
    // },


    // async afterUpdate(event) {
    //     const { result } = event;
    //     console.log('Created entry:', result);
    //     console.log('Strapi plugins:', strapi.plugins);

    //     // const locales = Object.values(await strapi.plugins['i18n'].services.locales.list());
    //     const locales = [
    //         { code: 'tr', name: 'Turkish' },
    //         { code: 'en', name: 'English' },
    //         // { code: 'ru', name: 'Russian' },
    //         // { code: 'uk', name: 'Ukrainian' },
    //         // { code: 'de', name: 'German' },
    //         // { code: 'el', name: 'Greek' }
    //     ];
    //     console.log('Locales:', locales);
    //     const updatedLocales = locales.filter(locale => locale.code !== result.locale);

    //     const saleChannels = ['Meander'];
    //     console.log('Sale Channels:', saleChannels);
    //     const updatedSaleChannels = saleChannels.filter(channel => channel !== result.saleChannel);
    //     console.log('Updated Sale Channels:', updatedSaleChannels);

    //     console.log(`Processing entries for other locales...`);
    //     for (const locale of locales) {
    //         try {
    //             // Filter the data
    //             const filteredData = removeIds(result);

    //             // Create new entries for each saleChannel
    //             for (const saleChannel of saleChannels) {
    //                 console.log(`Creating entry for saleChannel ${saleChannel}...`);
    //                 await strapi.entityService.create('api::page.page', {
    //                     data: {
    //                         ...filteredData,
    //                         locale: locale.code, // Assuming you want to use a specific locale
    //                         saleChannel: saleChannel,
    //                         saleChannelID: getIdFromChannel(saleChannel)
    //                     },
    //                 });
    //                 console.log(`Successfully created entry for locale ${result.locale} and saleChannel ${saleChannel}`);
    //             }
    //         } catch (error) {
    //             console.error(`Error creating entry for locale ${result.locale}:`, error);
    //         }
    //     }

    // },


    // // CREATE SALECHANNELID

    async afterCreate(event) {
        if (!isUpdating) {
            isUpdating = true;
            const { result } = event;
            console.log('Created entry:', result);
            // Update the saleChannel field
            // Update the hamburger menu items within the layout
            const updatedLayout = result.layout.map(layoutItem => {
                if (layoutItem.__component === 'global.navbar') {
                    const updatedHamburgerMenu = layoutItem.hamburgerMenu.map(item => {
                        return {
                            ...item,
                            subSaleChannelID: getIdFromChannel(item.label)
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
                    saleChannelID: getIdFromChannel(result.saleChannel)
                }
            });
            isUpdating = false;
        }
    },

    // async afterUpdate(event) {
    //     if (!isUpdating) {
    //         isUpdating = true;
    //         const { result } = event;
    //         console.log('Updated entry:', result);

    //         // Update the hamburger menu items within the layout
    //         const updatedLayout = result.layout.map(layoutItem => {
    //             if (layoutItem.__component === 'global.navbar') {
    //                 const updatedHamburgerMenu = layoutItem.hamburgerMenu.map(item => {
    //                     return {
    //                         ...item,
    //                         subSaleChannelID: getIdFromChannel(item.label)
    //                     };
    //                 });
    //                 return {
    //                     ...layoutItem,
    //                     hamburgerMenu: updatedHamburgerMenu
    //                 };
    //             }
    //             return layoutItem;
    //         });

    //         // Update the entry with the new layout
    //         await strapi.entityService.update('api::page.page', result.id, {
    //             data: {
    //                 layout: updatedLayout,
    //                 saleChannelID: getIdFromChannel(result.saleChannel)
    //             }
    //         });

    //         isUpdating = false;
    //     }
    // }
};

