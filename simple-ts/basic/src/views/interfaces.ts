/**
* 对象类型 接口
* @param name   定义
*/

{
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
  
}

{
  // 接口定义可选属性
  interface SquareConfig {
    color : string,
    width ? : number,
    //增加索引签名，key是string ,值是any类型
    //有效避免了多传参数报错
    [propName : string] : any
  }

  //定义接收参数为接口
  //返回一个对象
  //定义返回的字段,所定义的字段必须要返回，可以新增其他字段
  function createSquare(config:SquareConfig):{color:string,area:number}{
    let newSquare = {color : 'white',area : 100,con:'456'};
    if(config.color){
      newSquare.color = config.color;
    }
    if(config.width){
      newSquare.area = config.width * config.width;
    }
    //测试能否新增字段
    newSquare.con = '123';
    return newSquare;
  }

  let myS = createSquare({color:'black'});
  //多传参数会失败,编译报错
  // let mySe = createSquare({colour:'red',color:'white'});
  //使用类型断言回避
  //使用断言后，必填参数依然是必填的
  createSquare({colour:'red',color:'white'} as SquareConfig);
  //利用索引签名解决多传参数报错
  createSquare({colour:123,color:'white'});
}

{
  //只读属性接口
  interface isPoint {
    readonly x : number,
    readonly y : number
  }

  let p1 : isPoint = {x : 10,y :10};
  //报错，因为x的值是不能修改的，是只读的。
  // p1.x = 5;
}

{
  //只读数组
  let arr : Array<number> = [1,2,3];
  let co : ReadonlyArray<number> = arr;
  //不能赋值
  // co[1] = 2;
  // co.push(1);
  //不能修改长度
  // co.length =10;
  //可以被赋值给新的变量
  let ar = co;
}

{
  //定义函数接口
  //接收两个参数，返回布尔值
  interface SearchFn {
    (source : string,substring : string) : boolean
  }

  //定义的变量名不需要与迭代器里的一致
  let mySearch : SearchFn = function(str:string,sub:string){
    let result = str.search(sub);
    return result > -1;
  }
}

//类类型
{
  interface ClockConstructor {
    new (hour: number, minute: number): ClockInterface;
  }
  //不知道这个配置有什么用
  interface ClockInterface {
    tick();
  }

  function createClock(ctor: ClockConstructor, hour: number, minute: number): ClockInterface {
    return new ctor(hour, minute);
  }

  class DigitalClock implements ClockInterface {
    constructor(h: number, m: number) { }
    tick() {
        console.log("beep beep");
    }
  }
  class AnalogClock implements ClockInterface {
    constructor(h: number, m: number) { }
    tick() {
        console.log("tick tock");
    }
  }

  let digital = createClock(DigitalClock, 12, 17);
  let analog = createClock(AnalogClock, 7, 32);
  console.log('digital',digital.tick())
}

{
  //接口继承
  interface Shape {
    color : string
  }

  interface PenStroke {
    penWidth : number
  }

  //Square继承了Shape 新增内容
  //继承多个接口
  interface Square extends Shape,PenStroke{
    sideLength : number
  }

  // 定义对象
  let square = <Square>{};
  square.color = 'blue';
  //继承多个接口，所以不报错
  square.penWidth = 10.54;
  // 接口中没有该字段，所以不能增加
  // square.name = 'sb';
  square.sideLength = 2;
}

{
  // 混合接口
  // 不太懂如何使用
  interface Counter {
    (start : number) : string,
    interval : number,
    reset() : void
  }

  function getCounter(): Counter {
    let counter = <Counter>function (start: number) { };
    counter.interval = 123;
    counter.reset = function () { };
    return counter;
  }

  let c = getCounter();
  c(10);
  c.reset();
  c.interval = 5.0;
}