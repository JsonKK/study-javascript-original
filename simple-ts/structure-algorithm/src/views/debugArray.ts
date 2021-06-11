{
  // 费波那契数列前20项
  const arr: number[] = [];
  arr[0] = 1;
  arr[1] = 2;
  for (let i = 2; i < 20; i++) {
    arr[i] = arr[i - 1] + arr[i - 2];
  }
  console.log('费波那契数列前20项', JSON.stringify(arr));
}

{
  // 定义一个从0到9的数组
  const arr: (number|string)[] = [0,1,2,3,4,5,6,7,8,9];
  //删除第一项
  arr.pop();
  //删除最后一项
  arr.shift();
  // 从第二项开始删除三项，增加b\c\d三项
  arr.splice(1,3,...['b','c','d'])
  console.log('数组增删改',JSON.stringify(arr));
}

{
  //创建一个两行五列的二维数组，数值为0~100的随机数
  const rowNum = 2;
  const columnNum = 5;
  const arr:(number[])[] = [];
  for(let i =0;i<rowNum;i++){
    const cacheArr = arr[i] = new Array(columnNum);
    for(let j=0;j<columnNum;j++){
      cacheArr[j] = Math.floor(Math.random() * 100);
    }
  }
  console.log('两行五列数组',JSON.stringify(arr));
  console.table(arr);
}

