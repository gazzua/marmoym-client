import { css } from 'styled-components';

export default class Media {
  static w320(strings, ...args) {
    return css`
      @media (max-width: 479px) {
        ${css(strings, ...args)}
      }
    `;
  }
  
  static w480(strings, ...args) {
    return css`
      @media (min-width: 480px) {
        ${css(strings, ...args)}
      }
    `;
  }
};
