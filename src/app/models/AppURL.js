export default class AppURL {
  static __ROOT = `/`;
  static DEFINE = `/define`;
  static DEFINITIONS_ID = `/definitions/:defId`;
  static ERROR = '/error';
  static SEARCH = `/search`;
  static SIGNIN = `/signin`;
  static SIGNUP = '/signup';  
  static TERMS = `/terms`;

  static build(URL, ...tokens) {
    switch (URL) {
      case DEFINITIONS_ID:
      return `/definitions/${tokens[0]}`;
      default:
      return null;
    }
  }
};

// export function build(URL, ...tokens) {
//   switch (URL) {
//     case DEFINITIONS_ID:
//     return `/definitions/${tokens[0]}`;
//     default:
//     return null;
//   }
// }