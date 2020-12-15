let isDone : boolean = false;
//事实上 new Boolean() 返回的是一个 Boolean 对象：
let createdByNewBoolean: Boolean = new Boolean(1);
//直接调用 Boolean 也可以返回一个 boolean 类型：
let createdByBoolean: boolean = Boolean(1);


/**
* 空值
* 在 TypeScript 中，可以用 void 表示没有任何返回值的函数
*/

function printName(): void{
  let str:string = 'My name is Tom';
  console.log(str);
  //在void函数内定义了返回值，所以编译时候会异常提醒
  // return str;
}

/**
* null和undefined
* @param name   定义
*/

let u: undefined = undefined;
let n: null = null;
//与void区别，undefined和null是所有类型的子类型。也就是说undefined类型的变量，可以赋值给Number类型变量
let num: number = u;