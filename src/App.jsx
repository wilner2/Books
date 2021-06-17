import React from 'react';
import { ModalProvider } from 'styled-react-modal';
import Routes from './Routes';
import { GlobalStyle } from './GlobalStyle';

function App() {
  return (
    <>
      <ModalProvider>
        <Routes />
        <GlobalStyle />
      </ModalProvider>
    </>
  );
}

export default App;
