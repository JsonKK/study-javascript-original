

//引入express
const express = require('express');
// 实例化全局应用
const app = express();
//监听的端口号
const port = 3000;

Promise.resolve().then(()=>{
  // 引入类型
  // require('./build/views/anyvalue');
  // require('./build/views/datatype');
  // 引入迭代器
  // require('./build/views/interfaces');
  //引入类
  // require('./build/views/class');
  //运入函数
  // require('./build/views/function');
  //泛型
  require('./build/views/genericity');
  //模块
  // require('./build/views/module');
  //命名空间
  // require('./build/views/name-space');
  //断言
  // require('./build/views/asserts');
  //元组
  // require('./build/views/tuple');
})

//监听服务
app.listen(port,()=>{
  console.log(`listen in port ${port}`);
})