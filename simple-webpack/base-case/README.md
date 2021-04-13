### CASE业务流程

#### 安装webpack4
```
npm install webpack@4
```

#### 执行编译
`webpck`

#### 自动执行编译
弊端是不会自动刷新
`webpack --watch`

#### 使用webpack-dev-server
```
//安装
npm install --save-dev webpack-dev-server
//在package.json中配置
"serve": "webpack serve --mode development"
//在配置文件中配置
devServer : {
  //配置host 可以使服务器外访问
  host : '0.0.0.0',
  //配置端口号
  port : 8001
}
```

#### 配置html模板

```
//安装第四版 html-webpack-plugin
npm install --save-dev html-webpack-plugin@4
//在配置文件中使用
const HtmlWebpackPlugin = require('html-webpack-plugin');

plugins : [
  new HtmlWebpackPlugin({
    title : 'html title',
    template : path.resolve(__dirname,'public/index.html')
  })
]
```

#### 配置清除插件（可以在打包之前清除目录）
```
//安装依赖
npm install --save-dev clean-webpack-plugin
//引入插件
const { CleanWebpackPlugin } = require(‘clean-webpack-plugin’);
//使用插件
new CleanWebpackPlugin()
```

#### 引入url-loader解析图片，并且当图片小于限制值的时候，压缩为base64
```
//安装依赖
npm install --save-dev url-loader
//如果需要使用到Limit小图片转base64功能，则需要引入file-loader
npm install --save-dev file-loader
//使用loader
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
    }
  ]
}
```

#### 解析样式文件
```
//安装styleloader和 cssloader
npm install --save-dev style-loader css-loader
//一般引用，css文件会被打包到js文件中
module : {
  rules : [
    {
      test : /\.(css)$/,
      use : ['style-loader','css-loader']
    }
  ]
}
```

#### 样式文件独立插件
```
//安装mini-css-extract-plugin
npm install --save-dev mini-css-extract-plugin
//引入插件
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
//在插件中配置使用
plugins : [
  new MiniCssExtractPlugin({
    filename : 'css/[name][hash:5].css',
  })
]
//在loader中配置
module : {
  rules : [
    {
      test : /\.(css)$/,
      use: [MiniCssExtractPlugin.loader, 'css-loader'],
    }
  ]
}
```

#### babel-loader，使用最新版本的js
```
//安装
npm install babel-loader babel-core babel-preset-env webpack
//配置
module: {
  rules: [
    {
      test: /\.js$/,
      exclude: /(node_modules|bower_components)/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env']
        }
      }
    }
  ]
}

```

#### vue-loader安装，能够解析vue文件
事例文档：[官方事例](https://vue-loader.vuejs.org/zh/guide/#vue-cli)
```
//安装(注意，vue-template-compiler必须要安装，除非你是使用自行 fork 版本的 Vue 模板编译器的高阶用户)
npm install -D vue-loader vue-template-compiler
//webpack中配置
const { VueLoaderPlugin } = require('vue-loader')

plugins: [
  // 请确保引入这个插件来施展魔法
  new VueLoaderPlugin()
]

module: {
  rules: [
    {
      test: /\.vue$/,
      loader: 'vue-loader'
    }
  ]
}
```

#### 安装scss-loader
```
//安装
npm install sass-loader node-sass --save-dev
//配置文件中配置
module: {
  rules: [
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
```

#### 坑坑洼洼
- 引用的模块内如果有个自执行函数，定义的变量在外部，则在内部无法访问