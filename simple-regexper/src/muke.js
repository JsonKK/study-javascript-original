//引入通用工具
import utils from '../utils/index.js';

{
  //把匹配到的http开头的  .jpg结尾的字符串
  //匹配http 中间任意字符，加上.jpg结尾的字符
  //$1代表分组1匹配到的内容
  let regex = /http:(\/\/.+\.jpg)/g;
  let str = 'http://avatar01.jiaoliuqu.com//taqu_android_post_01557455129599.jpg http://avatar01.jiaoliuqu.com//taqu_android_post_01557455129599.png';
  console.log(str.replace(regex,'$1'));
}

{
  //匹配简单的日期格式
  let regex = /^(\d{4})[/-](\d{2})[/-](\d{2})$/;
  //不符合真实日期，但是校验也通过了
  let str = '1234/39/39';
  utils.log(regex.test(str),str);
  //把年月日替换为 月日年
  let dateArr = ['1234/39/39','2010/12/12','2021-11-11'];
  dateArr.forEach((item,index)=>{
    console.log(item.replace(regex,'$2-$3-$1'));
  })

}

{
  let yearRegex = /\d{4}[^0]$/;
  let str = '1234a';
  console.log(yearRegex.test(str))
}