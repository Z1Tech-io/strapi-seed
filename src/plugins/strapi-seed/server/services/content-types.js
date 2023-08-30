const _ = require("lodash");

module.exports = {
  getContentTypes: () => {
    const apiList = _.filter(strapi.contentTypes, (ct) =>
      ct.uid.startsWith("api::") || ct.uid.startsWith("plugin::")
    );
    return apiList;
  },
};
