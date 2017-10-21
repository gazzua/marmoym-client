import DefaultMobile from './Routes.mobile';
import * as mobile from './Routes.mobile';
import DefaultWeb from './Routes.web';
import * as web from './Routes.web';

declare var _test: typeof mobile;
declare var _test: typeof web;

declare var _testDefault: typeof DefaultMobile;
declare var _testDefault: typeof DefaultWeb;

export * from './Routes.mobile';
export default DefaultMobile;