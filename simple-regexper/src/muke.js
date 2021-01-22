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