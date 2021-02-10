import theme from "../styles/theme";
import GlobalStyle from "../styles/GlobalStyle";
import { ThemeProvider } from "styled-components";
import { useAnalytics } from "../lib/analytics";

function App({ Component, pageProps }) {
  // useAnalytics();

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default App;
