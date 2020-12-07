import 'sanitize.css'
import { createGlobalStyle } from 'styled-components'
import theme from './common/theme'

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'circular';
    src: 'url('font/CircularStd-Book.otf') format('opentype')';
    font-weight: 100;
  }

  @font-face {
    font-family: 'circular';
    src: 'url('ont/CircularStd-Medium.otf') format('opentype')';
    font-weight: 200;
  }

  @font-face {
    font-family: 'circular';
    src: url('font/CircularStd-Bold.otf') format('opentype');
    font-weight: 400;
  }

  html {
    font-size: 62.5%;
    width: 100vw;
    height: 100vh;
  }

  body {
    font-size: 1.6rem;
    font-family: 'circular', sans-serif;
    font-weight: 100;
    background-color: ${theme.color.softBlue}
  }
  
  #root {
    width: 100vw;
    height: 100vh;
    display: flex;
  }
`

export default GlobalStyles
