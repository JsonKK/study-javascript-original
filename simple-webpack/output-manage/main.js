import _ from 'lodash';
import printMe from './src/js/print.js';

function component(){
  let element = document.createElement('div');
  let btn = document.createElement('button');
  
  element.innerHTML = _.join(['hello','webpack'],' ');
  
  btn.innerHTML = 'Click me and check the console!';
  btn.type = 'button';
  btn.onclick = printMe;

  element.appendChild(btn);

  return element;
}

document.body.appendChild(component());
