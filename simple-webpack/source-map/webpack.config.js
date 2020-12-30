//引入path
const path = require('path');
//html模板生成插件
const HtmlWepackPlugin = require('html-webpack-plugin');
//目录清理工具
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  //入口
  entry : {
    main : './main.js',
    print : './src/js/print.js'
  },
  //输出
  output : {
    filename : '[name].bundle.js',
    path : path.resolve(__dirname,'dist')
  },
  //设定htmlwebpackplygin插件
  plugins : [
    new CleanWebpackPlugin(),
    new HtmlWepackPlugin({
      title : 'output Manage',
      template : 'index.html'
    })
  ]
}