// 断言

//案例1
//定义接口1
interface Cat {
  name : string,
  run() : void
}
//定义接口2
interface Fish {
  name : string,
  swim() :void
}

//获取都有的属性
const getName = function(animal : Cat | Fish){
  return animal.name;
}

//获取只有一个接口才有的属性(因为cat没有swim属性，所以会报错)
const isFish = function(animal : Cat | Fish){
  //报错
  // if(typeof animal.swim === 'function'){
  //使用断言，让此时的animal为接口fish类型
  if(typeof (animal as Fish).swim === 'function'){
    return true;
  }
  else{
    return false
  }
}

//“需要注意的是，类型断言只能够「欺骗」TypeScript 编译器，无法避免运行时的错误，反而滥用类型断言可能会导致运行时错误”
// 定义一个报错例子执行
const run = function(animal : Cat | Fish){
  try{
    (animal as Cat).run();
  }
  catch(err){
    // 运行报错
    //TypeError: animal.run is not a function
    console.log('cat run',err);
  }
}

const duoduo: Fish = {
  name : 'duoduo',
  swim(){
    console.log(`${this.name} swim quick`);
  }
}

run(duoduo);

/**
* 将父类断言为更为具体的子类
*/
// 定义两个类继承error
class ApiError extends Error{
  code : number = 0;
}
class HttpError extends Error{
  statusCode : number = 0;
}

// 例子收获
//1.“确实使用 instanceof 更加合适，因为 ApiError 是一个 JavaScript 的类，能够通过 instanceof 来判断 error 是否是它的实例。”
//2.“但是有的情况下 ApiError 和 HttpError 不是一个真正的类，而只是一个 TypeScript 的接口（interface），接口是一个类型，不是一个真正的值，它在编译结果中会被删除，当然就无法使用 instanceof 来做运行时判断了”

function isApiError(error : Error){
  //使用断言子类判断是否为ApiError
  if(typeof (error as ApiError).code === 'number'){
    return true;
  }
  //使用Instanceof来判断是否为apiError
  else if(error instanceof ApiError){
    return true;
  }
  else{
    return false;
  }
}

//为全局对象增加属性报错
//globalThis['self'] = 'myself';
// 使用any断言globalThis,就可以愉快的输出了
(globalThis as any).cache = function(name:string){
  return name;
};
console.log('self',typeof globalThis.cache);


// 历史遗留的改造
function getCacheData(key:string):any{
  return (globalThis as any).cache(key);
}

interface Cat {
  name : string;
  run() : void;
}
//报错走不通
// const tom = getCacheData('Tom') as Cat;
// tom.run();

// 断言的总结
// 联合类型可以被断言为其中一个类型
// 父类可以被断言为子类
// 任何类型都可以被断言为 any
// any 可以被断言为任何类型”

//相互断言
interface Animal {
  name: string;
}
interface Cat {
  name: string;
  run(): void;
}

function testAnimal(animal: Animal) {
  return (animal as Cat);
}
function testCat(cat: Cat) {
  return (cat as Animal);
}

//类型断言不是类型转换
function toBoolean(someting:number):boolean{
  //使用双重断言，来避免ts校验报错
  //输出后发现值为1，对类型并不会有改变
  return someting as any as boolean;
}

console.log('测试导出断言布尔值',toBoolean(1));