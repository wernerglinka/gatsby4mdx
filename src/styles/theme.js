// theme values to be used in components like
// ${props => props.theme.colors.text}
// requires import { ThemeProvider } from "@emotion/react"; in layout
// <ThemeProvider theme={theme}>

const Theme = {
  header: {
    height: "90px",
    padding: "20px 0",
    hamburger: "40px",
    hamburgerMarginTop: "5px",
  },
  section: {
    clearanceTop: "50px",
    clearanceBottom: "50px",
    noClearance: "0",
  },
  content: {
    maxWidth: "1440px",
  },
  breakpoints: {
    tablet: "767px",
  },
};

export default Theme;
