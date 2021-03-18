/**
* 枚举
*/

{
  //定义 枚举类型
  //枚举不能被定义为函数返回类型
  // function how() : enum{
  //   let a : string = 'red';
  //   let b : string= 'blue';
  //   let c : string = 'orange';
  //   enum Color {a,b,c}
  //   return Color;
  // }
  //枚举功能，可以为一组数值赋值友好的名字
  //定义的时候不需要带等号
  enum Color {Red,Bule,Green};
  //把枚举Color.Green的值，赋值给c
  let c: Color = Color.Green;
  //可以手动改变初始值
  enum Color2 {Red,Bule=3,Green};
  let c1 : Color2 = Color2.Green;
  //可以改变为字符串，但后面的值一定要赋值
  enum Color3 {Red,Bule='Bule',Green='Green'};
  let c3 : Color3 = Color3.Green;
  //通过值获取名称
  let blue : string = Color3['Bule'];
  console.table([
    c,c1,c3,blue
  ])
}

{
  // 枚举扩展
  //定义一个方法，如果传进的是数值就获取性别名称，传进的是字符串返回值
  const getSex = function(sex : string | number):string{
    enum sexObj {men = 1,women = 2};
    //如果找不到会是undefind
    return sexObj[sex];
  }
  console.log('获取性别枚举',getSex('men'));
}

{
  // 函数的参数使用枚举
  enum Response {
    No = 0,
    Yes = 1
  }

  function respond(recipient: string,message : Response):void{}
  //方法接收枚举所指定的值的类型
  //Response[1] 获取到的是字符串，不符合参数类型校验
  // respond('to do something',Response[1])
  //虽然2超过了枚举的限制，但是不会报错
  respond('to do something',2);
  respond('to do something',Response.Yes);
}

{
  //字符串枚举没有自增长的行为，字符串枚举可以很好的序列化
  enum Direction {
    Up = 'UP',
    Down = 'DOWN',
    Left = 'LEFT',
    Right = 'RIGHT',
  }

  enum E {
    Foo,
    Bar
  }

  function f3(x:E){
    //条件始终为ture 报错
    // if (x !== E.Foo || x !== E.Bar) {

    // }
  }
}

{
  let b = 3;
  const enum Enum {
    A = 1,
    //常量表达式不能是外部变量
    B = A * 2
  }

  enum Enum2{
    A = 1,
    //必须要是数值属性
    B = b
  }
}