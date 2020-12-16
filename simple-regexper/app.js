import Express from 'express'
//测试字符串正则
import './src/single-string.js';


let app = Express()
app.get('/', (req, res) => {
  res.send('welcome reg')
})
 
app.listen(3000, () => 
  console.log('server is running at http://localhost:3000')
)