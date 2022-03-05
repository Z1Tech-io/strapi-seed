"use strict";

module.exports = {
  index: (ctx) => {
    ctx.body = strapi
      .plugin("strapi-seed")
      .service("myService")
      .getWelcomeMessage();
  },

  upload: (ctx) => {
    ctx.body = strapi
      .plugin("strapi-seed")
      .service("writeFile")
      .write(ctx.request.body);
  },

  getContentTypes: async (ctx) => {
    return (ctx.body = await strapi
      .plugin("strapi-seed")
      .service("contentTypes")
      .getContentTypes());
  },

  findSeed: async (ctx) => {
    console.log(ctx.request.body);
    return (ctx.body = await strapi
      .plugin("strapi-seed")
      .service("findSeed")
      .findSeed(ctx.request.body));
  },
};
