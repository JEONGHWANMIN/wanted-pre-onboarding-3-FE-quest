import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
const GlobalStyle = createGlobalStyle`
  ${reset}
  html {
    font-size: 62.5%;
    margin: 0;
    box-sizing: border-box;
  }
  *,body {
    margin : 0;
    box-sizing: border-box;
    font-family: 'Noto Sans KR', sans-serif;
  }
  
`;

export { GlobalStyle };
