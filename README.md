
### Environment

>Node: >=8

### Install dependencies

```
npm i @coofy/cool-cli -g
npm i gulp -g && npm i pm2 -g 
```

### Run

```
npm run start

## 静态资源文件打包
npm run static

## node 服务启动
npm run server

## node 服务停止
npm run stop
```

### deploy

运行`./release.sh` 生成下面目录并部署

├── build
		├── deploy
				├── ${项目名去除web后缀}-static 	 // 静态资源
		    └── ${项目名去除web后缀}-node 	   // node

### 目录结构

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
	├── controller  // 路由层
	├── middlewares // 中间件
	├── service  // 服务层
	├── static  // 静态资源文件
	├── views  // View 层
	├── app.config.js  // node 应用服务配置文件
	└── server.js // node服务启动文件

static 目录结构

	src/static
	├── common  // 通用模块
	│   └── components	 
	└──assets  // 图片资源
	└── apps // 业务入口
	└── demo 
	├── page   // 前端路由页面
	├── routes // 前端路由
	├── styles
	├── app.vue
	└── app.js
		


