import { ConfigProvider } from 'antd';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import {Login} from './Components'
import { GlobalStyle } from './Styles/Global';
import { theme } from './Styles/theme';
import ptBR from 'antd/lib/locale/pt_BR';


function App() {
  return (
    <ConfigProvider locale={ptBR}>
      <ThemeProvider theme={theme}>
    <div className="App">
      <Login />
      <GlobalStyle/>
    </div>
    </ThemeProvider>
    </ConfigProvider>
  );
}

export default App;
