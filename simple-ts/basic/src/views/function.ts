{
  //括号内的number是定义参数入参的类型为number
  //括号外的number定义函数返回值为number类型
  function sum(x:number,y:number) :number{
    return x + y;
  }
  //参数多余，不被允许
  // sum(1,2,3);

  //参数缺失不被允许
  // sum(1);

  //执行函数
  sum(1,2)
}

//可选参数
//需要注意的是，可选参数必须接在必需参数后面。换句话说，可选参数后面不允许再出现必需参数了
{
  function buildName(firstName: string, lastName?: string) {
    if (lastName) {
        return firstName + ' ' + lastName;
    } else {
        return firstName;
    }
  }
  let tomcat = buildName('Tom', 'Cat');
  let tom = buildName('Tom');
}

//默认参数
{
  function buildName2(firstName: string, lastName: string = 'Cat') {
    return firstName + ' ' + lastName;
  }
  let tomcat = buildName2('Tom', 'Cat');
  let tom = buildName2('Tom');
}

{
  function buildName3(firstName: string = 'Tom', lastName: string) {
    return firstName + ' ' + lastName;
  }
  let tomcat = buildName3('Tom', 'Cat');
  let cat = buildName3(undefined, 'Cat');

}

{
  function push(array: any[], ...items: any[]) {
    items.forEach(function(item) {
        array.push(item);
    });
  }
  //定义a为变量数组，作为第一个参数传递给push函数；
  //push函数使得变量a值被改变了
  let a:any[] = [];
  push(a, 1, 2, 3);
  
  console.log('方法执行后变量由空数组变为了',a);
}

{
  //输入为数字的时候，输出也应该为数字
  // function reverse(x: number): number;
  //输入为字符串的时候，输出也应该为字符串。
  // function reverse(x: string): string;
  //定义函数输入值为数值或者字符串，返回值为数值或者字符串
  function reverse(x: number | string): number | string {
    if (typeof x === 'number') {
      return Number(x.toString().split('').reverse().join(''));
    } else if (typeof x === 'string') {
      return x.split('').reverse().join('');
    }
  }
  console.log(reverse(123.456));
  console.log(reverse('hello world'))
}

{
  //不明白函数为什么写成这样的格式
  //定义myAdd的类型是一个函数，接收2个参数，返回一个number类型的值。
  //等号后面是函数的实现
  let myAdd: (baseValue: number, increment: number) => number =
    function(x: number, y: number): number { return x + y; };
  
  // 把上面的简写方式，使用迭代器的方式展开书写得到
  interface identity {
    (baseValue: number, increment: number) : number
  }

  let myAdd_two : identity = function(x:number,y:number){
    return x+y
  }
}

{
  // 定义可选参数
  let buildName = function(firstName : string, lastName = 'xixihaha'){
    return firstName + ' ' + lastName;
  }
  //只传一个参数不会报错
  buildName('simth');
  //第二个参数虽然没有显示指定类型，但是默认值类型就是指定的参数类型
  //所以第二个参数传递数值型，就是报错
  // buildName('simth',123);
}

{
  let deck = {
    suits: ["hearts", "spades", "clubs", "diamonds"],
    cards: Array(52),
    createCardPicker: function() {
      //使用箭头函数改变作用域
      return ()=> {
        let pickedCard = Math.floor(Math.random() * 52);
        let pickedSuit = Math.floor(pickedCard / 13);

        return {suit: this.suits[pickedSuit], card: pickedCard % 13};
      }
    }
  }

  let cardPicker = deck.createCardPicker();
  let pickedCard = cardPicker();

  console.log("card: " + pickedCard.card + " of " + pickedCard.suit);
}

{
  // 定义接口Card
  interface Card {
    suit : string,
    card : number
  }

  // 定义接口Deck
  interface Deck {
    //数据的类型为该接口的时候，数据键名需要一致
    //定义为字符串数组
    suits : string [],
    //定义为数值数组
    cards : number [],
    //定义为方法 ，返回值的类型为card
    //返回值为函数，函数里面的返回值类型为Card
    createCardPicker(this: Deck) : () => Card
  }

  // 定义数据
  let deck : Deck = {
    suits: ["hearts", "spades", "clubs", "diamonds"],
    cards: Array(52),
    //如果你给编译器设置了--noImplicitThis标记。 它会指出 this.suits[pickedSuit]里的this的类型为any。
    //所以定义函数的时候 指定this : Deck
    createCardPicker(this: Deck){
      return ()=>{
        let pickedCard = Math.floor(Math.random() * 52);
        let pickedSuit = Math.floor(pickedCard / 13);

        return {suit: this.suits[pickedSuit], card: pickedCard % 13};
      }
    }
  }
}

