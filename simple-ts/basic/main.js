

//引入express
const express = require('express');
// 实例化全局应用
const app = express();
//监听的端口号
const port = 3000;

Promise.resolve().then(()=>{
  // 引入类型
  // require('./build/anyvalue');
  // 引入迭代器
  // require('./build/interfaces');
  //引入类
  // require('./build/class');
  //运入函数
  // require('./build/function');
  //泛型
  // require('./build/genericity');
  //模块
  // require('./build/module');
  //命名空间
  require('./build/name-space');
})

//监听服务
app.listen(port,()=>{
  console.log(`listen in port ${port}`);
})