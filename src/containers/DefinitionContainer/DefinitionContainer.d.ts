import DefaultMobile from './DefinitionContainer.mobile';
import * as mobile from './DefinitionContainer.mobile';
// import DefaultWeb from './routes.web';
// import * as web from './routes.web';

declare var _test: typeof mobile;
// declare var _test: typeof web;

declare var _testDefault: typeof DefaultMobile;
// declare var _testDefault: typeof DefaultWeb;

export * from './DefinitionContainer.mobile';
export default DefaultMobile;