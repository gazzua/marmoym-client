const winston = require('winston');
const fs = require('fs');
const path = require('path');

const logDir = path.resolve(__dirname, 'log');

winston.setLevels(winston.config.npm.levels);
winston.addColors(winston.config.npm.colors);

if (!fs.existsSync(logDir)) {
  winston.warn(`Create log directory ${logDir}`)
  // Create the directory if it does not exist
  fs.mkdirSync(logDir);
}

const logger = new(winston.Logger)({
  transports: [
    new winston.transports.Console({
      level: 'debug', 
      colorize: true
    }),
    new winston.transports.File({
      level: 'error', // Only write logs of error level or higher
      filename: path.resolve(logDir, `${_getDate()}.log.json`),
      maxsize: 1024 * 1024 * 10 // 10MB
    })
  ],
  exceptionHandlers: [
    new winston.transports.File({
      filename: 'log/exceptions.log'
    })
  ]
});

function _getDate() {
  var today = new Date();
  var dd = today.getDate();
  var mm = today.getMonth() + 1;
  var yyyy = today.getFullYear();
  return `${yyyy}${mm}${dd}`;
}

module.exports = logger;