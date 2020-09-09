//本地数据
const localData = {
  arr : [
    {
      key : 'source-over',
      title(){
        return this.key;
      },
      subTitle : '默认。在目标图像上显示源图像'
    },
    {
      key : 'source-atop',
      title(){
        return this.key;
      },
      subTitle : '在目标图像顶部显示源图像。源图像位于目标图像之外的图像是不可见的'
    },
    {
      key : 'source-in',
      title(){
        return this.key;
      },
      subTitle : '在目标图像中显示源图像。只有目标图像内的源图像会显示，目标图像时透明'
    },
    {
      key : 'source-out',
      title(){
        return this.key;
      },
      subTitle : '在目标图像之外显示源图像。只会显示目标图像之外源图像部分，目标图像是透明的。'
    },
    {
      key : 'destination-over',
      title(){
        return this.key;
      },
      subTitle : '在源图像上方显示目标图像。'
    },
    {
      key : 'destination-atop',
      title(){
        return this.key;
      },
      subTitle : '在源图像顶部显示目标图像。源图像之外的目标图像部分不会被显示。'
    },
    {
      key : 'destination-in',
      title(){
        return this.key;
      },
      subTitle : '在源图像中显示目标图像。只有源图像内的目标图像部分会被显示，源图像是透明的。'
    },
    {
      key : 'destination-out',
      title(){
        return this.key;
      },
      subTitle : '在源图像外显示目标图像。只有源图像外的目标图像部分会被显示，源图像是透明的。'
    },
    {
      key : 'lighter',
      title(){
        return this.key;
      },
      subTitle : '显示源图像 + 目标图像'
    },
    {
      key : 'copy',
      title(){
        return this.key;
      },
      subTitle : '显示源图像。忽略目标图像'
    },
    {
      key : 'xor',
      title(){
        return this.key;
      },
      subTitle : '使用异或操作对源图像与目标图像进行组合。'
    },
  ]
}
const privateMethod = {
  //渲染模块
  //title 主标题
  //subTitle 副标题
  //key 调用的canvas形态
  renderGraph({title,subTitle,key}){
    //思路整理
    //1.创建Li
    //2.往li内增加标题标签
    //3.创建canvas标签，往Li种增加canvas标签
    //4.返回处理好的li给外部，由外部一次性渲染
    const li = document.createElement('li');
    const titleStr = `<h5 class="item-title">${title || ''}</h5>
    <p class="item-sub-title">${subTitle || ''}</p>`;
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    // 获取画布宽高
    const canvasWidth = canvas.width;
    const canvasHeight = canvas.height;
    li.innerHTML = titleStr;
    context.fillStyle = 'yellowgreen';
    // 平铺图形
    //1、2参数：起始位置的x、y坐标
    //3、4参数：绘制的宽度和高度
    context.fillRect(0,0,canvasWidth,canvasHeight);
    li.appendChild(canvas);
    return li;
  },
  //初始化页面
  initPage(){
    let lis = this.renderGraph({
      title : '测试主标题',
      subTitle : '测试副标题'
    })
    document.getElementById('list').appendChild(lis);
  }
}

export default privateMethod;