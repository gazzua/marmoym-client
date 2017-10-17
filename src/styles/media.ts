import { css } from 'styled-components'; 

export default {
  w320: (content) => {
    return css`
      @media (max-width: 479px) {
        ${css(content)}
      }`
  },
  w480: (content) => {
    return css`
    @media (min-width: 480px) {
      ${css(content)}
    }`
  }
}
