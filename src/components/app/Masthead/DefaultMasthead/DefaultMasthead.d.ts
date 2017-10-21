import DefaultMobile from './DefaultMasthead.mobile';
import * as mobile from './DefaultMasthead.mobile';
// import DefaultWeb from './routes.web';
// import * as web from './routes.web';

declare var _test: typeof mobile;
// declare var _test: typeof web;

declare var _testDefault: typeof DefaultMobile;
// declare var _testDefault: typeof DefaultWeb;

export * from './DefaultMasthead.mobile';
export default DefaultMobile;