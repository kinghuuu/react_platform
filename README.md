项目目录介绍:<br/>
actions --- 存储action及action函数
assets --- 存储静态图片资源和共用icon图标<br/>
components --- 存储共用组件<br/>
constants --- 存储静态变量<br/>
reducers --- 存储reducer<br/>
routes --- 路由组件<br/>
store --- 状态管理<br/>
utils --- 工具函数<br/>

---- 笔记 -------------------------------------------------------------------
reducer里只能接收state,不能改变state,reducer必须是纯函数.

---- axios 用法 -------------------------------------------------------------
1. get请求
axios.get('/user?ID=12345')
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });

//上面的请求可以这样做
axios.get('/user', {
    params: {
      ID: 12345
    }
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });

2. post请求
axios.post('/user', {
    firstName: 'Fred',
    lastName: 'Flintstone'
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });

3. 执行多个并发请求
function getUserAccount() {
  return axios.get('/user/12345');
}

function getUserPermissions() {
  return axios.get('/user/12345/permissions');
}

axios.all([getUserAccount(), getUserPermissions()])
  .then(axios.spread(function (acct, perms) {
    // 两个请求现在都执行完成
  }));


