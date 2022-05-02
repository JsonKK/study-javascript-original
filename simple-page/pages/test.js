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

const diposeObj = getValue(obj,'a.b.c.d.e');
console.log(diposeObj);