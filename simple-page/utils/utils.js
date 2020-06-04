const utils = {
  /**
  * 增加内容展示
  * @param arr   需要展示的数组内容
  * @param count   需要展示的循环执行次数
  * @param title   需要展示的标题
  */
  addInfo({arr=[],count,title}){
    let p = document.createElement('p');
    let content = document.getElementById('content');
    if(!content){
      return;
    }
    p.classList += 'item-info';
    p.innerHTML = `${title}:<br/>运行了${count}次<br/>得到结果${arr.length}个<br/>得到的结果是${arr.join(' ')}`;
    content.appendChild(p);
  },
  /**
  * 生成随机数数组
  * @param name   定义
  */
  addRandomNum(lang=99){
    //生成随机数
    var nums = [];
    var count = 0;
    while(nums.length < lang){
      count++;
      var num = parseInt(Math.random() * lang+1);
      if(nums.indexOf(num) == -1){
        nums.push(num);
      }
    }
    // console.log(nums);
    // console.log('count',count);
    return {nums,count}
  }
}

export default utils;