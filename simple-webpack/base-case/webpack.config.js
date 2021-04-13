/* eslint-disable */
//引入路径模块
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { VueLoaderPlugin } = require('vue-loader')
module.exports = {
  mode : 'development',
  devServer : {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    //配置host 可以使服务器外访问
    host : '0.0.0.0',
    //配置端口号
    port : 8001
  },
  devtool: "inline-source-map",
  //配置入口文件
  entry : './src/main.js',
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
    }),
    new VueLoaderPlugin()
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
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.scss$/,
        use: [{
            loader: "style-loader" // 将 JS 字符串生成为 style 节点
        }, {
            loader: "css-loader" // 将 CSS 转化成 CommonJS 模块
        }, {
            loader: "sass-loader" // 将 Sass 编译成 CSS
        }]
      }
    ]
  }
}