'use strict';

var settings = require('./settings');
var _ = require('./utils/helpers');

module.exports = {
  validateConfiguration: function(conf){
    var errorMessage = function(msg){
      return {
        isValid: false,
        error: settings.configurationNotValid + msg
      };
    };

    if(!!conf.registries && _.isArray(conf.registries)){
      return errorMessage(settings.registriesIsNotObject);
    } else if(!!conf.registries && !conf.registries.serverRendering && !conf.clientRendering){
      return errorMessage(settings.registriesEmpty);
    }

    return { isValid: true };
  }
};
