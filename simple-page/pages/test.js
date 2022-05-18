const getValue = (obj,rest)=>{
  const keyArr = rest.split('.');
  let selfObj;
  for(let i =0;i<keyArr.length;i++){
    const key = keyArr[i]
    if(i == 0){
      selfObj = obj[key];
    }
    else{
      selfObj = selfObj[key]
    }
  }
  return selfObj
}

const obj = {
  a : {
    b :{
      c : {
        d: {
          e : 'success'
        }
      }
    }
  }
}

//自定义错误类型
const CustomError = function(message){
  this.name = 'CustomError';
  this.message = message;
}
CustomError.prototype = new Error();
throw new CustomError('自定义错误类型')