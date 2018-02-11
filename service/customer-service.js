const _ = require('lodash');

module.exports = {
  //these can be refactored, lots of shared code here
  getAllMessages: function(providers) {
    //get all messages for all providers. Will need to 
    //support pagination so basically grab everything, 
    //order by date then paginate server side
    var functions = [];
    for (p of providers) {
      //this should be in a try / catch
      let provider = require(`../provider/${p.type}`);
      if (_.isFunction(provider.getMessages)) {
        functions.push(provider.getMessages);
      }
    }

    return new Promise((resolve, reject) => {
      Promise.all(functions).then(values => {
        //values is going to be a multidimensional
        //array, we need to flatten it
        let allMessages = _.flatten(values);
        //TODO - sort by date descending, then paginate
        resolve(values);
      });
    })
  },

  getAllEvents: function(providers) {
    //same as messages but for events
    var functions = [];
    for (p of providers) {
      //this should be in a try / catch
      let provider = require(`../provider/${p.type}`);
      if (_.isFunction(provider.getEvents)) {
        functions.push(provider.getEvents);
      }
    }

    return new Promise((resolve, reject) => {
      Promise.all(functions).then(values => {
        //values is going to be a multidimensional
        //array, we need to flatten it
        let allMessages = _.flatten(values);
        //TODO - sort by date descending, then paginate
        resolve(values);
      });
    })
  },
}