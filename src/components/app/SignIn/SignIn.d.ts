import DefaultMobile from './SignIn.mobile';
import * as mobile from './SignIn.mobile';

declare var _test: typeof mobile;

declare var _testDefault: typeof DefaultMobile;

export * from './SignIn.mobile';
export default DefaultMobile;