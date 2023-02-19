import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
const GlobalStyle = createGlobalStyle`
  ${reset}
  html {
    font-size: 62.5%;
    box-sizing: border-box;
  }
  *, body {
    font-family: 'Noto Sans KR', sans-serif;
  }
`;

export { GlobalStyle };
