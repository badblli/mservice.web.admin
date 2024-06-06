// module.exports = ({ env }) => ({
//     // ...
//     email: {
//         config: {
//             provider: "nodemailer",
//             providerOptions: {
//                 host: env("SMTP_HOST", "smtp-mail.outlook.com"),
//                 port: env("SMTP_PORT", 587),
//                 auth: {
//                     user: "info@depoantalya.com",
//                     pass: "3@S_i_7Ud",
//                 },
//                 // ... any custom nodemailer options
//             },
//             settings: {
//                 defaultFrom: "info@depoantalya.com",
//                 defaultReplyTo: "info@depoantalya.com",
//             },
//         },
//     },
//     // ...
// });
module.exports = ({ env }) => ({
    // ..
    'transformer': {
        enabled: true,
        config: {
            prefix: '/api/',
            responseTransforms: {
                removeAttributesKey: true,
                removeDataKey: true,
            }
        }
    },
    // ..
    'strapi-plugin-populate-deep': {
        config: {
            defaultDepth: 6, // Default is 5
        }
    },
    seo: {
        enabled: true,
    },
    "content-versioning": {
        enabled: true,
    },
});