import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    *, *::before, *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        height: 100%;
        font-size: 62.5%;
    }

    body {
        height: 100%;
        max-width: 100vw;
        font-size: 1.6rem;
        font-family: 'Oxygen', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        font-weight: normal;
        color: white;
        overflow-x: hidden;
      
        background: #091332;
        
    }

    #root {
        height: auto;
    }

    a {
        text-decoration: none !important;
        color: #131313;
        background: transparent !important;
    }

`;

export default GlobalStyles;
