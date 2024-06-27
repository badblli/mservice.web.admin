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




module.exports = {
    async afterCreate(event) {
        const { result } = event;
        console.log('Created entry:', result);

        const locales = await strapi.plugins['i18n'].services.locales.find();



        if (!isUpdating) {
            isUpdating = true;
            try {

                const CategoryID = result.id;


                await strapi.entityService.update('api::blog-category-definition.blog-category-definition', result.id, {
                    data: {
                        categoryID: CategoryID
                    }
                });

                const filteredData = removeIds(result);
                for (const locale of locales) {
                    console.log(`Checking locale entry for ${locale.code}...`);
                    if (locale.code !== filteredData.locale) {
                        console.log(`Creating locale entry for ${locale.code}...`);
                        try {
                            const localeIsland = await strapi.entityService.create('api::blog-category-definition.blog-category-definition', {
                                data: {
                                    ...filteredData,
                                    categoryID: CategoryID,
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




};
