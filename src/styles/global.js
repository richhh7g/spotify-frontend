import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *{
    outline: none;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body, #root{
    min-height: 100%;
  }

  body{
    -webkit-font-smoothing: antialiased !important;
    text-rendering: optimizeLegibility !important;

    background: #181818;

    color: #FFF;
    font-family: 'Montserrat', sans-serif
  }

  button{
    cursor: pointer;
  }
`;
