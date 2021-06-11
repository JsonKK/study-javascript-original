// 引入express
const express = require('express');
// 实例化express
const app = express();
//定义端口号
const port = 3001;

Promise.resolve().then(()=>{
  // 调试数组
  require('./build/views/debugArray')
})

app.listen(port,()=>{
  console.log(`listen in port ${port}`);
})
