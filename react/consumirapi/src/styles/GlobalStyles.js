import styled, { createGlobalStyle } from 'styled-components';
import * as colors from '../config/colors';
import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  outline: none;
  box-sizing: border-box;
}

body {
  font-family: sans-serif;
  background: ${colors.primaryDarkColor};
  color: ${colors.primaryDarkColor};
}

html, body, #root {
  height: 100%;
}

button {
  background: ${colors.primaryColor};
  color: #fff;
  border-radius: 8px;
  border: none;
  padding: 8px;
  font-weight: bold;
  cursor: pointer;
  transition: all 1s;
}

button:hover{
  background-color: ${colors.primaryDarkColor};
}

a {
  text-decoration: none;
  color: ${colors.primaryDarkColor};
}

ul {
  list-style: none;
}

body .Toastify .Toastify__toast-container .Toastify__toast--success {
  font-weight: bold;
}

body .Toastify .Toastify__toast-container .Toastify__toast--error {
  font-weight: bold;
}

`;

export const Container = styled.section`
  max-width: 480px;
  background: #eee;
  margin: 30px auto;
  padding: 30px;
  border-radius: 12px;
  text-align: center;
  box-shadow: 0 0 10px rgba(255, 4, 2, 0.5);
`;
