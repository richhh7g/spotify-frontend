import { createGlobalStyle } from 'styled-components';
import 'rc-slider/assets/index.css';
import 'react-toastify/dist/ReactToastify.min.css';

export default createGlobalStyle`
  *{
    outline: none;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  *:focus{
    outline: 0;
  }

  html, body, #root{
    height: 100%;
  }

  body{
    background: #181818;

    -webkit-font-smoothing: antialiased !important;
    text-rendering: optimizeLegibility !important;
  }

  body, input, button{
    color: #FFF;
    font: 14px 'Montserrat', sans-serif
  }

  a{
    text-decoration: none;
    color: #fff;

  }

  ul{
    list-style: none;
  }

  button{
    cursor: pointer;
  }
`;
