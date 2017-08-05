import { PLATFORM } from '../../constants'

let md;
switch(+process.env.PLATFORM) {
  case PLATFORM.MOBILE:
    md = require(`./TermListContainer.mobile`).default;
    break;
  default:
    md = require(`./TermListContainer.mobile`).default;
}

export default md;