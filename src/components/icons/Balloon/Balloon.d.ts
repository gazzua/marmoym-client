import DefaultMobile from './Balloon.mobile';
import * as mobile from './Balloon.mobile';
// import DefaultWeb from './AddTerm.web';
// import * as web from './AddTerm.web';

declare var _test: typeof mobile;
// declare var _test: typeof web;

declare var _testDefault: typeof DefaultMobile;
// declare var _testDefault: typeof DefaultWeb;

export * from './Balloon.mobile';
export default DefaultMobile;