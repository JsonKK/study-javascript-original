
//校验是否纯字母
let isString = /^[A-Za-z]+$/;

export namespace Validation {
  export interface StringValidate {
    isAcceptalbel(str: string): boolean;
  }
  //是否数值的正则
  let isNum = /^[0-9]{5}$/;
  //定义校验数值类
  export class validateNum implements StringValidate{
    isAcceptalbel(str:string){
      return isNum.test(str);
    }
  }

  //校验是否纯字母
  let isString = /^[A-Za-z]+$/;
  //定义字符串校验实现的类
  //接收字符串，返回是否字符串
  export class validateLetter implements StringValidate{
    isAcceptalbel(str:string){
      return isString.test(str);
    }
  }
}