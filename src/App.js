import React from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import 'config/ReactotronConfig';

import GlobalStyle from 'styles/global';
import Routes from 'routes';

import history from 'services/history';
import store from 'store';

export default function App() {
  return (
    <Provider store={store}>
      <Router history={history}>
        <Routes />
        <ToastContainer autoClose={3000} />
        <GlobalStyle />
      </Router>
    </Provider>
  );
}
