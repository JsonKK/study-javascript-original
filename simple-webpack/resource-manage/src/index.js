import _ from 'lodash';

//引入样式
import '../assets/css/main.css';

//引入图片
import pineapple from '../assets/img/pineapple.jpg';

function component() {
  var element = document.createElement('div');
  var img = document.createElement('img');

  // Lodash（目前通过一个 script 脚本引入）对于执行这一行是必需的
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  element.classList += 'hello';

  img.src = pineapple;

  element.append(img);
  return element;
}

document.body.appendChild(component());
