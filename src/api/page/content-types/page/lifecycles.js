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
    //         { code: 'ru', name: 'Russian' },
    //         { code: 'uk', name: 'Ukrainian' },
    //         { code: 'de', name: 'German' },
    //         { code: 'el', name: 'Greek' }
    //     ];
    //     console.log('Locales:', locales);

    //     const saleChannels = ['Samosa', 'Rodosa', 'Midilliye', 'Kosa', 'Meise', 'Sakıza'];
    //     console.log('Sale Channels:', saleChannels);
    //     const updatedSaleChannels = saleChannels.filter(channel => channel !== result.saleChannel);
    //     console.log('Updated Sale Channels:', updatedSaleChannels);
    //     const defaultLocale = 'tr';
    //     console.log('Default Locale:', defaultLocale);

    //     // if (result.locale === defaultLocale) {
    //     console.log(`Processing entries for other locales...`);
    //     for (const locale of locales) {
    //         try {
    //             // Veriyi filtreleyelim
    //             const filteredData = removeIds(result);

    //             // Her bir saleChannel için yeni giriş oluşturalım
    //             for (const saleChannel of updatedSaleChannels) {

    //                 console.log(`Creating entry for saleChannel ${saleChannel}...`);
    //                 await strapi.entityService.create('api::page.page', {
    //                     data: {
    //                         ...filteredData,
    //                         locale: locale.code,
    //                         saleChannel: saleChannel
    //                     },
    //                 });
    //                 console.log(`Successfully created entry for locale ${result.locale} and saleChannel ${saleChannel}`);

    //             }
    //         } catch (error) {
    //             console.error(`Error creating entry for locale ${result.locale}:`, error);
    //         }
    //     }
    //     // } else {
    //     //     console.log(`Entry locale is not the default locale (${defaultLocale}). No additional entries created.`);
    //     // }
    // },
};