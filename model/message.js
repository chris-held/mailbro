const schema = require('schema-object');

//TODO - fill this out the rest of the way
module.exports = new schema({
  providerId: String,
  providerType: String,
  providerRawData: {},
  to: String,
  from: String,
});