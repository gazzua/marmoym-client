export const ROOT = `/`;
export const SEARCH = `/search`;
export const TERMS = `/terms`;
export const DEFINITIONS_ID = `/definitions/:defId`;
export const DEFINE = `/define`;
export const SIGNIN = `/signin`;

export function build(URL: string, ...tokens: string[]) {
  switch (URL) {
    case DEFINITIONS_ID:
    return `/definitions/${tokens[0]}`;
    default:
    return null;
  }
}