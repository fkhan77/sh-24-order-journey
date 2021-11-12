import GlobalStyle from "../styles/globalStyles";
import ThemeProvider from "styled-components";

const theme = {
  main: "#2f2f81",
  secondary: "#434488",
};

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
