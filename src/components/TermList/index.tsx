import { PLATFORM } from '../../constants'

let md;
switch(+process.env.PLATFORM) {
  case PLATFORM.MOBILE:
    md = require(`./TermList.mobile`).default;
    break;
  default:
    md = require(`./TermList.mobile`).default;
}

export default md;