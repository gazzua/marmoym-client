import DefaultMobile from './GlobalMenuModal.mobile';
import * as mobile from './GlobalMenuModal.mobile';
// import DefaultWeb from './AddTerm.web';
// import * as web from './AddTerm.web';

declare var _test: typeof mobile;
// declare var _test: typeof web;

declare var _testDefault: typeof DefaultMobile;
// declare var _testDefault: typeof DefaultWeb;

export * from './GlobalMenuModal.mobile';
export default DefaultMobile;