const winston = require('winston');
const fs = require('fs');
const path = require('path');

const logDir = path.resolve(__dirname, 'log');

winston.setLevels(winston.config.npm.levels);
winston.addColors(winston.config.npm.colors);

if (!fs.existsSync(logDir)) {
  winston.warn(`Create log directory ${logDir}`);
  // Create the directory if it does not exist
  fs.mkdirSync(logDir);
}

const logger = new(winston.Logger)({
  exceptionHandlers: [
    new winston.transports.File({
      filename: 'log/exceptions.log',
    }),
  ],
  transports: [
    new winston.transports.Console({
      colorize: true,
      level: 'debug',
    }),
    new winston.transports.File({
      filename: path.resolve(logDir, `${_getDate()}.log.json`),
      level: 'error', // Only write logs of error level or higher
      maxsize: 1024 * 1024 * 10, // 10MB
    }),
  ],
});

function _getDate() {
  var today = new Date();
  var dd = today.getDate();
  var mm = today.getMonth() + 1;
  var yyyy = today.getFullYear();
  return `${yyyy}${mm}${dd}`;
}

module.exports = logger;
