import { PLATFORM } from '../../constants'

let md;
switch(+process.env.PLATFORM) {
  case PLATFORM.MOBILE:
    md = require(`./AppContainer.mobile`).default;
    break;
  default:
    md = require(`./AppContainer.mobile`).default;
}

export default md;