// import * as moment from 'moment'
//全局引入moment模块
declare module 'moment';
//约束定义全局变量personName的类型(包括 1.变量类型为var 2.数据类型为字符串)
declare var personName:string;
//约束全局方法
declare function add(a:number,b:number):number;
//全局定义class
declare class animal {
  name : string;
  constructor(name : string);
  sayHi():string;
}
//声明全局枚举
declare enum sexs {
  man = 1,
  women = 2
}
