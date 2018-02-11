const express = require('express')
const app = express()
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())
const CustomerRepository = require('./repository/customer-repository');
const ProviderRepository = require('./repository/provider-repository');
const CustomerService = require('./service/customer-service');


app.get('/', (req, res) => res.send('Hello World!'))

app.post('/customers', (req, res) => {
  CustomerRepository.create().then(data => {
    res.json(data);
  });
});

app.post('/customers/:id/providers', (req, res) => {
  ProviderRepository.create(req.body).then(data => {
    res.json(data);
  });
});

app.put('/customers/:id/providers/:providerId', (req, res) => {
  ProviderRepository.update(req.body).then(data => {
    res.json(data);
  });
});

app.get('/customers/:id/messages', (req, res) => {
  CustomerRepository.find(req.params.id)
  .then(customer => {
    return CustomerService.getAllMessages(customer.providers)
  })
  .then(messages => {
    res.json(messages);
  });
});

app.get('/customers/:id/events', (req, res) => {
  CustomerRepository.find(req.params.id)
  .then(customer => {
    return CustomerService.getAllEvents(customer.providers)
  })
  .then(messages => {
    res.json(messages);
  });
});

//TODO - this stuff
app.post('/customers/:id/messages/:providerType-:providerId/reply', (req, res) => {

});

app.post('/customers/:id/events/:providerType', (req, res) => {

});

app.put('/customers/:id/events/:providerType-:providerId/rsvp', (req, res) => {

});

app.put('/customers/:id/events/:providerType-:providerId', (req, res) => {

});

app.listen(3000, () => console.log('Example app listening on port 3000!'))