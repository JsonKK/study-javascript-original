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
  function tell() : any{
    console.log('tell');
  }

  //定义void 函数
  function me() : void{
    console.log('void')
  }

  //定义 枚举类型
  //枚举不能被定义为函数返回类型
  // function how() : enum{
  //   let a : string = 'red';
  //   let b : string= 'blue';
  //   let c : string = 'orange';
  //   enum Color {a,b,c}
  //   return Color;
  // }
}