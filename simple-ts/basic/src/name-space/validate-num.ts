//引用命名空间
/// <reference path="./string-validate.ts" />


namespace Validation {
  //是否数值的正则
  let isNum = /^[0-9]{5}$/;
  //定义校验数值类
  export class validateNum implements StringValidate{
    isAcceptalbel(str:string){
      return isNum.test(str);
    }
  }
}
