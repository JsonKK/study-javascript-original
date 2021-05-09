//使用接口来描述数组
interface NumberArray {
  [index : number] : number
}
let fibonacci : NumberArray = [1,1,2,3,5];
//类型“string”的参数不能赋给类型“number”的参数。
// fibonacci.push('2');
//报错，不能将除了object以外的格式赋值给对象数组
// let objArr : object[] = [1,null,undefined]
const objArr : object[] = [{a:1},{b:2}];

//类数组
const sum = function(a : string){
  interface args{
    [index : number] : number,
    length : number,
    calllee? : Function
  }
  //当前参数为类数组，不能使用数组定义
  //需要使用接口定义
  let args : args = arguments
}