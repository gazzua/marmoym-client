import DefaultMobile from './CommentList.mobile';
import * as mobile from './CommentList.mobile';
// import DefaultWeb from './routes.web';
// import * as web from './routes.web';

declare var _test: typeof mobile;
// declare var _test: typeof web;

declare var _testDefault: typeof DefaultMobile;
// declare var _testDefault: typeof DefaultWeb;

export * from './CommentList.mobile';
export default DefaultMobile;