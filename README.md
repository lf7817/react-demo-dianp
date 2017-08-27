# 预览
请将浏览器调成手机模式[点击预览](https://lf7817.github.io/react-demo-dianp/build/)

# 技术栈

- react
- react-router V4.0
- redux 
- ES6/7
- axios/fetch
- flexible+flex

# 安装
```
# 安装
yarn install
# 开发
yarn start
# mock server
yarn mock
```



# 弹出
不知道怎样配置create-react-app，还是eject修改配置吧
```
yarn eject
```

# 编译后资源引用路径修改
```
// config/path.js

function getServedPath(appPackageJson) {
  const publicUrl = getPublicUrl(appPackageJson);
  const servedUrl =
-    envPublicUrl || (publicUrl ? url.parse(publicUrl).pathname : '/');
+    envPublicUrl || (publicUrl ? url.parse(publicUrl).pathname : './');
  return ensureSlash(servedUrl, true);
}
```
# 添加代理
package.json里添加
```
  "proxy": {
    "/api": {
      "target": "http://localhost:4000",
      "secure": false
    }
  }
```


# 布局
布局采用手淘的flexible.js
### px转rem
```
# 安装postcss-adaptive
yarn add postcss-adaptive --dev
```
### 配置postcss

```
// config\webpack.config.dev.js 和 config\webpack.config.prod.js
+ const adaptive = require('postcss-adaptive')

plugins: () => [
    require('postcss-flexbugs-fixes'),
    autoprefixer({
      browsers: [
        '>1%',
        'last 4 versions',
        'Firefox ESR',
        'not ie < 9', // React doesn't support IE8 anyway
      ],
      flexbox: 'no-2009',
    }),
+   adaptive({ remUnit: 75,autoRem:true })
  ],
```
默认设计稿为750，默认dpr为2，自动转换rem ，具体查看[API](https://www.npmjs.com/package/postcss-adaptive)



# changes
+ 2017-08-27
    - 修复loadMore组件bug，销毁组件时，注销scroll事件写错了，导致重复注册scroll事件
    - 修复Likes组件bug,从其它页面切回Home组件时，会去加载第一页列表，导致store中状态改变，重复加载列表，这里修改加载条件，当列表为空才去加载
    - 每次进入Home组件，Ad组件都会重新请求列表，同上修改加载条件，列表为空采取加载
    - 更改样式，课程中的设计稿是旧版的，现按官网最新样式做
    