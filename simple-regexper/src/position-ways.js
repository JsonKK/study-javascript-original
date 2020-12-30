
//引入通用工具
import utils from '../utils/index.js';

{
  //在字符串的开头的
  let str = 'hello';
  let regex = /(^|$)/g;
  console.log(str.replace(regex,'#'));
}

{
  //加入m匹配，区分行，不然会把字符串当做一个整体没有行的概念
  var result = "I\nlove\njavascript".replace(/^|$/gm, '#');
  console.log(result);
}

{
  //在单词边界加上#
  //\b 是单词边界，具体就是 \w 与 \W 之间的位置，也包括 \w 与 ^ 之间的位置，和 \w 与 $ 之间的位置。
  let res = '[JS] Lesson_01.mp4'.replace(/\b/g,'#');
  console.log(res);
}

{
  //非单词边界
  //\B 就是 \b 的反面的意思，非单词边界。例如在字符串中所有位置中，扣掉 \b，剩下的都是 \B 的。
  let res = '[JS] Lesson_01.mp4'.replace(/\B/g,'#');
  console.log(res);
}

{
  //positive lookahead
  //正向先行断言
  //(?=p)匹配某个字符的前面
  //匹配l或者o前面增加'#'
  // let res = 'hello'.replace(/(?=l)|(?=o)/g,'#');
  let res = 'hello'.replace(/(?=l|o)/g,'#');
  console.log(res);
}

{
  //negative lookashead
  //负向先行断言
  //除了匹配到的位置的前面加上字符(包含^ 和 $)
  let res = 'hello'.replace(/(?!l)/g,'#');
  console.log(res);
}

{
  // 在匹配到的字符后面加上特殊字符
  let res = 'hello'.replace(/(?<=l)/g,'#');
  console.log(res);
}

{
  // 在没有匹配到的字符的后面加上特殊字符
  let res = 'hello'.replace(/(?<!l)/g,'#');
  console.log(res);
}

{
  // 测试单词边界
  //匹配he开头、中间单词、llo结尾
  var result = /(?=he)^^he(?=\w)llo$\b\b$/.test("hello");
  console.log(result);
}

{
  //.的使用
  //匹配到的第一个字符
  let res = 'hello'.replace(/./,'#');
  console.log(res);
}

{
  //数字千分位间隔
  //匹配一次3位数结尾的前面加上特殊符号
  let res = '1230456789'.replace(/(?=\d{3}$)/g,',');
  console.log(res);
}

{
  // 匹配n次3位数字前面加上特殊字符
  //会发现, 在第一个字符中出现
  let res = '123456789'.replace(/(?=(\d{3})+$)/g,',');
  console.log(res);
}

{
  //去除匹配第一个字符
  //禁用匹配第一个字符
  let rex = /(?!^)(?=(\d{3})+$)/g;
  let res = '123456789'.replace(rex,',');
  console.log(res);
  //会发现遇到空格就不继续执行
  let res2 = '12345678 123456789'.replace(rex,',');
  console.log(res2);

}

{
  //使空格规则可以匹配空格
  //要求当前是一个位置，但不是 \b 前面的位置，其实 (?!\b) 说的就是 \B。
  let res = '12345678 123456789'.replace(/(?!\b)(?=(\d{3})+\b)/g,',');
  console.log(res);
}

{
  //改写上面的例子
  let res = '12345678 123456789'.replace(/\B(?=(\d{3})+\b)/g,',');
  console.log(res);
}

{
  //5位数以上转万
  let res = '1230456789'.replace(/(?=\d{4}$)/,'.').replace(/(?=\d{2}$)/,'w');
  console.log(res);
}

{
  //格式化价格
  function format(num){
    return num.toFixed(2).replace(/\B(?=(\d{3})+\b)/g,',').replace(/^/,'$ ');
  }
  let num = format(129999);
  console.log(num);
}

{
  //所有字符间隔3位加_，第一个位置不匹配
  let str = 'fsadrfawrwe434324fsdfrewr fdsfsdf'.replace(/(?!^)(?=(.{3})+$)/g,'_');
  console.log(str);
}

{
  //验证码匹配4位整数
  let str = '123';
  let isPass = /\d{4}/g.test(str);
  utils.log(isPass,str);
}

{
  // 百位以内正整数，包括0
  let str = '0';
  let isPass = /^([^0]\d{1,2})|(\d{1})$/.test(str);
  utils.log(isPass,str);
}

{
  //校验手机号是否符合规范
  
}

