import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.less'
import App from './routes/app'
import { Provider } from 'react-redux'
import store from './store'


ReactDOM.render(
  <Provider store={store}>
    <App></App>
  </Provider>,
  document.getElementById('root')
);