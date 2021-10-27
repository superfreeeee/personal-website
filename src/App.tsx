import './App.module.scss';

import React, { FC } from 'react';
import { BrowserRouter } from 'react-router-dom';

import Sidebar from '@layouts/Sidebar';
import Main from '@layouts/Main';

import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Poppins" , sans-serif;
}
`;

const AppRoot = styled.div`
  min-height: 100vh;
  display: flex;
`;

const App: FC = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <AppRoot>
        <Sidebar />
        <Main />
      </AppRoot>
    </BrowserRouter>
  );
};

export default App;
