//引入路径模块
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports = {
  mode : 'development',
  //配置入口文件
  entry : './src/index.js',
  output : {
    filename : 'app.js',
    path : path.resolve(__dirname,'dist')
  },
  plugins : [
    new HtmlWebpackPlugin({
      title : 'html title',
      template : path.resolve(__dirname,'public/index.html')
    }),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename : 'css/[name][hash:5].css',
    })
  ],
  module : {
    rules : [
      {
        test : /\.(jpg|png|gif)$/,
        use : [
          {
            loader : 'url-loader',
            options : {
              limit : 10240
            }
          }
        ]
      },
      {
        test : /\.(css)$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      }
    ]
  }
}