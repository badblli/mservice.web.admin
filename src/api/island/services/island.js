'use strict';

/**
 * island service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::island.island');
