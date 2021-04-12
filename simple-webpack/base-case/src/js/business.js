//构建图片
import img1 from '../images/pineapple.jpg';
import img2 from '../images/279_circle_red.png';
import '../css/main.css';

(function(win,doc){

  const loacalMethod = {
    creatImg(imgSrc,wrap){
      const that = this;
      if(typeof imgSrc !== 'string' || !loacalMethod.isDOMElement(wrap)){
        return;
      }
      const imgDom = doc.createElement('img');
      imgDom.src = imgSrc;
      imgDom.onload = function(){
        wrap.appendChild(imgDom);
      }
    },
    isDOMElement(obj) {
      return !!(obj && typeof window !== 'undefined' && (obj === window || obj.nodeType));
    }
  }

  win.onload = function(){
    const app = document.getElementById('app');
    const titleH2 = doc.createElement('h2');
    titleH2.innerText = '好口碑信息采集';
    app.appendChild(titleH2);

    
    loacalMethod.creatImg(img1,app);
    loacalMethod.creatImg(img2,app);
  }
})(window,document)