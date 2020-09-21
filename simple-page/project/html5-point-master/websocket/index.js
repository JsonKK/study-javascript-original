let app = require('express')()
let http = require('http').Server(app)
let io = require('socket.io')(http)

function getTime(){
  let date = new Date();
  let miniute = date.getMinutes();
  let second = date.getSeconds();
  let milliseconds = date.getMilliseconds();
  return 'serve//' + miniute + ':' + second + ':' + milliseconds;
}

app.get('/', (req, res)=>{
  //expressAPI方法读取文件
  //fs.readFile是使用node的核心文件系统模块读取文件
  res.sendFile(__dirname + '/index.html')
})

io.on('connection', (socket)=>{
  console.log('a user connected')
  //客户端通过chat message事件传值过来
  socket.on('chat message', (msg)=>{
    //将值再发送给客户端
    io.emit('chat message', msg + ' ' + getTime())
  })
})

http.listen(3000, ()=>{
  console.log('listening on http://localhost:3000')
})