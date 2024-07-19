// src/styles/GlobalStyle.js

import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100..900;1,100..900&family=Sarala:wght@400;700&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Raleway', 'Sarala', sans-serif;
    background-color: rgba(33, 34, 38, 1);
    color: #333333;
    min-height: 100vh;
    margin: 0;
    padding: 0;
    overflow-x: hidden;
  }

  #root {
    min-height: 100vh;
    position: relative;
    z-index: 0;
  }
`;

export default GlobalStyle;
