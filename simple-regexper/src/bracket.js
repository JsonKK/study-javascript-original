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
  let regex = /^I love (JavaScript|Regular Expression)$/;
  //疑问（为什么规则增加g全局参数后，str2就无法校验通过）
  let str1 = 'I love JavaScript';
  let str2 = 'I love Regular Expression';
  let str3 = 'fsdfhiuewr';
  utils.log(regex.test(str1),str1);
  utils.log(regex.test(str2),str2);
}

{
  //利用分组提取(没有修饰符g)
  // match 返回的一个数组，第一个元素是整体匹配结果，然后是各个分组(括号里)匹配的内容，然后是匹配下标，最后是输入的文本。另外，正则表达式是否有修饰符 g，match返回的数组格式是不一样的。
  let regex = /(\d{4})-(\d{2})-(\d{2})/;
  let date = '2017-06-12';
  console.log(date.match(regex));
}

{
  //利用分组提取(有修饰符g)
  let regex = /(\d{4})-(\d{2})-(\d{2})/g;
  let date = '2017-06-12';
  console.log(date.match(regex));
}

{
  let regex = /(\d{4})-(\d{2})-(\d{2})/g;
  let date = '2017-06-12';
  regex.test(date);
  //会自动保存最近使用的正则表达式分组
  console.log(RegExp.$1,RegExp.$2,RegExp.$3);
}

{
  //把日期格式 yyyy-mm-dd 替换成 dd/mm/yyyy
  let regex = /(\d{4})-(\d{2})-(\d{2})/g;
  let date = '2017-06-12';
  console.log(date.replace(regex,'$3/$2/$1'));
}

{
  //使用RegExp对象里的参数
  let regex = /(\d{4})-(\d{2})-(\d{2})/g;
  let date = '2017-06-12';
  console.log(date.replace(regex,()=>{
    return `${RegExp.$3}/${RegExp.$2}/${RegExp.$1}`;
  }))
}

{
  //也可以使用方法参数来返回
  let regex = /(\d{4})-(\d{2})-(\d{2})/g;
  let date = '2017-06-12';
  console.log(date.replace(regex,(match,year,month,day)=>{
    return `${day}/${month}/${year}`;
  }))
}

{
  //匹配中间以(\ - .)等符号分割的时间格式，且第二个不能和第一个一样
  //注意里面的 \1，表示的引用之前的那个分组 (-|\/|\.)。不管它匹配到什么(比如 -)，\1 都匹配那个同 样的具体某个字符。
  let regex = /\d{4}(\/|-|.)\d{2}\1\d{2}/;
  let date = '2017-06-12';
  let date2 = '2017/06/12';
  let date3 = '2017.06.12';
  let date4 = '2017-06.12';
  utils.log(regex.test(date),date);
  utils.log(regex.test(date2),date2);
  utils.log(regex.test(date3),date3);
  //没有通过校验
  utils.log(regex.test(date4),date4);
}

{
  //括号嵌套
  let regex = /^((\d)(\d(\d)))\1\2\3\4$/;
  var string = '1231231233';
  regex.test(string);
  console.log(RegExp.$1,RegExp.$2,RegExp.$3,RegExp.$4);//123,1,23,3
}

{
  //疑问/10是代表第十个分组 还是第一 加零呢
  let regex = /(1)(2)(3)(4)(5)(6)(7)(8)(9)(#)\10+/g;
  let str = '123456789####';
  utils.log(regex.test(str),str);
  let str2 = '123456789#1';
  utils.log(regex.test(str2),str2);
  //从输出结果可以看出，匹配的是第十项
  //如果希望匹配/1 0的话可以改写规则为
  let regex2 = /(1)(2)(3)(4)(5)(6)(7)(8)(9)(#)\1+[0]/g;
  let str3 = str2 + '111110';
  utils.log(regex2.test(str3),str3);
  //或者还可以这么写
  let regex3 = /(1)(2)(3)(4)(5)(6)(7)(8)(9)(#)\1+(?:0)/g;
  utils.log(regex3.test(str3),str3);
  console.log(str3.replace(regex3,'@'));
}

{
  //反向引用分组如果不存在，则匹配\数字本身
  //遗留问题，这种情况在控制台输出的字符串是'\1\2\3'，但是正则不能匹配
  let regex = /\1\2\3/;
  let str = `\\1\\2\\3`;
  let str2 = str.replace(/\\/g,'');
  console.log(str2.replace(regex,'@'));
}

{
  //匹配1~18
  // 目前是失败的，后期维护优化
  // let regex = /([1-9]){1}|([1][0-8]){1}/;
  // for(let i = 1;i<20;i++){
  //   if(!regex.test(i)){
  //     console.log(i+'没有通过校验');
  //     return;
  //   }
  // }
}

{
  // 非捕获分组
  let regex = /(?:ab)+/g;
  let str = 'ababa abbb ababab';
  str.match(regex);
  //=> abab ab ababab
  //因为使用了非捕获，所以虽然str有匹配到东西，但$1的值为空
  console.log(RegExp.$1);
}

{
  //字符串trim方法
  // 方法一 匹配头尾控制符，替换为''
  let regex = /^\s+|\s+$/g;
  let str = '   space  ';
  console.log(str.replace(regex,''));

  //方法二 匹配头尾为空字符，中间分组，渲染中间内容
  let regex1 = /^\s*(.*)\s*$/g;
  console.log(str.replace(regex1,'$1'));
}

{
  //单词首字母大写
  function titleize(str){
    //匹配单词字母，前面是空白符或者开始符号
    return str.toLowerCase().replace(/(?:^|\s)\w/g,(c)=>{
      return c.toUpperCase();
    })
  }
  console.log(titleize('my name is epeli'));
}

{
  //转驼峰
  function camelize(str){
    return str.replace(/[-_\s]+(.)?/g,(match,c)=>{
      return c ? c.toUpperCase() : '';
    })
  }
  console.log( camelize('-moz-transform') );
}

{
  // 中划线方法
  function dasherize(str){
    //匹配大写字母，在大写字母前面加中划线
    //匹配下划线 空格转为中划线
    //字符串转为小写
    return str.replace(/([A-Z])/g,'-$1').replace(/[_\s]+/g,'-').toLowerCase();
  }
  console.log(dasherize('MozTransform haha'));
}

{
  // html转义和反转义
  function escapeHtml(str){
    if(typeof str != 'string'){
      return str;
    }
    // 定义需要转义的字符对象集合
    let escapeChars = {
      '<' : 'lt',
      '>' : 'gt',
      '"' : 'quot',
      '&' : 'amp',
      '\'' : '#39'
    }
    return str.replace(new RegExp(`[${Object.keys(escapeChars).join('')}]`, 'g'),
     (match)=> {
        return '&' + escapeChars[match] + ';';
      }
    );
  }

  console.log(escapeHtml('<div>Blah blah blah</div>'));
}

{
  function unescapeHTML (str) {
    if(typeof str != 'string'){
      return str;
    }
    let htmlEntities = {
      nbsp: ' ',
      lt: '<',
      gt: '>',
      quot: '"',
      amp: '&',
      apos: '\''
    };
    return str.replace(/\&([^;]+);/g,  (match, key)=> {
      if (key in htmlEntities) {
        return htmlEntities[key];
      }
      return match;
    });
  }

  console.log( unescapeHTML('&lt;div&gt;Blah blah blah&lt;/div&gt;') );
}

{
  // 匹配头尾标签一致
  //匹配头标签：前面< 后面> 中间不能是<或者>
  //匹配中间为数字或者非数字任意次，即任意字符任意次
  //匹配尾标签：前面</ 后面> 中间引用组1匹配到的内容
  let regex = /<([^><]+)>[\d\D]*<\/\1>/g;
  let str = '<p>fsdfewr</p>';
  let str2 = '<p>fsdfewr</h3>';
  utils.log(regex.test(str),str);
  utils.log(regex.test(str2),str2);
}