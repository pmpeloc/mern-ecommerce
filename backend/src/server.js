import express from 'express';
import colors from 'colors';
import connectDB from './config/db.js';
import config from './config/index.js';
import routes from './routes/index.js';
import { errorHandler, notFound } from './middlewares/errorMiddleware.js';

const server = express();

server.use(express.json());

connectDB();

server.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*'); // update to match the domain you will make the request from
  res.header('Access-Control-Allow-Headers', 'content-type');
  return next();
});

server.use(config.api.prefix, routes);

// API status
server.get(config.api.prefix, (req, res) => {
  res.send('API is running...');
});

// Middlewares
server.use(notFound);
server.use(errorHandler);

export default server;
