import { css } from 'styled-components'; 

export const w320 = function(strings, ...args) {
  return css`
    @media (max-width: 479px) {
      ${css(strings, ...args)}
    }
  `;
}

export const w480 = function(strings, ...args) {
  return css`
    @media (min-width: 480px) {
      ${css(strings, ...args)}
    }
  `;
}