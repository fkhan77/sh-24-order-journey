import GlobalStyle from "../styles/globalStyles";
import { ThemeProvider } from "styled-components";
import { theme } from "../styles/theme";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
