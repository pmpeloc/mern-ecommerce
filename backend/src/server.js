import express from 'express';
import colors from 'colors';
import connectDB from './config/db.js';
import config from './config/index.js';
import routes from './routes/index.js';

const server = express();

connectDB();

server.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*'); // update to match the domain you will make the request from
  next();
});

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

export default server;
