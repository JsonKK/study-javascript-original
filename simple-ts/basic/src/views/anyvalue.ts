import moment from 'moment';
import '../utils/base-value';

{
  //变量使用any类型
  var noSure : any = 10;
  noSure = 'hello';
  noSure = false;
  console.log('noSure',noSure);
}

{
  //使用any 定义变量
  var list : any[] = [0,false,'hello'];
  console.log('list',list); 
}

{
  //定义any 函数
  const tell = function() : any{
    console.log('tell');
  }

  //定义void 函数
  const me = function() : void{
    console.log('void')
  }

  {
    // 定义布尔值
    let isDone : boolean = false;
    //定义数值型
    // 十进制
    let decLiteral : number = 6;
    // 十六进制
    let hexLiteral : number = 0xf00d;
    // 二进制
    let binaryLiteral : number = 0b1010;
    // 八进制
    let octalLiteral : number = 0o7444;
    //定义字符串
    let name : string = 'box';
    name = 'smith';
    let sentence:string = `helle,my name is ${name};my age is ${decLiteral};`
    console.table([isDone,decLiteral,hexLiteral,binaryLiteral,octalLiteral,name,sentence]);
  }

  {
    //定义数组
    let list:number [] = [1,2,3];
    // 需要在尖括号内定义参数类型
    //或是一条竖线  定义类型为number 或者string
    let list2: Array<number|string> = [1,2,'3'];
    //第一个参数可以定义为对象，对象的键名就是表头
    //第二个参数代表需要输出的字段（数组格式），如果不传则全部输出
    console.table([
      {table : list},
      {table : list2}
    ])
  }

  {
    // 定义元组
    //分别定义数组各个值的类型
    let arr : [number,string];
    //不会默认初始值
    arr = [1,'2'];
    //第一个值必须为数值
    arr[0] = 123;
    // 第二个值必须为字符串
    arr[1] = '456';
    //2.6版本之后定义长度的元组长度需要和目标函数一致
    //报错无法赋值
    //2.6版本以前只要设置的值是定义的类型中的一种即可
    //使用了trycatch 编译还是报错
    // arr[2] = 789;
    console.table(arr)
  }

  {
    // 我们不希望类型检查器对这些值进行检查而是直接让它们通过编译阶段的检查。 那么我们可以使用 any类型来标记这些变量
    //定义一个值改变类型不会报错
    let change : any ;
    change = 'string';
    change = 123;
    change = false;
    console.log('改变的change',typeof change);

    let changeObj : any = {money:100};
    let changeNum : any = 100;
    console.table([
      ['定义any对象上的num,使用toFixed方法',changeObj.money.toFixed(2)],
      ['定义any数值上的num,使用toFixed方法',changeNum.toFixed(2)]
    ]);

  }

  {
    //某种程度上来说，void类型像是与any类型相反，它表示没有任何类型。
    //声明一个void变量
    //只能被赋值null 或者 undefined
    let obj : void = null;
    obj = undefined;
  }

  {
    //定义对象类型
    //declare 是声明的意思
    const create  = function(o: object | null):void{};
    create({ prop: 0 }); // OK
    create(null); // OK

    //传入数值报错
    //create(42); // Error
    // 传入字符串报错
    //create("string"); // Error
    // 传入布尔值报错
   // create(false); // Error
    // 传入undefined 报错
    //create(undefined); // Error


  }

  {
    //类型断言
    // 使用断言，简单来说就是先做好一个假设，使得编译通过。
    let someValue : any = 'this maybe string';
    someValue = false;
    //将字符串定义成了布尔值，因为使用了类型断言，所以不会报错
    let strLength : number = (<string>someValue).length;
    console.log('断言输出字符串长度',strLength);

    //断言也可以使用as的写法
    let strLength2 : number = (someValue as string).length;
    console.log('断言输出字符串长度2',strLength2);
  }

}

{
  // 推断类型
  const window:any = this;
  //如果在浏览器环境，并且有onmousedown属性才执行
  if(window && window.hasOwnProperty('onmousedown')){
    window.onmousedown = function(mouseEvent){
      console.log(mouseEvent.button);
    }
  }
}

{
  interface Named { 
    name : string
  }
  let x : Named;
  let y = {name : 'Alice',location:'xian'};
  //赋值成功，因为y里包含了x校验的name属性
  x = y;
}

{
  enum EventType { Mouse, Keyboard }

  interface Event { timestamp: number; }
  interface MouseEvent extends Event { x: number; y: number }
  interface KeyEvent extends Event { keyCode: number }

  const listenEvent = function(eventType: EventType, handler: (n: Event) => void) {
      /* ... */
  }
  listenEvent(EventType.Mouse, (e: MouseEvent) => console.log(e.x + ',' + e.y));
  listenEvent(EventType.Mouse, (e: Event) => console.log((<MouseEvent>e).x + ',' + (<MouseEvent>e).y));
}

{
  enum Status { Ready, Waiting };
  enum Color { Red, Blue, Green };

  let status = Status.Ready;
  //不同的枚举类型是不兼容的
  // status = Color.Green; 
}

{
  //内置了类型校验
  //如果传递字符串会报错，所以把字符强制转为为整数

  console.log(Math.pow(10,parseInt('2')))
}

{
  console.log('personName',personName);
}

{
}