import './underscore.js';

const utils = {
  /**
  * 方法检测
  * @param name   定义
  */
  isHostMethod(object,property){
    const t = typeof object[property];
    return t == 'function' || (!!(t == 'object' && object[property])) || t == 'unknown';
  },
  /**
  * 增加单行文本信息
  * @param text   显示内容
  */
  log(text){
    let txt = text.toString();
    if(arguments.length > 1){
      txt += '：';
      for(let i = 1;i<arguments.length;i++){
        if(_.isArray(arguments[i])){
          txt += '[' + arguments[i].join() + ']';
        }
        else if(_.isObject(arguments[i])){
          let key;
          txt += '{';
          //如果是MimeTypeArray对象特殊处理
          if(arguments[i] instanceof MimeTypeArray){
            key = 'type';
          }
          //如果是PluginArray对象特殊处理
          if(arguments[i] instanceof PluginArray){
            key = 'name';
          }
          for(let item of arguments[i]){
            txt += `${key}：${item[key]}，`
          }
          txt += '}';
        }
        else{
          txt += arguments[i];
        }
        
      }
    }
    if(!txt){
      return;
    }
    let p = document.createElement('p');
    let content = document.getElementById('content');
    p.classList += 'item-info';
    p.innerText = txt;
    if(content) content.appendChild(p);
    
  },
  /**
  * 增加内容展示
  * @param arr   需要展示的数组内容
  * @param count   需要展示的循环执行次数
  * @param title   需要展示的标题
  */
  addInfo({arr=[],count,title,resultStr}){
    let p = document.createElement('p');
    let content = document.getElementById('content');
    if(!content){
      return;
    }
    p.classList += 'item-info';
    p.innerHTML = `${title}:<br/>运行了${count}次<br/>得到结果${resultStr || arr.length + '个'}<br/>得到的结果是${arr.join(' ')}`;
    content.appendChild(p);
  },
  /**
  * 生成随机数数组
  * @param allowRepeat   允许重复
  */
  addRandomNum(lang=99,allowRepeat){
    //生成随机数
    var nums = [];
    var count = 0;
    while(nums.length < lang){
      count++;
      var num = parseInt(Math.random() * lang+1);
      //如果允许重复
      if(allowRepeat){
        nums.push(num);
      }
      else{
        if(nums.indexOf(num) == -1){
          nums.push(num);
        }
      }
      
    }
    return {nums,count}
  },
  /**
  * 判断是否移动端
  * @param name   定义
  */
  isMobile(){
    return Boolean(navigator.userAgent.match(/(phone|pad|pod|iphone|ipod|ios|ipad|android|adr|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i))
  },
  // 获取url参数对象
  getUrlParms(key){
    let qs = ((location.search.length > 0) ? location.search.substring(1) : ''),
    // 保存的数据对象
        args = {},
    // 取得每一项
        items = (qs.length ? qs.split('&') : []),
        item,name,value,len = items.length;
    for(let i = 0; i < len; i++){
      item = items[i].split('=');
      name = decodeURIComponent(item[0]);
      value = decodeURIComponent(item[1]);
      if(name.length){
        args[name] = value
      }
    }
    return (key ? args[key] : args);
  }
}

export default utils;