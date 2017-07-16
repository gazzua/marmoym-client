import DefaultMobile from './AddTerm.mobile';
import * as mobile from './AddTerm.mobile';
// import DefaultWeb from './AddTerm.web';
// import * as web from './AddTerm.web';

declare var _test: typeof mobile;
// declare var _test: typeof web;

declare var _testDefault: typeof DefaultMobile;
// declare var _testDefault: typeof DefaultWeb;

export * from './AddTerm.mobile';
export default DefaultMobile;