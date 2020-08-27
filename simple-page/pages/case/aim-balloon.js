const localObj = {
  //小球数量
  ballNum : 10,
  //小球宽高
  ballWidth : 160,
  ballHeight : 160,
  //小球对角线，小球的实际高度
  ballDiagonal : '',
  //存放气球节点数组
  ballList : [],
  //容器宽度与高度
  boxHeight : '',
  boxWidth : ''
}

const privateMethod = {
  //初始化小球
  initBall(){
    let {ballNum,ballWidth,ballHeight} = localObj;
    if(!ballNum || ballNum<1){
      return;
    }
    // 定义容器
    let box = document.getElementById('ball-box');
    // 获取容器的宽高
    let boxWidth = box.offsetWidth;
    let boxHeight = box.offsetHeight;
    // 创建一个最小节点
    let frament = document.createDocumentFragment();
    //根据小球宽高计算出对角线长度
    //Math.pow(x,y) x的y次方
    let diagonal = Math.sqrt(ballWidth * ballWidth + ballHeight * ballHeight);
    //距离左侧距离最大值为容器宽度减去小球对角线宽度，因为这时候小球对角线就是在视图中的宽度
    let distanceLeft = boxWidth - diagonal;
    //定义临时小球节点数组
    let ballList = [];
    //遍历创建小球容器
    for(let i=0;i<ballNum;i++){
      let ball = document.createElement('div');
      ball.className += 'balloon';
      ball.style.top = boxHeight - ballHeight + 'px';
      //~~数值取整，使用二次取反去掉小数位
      ball.style.left = ~~(distanceLeft * Math.random()) + 'px';
      //增加小球移动速度
      ball.speed = Math.random()*10 + 1;
      frament.appendChild(ball);
      ballList.push(ball);
    }
    localObj.ballList = ballList;
    localObj.boxHeight = boxHeight;
    localObj.boxWidth = boxWidth;
    localObj.diagonal = diagonal;
    document.getElementById('ball-box').appendChild(frament);
    //初始化打气球事件
    this.brokeBall();
    //让小球运动
    this.moveBall();
  },
  //执行小球运动
  moveBall(){
    //遍历小球，小球的top值每次都加上步长
    //如果小球消失在窗口，则让气球的top值回到初始位置
    let {ballList,diagonal,boxHeight} = localObj;
    for(let i = 0,len=ballList.length;i<len;i++){
      ballList[i].style.top = ballList[i].offsetTop - ballList[i].speed + 'px';
      if(ballList[i].offsetTop < -diagonal){
        ballList[i].style.top = boxHeight + 'px';
      }
    }
    setTimeout(privateMethod.moveBall,1000/60);
  },
  //增加打气球事件
  brokeBall(){
    // 建立事件委托
    let box = document.getElementById('ball-box');
    // 利用事件冒泡捕获气球元素，并绑定行为
    box.addEventListener('click',(e)=>{
      if(e.target.className.toLowerCase() == 'balloon'){
        console.log(e.target);
        box.removeChild(e.target);
      }
    },false)
  }
}

export default privateMethod;