import type { AppProps } from 'next/app';
import ThemeProvider from 'modules/core/containers/theme-provider';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
