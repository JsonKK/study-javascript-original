//小写转大写
//方法接收一个字符串参数，返回字符串
function _changeStr(str : string):string{
  return str.trim().toLocaleLowerCase();
}

export default class ZipCodeValidator {
  //匹配5位数字
  static numberRegexp = /^[0-9]{5}$/;
  isAcceptable(s: string) {
    return ZipCodeValidator.numberRegexp.test(s);
  }
}

export {_changeStr as changeStr};