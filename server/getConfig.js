const path = require('path');
const winston = require('winston');

const logger = require('./logger');

const CONFIG_PATH = {
  'development:mobile': path.resolve(__dirname, '..', 'internals', 'webpack', 'webpack.dev.mobile.config.js'),
  'development:web': path.resolve(__dirname, '..', 'internals', 'webpack', 'webpack.dev.web.config.js'),
  'production:mobile': path.resolve(__dirname, '..', 'internals', 'webpack', 'webpack.prod.mobile.config.js'),
};

function getConfig(platform, env) {
  logger.debug('Getting webpack config', platform, env);
  const key = env + ':' + platform;
  return CONFIG_PATH[key];
}

module.exports = getConfig;
