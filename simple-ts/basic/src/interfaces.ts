/**
* 对象类型 接口
* @param name   定义
*/

interface Person {
  name : string,
  age : Number
}

// let Tom : Person = {
//   //少了一些属性不允许，会报错
//   name : 'Tom'
// }

// let Tom : Person = {
//   name : 'Tom',
//   age : 17,
//   //多定义了属性报错
//   sex : 'man'
// }

let Tom : Person = {
  name : 'Tom',
  age : 17
}

//定义有可选属性的对象接口
interface Interest {
  sport : string,
  music ? : string
}

let Lily : Interest = {
  sport : 'swimming'
}

// 定义接口
//接收两个参数为字符串，返回一个布尔值
interface _judgeStr {
  (str : string , sub : string) : Boolean
}

var judgeStr:_judgeStr = function(str,sub){
  let index = str.search(sub);
  if(index > -1){
    return true;
  }
  else{
    return false;
  }

}

console.log(judgeStr('hello world','world'))