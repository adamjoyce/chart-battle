import {injectGlobal} from 'styled-components';

import {theme} from './themes';

const baseStyles = () => injectGlobal`
  html {
    height: 100%;
  }
  body {
    font-family: ${theme.font.family};
    font-size: 1rem;
    height: 100%;
  }
  #app {
    background-color: ${theme.colors.background};
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: center;
    overflow: auto;
  }
  .fade-enter {
    opacity: 0.01;
  }
  .fade-enter-active {
    opacity: 1;
    transition: opacity 500ms ease-in;
  }
  .fade-exit {
    opacity: 1;
  }
  .fade-exit-active {
    opacity: 0.01;
    transition: opacity 500ms ease-in;
  }
`;

export default baseStyles;
