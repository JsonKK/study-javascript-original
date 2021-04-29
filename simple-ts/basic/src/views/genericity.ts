/**
* 泛型
*/

{
  // 定义泛型函数
  //T表示类型变量 
  //传进来arg是什么类型的参数，函数就返回什么类型的参数
  function identity<T>(arg : T) : T{
    return arg;
  }
  //类型会自动推断
  let output = identity(123);
  //显式定义类型
  let output2 = identity<number>(123);

  // 完整的定义函数为泛型
  //myIdentity 类型是一一个接收泛型参数，返回泛型参数的函数
  let myIdentity : <t>(args : t) => t = identity;
}

{
  // 把泛型定义到接口里
  interface GenericityIdentityFn {
    <t>(args : t) : t;
  }

  function identity_two<t>(args:t):t {
    return args;
  }

  let myIdentity : GenericityIdentityFn = identity_two;
}

{
  // 接口接收泛型参数
  interface GenericityIdentityFn<t>{
    (args : t) : t
  }
  //接口定义了参数，所以必须要传参数类型
  // let myIdentity : GenericityIdentityFn<number> = identity;
}

{
  //泛类型
  // class Genrinum<t>{
  //   zeroValue : t;
  //   add : (x:t,y:t) => t
  // }

  // let myGenrinum = new Genrinum<number>();
  // myGenrinum.zeroValue = 0;
  // myGenrinum.add = (x,y) => x+y;

}

{
  // 定义泛型的约束
  interface limit {
    length : number
  }
  // 泛型增加扩展接口，限制传入的参数必须要有length属性
  function loggingIdentity<t extends limit>(args:t):t{
    return args;
  }

  //不能执行，因为3没有length属性
  // loggingIdentity(3);
  //定义对象必须要有length属性
  loggingIdentity({length:1,value:2})
  loggingIdentity('3443');
}
