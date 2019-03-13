# 未完，，待续，，，

## koa2-vue-web

### 安装依赖

```
npm i gulp -g && npm i pm2 -g
```

### 项目启动

```
npm run start

## 静态资源文件打包
npm run static

## node 服务启动
npm run server

## node 服务停止
npm run stop
```


### 部署目录

运行`./release.sh` 生成下面目录并部署

├── build
		├── deploy
				├── ${项目名去除web后缀}-static 	 // 静态资源
		    └── ${项目名去除web后缀}-node 	   // node


### 目录结构
	├── bin
	└── cool.js //cool 自定义cool命令
	├── config  // node 项目配置文件目录
	│    ├── default.js  // 全局配置文件
	│    ├── development.js  // 开发环境配置文件
	│    └── production.js // 生产环境配置文件
	├── node_modules
	├── src
	├── cool.config.js //cool-cli 打包配置
	├── gulpfile.js // 资源打包配置文件
	├── package.json
	├── process.json // pm2 启动配置文件
	├── README.md
	└── releash.sh


Node 目录结构

	src
	├── @cool
	│   └── cool-cli  //  webpack 相关工具集
	│   └── resource-optimizer // 资源打包优化
	├── controller  // 路由层
	├── middlewares // 中间件
	├── router // 路由配置
	├── services  // 服务层
	├── static  // 静态资源文件
	├── utils  // utils 目录
	├── views  // View 层
	├── app.config.js  // node 应用服务配置文件
	└── server.js // node服务启动文件

static 目录结构

	src/static
	├── common  // 通用模块
	│   └── components
	└── apps // 业务入口
			└── app1 // 具体 page
					├── css
					├── img
					├── vue
					├── app.vue
					└── index.js


### vscode 插件代码检查

- Prettier - Code formatter
- Vetur
- ESLint

####配置

```bash
//文件->首选项->设置 settings.json
"emmet.syntaxProfiles": {
		"vue-html": "html",
		"vue": "html"
	},
	"editor.detectIndentation": false,
	"editor.insertSpaces": false,
	"editor.tabSize": 2, //制表符符号eslint
	"editor.formatOnSave": true, //每次保存自动格式化
	"eslint.autoFixOnSave": true, //让prettier使用eslint的代码格式进行校验
	"eslint.validate": ["javascript", "javascriptreact", "html", "vue"],
	"eslint.options": {
		"plugins": ["html"]
	},
	"prettier.semi": false, //去掉代码结尾的分号
	"prettier.singleQuote": true, //使用带引号替代双引号
	"prettier.useTabs": true,
	"javascript.format.insertSpaceBeforeFunctionParenthesis": true, //让函数(名)和后面的括号之间加个空格
	"vetur.format.options.tabSize": 2, //格式化.vue中html
	"vetur.format.defaultFormatter.js": "vscode-typescript", //让vue中的js按编辑器自带的ts格式进行格式化
	"vetur.format.defaultFormatterOptions": {
		"js-beautify-html": {
			"wrap_attributes": "force-aligned" //属性强制折行对齐
		}
	},

	"workbench.iconTheme": "vscode-icons",
	"breadcrumbs.enabled": true,
	"files.associations": {
		"*.vue": "vue"
	},
	"vetur.format.defaultFormatter.html": "js-beautify-html",
	"prettier.eslintIntegration": true,
	"prettier.jsxBracketSameLine": true
```



### 记录

### 一、开发环境

1. 静态资源服务器(webpack-dev-server)

自动刷新 热更新

```bash
npm i webpack-dev-server -D
```

> 1.package.json 里的 scripts 里加上"dev": "webpack-dev-server"，然后执行命令 npm run dev

> 2.并没有通过 webpack 生成 dist 目录，devServer 会将 webpack 构建的文件保存到内存里，不需要打包生成就能预览

运行 `cool start`

2. node 服务

> pm2 启动 node 服务

### 二、线上环境

1. CDN
2. node 服务


## 版本
node 建议使用8以上LTS版本


### 多页面应用

每个页面独立entry,单个页面内使用vue-router
基于vue， 使用vue-loader加载.vue文件
单页内使用懒加载异步chunk







