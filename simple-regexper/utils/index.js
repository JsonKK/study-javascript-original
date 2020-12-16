export default {
  // 输出打印信息
  log(res,txt){
    console.log(res ? txt + ' 通过校验' : txt + ' 没有通过校验');
  }
}