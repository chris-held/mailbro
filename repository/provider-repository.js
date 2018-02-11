const Provider = require('../model/provider');

module.exports = {
  create: function(data) {
    //TODO - need to validate here
    //customer id is required
    //type is required
    //based on type, token or username / password
    //is required. each provider needs to have
    //it's own validation function
    return new Promise((resolve, reject) => {
      resolve(new Provider(data));
    });
  },

  update: function(data) {
    //TODO - need to validate here
    //customer id is required
    //type is required
    //based on type, token or username / password
    //is required. each provider needs to have
    //it's own validation function
    return new Promise((resolve, reject) => {
      resolve(new Provider(data));
    });
  },
}