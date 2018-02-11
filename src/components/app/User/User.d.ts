import DefaultMobile from './User.mobile';
import * as mobile from './User.mobile';

declare var _test: typeof mobile;

declare var _testDefault: typeof DefaultMobile;

export * from './User.mobile';
export default DefaultMobile;