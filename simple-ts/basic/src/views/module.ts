//引用 utils里 export模块
import {changeStr} from './utils';
//引用 utils 里 default 导出的模块
import validator from './utils';

{
  let str = changeStr('Hello World');
  console.log('使用转换大小写输出',str);
}

{
  let zip = new validator();
  console.log('校验是否是五位整数',zip.isAcceptable('2245'));
}