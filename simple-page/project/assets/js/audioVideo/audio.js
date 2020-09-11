const privateMethod = {
  //检测是否支持某个音视频，的mime类型
  // type : 1 音频audio , 2 视频video
  verifyMedia({type,mime}){
    let domType;
    if(type == 1){
      domType = 'audio';
    }
    else if(type == 2){
      domType = 'video';
    }
    return !!(document.createElement(domType).canPlayType(`${domType}/${mime}`));
  },
  //示例拖拽条
  dragBar(){
    var scroll = document.getElementById('scroll')
    var demo = document.getElementById("demo");
    var bar = scroll.children[0]
    var mask = scroll.children[1]
    let self = this;
    bar.onmousedown = function (e) {
      var e = e || window.event // 标准化event
      var leftVal = e.clientX - this.offsetLeft // 因为当前盒子是bar,bar是相对于scroll定位的，因此得到的offsetLeft是相对于scroll的距离，所以说leftVal是scroll距离浏览器左边的距离
      var that = this
      document.onmousemove = function (e) {
          var e = e || window.event // 标准化event
          var maxLimit = scroll.offsetWidth - 10 // 10为bar的宽度
          that.style.left = event.clientX - leftVal  + 'px'; // 设置滑块走过的距离,为什么要设置后获取，因为style是行内样式，不设置湖区不到
          var val = parseInt(that.style.left);
          if (val < 0) {
              val = 0
          } else if (val > maxLimit) {
              val = maxLimit
          }
          that.style.left = val + 'px'
          mask.style.width = that.style.left;  // 遮罩盒子的宽度
          let progress = parseInt(parseInt(that.style.left) / maxLimit * 100);
          // 计算百分比
          demo.innerHTML = "已经走了:"+ progress + "%"; // 走过的距离除以总长就得到百分比
          self.adjustProgress(progress);
          window.getSelection ? window.getSelection().removeAllRanges() : document.selection.empty(); // 解决选中出现蓝色的一片的bug
      }
      document.onmouseup = function() {
        document.onmousemove = null;   // 弹起鼠标不做任何操作
      }
    }
  },
  //调整音频位置
  //progress 拖拽的位置（百分比）
  adjustProgress(progress){
    if(progress < 0){
      return;
    }
    let audio = document.getElementById('audio');
    let duration = audio.duration;
    let currentTime = parseInt(progress/100 * duration);
    audio.currentTime = currentTime;
  },
  init(){
    console.log(1)
  }
}

export default privateMethod;