## 项目目录介绍:<br/>
```
actions --- 存储action及action函数<br/>
assets --- 存储静态图片资源和共用icon图标<br/>
components --- 存储共用组件<br/>
constants --- 存储静态变量<br/>
reducers --- 存储reducer<br/>
routes --- 路由组件<br/>
store --- 状态管理<br/>
utils --- 工具函数<br/>
```

<br/>

## redux 笔记
#### reducer
reducer 里只能接收state,不能改变state<br/>
reducer 必须是纯函数.<br/>
reducer 本质就是一个函数,它用来响应发送过来的actions,然后经过处理把state发送给store
        reducer中需要return返回值,这样store才能接收到数据
        函数接收两个参数,第一个是初始化的state,第二个是action


#### redux、react-redux、redux-thunk概念
* redux是react状态管理
* react-redux主要是分离视图和数据, 简化、方便redux. 
             提供了provider组件,方便跨组件传输数据,使所有组件都可以拿到state.<br/>
             还提供connect组件,绑定当前组件和state、dispatch的关系,当前组件通过this.props就可以访问state和dispatch.<br/>
* redux-thunk是redux的中间件，<br/>
             使action可以接收一个函数，函数接收两个参数dispatch和state，可用来处理异步任务.





