//all providers have to support common functions for this to work.
//since interfaces aren't a thing in javascript we have to use duck typing
//and hope that whoever implements this includes the right functions and
//returns the right data

module.exports = {
  getMessages: function(provider) {
    return new Promise((resolve, reject) => {
      resolve([]);
    });
  },

  getEvents: function(provider) {
    return new Promise((resolve, reject) => {
      resolve([]);
    });
  },

  reply: function(provider, id, messageData) {

  },

  createEvent: function(provider, eventData) {

  },

  rsvp: function(provider, id, eventData) {

  },

  editEvent: function(provider, id, eventData) {

  },

  validate: function(provider) {

  },
};