var config = require('./webpack.dev.config.js');

var EXT = ['.web.ts', '.web.tsx'];

config.resolve.extensions = config.resolve.extensions.concat(EXT);

module.exports = config;
