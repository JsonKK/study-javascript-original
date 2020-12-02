console.log(1)

function inRange(i,width,height){
  return ((i >= 0) && (i < width*height*4));
}

function averageNeigbors(imageData,width,height,i){
  let v = imageData[i];
  // 主方向
  let north = inRange(i - width*4,width,height) ? imageData[i-width*4] : v;
  let south = inRange(i + width*4,width,height) ? imageData[i+width*4] : v;
  let west = inRange(i - 4,width,height) ? imageData[i - 4] : v;
  let east = inRange(i + 4,width,height) ? imageData[i + 4] : v;

  //相邻对角线
  let ne = inRange(i - width * 4 + 4,width,height) ? imageData[i - width * 4 + 4] : v;
  let nw = inRange(i - width * 4 - 4,width,height) ? imageData[i - width * 4 - 4] : v;
  let se = inRange(i + width * 4 + 4,width,height) ? imageData[i + width * 4 + 4] : v;
  let sw = inRange(i + width * 4 - 4,width,height) ? imageData[i + width * 4 - 4] : v;

  //平均值
  let newVal = Math.floor((north + south + west + east + ne + nw + se + sw)/9);

  //如果数字不对
  if(isNaN(newVal)){

    throw new Error('NaN');
  }
}

function boxBlur(imageData,width,height){
  let data = [];
  let val = 0 ;
  for(let i = 0; i < width*height*4;i++){
    val = averageNeigbors(imageData,width,height,i);
    data[i] = val;
  }
  return data;
}