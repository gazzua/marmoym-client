import { PLATFORM } from '../../../constants'

let md;
switch(+process.env.PLATFORM) {
  case PLATFORM.MOBILE:
    md = require(`./Term.mobile`).default;
    break;
  default:
    md = require(`./Term.mobile`).default;
}

export default md;