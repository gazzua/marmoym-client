import DefaultMobile from './SignUp.mobile';
import * as mobile from './SignUp.mobile';

declare var _test: typeof mobile;

declare var _testDefault: typeof DefaultMobile;

export * from './SignUp.mobile';
export default DefaultMobile;