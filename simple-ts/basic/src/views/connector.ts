{
  //定义传进来的参数，子集类型限制
  const printLabel = function(labelledObj : {label:string}){
    console.log(labelledObj);
  }
  let myObj = {size:10,label:'size 10 Object'};
  printLabel(myObj);
}

{
  interface LabelledValue {
    label : string
  }

  const printLabel2 = function (labelledObj:LabelledValue){
    console.log(labelledObj.label)
  }

  let myObj = {size : 10,label : 'size 10 Object'};
  printLabel2(myObj);
}