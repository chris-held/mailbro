const schema = require('schema-object');

module.exports = new schema({
  id: String,
  type: String, //gmail, yahoo, etc
  token: String,
  username: String,
  password: String
});