const express = require('express');
const fs = require('fs');
const i18n = require('marmoym-i18n');
const morgan = require('morgan');
const path = require('path');

const app = express();

module.exports = function createServer(fn) {
  this.now = Date();
  console.log('[info] NODE_ENV at server: %s', process.env.NODE_ENV)
  console.log('[info] App is launching. Loading the server configuration at server time:', now);

  // General logging
  app.use(morgan('combined'));

  // Serve static files
  app.use('/assets', (req, res) => {
    const file = path.join(serverConfig.assetPath, req.url);
    res.sendFile(file);
  });

  app.get('/ss/i18n/:locale', (req, res) => {
    console.log('Returning i18n %s', req.params.locale);
    const result = {
      code: 200000,
      payload: {
        locale: i18n[req.params.locale],
      },
    };
  
    // todo: validation
    res.status(200)
      .send(result);
  });

  // extend the server
  fn.call(this, app);

  app.listen(3001, function(err) {
    if (err) {
      return console.error(err);
    }
    console.log('Listening at port 3001, wait until bundling is finished');
  });
    
  return app;
};
