var path = require('path');

var CONFIG_PATH = {
  'development:mobile': path.resolve(__dirname, '..', 'internals', 'webpack', 'webpack.dev.mobile.config.js'),
  'devevelopment:web': path.resolve(__dirname, '..', 'internals', 'webpack', 'webpack.dev.web.config.js'),
  'production:mobile': path.resolve(__dirname, '..', 'internals', 'webpack', 'webpack.prod.mobile.config.js'),
}

var getConfig = function getConfig(platform, env) {
  var key = env + ':' + platform;
  return CONFIG_PATH[key];
};

module.exports = getConfig;