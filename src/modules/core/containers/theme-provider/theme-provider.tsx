import { FC } from 'react';
import { ThemeProvider as SCThemeProvider } from 'styled-components';
// theme
import { theme } from 'styles/theme';

const ThemeProvider: FC = ({ children }) => (
  <SCThemeProvider theme={theme}>{children}</SCThemeProvider>
);

export default ThemeProvider;
