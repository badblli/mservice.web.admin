// const { afterCreate, afterUpdate } = require("../../../channel-definition/content-types/channel-definition/lifecycles");

// let isUpdating = false; // Define isUpdating

// module.exports = {
//     async afterUpdate(event) {
//         // console.log('Updated entry:', event.result);
//         const locales = await strapi.plugins['i18n'].services.locales.find();

//         // console.log('Locales:', locales);

//         if (!isUpdating) {
//             isUpdating = true;
//             const { result } = event;
//             console.log('Created entry:', result);

//             for (const locale of locales) {
//                 try {
//                     console.log(`Creating entry for locale ${locale.code}...`);
//                     await strapi.entityService.create(
//                         'api::blog.blog',
//                         {
//                             data: {
//                                 blogID: result.id,
//                                 locale: locale.code,
//                             }
//                         }
//                     );
//                     console.log(`Successfully created entry for locale ${locale.code}`);
//                     await strapi.entityService.delete(
//                         'api::blog.blog', result.id

//                     );
//                 } catch (error) {
//                     console.error('Error updating entry:', error);
//                 }
//             }
//             isUpdating = false; // Reset isUpdating after all updates are done
//         }
//     }
    
// };
