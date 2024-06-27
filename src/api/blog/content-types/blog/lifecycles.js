const fs = require('fs');
const path = require('path');
const { afterUpdate } = require('../../../channel-definition/content-types/channel-definition/lifecycles');
const blog = require('../../controllers/blog');
let isUpdating = false; // Define isUpdating
function getIdFromChannel(channels, channelName) {
    for (const channel of channels) {
        if (channel.channelList[channelName] !== undefined) {
            return channel.channelList[channelName];
        }
    }
    return undefined; // or some default value/error handling
}

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
    async afterCreate(event) {

        const { result } = event;
        console.log('Created entry:', result);
        const locales = await strapi.plugins['i18n'].services.locales.find();


        if (!isUpdating) {
            isUpdating = true;
            console.log('Created entry:', result);

            try {
                const entry = await strapi.db.query('api::blog.blog').findOne({

                    where: { id: result.id },
                    populate: true,

                });
                console.log('EntryALO:', entry);
                const CategoryID = entry.blog_category_definition.categoryID;
                console.log('CategoryIDAlo:', CategoryID);
                const BlogID = result.id;
                await strapi.entityService.update('api::blog.blog', result.id, {
                    data: {
                        blogID: BlogID,
                        categoryID: CategoryID,
                    }
                });
                const filteredData = removeIds(result);
                for (const locale of locales) {
                    console.log(`Checking locale entry for ${locale.code}...`);
                    if (locale.code !== filteredData.locale) {
                        console.log(`Creating locale entry for ${locale.code}...`);
                        try {
                            const localeBlog = await strapi.entityService.create('api::blog.blog', {
                                data: {
                                    ...filteredData,
                                    blog_category_definition: result.blog_category_definition,
                                    categoryID: CategoryID,
                                    locale: locale.code,
                                    blogID: BlogID
                                }
                            });
                            console.log(`Created locale entry for ${locale.code}:`, localeBlog);
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
        console.log('Created entry:', result);
        const locales = await strapi.plugins['i18n'].services.locales.find();


        if (!isUpdating) {
            isUpdating = true;
            console.log('Created entry:', result);

            try {
                const entry = await strapi.db.query('api::blog.blog').findOne({

                    where: { id: result.id },
                    populate: true,

                });
                console.log('EntryALO:', entry);
                const CategoryID = entry.blog_category_definition.categoryID;
                const BlogID = result.id;
                console.log('BlogIDAlo:', BlogID);
                await strapi.entityService.update('api::blog.blog', result.id, {
                    data: {
                        blog_category_definition: result.blog_category_definition,
                        categoryID: CategoryID
                    }
                });

                for (const locale of locales) {
                    console.log(`Checking locale entry for ${locale.code}...`);
                    if (locale.code !== result.locale) {
                        console.log(`Creating locale entry for ${locale.code}...`);
                        try {
                            const localeBlog = await strapi.entityService.update('api::blog.blog', result.id, {
                                data: {
                                    blog_category_definition: result.blog_category_definition,
                                    categoryID: CategoryID,
                                    locale: locale.code
                                }
                            });
                            console.log(`Created locale entry for ${locale.code}:`, localeBlog);
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

    }

};
