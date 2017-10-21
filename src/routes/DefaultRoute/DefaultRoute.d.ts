import DefaultMobile from './DefaultRoute.mobile';
import * as mobile from './DefaultRoute.mobile';
// import DefaultWeb from './Temp.web';
// import * as web from './Temp.web';

declare var _test: typeof mobile;
// declare var _test: typeof web;

declare var _testDefault: typeof DefaultMobile;
// declare var _testDefault: typeof DefaultWeb;

export * from './DefaultRoute.mobile';
export default DefaultMobile;