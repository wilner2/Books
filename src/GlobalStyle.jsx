import { createGlobalStyle } from 'styled-components';
import Heebo from './assets/fonts/Heebo-VariableFont_wght.ttf';
// eslint-disable-next-line import/prefer-default-export
export const GlobalStyle = createGlobalStyle`

@font-face {
    font-family: 'Heebo';
    src: url(${Heebo}) format('truetype');
    font-weight: 300;
    font-style: normal;
    font-display: auto;
  }
body {
margin: 0;
}

`;
