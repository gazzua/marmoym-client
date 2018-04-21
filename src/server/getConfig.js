const path = require('path');
const winston = require('winston');

const CONFIG_PATH = {
  'development:mobile': path.resolve(__dirname, '../../internals/webpack/webpack.dev.mobile.config.js'),
  'development:web': path.resolve(__dirname, '../../internals/webpack/webpack.dev.web.config.js'),
  'production:mobile': path.resolve(__dirname, '../../internals/webpack/webpack.prod.mobile.config.js'),
};

function getConfig(platform, env) {
  console.log('Getting webpack config, %s:%s', env, platform);
  
  const key = env + ':' + platform;
  console.log('Webpack config path: %s', CONFIG_PATH[key]);
  return CONFIG_PATH[key];
}

module.exports = getConfig;
