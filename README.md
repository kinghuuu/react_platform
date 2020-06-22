## 项目目录介绍:<br/>
actions --- 存储action及action函数<br/>
assets --- 存储静态图片资源和共用icon图标<br/>
components --- 存储共用组件<br/>
constants --- 存储静态变量<br/>
reducers --- 存储reducer<br/>
routes --- 路由组件<br/>
store --- 状态管理<br/>
utils --- 工具函数<br/>

## 笔记
reducer里只能接收state,不能改变state,reducer必须是纯函数.<br/>

- redux是react状态管理
- react-redux主要是分离视图和数据, 简化、方便redux. 提供了provider组件,方便跨组件传输数据.<br/>
             还提供connect组件,绑定当前组件和state、dispatch的关系,当前组件通过this.props<br/>
             就可以访问state和dispatch.
- redux-thunk是redux的中间件，<br/>
             使action可以接收一个函数，函数接收两个参数dispatch和state，可用来处理异步任务.



## axios 用法
- get请求<br/>
  axios.get('/user?ID=12345')<br/>
    .then(function (response) {<br/>
      console.log(response);<br/>
    })<br/>
    .catch(function (error) {<br/>
      console.log(error);<br/>
    });<br/>

  上面的请求可以这样做<br/>
  axios.get('/user', {<br/>
      params: {<br/>
        ID: 12345<br/>
      }<br/>
    })<br/>
    .then(function (response) {<br/>
      console.log(response);<br/>
    })<br/>
    .catch(function (error) {<br/>
      console.log(error);<br/>
    });<br/>

- post请求<br/>
  axios.post('/user', {<br/>
      firstName: 'Fred',<br/>
      lastName: 'Flintstone'<br/>
    })<br/>
    .then(function (response) {<br/>
      console.log(response);<br/>
    })<br/>
    .catch(function (error) {<br/>
      console.log(error);<br/>
    });<br/>

- 执行多个并发请求<br/>
  function getUserAccount() {<br/>
    return axios.get('/user/12345');<br/>
  }<br/>

  function getUserPermissions() {<br/>
    return axios.get('/user/12345/permissions');<br/>
  }<br/>

  axios.all([getUserAccount(), getUserPermissions()])<br/>
    .then(axios.spread(function (acct, perms) {<br/>
      // 两个请求现在都执行完成<br/>
    }));<br/>


