import { PLATFORM } from '../../constants'

let md;
switch(+process.env.PLATFORM) {
  case PLATFORM.MOBILE:
    md = require(`./PageContainer.mobile`).default;
    break;
  default:
    md = require(`./PageContainer.mobile`).default;
}

export default md;