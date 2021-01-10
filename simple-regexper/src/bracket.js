/**
* 括号的作用
* @param name   定义
*/

//引入通用js工具
import utils from '../utils/index.js';

{
  //使用括号分组
  //全局匹配无数个ab重复
  let regex = /(ab)+/g;
  let str = 'ababa abbb ababab';
  //输出匹配到的字符串数组
  console.log(str.match(regex));
}

{
  //分支结构
  let regex = /^I love (JavaScript|Regular Expression)$/g;
  //疑问（为什么规则增加g全局参数后，str2就无法校验通过）
  let str1 = 'I love JavaScript';
  let str2 = 'I love Regular Expression';
  let str3 = 'fsdfhiuewr';
  utils.log(regex.test(str1),str1);
  utils.log(regex.test(str2),str2);
  // console.log((str1+' '+str2).match(/I love (JavaScript|Regular Expression)/));
  console.log((str1+ ' ' + str2).split(/I love (JavaScript|Regular Expression)/));
}