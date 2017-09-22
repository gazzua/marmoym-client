import DefaultMobile from './RootContainer.mobile';
import * as mobile from './RootContainer.mobile';
// import DefaultWeb from './AppContainer.web';
// import * as web from './AppContainer.web';

declare var _test: typeof mobile;
// declare var _test: typeof web;

declare var _testDefault: typeof DefaultMobile;
// declare var _testDefault: typeof DefaultWeb;

export * from './RootContainer.mobile';
export default DefaultMobile;