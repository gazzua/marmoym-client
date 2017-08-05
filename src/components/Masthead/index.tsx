import { PLATFORM } from '../../constants'

let md;
switch(+process.env.PLATFORM) {
  case PLATFORM.MOBILE:
    md = require(`./Masthead.mobile`).default;
    break;
  default:
    md = require(`./Masthead.mobile`).default;
}

export default md;