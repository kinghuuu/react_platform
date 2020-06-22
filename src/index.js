import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.less'
import App from './routes/app'
import { Provider } from 'react-redux'
import store from './store'
import { ConfigProvider } from 'antd'
import zhCN from 'antd/es/locale/zh_CN';
import moment from 'moment'
import 'moment/locale/zh-cn';

moment.locale('zh-cn');

ReactDOM.render(
  <Provider store={store}>
    <ConfigProvider locale={zhCN}>
      <App></App>
    </ConfigProvider>
  </Provider>,
  document.getElementById('root')
);