import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: 'Arial', sans-serif;
    background: #121212;
    color: #fff;
    line-height: 1.6;
  }

  h1 {
    font-size: 2.5rem;
    color: #e63946;
  }

  a {
    color: #e63946;
    text-decoration: none;
    margin-right: 20px;
  }

  a:hover {
    text-decoration: underline;
  }

  .header {
    text-align: center;
    margin: 50px 0;
  }

  .footer {
    text-align: center;
    padding: 20px 0;
    background: #1c1c1c;
  }
`;

export default GlobalStyle;