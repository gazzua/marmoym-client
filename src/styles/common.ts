import { injectGlobal } from 'styled-components';

export default () => {
  injectGlobal`
    * {
      box-sizing: border-box;
    }

    html, body {
      padding: 0;
      margin: 0;
      height: 100%;
      font-size: 13px;
    }

    p {
      padding: 0;
      margin: 0;
    }

    body {
      width: 100%;
    }
  `
};