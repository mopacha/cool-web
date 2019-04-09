
### Environment
Node: >=8

### Install dependencies

```
npm i cool-cli2 -g
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


