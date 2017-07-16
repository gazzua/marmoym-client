var path = require('path');

var CONFIG_PATH = {
  'dev:mobile': path.resolve(__dirname, '..', 'internals', 'webpack', 'webpack.dev.mobile.config.js'),
  'dev:web': path.resolve(__dirname, '..', 'internals', 'webpack', 'webpack.dev.web.config.js'),
  'prod:mobile': path.resolve(__dirname, '..', 'internals', 'webpack', 'webpack.prod.mobile.config.js'),
}

var getConfig = function getConfig(platform, env) {
  var key = env + ':' + platform;
  return CONFIG_PATH[key];
};

exports.default = getConfig;