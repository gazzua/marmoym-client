import { PLATFORM } from '../../constants'

let md;
switch(+process.env.PLATFORM) {
  case PLATFORM.MOBILE:
    md = require(`./MastheadContainer.mobile`).default;
    break;
  default:
    md = require(`./MastheadContainer.mobile`).default;
}

export default md;