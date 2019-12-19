import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import GlobalStyle from './styles/global';

export default function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
    </BrowserRouter>
  );
}
