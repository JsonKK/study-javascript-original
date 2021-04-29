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

printName();

/**
* null和undefined
* @param name   定义
*/

let u: undefined = undefined;
let n: null = null;
let any: any = undefined;
//与void区别，undefined和null是所有类型的子类型。也就是说undefined类型的变量，可以赋值给Number类型变量
//严格模式下，undefined和null不能赋值给number;只有any能赋值给num
let num: number = any;

/**
* 定义数组类型
*/
{
  let list: number[] = [1,2,3];
  let list2: Array<number> = [1,2,3];
  console.log(JSON.stringify(list) === JSON.stringify(list2));

  //元组数组
  let x: [string,number];
  //第一个元素必须是字符串，第二个是数值
  x = ['1',2];
  // x[3] = '2'; 
  console.log(x);
}

/**
* 枚举类型
* @param name   定义
*/
{
  //默认第一项是0，如果修改第一项为1则从1开始
  enum Color {Red = 1,Green,Blue};
  let c: Color = Color.Green;
  //获取green所在的索引
  console.log(c);

  let colorName : string = Color[2];
  //获取索引为第二项的枚举名称
  console.log(colorName);


  // 定义性别的枚举
  enum Sex {men = 1,women};
  //返回undefind
  let m : string = Sex[3];
  //返回women
  m = Sex[2];
  console.log('越界的sex',m);
}

/**
* 任意类型
*/
{
  let noSure : any = 4;
  noSure = 'maybe a string';
  noSure = false;
  console.log(noSure);
}

/**
* 赋予没有返回值的函数
*/
{
  function warnUser():void{
    console.log('this is no return fn');
  }

  warnUser();
}

/**
* 断言使用
*/
{
  //两种形式的断言没有区别
  let someValue : any = 'this is string';
  let stringLength : number = (<string>someValue).length;
  let stringLength2 : number = (someValue as string).length;
  console.log(stringLength,stringLength2);
}

/**
* 解构调换数据的值
* @param name   定义
*/
{
  let a = 1,b = 2;
  [a,b] = [b,a];
  console.log(`a:${a};b:${b}`);

  let defaults = { food: "spicy", price: "$$", ambiance: "noisy" ,f(){return 'function'}};
  let search = Object.assign({ food: "rich" },{ ...defaults});
  //在对象结构中，food被覆盖
  console.log(search);
  console.log(defaults.f());
}

/**
* 解构用于函数声明
* 类型推断的例子
* @param name   定义
*/
{
  type C = { a: string, b? : number};
  function f({a,b}:C):void{

  }
}

{
  let defaults = { food: "spicy", price: "$$", ambiance: "noisy" };
  let search = Object.assign({ food: "rich" },{ ...defaults});
  //合并后defaults数据被改变了
  console.log(defaults,search);
}


