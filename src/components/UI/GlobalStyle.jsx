import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  /* Scrollbar customization for Webkit browsers */
  ::-webkit-scrollbar {
    width: 12px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #4B5563; /* Professional gray color */
    border-radius: 6px;
  }

  ::-webkit-scrollbar-track {
    background: #1F2937; /* Dark background for track */
    border-radius: 6px;
  }

  ::-webkit-scrollbar-corner {
    background: #1F2937; /* Dark background for the corner */
  }

  /* Scrollbar customization for Firefox */
  html {
    scrollbar-width: thin;
    scrollbar-color: #4B5563 #1F2937;
  }
`;

export default GlobalStyle
