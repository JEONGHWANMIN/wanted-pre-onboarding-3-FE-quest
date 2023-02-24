import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
const GlobalStyle = createGlobalStyle`
  ${reset}
  html {
    font-size: 62.5%;
    margin: 0;
  }
  *, body {
    margin : 0;
    box-sizing: border-box;
    font-family: 'Noto Sans KR', sans-serif;
    width: 100%;
    height: 100%;
  }
`;

export { GlobalStyle };
