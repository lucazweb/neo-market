import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  
  html {
    box-sizing: border-box;
    font-family: 'Roboto', 'Arial';
    margin:0;
    padding: 0;
  }

  body {
    margin: 0;
    padding: 0;
  }

  *, *:before, *:after {
      box-sizing: inherit;
    }
        

  h3, h4 {
    margin-bottom: 4px;
  }

  h4 small {
    font-weight: 100;
  }

  small {
    margin-top: 2px;
  }

  ul, li {
    margin: 0;
    padding: 0;
  }
 
 
 
  
`;
