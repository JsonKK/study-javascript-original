import Express from 'express'
//测试字符串正则
import './src/single-string.js';
//正则匹配位置攻略
import './src/position-ways.js';
//括号的作用
import './src/bracket.js';
//慕课网视频教程
// import './src/muke.js';

let app = Express()
app.get('/', (req, res) => {
  res.send('welcome reg')
})
 
app.listen(3000, () => 
  console.log('server is running at http://localhost:3000')
)