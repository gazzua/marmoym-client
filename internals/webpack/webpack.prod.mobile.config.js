var merge = require('webpack-merge');

var config = require('./webpack.prod.config.js');

var _config = {
  resolve: {
    extensions: ['.mobile.ts', '.mobile.tsx'],
  },
};

module.exports = merge(config, _config);
