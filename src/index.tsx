import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import Router from './router'
import store from './store/index'
import { Provider } from 'react-redux'
import 'antd/dist/antd.css'
import './style/common.less'

ReactDOM.render(
  <Provider store={store}>
    <Router />
  </Provider>,
  document.getElementById('root')
);

reportWebVitals();
