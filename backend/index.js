import server from './src/server.js';
import config from './src/config/index.js';

server.listen(config.port, () => {
  console.log(
    `Server listening in ${process.env.NODE_ENV} mode on port: ${config.port}`
  ); // eslint-disable-line no-console
});
