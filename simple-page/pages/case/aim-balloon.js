const localObj = {
  //小球数量
  ballNum : 10,
  //小球宽高
  ballWidth : 160,
  ballHeight : 160
}

const privateMethod = {
  //初始化小球
  initBall(){
    let {ballNum} = localObj;
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
    let diagonal = Math.sqrt(localObj.ballWidth * localObj.ballWidth + localObj.ballHeight * localObj.ballHeight);
    //距离左侧距离最大值为容器宽度减去小球对角线宽度，因为这时候小球对角线就是在视图中的宽度
    let distanceLeft = boxWidth - diagonal;
    //遍历创建小球容器
    for(let i=0;i<ballNum;i++){
      let ball = document.createElement('div');
      ball.className += 'balloon';
      ball.style.top = boxHeight + 'px';
      console.log(ball.offsetWidth);
      ball.style.left = Math.ceil(distanceLeft * Math.random()) + 'px';
      frament.appendChild(ball);
    }

    document.getElementById('ball-box').appendChild(frament);
  }
}

export default privateMethod;