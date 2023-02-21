//引入通用工具
import utils from '../utils/index.js';

{
  //把匹配到的http开头的  .jpg结尾的字符串
  //匹配http 中间任意字符，加上.jpg结尾的字符
  //$1代表分组1匹配到的内容
  let regex = /http:(\/\/.+\.jpg)/g;
  let str = 'http://图片1.jpg http://图片2.png';
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
  let str = 'a1b2c3d4abce5f6g7abc';
  // 完全匹配abc字符串，替换为x
  console.log(str.replace(/abc/g,'x'));
  //匹配a或者b或者c替换为x
  console.log(str.replace(/[abc]/g,'x'));
  //匹配除了abc以外的内容替换为x
  console.log(str.replace(/[^abc]/g,'x'));
}

{
  //范围类
  //匹配a或者b或者c替换为x
  let str = 'a1b2c3d4abce5f6g7abc';
  console.log(str.replace(/[a-c]/g,'x'));
  //在范围类里还想匹配横线
  let time = '2010-12-10';
  console.log(time.replace(/[0-9]/g),'Q');
}

{
  //输出规则 ab 数字 任意字符
  let regex = /ab\d./;
}

{
  let str = 'This is a boy';
  //替换is 
  console.log(str.replace(/is/g,'0'));
  //使用单词边界，只替换单词is
  console.log(str.replace(/\bis\b/g,'0'));
  //使用单词边界和非单词边界结合，替换this中的is
  console.log(str.replace(/\Bis\b/g,'0'));
}

{
  // ^ 以XXXX开始的使用
  let str = '@abc@def@';
  //@加任意字符一个替换为0
  console.log(str.replace(/@./g,0));
  //开始的@加任意字符替换为0
  console.log(str.replace(/^@./g,0));
  //任意字符加@替换为0
  console.log(str.replace(/.@/g,0));
  //以任意字符加@结尾的字符替换为0
  console.log(str.replace(/.@$/g,0));
}

{
  //对换行符敏感，使用m
  let str = '@123\n\r@456\n\r@789';
  // 输出@加上一个数字替换为X
  //X23  @456  @789
  console.log(str.replace(/^@\d/g,'X'));
  //把换行符当做新的一行
  console.log(str.replace(/^@\d/gm,'X'));

  //反斜杠在控制台输出只是空格不是换行符
  let str2 = 'a\
  b\
  c\
  d'
  console.log(str2)
}

{
  //量词的使用
  //数字出现10次、一个单词、0或者1次数字、单词至少1次、数字任意次、数字3次、单词3-5次、数字至少3次
  let regex = /\d{10}\w\d?\w+\d*\d{3}\w{3,5}\d{3,}/;
}

{
  let str = '12345678';
  //贪婪模式、如果使用了量词，就会尽可能多的去匹配
  let regex = /\d{3,6}/g;
  console.log(str.replace(regex,'X'));
  //不使用贪婪模式，在规则后面加上问号，只要匹配到就行
  let regex2 = /\d{3,6}?/g;
  console.log(str.replace(regex2,'X'));
}

{
  // 分组
  // 匹配一个字符加一个数字替换为X
  let str = 'a1b2c3d4e5';
  let regex = /([a-z]\d){1}/g;
  console.log(str.replace(regex,'X'));
  
}

{
  // 变量捕获和不需要捕获变量
  let str = '12-09-2011';
  //匹配日期，输出年和月
  //分组可以使用$加出现的起始序号
  //?: 可以忽略当前分组捕获、序号瞬移至下一个
  let regex = /(?:\d{2})-(\d{2})-(\d{4})/g;
  console.log(str.replace(regex,'$2-$1'));
}

{
  // 前瞻
  //在规则后面增加需要的规则肯定或者规则否定
  //匹配单词后面是数字的，替换为@
  let str = 'hello123 world007 kitty';
  let regex = /[a-zA-Z]+(?=\d)/g;
  console.log(str.replace(regex,'@'));
  //匹配后面不是字母的单词替换为@
  let regex2 = /([a-zA-Z]+)(?=\d)/g;
  console.log(str.replace(regex2,'#'));
  //匹配单词
  let regex3 = /\b[a-zA-Z]+\b/g;
  console.log(str.replace(regex3,'^'));
}