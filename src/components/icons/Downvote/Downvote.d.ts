import DefaultMobile from './Downvote.mobile';
import * as mobile from './Downvote.mobile';
// import DefaultWeb from './AddTerm.web';
// import * as web from './AddTerm.web';

declare var _test: typeof mobile;
// declare var _test: typeof web;

declare var _testDefault: typeof DefaultMobile;
// declare var _testDefault: typeof DefaultWeb;

export * from './Downvote.mobile';
export default DefaultMobile;