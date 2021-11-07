import './App.module.scss';

import React, { FC } from 'react';
import { BrowserRouter } from 'react-router-dom';
import styled, { createGlobalStyle } from 'styled-components';

import Main from '@layouts/Main';
import Header from '@layouts/Header';
import Footer from '@layouts/Footer';

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
        <Main />
        <Footer />
      </AppRoot>
    </BrowserRouter>
  );
};

export default App;
