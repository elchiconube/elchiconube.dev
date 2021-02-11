import GlobalStyle from '../styles/GlobalStyle';
import { useAnalytics } from '../lib/analytics';

import { ThemeProvider } from 'next-themes';

function App({ Component, pageProps }) {
  // useAnalytics();

  return (
    <ThemeProvider>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default App;
