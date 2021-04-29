import {createGlobalStyle} from 'styled-components';
/* import 'react-toastify/dist/ReactToastify.css'; */

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    font-family: Arial, Helvetica, sans-serif;
  }
  body {
    -webkit-font-smoothing: antialiased;
    background: #F7F7F7;
  }
  button {
    cursor: pointer;
  }
  #root {
    margin: 0 auto;
  }
`;
