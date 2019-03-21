## my plan

### 前端

* `样式`:scss.
* `库管理`:npm
* `框架`:vue2.
* `模板引擎`:art-template.
* `打包`:webpack4.
* `图标`:iconfont.
* `组件库`:element-ui.


#### 模板引擎
art-template
https://aui.github.io/art-template/rendering-test/


### vue-router+webpack 路由按需加载

#### 引入element-ui.


### cool 命令

`npm link`
`cool -h` cool logo
`cool -v` cool 版本


报错
> /c/Users/wangpeng04/AppData/Roaming/npm/cool: line 1: /node_modules/koa-vue-web/bin/cool.js: No such file or directory

`#! /usr/bin/env node` 没能识别出你的 node 的路径，需要将你的 node 安装路径（如/usr/local/bin/）加入到系统的 PATH 中


### ctrl+shift+f 

`(".*[\u4E00-\u9FA5]+)|([\u4E00-\u9FA5]+.*")`  查找所有中文


### error

>ERROR in ./src/static/apps/appOne/routes/index.js 8:9
Module parse failed: Unexpected token (8:9)
You may need an appropriate loader to handle this file type.
| 
| var Home = function Home() {
>   return import(
|   /* webpackChunkName: 'home' */
|   '../page/home');
 @ ./src/static/apps/appOne/app.js 5:0-30 7:10-16

```bash
	npm update acorn --depth 20
	npm dedupe
```


### node 服务启动

生产：读取当前机器的ip+端口号

### webpack 热加载  路由懒加载 打包


`cool start` webpack 打包+webpack-dev-server启动，资源打包到内存中，静态资源服务器启动

#### 资源⽂件访问路径

在cool.config.js 中配置 entry 和 publicPath。

js:`http://localhost:8686/koa-vue-static/appTwo.js`


### 流程

node端：
> node 服务--> 服务层路由控制--> 读取view 中模板文件 art
>  art模板文件：1.default.art : 加载一些固定的资源
>      				 2.具体应用.art 

### 开发环境：
1. `cool start` 启动静态资源服务(静态资源打包在内存中)
  
        路径: js:`http://localhost:8686/koa-vue-static/xxx.js`
		       css:`http://localhost:8686/koa-vue-static/xxx.css`
2. `npm run devServer` 启动node server
			  读取模板文件，加载打包好的静态资源
    

### 问题
> 将打包好的资源根据`vue-router`实现资源懒加载

解决方案： webpack 生成manifest文件，按需加载manifest文件中的映射

manifest 文件生产和测试都需要


### 一、引入 element ui 组件库

`npm i element-ui -D`

按需引入

`npm install babel-plugin-component -D`


```
//jsBabel.js
"plugins": [
    [
      "component",
      {
        "libraryName": "element-ui",
        "styleLibraryName": "theme-chalk"
      }
    ]
  ]

```






### webpack4 打包策略优化(参考： https://segmentfault.com/a/1190000015919928)

原则： 体积大小、共用频率、更新频率


- 基础类库: chunk-libs 
  vue+vue-router+vuex+axios+（nprogress、js-cookie、clipboard体积不大的第三方库）

-	UI 组件库
  
  















































	