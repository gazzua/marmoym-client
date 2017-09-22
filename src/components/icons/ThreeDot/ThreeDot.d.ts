import DefaultMobile from './ThreeDot.mobile';
import * as mobile from './ThreeDot.mobile';
// import DefaultWeb from './AddTerm.web';
// import * as web from './AddTerm.web';

declare var _test: typeof mobile;
// declare var _test: typeof web;

declare var _testDefault: typeof DefaultMobile;
// declare var _testDefault: typeof DefaultWeb;

export * from './ThreeDot.mobile';
export default DefaultMobile;