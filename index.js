﻿var Client = require('./client');
var extend = require('./utils/tiny-extend');

module.exports = {
  suppressUnhandledRejections: function() {
    // no longer uses when, so this is preserved for compatibility
    // but is a noop
    // require('when').Promise.onPotentiallyUnhandledRejection = function() {};
  },
  setDefaultRequestOptions: function(options) {
    Client.defaultRequestOptions = options;
  },
  client: function(ctx, config) {
    // to support the old lookup: client.platform().adminUser().tenantAdminUserAuthTicket() etc.
    config = config || {};
    if (ctx) config.context = ctx; 
    var client = new Client(config);
    // instance
    return extend(client, {
      root: function(cfg) {
        return module.exports.client(extend({}, this, cfg));
      },
      commerce: require('./clients/commerce'),
      content: require('./clients/content'),
      event: require('./clients/event'),
      platform: require('./clients/platform')
    });
  }
};
// END INIT
