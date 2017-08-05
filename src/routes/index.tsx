let md;
switch(process.env.PLATFORM) {
  case 'MOBILE':
    md = require('./routes.mobile').default;
    break;
  default:
    md = require('./routes.mobile').default;
}

export default md;