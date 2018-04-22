const path = require('path');

const CONFIG_PATH = {
  'mobile:development': path.resolve(__dirname, 'webpack.dev.mobile.config.js'),
  'web:development': path.resolve(__dirname, 'webpack.dev.web.config.js'),
  'mobile:production': path.resolve(__dirname, 'webpack.prod.mobile.config.js'),
};

function getConfig(platform, env) {
  console.log('Getting webpack config, %s:%s', platform, env);
  const key = platform + ':' + env;
  return CONFIG_PATH[key];
}

module.exports = getConfig;
