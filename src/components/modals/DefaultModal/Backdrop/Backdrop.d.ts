import DefaultMobile from './Backdrop.mobile';
import * as mobile from './Backdrop.mobile';
// import DefaultWeb from './AddTerm.web';
// import * as web from './AddTerm.web';

declare var _test: typeof mobile;
// declare var _test: typeof web;

declare var _testDefault: typeof DefaultMobile;
// declare var _testDefault: typeof DefaultWeb;

export * from './Backdrop.mobile';
export default DefaultMobile;