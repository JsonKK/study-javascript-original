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
      console.log(items[i].offsetLeft,items[i].offsetTop);
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
  }
}


export default privateMethod;