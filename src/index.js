import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';

import React from 'react';
import ReactDOM from 'react-dom';

import './index.scss';

import WrappedAppComponent from './App';
import { Provider } from 'react-redux';
import store from './redux/store';

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <WrappedAppComponent />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

