import './App.module.scss';

import React, { FC } from 'react';
import { BrowserRouter } from 'react-router-dom';

import Main from '@layouts/Main';

import styled, { createGlobalStyle } from 'styled-components';
import Header from '@layouts/Header';

const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Poppins" , sans-serif;
}
`;

const AppRoot = styled.div`
  position: absolute;
  height: 100vh;
  width: 100vw;
  overflow: auto;
`;

const App: FC = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <AppRoot>
        <Header />
        {/* <Sidebar /> */}
        <Main />
      </AppRoot>
    </BrowserRouter>
  );
};

export default App;
