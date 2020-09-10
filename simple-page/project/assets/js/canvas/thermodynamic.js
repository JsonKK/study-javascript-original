// 本地静态数据
const localData = {
  //重置按钮名称
  resetBtnId : 'resetButton',
  //画布元素id
  canvasId : 'thermodynamic',
  //鼠标点
  points : {},
  // 大小
  scale : 3,
  //横坐标
  x : -1,
  //纵坐标
  y : -1,
  //热力点轮询对象
  hotTimeObj : null,
  //画布对象
  canvas : null,
  // 绘画对象
  context : null
}

const localMethod = {
  //画布鼠标经过事件
  canvasMouseOver(e){
    // 鼠标在画布的横坐标，是鼠标在屏幕的位置减去容器到左侧的距离
    localData.x = e.clientX - e.target.offsetLeft;
    //纵坐标计算与横坐标同理
    localData.y = e.clientY - e.target.offsetTop;
    localMethod.disposePointer();
  },
  //处理鼠标描绘的点
  disposePointer(){
    let {x,y} = localData;
    if(x != -1 && y != -1){
      console.log(1);
      localMethod.addPointer(x,y);
      localData.hotTimeObj = setTimeout(localMethod.disposePointer,100);
    }
    else{
      console.log(2);
      clearTimeout(localData.hotTimeObj);
    }
  },
  //增加热力点
  addPointer(x,y){
    let {scale,points} = localData;
    let isPass = true;
    x = Math.floor(x/scale);
    y = Math.floor(y/scale);
    // 热度值最高为10
    if(!points[[x,y]]){
      points[[x,y]] = 1;
    }
    //如果热度为10，则不操作
    else if(points[[x,y]] == 10){
      isPass = false;
    }
    else{
      points[[x,y]]++;
    }
    localData.points = points;
    if(!isPass){
      return;
    }
    localMethod.drawPointer(x*scale,y*scale,points[[x,y]]);
  },
  //绘制点
  drawPointer(x,y,radius){
    let {context,canvas} = localData;
    context.fillStyle = localMethod.getColor(radius);
    radius = Math.sqrt(radius) * 6;
    context.beginPath();
    context.arc(x,y,radius,0,Math.PI*2,true);
    context.closePath();
    context.fill();
  },
  //返回颜色值
  getColor(intensity){
    let colors = ['#072933','#2e4045','#8c593b','#b2814e','#fac268','#fad237'];
    return colors[Math.floor[intensity/2] || 0];
  }
  
}
// 定义私有方法
const privateMethod = {
  //初始化
  init(){
    let canvas = document.getElementById('thermodynamic');
    let context = canvas.getContext('2d');
    //设置画布透明度
    context.globalAlpha = 0.2;
    //设置画布目标和源关系
    context.globalCompositeOperation = 'lighter';
    localData.canvas = canvas;
    localData.context = context;
    canvas.onmousemove = localMethod.canvasMouseOver;
    canvas.onmouseout = function(){
      if(localData.hotTimeObj){
        clearTimeout(localData.hotTimeObj);
      }
    }
  }
}

export default privateMethod;