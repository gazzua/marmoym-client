import DefaultMobile from './AppContainer.mobile';
import * as mobile from './AppContainer.mobile';
// import DefaultWeb from './AppContainer.web';
// import * as web from './AppContainer.web';

declare var _test: typeof mobile;
// declare var _test: typeof web;

declare var _testDefault: typeof DefaultMobile;
// declare var _testDefault: typeof DefaultWeb;

export * from './AppContainer.mobile';
export default DefaultMobile;