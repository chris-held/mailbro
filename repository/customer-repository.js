const Customer = require('../model/customer');
const Provider = require('../model/provider');

module.exports = {
  create: function() {
    //generate a UUID and save this record to
    //a db somewhere
    return new Promise((resolve, reject) => {
      resolve(new Customer({id: '1'}));
    });
  },

  find: function(id) {
    //find the customer with this id
    return new Promise((resolve, reject) => {
      let provider = new Provider({type: 'gmail', id: '1', token: '1234'});
      let ret = new Customer({id: '1', providers: [provider]});
      resolve(ret);
    });
  },
}