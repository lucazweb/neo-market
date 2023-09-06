import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  
  html {
    box-sizing: border-box;
    font-family: 'Roboto', 'Arial';
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


  ul {
    margin-left:0;
    padding-left:12px;
  }

  li {
    list-style: none;
    margin-bottom: 6px;
  }

 
  
`;
