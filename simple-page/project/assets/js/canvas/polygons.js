

const privateMethod = {
  //提醒吐司
  toast(msg){
    let dom = document.getElementById('hint-box');
    dom.className = dom.className.replace('active','');
    dom.innerText = msg;
    dom.className += ' active';
    setTimeout(()=>{
      dom.className = dom.className.replace('active','');
    },2000);
  },
  //输入边框事件
  sideInputEvent(){
    // 获取容器
    let box = document.getElementById('canvas-box');
    // 事件捕获，监听按钮点击事件
    box.addEventListener('click',(e)=>{
      // 触发事件被捕获到的节点元素
      let dom = e.target;
      //如果不是确认按钮不处理
      if(!dom.className.includes('btn-side')){
        return;
      }
      //获取文本框节点
      let inputDom = dom.parentNode.previousElementSibling;
      // 输入的边框长度
      let inputDomValue = inputDom.value;
      // 多边形类型
      let inputDomName = inputDom.name;
      // 如果边长没有大于0或者没有图形类型或者为小数返回不处理
      if(!(inputDomValue > 0) || !inputDomName || inputDomValue.indexOf('.') > 0){
        this.toast('抱歉，输入边长不符合规范，请重新输入');
        return;
      }
      switch(inputDomName){
        //三角形
        case 'triangle':
          privateMethod.drawTriangle(Number(inputDomValue));
          inputDom.value = '';
          break;
      }
      console.log(dom);
    },false);
  },
  // 绘制三角形
  //side 边长
  drawTriangle(side){
    //如果没用边长不处理
    if(!(side > 0)){
      return;
    }
    // 获取画布节点
    let canvas = document.getElementById('triangle');
    //获取画布上下文
    let context = canvas.getContext('2d');
    // 获取画布宽度和高度
    let canvasWidth = canvas.width;
    // let canvasHeight = canvas.height;
    console.log(canvasWidth);
    //计算三角形高度
    //因为sin60 = 直角边（高）/斜边 => 直角边（高） = sin(60) * 斜边;
    let height = Math.sin(Math.PI / 3) * side;
    //三角形中点
    //中点是画布宽度的中心
    let centerPointX = canvasWidth / 2;
    let centerPointY = 10;
    //起笔点固定在中点
    context.moveTo(centerPointX,centerPointY);
    //绘制从中点至左下边
    context.lineTo(centerPointX - side/2,height);
    //绘制底边
    context.lineTo(centerPointX + side/2,height);
    //绘制右边线
    context.lineTo(centerPointX,centerPointY);
    //绘制轨迹
    context.stroke();
  }
}

export default privateMethod;