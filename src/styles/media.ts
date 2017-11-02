import { css } from 'styled-components';

export function w320(strings, ...args) {
  return css`
    @media (max-width: 479px) {
      ${css(strings, ...args)}
    }
  `;
}

export function w480(strings, ...args) {
  return css`
    @media (min-width: 480px) {
      ${css(strings, ...args)}
    }
  `;
}
