### CASE业务流程

#### 安装webpack4
```
npm install webpack@4
```

#### 执行编译
`webpck`

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

#### 坑坑洼洼
- 引用的模块内如果有个自执行函数，定义的变量在外部，则在内部无法访问