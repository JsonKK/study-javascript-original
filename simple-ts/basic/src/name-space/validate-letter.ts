//引用命名空间
/// <reference path="./string-validate.ts" />

namespace Validation {
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
