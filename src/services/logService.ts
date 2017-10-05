import * as winston from 'winston';

/**
 * Not being used at this moment
 */
const logger = (function() {
  let level: number = 4;
  const debug = function(msg, ...str) {
    if (level >= 4) {
      console.log(msg, ...str);
    }
  }

  const warn = function(msg, ...str) {
    console.warn(msg, ...str)
  }

  const info = function(msg, ...str) {
    console.info(msg, ...str)
  }

  const error = function(msg, ...str) {
    console.error(msg, ...str);
  }

  const setLevel = function(level) {
    const map = {
      none: -1,
      error: 0,
      warn: 1,
      info: 2,
      verbose: 3,
      debug: 4,
    }
    this.level = map[level];
  }

  return {
    debug,
    setLevel
  }
})();

export default logger;