// 本地数据
const localData = {
  // 装帧的时间间隔
  updateInterval : 5000,
  //时序中帧的尺寸
  frameWidth : 450,
  frameHeight : 75,
  //时序的总帧数
  frameRows : 4,
  frameColumns : 4,
  frameGrid(){
    let {frameRows,frameColumns} = localData;
    return frameRows * frameColumns;
  },
  //计时器动画
  intervalid : false,
  //当前帧
  frameCount : 0,
  //判断是否执行
  videoStarted : false
}

const privateMath = {
  //把帧绘制到画布上
  updateFrame(){
    let video = document.getElementById('movies');
    let timeline = document.getElementById('timeline');
    let context = timeline.getContext('2d');
    let {frameCount,frameGrid,frameWidth,frameHeight,frameColumns,frameRows} = localData;
    // 根据帧数计算当前位置
    // 然后以视频为输入参数绘制图像
    let framPosition = frameCount % frameGrid();
    let frameX = (framPosition % frameColumns) * frameWidth;
    let frameY = (Math.floor(framPosition / frameRows)) * frameHeight;
    context.drawImage(video,0,0,400,300);
    localData.frameCount++;
  },
  //执行视频
  startVideo(){
    let {videoStarted,updateInterval} = localData;
    if(videoStarted){
      return;
    }
    localData.videoStarted = true;
    privateMath.updateFrame();
    localData.intervalid = setInterval(privateMath.updateFrame,updateInterval);
  },
  init(){
    let video = document.getElementById('movies');
    video.oncanplay = function(){
      privateMath.startVideo();
    }
  }
}


export default privateMath;