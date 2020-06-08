/**
* 五指棋
* @param name   定义
*/

var that;
const Five = function({id,lineNumber=15,chessWidth=30}={}){

  //canvas dom对象
  this.elem = document.getElementById(id) || '';
  if(!this.elem){
    return false
  }

  //画布对象内容
  this.context = this.elem.getContext('2d');

  //每行棋子个数
  this.lineNumber = lineNumber;

  //棋子默认宽度
  this.chessWidth = chessWidth;

  this.init();

  that = this;
}

Five.prototype = {
  constructor : Five,
  //初始化
  init(){
    //初始化走黑棋
    this.isBlack = true;
    //用于存放棋盘中落子的情况
    this.chessBox = [];
    //初始化棋盘大小
    this.initBoard();
    // 初始化落子情况
    this.initChessBox();
    // 初始化棋盘线条
    this.drawChessBoard();

    // 下棋事件
    this.elem.onclick = function (e) {
      let {isBlack,chessBox,chessWidth} = that;
      var x = e.offsetX;//相对于棋盘左上角的x坐标
      var y = e.offsetY;//相对于棋盘左上角的y坐标
      var i = Math.floor(x / chessWidth);
      var j = Math.floor(y / chessWidth);
      if (chessBox[i][j] == 0) {
        // 绘制当前点击的棋子
        that.oneStep(i, j, isBlack);
        // 选中棋子存进数组
        if (isBlack) {
          chessBox[i][j] = 1;
        } else {
          chessBox[i][j] = 2;
        }
        //下一步白棋
        that.isBlack = !isBlack;
        that.mathResult(i, j);
      }
    }
  },
  // 初始化棋盘大小
  initBoard(){
    let {lineNumber,chessWidth} = this;
    // 棋盘宽度为棋子个数乘以棋子宽度
    let width = lineNumber * chessWidth;
    this.boxSize = this.elem.width = this.elem.height = width;
  },
  // 初始化棋盘落子情况
  initChessBox(){
    let {lineNumber} = this;
    let arr = [];
    for (var i = 0; i < lineNumber; i++) {
      arr[i] = [];
      for (var j = 0; j < lineNumber; j++) {
        arr[i][j] = 0;//初始值为0
      }
    }
    this.chessBox = arr;
  },
  // 画棋盘线条
  drawChessBoard() {
    let {context,lineNumber,chessWidth,boxSize} = this;
    // 棋盘首尾线和盒子的间距为半个棋子的宽度
    let distance = chessWidth/2;
    let afterDistance = boxSize - distance;
    for (var i = 0; i < lineNumber; i++) {
      context.strokeStyle = "#D6D1D1";
      context.moveTo(distance + i * chessWidth, distance);//垂直方向画15根线，相距30px;
      context.lineTo(distance + i * chessWidth, afterDistance);
      context.stroke();
      context.moveTo(distance, distance + i * chessWidth);//水平方向画15根线，相距30px;棋盘为14*14；
      context.lineTo(afterDistance, distance + i * chessWidth);
      context.stroke();
    }
  },
  // 下棋
  oneStep(i, j, k) {
    let {context,chessWidth} = this;
    let distance = chessWidth/2;
    let radius = distance;
    context.beginPath();
    //第一个参数是棋子的x轴位置
    //第二个参数是棋子的y轴位置
    // 第三个参数是棋子的半径，不能大于定义好的棋子宽度一半，否则会重叠
    // 第四第五参数画圆
    //绘制棋子
    context.arc(distance + i * chessWidth, distance + j * chessWidth, chessWidth/2-2, 0, 2 * Math.PI);
    //设置渐变
    // x0Number
    // 起始圆的横坐标。
    // y0Number
    // 起始圆的纵坐标。
    // r0Number
    // 起始圆的半径。
    // x1Number
    // 结束圆的横坐标。
    // y1Number
    // 结束圆的纵坐标。
    // r1Number
    // 结束圆的半径。
    var g = context.createRadialGradient(distance + i * chessWidth, distance + j * chessWidth, 13, distance + i * chessWidth, distance + j * chessWidth, Math.ceil(radius/7));
    //k=true是黑棋，否则是白棋
    if (k) {    
      g.addColorStop(0, '#0A0A0A');//黑棋
      g.addColorStop(1, '#636766');
    } else {
      g.addColorStop(0, '#D1D1D1');//白棋
      g.addColorStop(1, '#F9F9F9');
    }
    context.fillStyle = g;
    context.fill();
    context.closePath();
  },
  //计算结果
  mathResult(x,y){
    let {chessBox} = this;
    let lang = chessBox.length;
    //黑白棋 1黑棋、2为白棋
    let color = chessBox[x][y];
    //思路，取前后四个的索引进行逻辑判断
    //查询需要匹配的数组索引
    let {beginX,endX,beginY,endY} = that.catchIndex(chessBox,x,y);
    // Y轴数组
    let arrY = [];
    for(let i = beginX,x=0;i<=endX;i++,x++){
      arrY.push(chessBox[i][y]);
    }
    if(this.judgeWin(arrY,color)){
      return;
    }
    // x轴数组
    let arrX = [];
    for(let i = beginY;i<=endY;i++){
      arrX.push(chessBox[x][i]);
    }
    if(this.judgeWin(arrX,color)){
      return;
    }
    // 斜轴数组(斜轴有两条需要考虑)
    let arrXY = [chessBox[x][y]];
    let arrXYInverse = [chessBox[x][y]];
    let xyCount = 1;
    while(xyCount < 5){
      if(chessBox[x+xyCount] && chessBox[x+xyCount][y+xyCount] >= 0){
        arrXY.push(chessBox[x+xyCount][y+xyCount]);
      }
      if(chessBox[x-xyCount] && chessBox[x-xyCount][y-xyCount] >= 0){
        arrXY.unshift(chessBox[x-xyCount][y-xyCount]);
      }
      if(chessBox[x+xyCount] && chessBox[x+xyCount][y-xyCount] >= 0){
        arrXYInverse.push(chessBox[x+xyCount][y-xyCount]);
      }
      if(chessBox[x-xyCount] && chessBox[x-xyCount][y+xyCount] >= 0){
        arrXYInverse.unshift(chessBox[x-xyCount][y+xyCount]);
      }
      xyCount++;
    }
    if(this.judgeWin(arrXY,color) || this.judgeWin(arrXYInverse,color)){
      return;
    }
    console.log(arrXY);
  },
  /**
  * 校验输赢
  * @param arr   校验的数组
  * @param colorNum   棋子的值
  */
  judgeWin(arr,colorNum){
    let judgeArr = [];
    for(let i = 0;i<arr.length;i++){
      if(arr[i] == colorNum){
        judgeArr.push(arr[i])
      }
      else{
        if(judgeArr.length < 5){
          judgeArr = [];
        }
        if(arr.length - i + 1 < 5){
          break;
        }
      }
    }
    let color = (colorNum == 1) ? '黑' : '白';
    if(judgeArr.length >= 5){
      setTimeout(()=>{
        alert(`${color}棋获胜`);
        this.init();
      },100);
      return true;
    }
    else{
      return false;
    }
  },
  // 查询需要匹配的数组索引
  catchIndex(chessBox,x,y){
    let beginX=-1,endX=-1,beginY=-1,endY=-1;
    let beginNumX = x - 4;
    let endNumX = x + 4;
    let beginNumY = y - 4;
    let endNumY = y + 4;
    while(beginX === -1){
      if(typeof chessBox[beginNumX] != 'undefined'){
        beginX = beginNumX;
      }
      else{
        beginNumX++;
      }
    }
    while(endX === -1){
      if(typeof chessBox[endNumX] != 'undefined'){
        endX = endNumX;
      }
      else{
        endNumX--;
      }
    }
    while(beginY === -1){
      if(typeof chessBox[x][beginNumY] != 'undefined'){
        beginY = beginNumY;
      }
      else{
        beginNumY++;
      }
    }
    while(endY === -1){
      if(typeof chessBox[x][endNumY] != 'undefined'){
        endY = endNumY;
      }
      else{
        endNumY--;
      }
    }
    console.log({beginX,endX,beginY,endY});
    return {beginX,endX,beginY,endY};
  }

}

export default Five;