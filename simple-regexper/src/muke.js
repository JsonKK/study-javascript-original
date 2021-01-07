//引入通用工具
import utils from '../utils/index.js';

{
  //把匹配到的http开头的  .jpg结尾的字符串
  let regex = /http:(\/\/.+\.jpg)/g;
  let str = 'http://avatar01.jiaoliuqu.com//taqu_android_post_01557455129599.jpg http://avatar01.jiaoliuqu.com//taqu_android_post_01557455129599.png';
  console.log(str.replace(regex,'$1'));
}