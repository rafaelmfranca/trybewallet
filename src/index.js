import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from './App';
import store from './store/store';
import Reset from './styles/generic/Reset';
import FontStyles from './styles/generic/FontStyles';

ReactDOM.render(
  <BrowserRouter>
    <Provider store={ store }>
      <FontStyles />
      <Reset />
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById('root'),
);
