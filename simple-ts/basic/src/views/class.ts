/**
* 类
*/

{
  // 定义一个普通的类并且调用
  class Greeter {
    //定义greeting 字段为字符串
    greeting : string

    constructor(msg:string){
      //字段已经被定义为字符串，所以赋值为别的类型会报错
      this.greeting = msg;
    }

    greet(){
      return 'hello, '+this.greeting;
    }
  }

  let greeter = new Greeter('world');
  console.log('class',greeter.greet());
}

{
  // 类的继承
  class Animal {
    //定义方法接收一个参数为数值型 默认值为0
    move(distanceX : number = 0){
      return `distance x is ${distanceX}`;
    }
  }

  class Dog extends Animal {
    backMove(distanceX:number = 0){
      return super.move(distanceX);
    }
  }

  let dog = new Dog();
  let animal = new Animal();
  console.log('从继承类输出内容：',dog.backMove(999));
  console.log('从原始类中输出内容：',animal.move(888));
}

{
  //get set使用
  class Animal{
    private nickname : string = '';
    constructor(name:string){
      this.name = name;
    }

    getName(){
      return this.nickname;
    }
    //对setname做拦截
    set name(value){
      if(value.length > 6){
        this.nickname = '默认昵称'
      }
      else{
        this.nickname = value;
      }
    }
  }

  const animal = new Animal('snobi');
  animal.name = 'fsdlkjklejr';
  console.log('昵称',animal.getName());
}

{
  //私有属性
  class Animal {
    private name :string;
    constructor(theName : string){
      this.name = theName;
    }
  }
  //会提示name为私有属性，只能在类的内部使用
  // new Animal('cat').name;
}

{
  // 具有私有属性的时候，类赋值给另一个类会报错
  class Animal {
    private name : string;
    constructor(theName : string){
      this.name = theName
    }
  }

  class Other {
    private oldName : string;
    private name : string;
    constructor(theName : string){
      this.oldName = theName;
      this.name = 'xixihaha'
    }
  }
  //必须传递参数，否则报错
  let animal = new Animal('Animal');
  let other = new Other('other');
  //报错，具有私有属性需要单独声明
  // animal = other;
}

{
  // protected 代表私有属性，但是与private有所区别，可以在继承类中访问，但不能在类方法外部访问
  class Person {
    protected name: string;
    constructor(name: string) { this.name = name; }
  }

  class Employee extends Person {
    private department: string;

    constructor(name: string, department: string) {
      //把名称传给父类
      super(name)
      this.department = department;
    }

    public getElevatorPitch() {
      // 继承类的方法有name属性
      return `Hello, my name is ${this.name} and I work in ${this.department}.`;
    }
  }

  let howard = new Employee("Howard", "Sales");
  console.log('class中的protected取到的值',howard.getElevatorPitch());
}

{
  // 定义只读属性
  class Octopus{
    readonly name : string;
    oldname : string = '';
    constructor(theName : string){
      this.name = theName;
    }
  }
  let octopus = new Octopus('readonly name');
  //新增类的属性
  octopus.oldname = 'add name';
  //只读属性无法重新赋值
  // octopus.name = 'new name';
  // console.log('在外部为class新增值',octopus.oldname);
}

{
  //类的存取器
  //定义一个类方法，如果密码通过校验，则同意修改账户
  class JudgeAccount {
    private isPass : boolean = false;
    //如果没有设置默认值，就被外部获取会返回undefined
    private _fullName : string = '暂时还没有名字';
    // 获取值时返回
    get fullName():string{
      return this._fullName;
    }
    // 设置名称
    set fullName(newName:string){
      let isPass = this.isPass = Boolean(Math.round(Math.random()));
      if(isPass){
        this._fullName = newName;
      }
      else{
        console.info('校验不通过，赋值失败');
      }
    }
  }

  let addName = new JudgeAccount();
  let name = addName.fullName;
  addName.fullName = '霉霉';
  console.table([
    ['before name',name],
    ['after name',addName.fullName]
  ])
}

{
  class Grid {
    static origin = {x: 0, y: 0};
    calculateDistanceFromOrigin(point: {x: number; y: number;}) {
        let xDist = (point.x - Grid.origin.x);
        let yDist = (point.y - Grid.origin.y);
        return Math.sqrt(xDist * xDist + yDist * yDist) / this.scale;
    }
    //在scale 前定义了pulic后，传进来的第一个符合的参数，就会被赋值给this.scale
    constructor (public scale: number) { }
  }

  let grid1 = new Grid(1.0);  // 1x scale
  let grid2 = new Grid(5.0);  // 5x scale

  console.log(grid1.calculateDistanceFromOrigin({x: 10, y: 10}));
  console.log(grid2.calculateDistanceFromOrigin({x: 10, y: 10}));
  //静态属性不能通过实例化来获取
  // console.log('静态属性',grid1.origin);
  //“使用 static 修饰符修饰的方法称为静态方法，它们不需要实例化，而是直接通过类来调用
  console.log('静态属性',Grid.origin);
}

{
  //抽象类
  abstract class Department {

      constructor(public name: string) {
      }

      printName(): void {
          console.log('抽象类printName方法返回信息','Department name: ' + this.name);
      }
      // 抽象类的方法必须在继承类中实现
      abstract printMeeting(): void;
  }

  class AccountingDepartment extends Department {
      name : string;
      constructor() {
        // 在派生类的构造函数中必须调用 super()
        super('Accounting and Auditing'); 
        this.name = 'come in';
      }

      printMeeting(): void {
        console.log('The Accounting Department meets each Monday at 10am.');
        //实例类中的方法可以被实例方法调用，但不能被外部调用
        // this.generateReports();
      }

      generateReports():void {
          console.log('Generating accounting reports...');
      }


  }
  // 允许创建一个对抽象类型的引用
  //  定义变量为抽象类的时候，就会决定了对象实例化后不能调用抽象类以外的方法
  let department: Department; 
  // 错误: 不能创建一个抽象类的实例
  // department = new Department(); 
  department = new AccountingDepartment(); // 允许对一个抽象子类进行实例化和赋值
  department.printName();
  department.printMeeting();
  // 错误: 方法在声明的抽象类中不存在
  // 虽然在实例类中定义了方法，因为在抽象类中没有该方法，所以不能使用
  // department.generateReports(); 
  //定义的属性是可以被执行的
  console.log(department.name);
}

{
  //类型和迭代器结合使用
  class Point {
    x: number = 0;
    y: number = 0;
  }

  interface Point3d extends Point {
      z: number;
  }
  // 获取到一个新对象
  let point3d: Point3d = {x: 1, y: 2, z: 3};
}

{
  interface Person{
    money:number
  }
  //implements是对某个接口的实现，必须满足接口的类型规范
  //对接口的实现，如果没有接口的money字段，类的实现会报错
  class Father implements Person {
    public money: number = 1000
  }
  //extends是对某个类的继承，可获取父类的所有的静态属性
  class Son extends Father {
    constructor() {
      super();
    }
    getMoney(): void {
      console.log(this.money,333);
    }
  }
  const son=new Son()
  son.getMoney()
  
}