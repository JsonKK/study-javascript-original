//括号内的number是定义参数入参的类型为number
//括号外的number定义函数返回值为number类型
function sum(x:number,y:number) :number{
  return x + y;
}
//参数多余，不被允许
// sum(1,2,3);

//参数缺失不被允许
// sum(1);

console.log(sum(1,2))

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
  
  let a = [];
  push(a, 1, 2, 3);
  
  console.log(a);
}

//输入为数字的时候，输出也应该为数字，输入为字符串的时候，输出也应该为字符串。
function reverse(x: number): number;
function reverse(x: string): string;
function reverse(x: number | string): number | string {
    if (typeof x === 'number') {
        return Number(x.toString().split('').reverse().join(''));
    } else if (typeof x === 'string') {
        return x.split('').reverse().join('');
    }
}
