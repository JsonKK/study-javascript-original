//引入通用工具
import utils from '../utils/index.js';

{
  //精确匹配
  var regex = /hello/;
  let txt = 'hello';
  utils.log( regex.test(txt), txt);
}

{
  //匹配2~3位置为a
  //即 cat 和 caat 都是通过校验的
  let regex = /ca{1,2}t/;
  let txt = 'caat';
  utils.log(regex.test(txt) ,txt);
}

{
  //全局匹配第二个至第五个字符为b的字符串
  var regex = /ab{2,5}c/g;
  var string = "bc abc abbc abbbc abbbbc abbbbbc abbbbbbc";
  console.log( string.match(regex) );
}

{
  // 全局匹配第二个字符为1、2、3
  var regex = /a[0123]b/g;
  var string = 'a0b a1b a2b a3b a4b';
  console.log(string.match(regex));
}

{
  //使用字符组改写，匹配第二个字符为1、2、3、4；a、b、c、d;G H I J K L M
  var regex = /a[1-4a-dG-M]b/g;
  var string = 'a0b a1b a2b a3b a4b aab aeb abb acb adb awb aob aAb aHb aIb aQb aMb';
  console.log(string.match(regex));
}

{
  // 匹配特殊字符 -
  var regex = /a[1-3\-]b/g;
  var string = 'a0b a1b a2b a3b a4b a-b';
  console.log(string.match(regex));
}

{
  //匹配第二个字符是1~10但不包括4、8；
  //遗留问题，未能解决
  var regex = /a[0-9^48]b/g;
  var string = 'a0b a1b a2b a3b a4b a8b a9b';
  console.log(string.match(regex));
}

{
  //解读规则
  let regex = /a{1,2}b{3}c{4}d?e+f*/g
  //一次或者两次 a 
  //三次的 b
  //四次的 c
  //可有可无d
  //一次以上的e
  //可有可无f 
  let str = 'aabbbccccdeeff';
  utils.log(regex.test(str),str);
}

{
  //匹配2位至5位整数
  var regex = /\d{2,5}/g;
  var string = "1 12 123 1234 12345 123456";
  console.log( string.match(regex) );
}

{
  // 惰性匹配
  //虽然 2 到 5 次都行，当 2 个就够的时候，就不再往下尝试了。
  var regex = /\d{2,5}?/g;
  var string = "123 1234 12345 123456";
  console.log( string.match(regex) );
}