const express = require('express');
const config = require('./config');
const routes = require('./routes/index');

const server = express();

server.name = 'mern-ecommerce';

server.use(config.api.prefix, routes);

// API status
server.get(config.api.prefix, (req, res) => {
  res.send('API is running...');
});

// Error catching endware.
server.use((err, req, res, next) => {
  // eslint-disable-line no-unused-vars
  const status = err.status || 500;
  const message = err.message || err;
  console.error(err);
  res.status(status).send(message);
});

module.exports = server;
