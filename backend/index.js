const server = require('./src/server');
const config = require('./src/config');

server.listen(config.port, () => {
  console.log(`Server listening at port: ${config.port}`); // eslint-disable-line no-console
});
