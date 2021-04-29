var personName = 'test string';

globalThis['personName'] = personName;

//全局定义add方法
globalThis['add'] = (a,b)=>{
  return a + b;
}

class myAnimal implements animal{
  name : string;
  sex : number = 0;
  constructor(name,sex?:number){
    this.name = name;
    if(typeof sex == 'number'){
      this.sex = sex;
    }
    
  }
  sayHi(){
    let sexStr = '';
    switch(this.sex){
      case 1:
        sexStr = 'man';
        break;
      case 2:
        sexStr = 'women';
        break;
    }
    return `my name is ${this.name}. my sex is ${sexStr}`;
  }
}

const minAni = new myAnimal('河马',2);
console.log('animal.sayHi()',minAni.sayHi());
//无法获取到
console.log('获取不到d.ts中定义的枚举',typeof sexs);