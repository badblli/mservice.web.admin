// let isUpdating = false; // Define isUpdating

// module.exports = {
//     async afterUpdate(event) {
//         const locales = [
//             { code: 'tr', name: 'Turkish' },
//             { code: 'en', name: 'English' },
//             // { code: 'ru', name: 'Russian' },
//             // { code: 'uk', name: 'Ukrainian' },
//             // { code: 'de', name: 'German' },
//             // { code: 'el', name: 'Greek' }
//         ];

//         if (!isUpdating) {
//             isUpdating = true;
//             const { result } = event;


//             for (const locale of locales) {
//                 try {
//                     await strapi.entityService.create(
//                         'api::blog.blog', // Here, specify the id of the entry to update
//                         {
//                             blogID: result.id,
//                             locale: locale.code,
//                         }
//                     );
//                 } catch (error) {
//                     console.error('Error updating entry:', error);
//                 }
//             }
//             isUpdating = false; // Reset isUpdating after all updates are done
//         }
//     }
// };
