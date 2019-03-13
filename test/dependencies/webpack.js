'use strict'
const path = require('path')
const webpack = require('webpack')
const utils = require('../utils/utils')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const appConfig = require('../app.config')
const slash = require('slash')
const { VueLoaderPlugin } = require('vue-loader')

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

const getConfig = function (conf) {
  const createLintingRule = () => ({
    test: /\.(js|vue)$/,
    loader: 'eslint-loader',
    enforce: 'pre',
    include: [resolve('static')],
    options: {
      formatter: require('eslint-friendly-formatter'),
      emitWarning: false
    }
  })

  let plugins = [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(conf.env),
        CONFIG: JSON.stringify(appConfig(conf.env))
      }
    }),
    new VueLoaderPlugin()
  ]
  if (!conf.isMinify) {
    plugins = plugins.concat([
      new webpack.NamedModulesPlugin(),
      new webpack.DllReferencePlugin({
        context: path.join(process.cwd(), ''),
        manifest: require(path.join(process.cwd(), conf.commonManifest))
      })
    ])
  } else {
    plugins = plugins.concat([
      new webpack.HashedModuleIdsPlugin({
        hashFunction: 'sha256',
        hashDigest: 'hex',
        hashDigestLength: 6
      })
    ])
  }
  return {
    cache: true,
    context: path.join(process.cwd(), ''),
    entry: {},
    mode: conf.isMinify ? 'production' : 'development',
    output: {
      path: path.join(process.cwd(), conf.dist),
      filename: '[name].js',
      publicPath: conf.public
    },
    externals: {},
    module: {
      rules: [
        ...(conf.eslint === 'off' ? [createLintingRule()] : []),
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              babelrc: false,
              presets: ['@babel/preset-env']
            }
          }
        },
        {
          test: /\.vue$/,
          exclude: /node_modules/,
          loader: 'vue-loader',
          options: {
            loaders: {
              scss: 'vue-style-loader!css-loader!sass-loader'
            }
          }
        },
        {
          test: /\.(jpe?g|png|gif|svg)$/i,
          loader: 'url-loader',
          query: {}
        },
        {
          test: /\.css$/,
          loader: 'style!css'
        },
        {
          test: /\.scss$/,
          exclude: /node_modules/,
          use: [
            {
              loader: 'style-loader'
            },
            {
              loader: 'css-loader'
            },
            {
              loader: 'sass-loader'
            }
          ]
        }
      ]
    },
    devtool: conf.isMinify ? 'source-map' : 'cheap-source-map',
    resolve: {
      extensions: ['.js', '.vue', '.scss'],
      modules: [
        path.resolve('./static/apps/'),
        path.resolve('./static/styles/'),
        path.resolve('./node_modules/')
      ],
      alias: {
        scss: path.resolve('./static/styles/'),
        vue: 'vue/dist/vue.esm.js'
      }
    },
    plugins: plugins,
    optimization: {
      minimizer: [
        // 自定义js优化配置，将会覆盖默认配置
        new UglifyJsPlugin({
          uglifyOptions: {
            exclude: /\.min\.js$/, // 过滤掉以".min.js"结尾的文件，我们认为这个后缀本身就是已经压缩好的代码，没必要进行二次压缩
            cache: true,
            parallel: true, // 开启并行压缩，充分利用cpu
            sourceMap: false,
            extractComments: false, // 移除注释
            uglifyOptions: {
              compress: {
                unused: true,
                warnings: false,
                drop_debugger: true
              },
              output: {
                comments: false,
                ascii_only: true
              }
            }
          }
        })
      ]
    },
    performance: {
      hints: 'warning',
      maxAssetSize: 380000,
      maxEntrypointSize: 500000
    }
  }
}

module.exports = function (conf) {
  let filelist = []
  const entry = conf.isMinify ? conf.entry : {}
  const _path = path.resolve(process.cwd(), conf.src)
  utils.getFiles(_path, function (_path) {
    filelist.push(_path)
  })
  filelist = filelist.filter(item => path.extname(item) === '.js')
  filelist.forEach(function (item) {
    const arr = slash(item).match(conf.regexp)
    entry[arr[1]] = ['.' + arr[0]]
  })
  filelist = []
  return Object.assign(getConfig(conf), {
    entry: entry
  })
}
