import React from 'react';
import GlobalStyle from './styles/GlobalStyle';
import { RecoilRoot } from 'recoil';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ThemeProvider } from 'styled-components';
import Theme from './styles/Theme';
import DarkModeToggle from './components/common/Button/DarkModeButton';
import AppRouter from './routes/AppRouter';
import BasicLayout from "./styles/BasicLayout";

const App = () => {
  const queryClient = new QueryClient();
  return (
    <>
      <GlobalStyle />
      <RecoilRoot>
        <QueryClientProvider client={queryClient}>
          <ThemeProvider theme={Theme}>
            <BasicLayout theme={Theme}>
              <DarkModeToggle />
            <AppRouter />
            </BasicLayout>
          </ThemeProvider>
          </QueryClientProvider>
        </RecoilRoot>
    </>
  );
};

export default App;
