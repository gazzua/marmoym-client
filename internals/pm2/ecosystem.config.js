const path = require('path');

const APP_PATH = path.resolve(__dirname, '../../src/server.js');

module.exports = {
  // http://pm2.keymetrics.io/docs/usage/application-declaration/
  apps: [
    {
      name: 'marmoym-client',
      script: APP_PATH,
      env: {
        NODE_ENV: 'development',
      },
      env_production: {
        NODE_ENV: 'production',
      },
    },
  ],
  autorestart: true,

  // http://pm2.keymetrics.io/docs/usage/deployment/
  deploy: {
    development: {
      user: 'ubuntu',
      host: '52.79.188.113',
      ref: 'origin/dev',
      repo: 'git@github.com:marmoym/marmoym-client.git',
      path: '/home/ubuntu/work/marmoym/marmoym-client',
      'post-setup': 'git fetch origin',
      'post-deploy': 'yarn install && yarn run pm2:start:prod',
    },
    development: {
      user: 'ubuntu',
      host: '52.79.188.113',
      ref: 'origin/dev',
      repo: 'git@github.com:marmoym/marmoym-client.git',
      path: '/home/ubuntu/work/marmoym/marmoym-client',
      'post-setup': 'git fetch origin',
      'post-deploy': 'yarn install && yarn run pm2:start:prod',
    },
  },
  max_restarts: 5,
};
