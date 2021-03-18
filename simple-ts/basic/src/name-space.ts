// / <reference path="./name-space/string-validate.ts" />
// / <reference path="./name-space/validate-num.ts" />
// / <reference path="./name-space/validate-letter.ts" />



//reference模式设定的是全局命名，编译后该文件无法引用到
//新建一个文件 改用expore导出命名空间，使用引用的方式拿到命名数据
import {Validation} from './name-space-utils';
// 定义对象并在对象key中，实现类
//定义对象的类型约束为接口
let validators : {[s:string]:Validation.StringValidate} = {};
validators['zip_code'] = new Validation.validateNum();
validators['letter_only'] = new Validation.validateLetter();

let strings = ['Hello', '98052', '101'];

// 遍历字符串数组，使用校验方法
strings.forEach((s:string)=>{
  //遍历对象用in
  for(let name in validators){
    let isPass = validators[name].isAcceptalbel(s);
    console.log(`'${ s }' ${ isPass ? 'matches' : 'does not match' } '${ name }'.`);
  }
});