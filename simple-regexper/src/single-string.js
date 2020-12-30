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

{
  //管道符号 | 
  var regex = /good|nice/g;
  var string = "good idea, nice try.";
  console.log( string.match(regex) );
}

{
  //分支结构是惰性的，先匹配到的，就不会再匹配了
  var regex = /good|goodbye/g;
  var string = "goodbye";
  console.log( string.match(regex) );
}

{
  //匹配颜色色值
  //需要注意位置，6位数应该在前，3位应该在后，因为是惰性匹配
  var regex = /#([a-fA-f\d]{6}|[a-fA-f\d]{3})/g;
  var string = '#ffbbad #Fc01DF #FFF #ffE rfewrwer';
  console.log( string.match(regex) );
}

{
  //匹配时间格式
  //错误示范，应该考虑时间的方位，这边以24小时为例
  var regex = /\d{2}:\d{2}/g;
  //重写校验规则,匹配到的是24小时制的
  regex = /[0-2]{1}[0-4]{1}:[0-5]{1}\d{1}/g
  //重写，同时满足24小时和12小时的
  regex = /^([01]\d|[2][0-3]):[0-5]\d/g
  // 限制匹配12小时
  regex = /([01][012]):[0-5][0-9]/g
  var string = '23:59 02:07 59:43 7:9';
  console.log( string.match(regex) );
}

{
  // 匹配时间或者比分
  var regex = /^(0?[0-9]|1[0-9]|[2][0-3]):(0?[0-9]|[1-5][0-9])$/;
  utils.log( regex.test("7:9") ,'7:9');
}

{
  // 校验年月日yyyy-mm-nn
  //第一个数字为1~9或者缺省
  //重点在最后一位需要是小于31的数字
  let regex = /[1-9]?[0-9]{3}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])/g
  let str = '2017-06-10 996-12-12';
  console.log(str.match(regex));
}

{
  //匹配window路径
  //匹配盘符
  let regex = /[a-zA-Z]:\\/g;
  //文件名和文件夹不能包含特殊字符
  //不要 \ : * <> | " ? \r \n /特殊字符
  //至少一个字符
  regex = /[a-zA-Z]:\\[^\\:*<>|"?\r\n/]+\\/g;
  //文件夹可以出现n次 *
  regex = /[a-zA-Z]:\\([^\\:*<>|"?\r\n/]+\\)*/g;
  //路径的最后可以是文件夹或者文件，不需要 \
  //校验真假时候不要加g会有问题
  regex = /^[a-zA-Z]:\\([^\\:*<>|"?\r\n/]+\\)*([^\\:*<>|"?\r\n/]+)?$/;
  // regex = /^[a-zA-Z]:\\([^\\:*<>|"?\r\n/]+\\)*([^\\:*<>|"?\r\n/]+)?$/;
  let str = 'F:\\study\\javascript\\regex\\regular expression.pdf F:\\study\\javascript\\regex\\ F:\\study\\javascript F:\\';
  let arr = [
    'F:\\study\\javascript\\regex\\regular expression.pdf',
    'F:\\study\\javascript\\regex\\',
    'F:\\study\\javascript',
    'F:\\'
  ];
  arr.forEach((item)=>{
    utils.log(regex.test(item),item);
  })
}

{
  //因为 . 是通配符，本身就匹配双引号的，而量词 * 又是贪婪的，当遇到 container 后面双引号时，是不会 停下来，会继续匹配，直到遇到最后一个双引号为止。
  //[ 'id="container" class="main"' ]
  let regex = /id=".*"/g;
  // 改为使用惰性匹配 性能有问题
  regex = /id=".*?"/g;
  //优化版本
  regex = /id="[^"]*"/g;
  let str = '<div id="container" class="main"></div>';
  console.log(str.match(regex));
}