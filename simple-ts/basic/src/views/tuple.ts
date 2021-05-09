// 元组
let tom : [string,number] = ['Tom',25];

//可以定义第n项值
tom[0] = 'lucy';
tom.push(25);
// tom.push(true);

console.log(tom);


//字符串字面量类型
type EventNames = 'click' | 'scroll' | 'mousemove';
function handleEvent(event:EventNames){

}
handleEvent('click');