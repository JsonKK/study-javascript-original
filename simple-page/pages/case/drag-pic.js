var dragObj = {
  //鼠标经过开关
  onOff : false,
  el : '',
  //起始横坐标
  startX : 0,
  //起始纵坐标
  startY : 0,
  //点击横坐标
  clickX : 0,
  //点击纵坐标
  clickY : 0,
  //移动横坐标
  moveX : 0,
  //移动纵坐标
  moveY : 0,
  //用于记录是否有碰撞
  //如果存在则存放被碰撞的节点
  trigger : false
}
var privateMethod = {
  //初始化定位
  //1.给父元素ul.list加上relative属性，offsetLeft就不会是相对于左边的
  //2.为元素增加定位属性
  //3.因为读取属性的时间要慢于属性的赋值，所以会出现所有内容都是一个left和top值
  initPosition : function(){
    let items = document.getElementsByClassName('item');
    let item,arr = [];
    this.initHeight()
    for(let i = 0,len = items.length;i<len;i++){
      item = items[i];
      arr.push([items[i].offsetLeft,items[i].offsetTop]);
      setTimeout((index,item)=>{
        let position = arr[index];
        item.style.position = 'absolute';
        item.style.top = position[1] + 'px';
        item.style.left = position[0] + 'px';
        item.style.margin = 0;
      },0,i,item)
    }
  },
  //初始化容器高度
  //由于设置完position 属性后容器的高度没有内容撑开，发生塌陷
  //每行3个，取余计算出有几行
  //每行的高度是图片内容加间距，间距为变量，
  //len 子集元素长度，没有的话重新取
  initHeight : function(len){
    if(!len){
      len = document.getElementsByClassName('item').length;
    }
    let row = Math.ceil(len/3);
    let itemHeight = document.getElementsByClassName('item')[0].clientHeight;
    let distace = 10;
    let list = document.getElementById('list');
    list.style.height = row * (itemHeight + distace) + 'px';
  },
  //初始化鼠标拖拽事件
  //增加鼠标点击、经过、抬起事件
  initDragEvent(){
    let list = document.getElementById('list');
    let items = new Array(...list.getElementsByClassName('item'));
    let {itemDrag} = this;
    items.forEach((item,index)=>{
      item.addEventListener('mousedown',itemDrag);
      item.addEventListener('mousemove',itemDrag);
      item.addEventListener('mouseup',itemDrag);
    })
  },
  //拖拽实现
  //1.判断类别，在鼠标点击的时候设置开关
  //2.设置开关、当鼠标点击时候开关开启、鼠标松开开关关闭
  itemDrag(e){
    if(e.stopPropagation) e.stopPropagation();
    if(e.preventDefault) e.preventDefault();
    let category = e.type;
    let {onOff} = dragObj;
    let listDom = document.getElementById('list');
    switch(category){
      case 'mousedown':
        let li = e.currentTarget
        dragObj.onOff = true;
        dragObj.el = li;
        dragObj.startX = li.offsetLeft;
        dragObj.startY = li.offsetTop;
        dragObj.clickX = e.clientX;
        dragObj.clickY = e.clientY;
        
        break;
      case 'mousemove':
        if(onOff){
          //鼠标距离窗口左侧的位置
          dragObj.moveX = e.clientX;
          // 鼠标距离窗口顶部位置
          dragObj.moveY = e.clientY;
          privateMethod.initItem();
          dragObj.el.style.left = dragObj.startX + dragObj.moveX - dragObj.clickX + 'px';
          dragObj.el.style.top = dragObj.startY + dragObj.moveY - dragObj.clickY + 'px';
          dragObj.el.style.zIndex = 3;
          //鼠标距离容器左侧距离
          let mouseDistanceLeft = dragObj.moveX - listDom.offsetLeft;
          //鼠标距离顶部距离
          let mouseDistanceTop = dragObj.moveY - listDom.offsetTop;
          //当前元素索引
          let el = e.currentTarget;
          privateMethod.crashItem({
            x:mouseDistanceLeft,
            y:mouseDistanceTop,
            el
          });
          console.log(dragObj.moveX - listDom.offsetLeft,dragObj.moveY - listDom.offsetTop);
          console.log(dragObj.el.offsetLeft,dragObj.el.offsetTop);
        }
        break;
      case 'mouseup':
        dragObj.onOff = false;
        let {trigger} = dragObj;
        if(trigger){

        }
        else{
          //图形回到原始位置
          dragObj.el.style.left = dragObj.startX + 'px';
          dragObj.el.style.top = dragObj.startY + 'px';
        }
        dragObj.trigger = false;
        break;
    }
  },
  //清除其他图片的zIndex
  initItem(){
    let list = document.getElementById('list');
    let items = new Array(...list.getElementsByClassName('item'));
    items.forEach((item,index)=>{
      item.style.zIndex = 1;
    });
  },
  //判断是否碰撞成功
  //判断条件：1.遍历图片元素，碰撞元素不是当前元素；2.坐标落在被碰撞元素内
  //碰撞测试成功：1.记录碰撞成功开关，当鼠标离开时候使用；2.被碰撞的元素做特殊处理
  crashItem({x,y,el}){
    if(!x || !y || !el){
      return;
    }
    let list = document.getElementById('list');
    let items = new Array(...list.getElementsByClassName('item'));
    let index = items.indexOf(el);
    for(let i = 0,len = items.length;i<len;i++){
      items[i].style.boxShadow = '';
      items[i].style.transform = '';
      if(index == i){
        continue;
      }
      //1.鼠标落点在元素左侧和左侧加宽之内
      //2.并且鼠标落点在元素顶部和底部之内
      if(
        x > items[i].offsetLeft && 
        x < items[i].offsetLeft + items[i].offsetWidth && 
        y > items[i].offsetTop && 
        y < items[i].offsetTop + items[i].offsetHeight
      ){
        items[i].style.boxShadow = '0px 0px 5px #ff6600';
        items[i].style.transform = 'scale(1.01)';
        dragObj.trigger = items[i];
        break;
      }
    }
  }
}


export default privateMethod;