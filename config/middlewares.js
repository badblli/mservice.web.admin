module.exports = [
  'strapi::logger',
  'strapi::errors',
  'strapi::security',
  'strapi::poweredBy',
  'strapi::query',
  'strapi::body',
  {
    name: 'strapi::cors',
    config: {
      origin: '*',
      header: '*'
      // You can configure other CORS options here if needed
    },
  },
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
