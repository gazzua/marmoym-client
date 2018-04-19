export const ROOT = `/`;
export const SEARCH = `/search`;
export const TERMS = `/terms`;
export const DEFINITIONS_ID = `/definitions/:defId`;
export const DEFINE = `/define`;
export const SIGNIN = `/signin`;
export const SIGNUP = '/signup';

export function build(URL, ...tokens) {
  switch (URL) {
    case DEFINITIONS_ID:
    return `/definitions/${tokens[0]}`;
    default:
    return null;
  }
}
