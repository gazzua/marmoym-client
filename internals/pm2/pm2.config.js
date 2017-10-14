const serverConfig = require('../marmoym-config').serverConfig;

module.exports = {
  apps: [
    {
      name: 'marmoym-client',
      script: '/home/user/deploy/marmoym-client/current/server/server.dev.js',
      env: {
        COMMON_VARIABLE: 'true'
      },
      env_development: {
        NODE_ENV: 'development',
        PLATFORM: 'mobile'
      }
    }
  ],
  deploy: {
    development : {
      user: serverConfig['marmoym-dev1'].user,
      host: serverConfig['marmoym-dev1'].host,
      ref: 'origin/dev',
      repo: 'git@github.com:tymsai/marmoym-client.git',
      path: '/home/user/deploy/marmoym-client', 
      "post-deploy": 'yarn install && yarn run setup:dev && ./node_modules/.bin/pm2 reload ./internals/pm2/pm2.config.js --env development',
      env: {
        'NODE_ENV': 'development'
      }
    },
    production : {
      user: serverConfig['marmoym-dev1'].user,
      host: serverConfig['marmoym-dev1'].host,
      ref: 'origin/master',
      repo: 'git@github.com:repo.git',
      path: '/var/www/development',
      "post-deploy": 'npm install && pm2 reload ecosystem.config.js --env production',
      env: {
        NODE_ENV: 'development'
      }
    }
  }
};
