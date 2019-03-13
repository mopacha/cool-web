'use strict'
const gulp = require('gulp')
const runSequence = require('run-sequence') // task按顺序执行
const del = require('del') // 删除文件或者文件夹
const gulpIf = require('gulp-if')
const px2rem = require('gulp-px3rem')
const newer = require('gulp-newer')
const sass = require('gulp-sass')
const argv = require('yargs').argv
const spritesmith = require('gulp.spritesmith')
const autoprefixer = require('gulp-autoprefixer')
const webpack = require('webpack')
const openInBrowser = require('./dependencies/openInBrowser')
const devConf = require('./dependencies/conf')
const appConfig = require('./app.config')
const gls = require('gulp-live-server')
const img2base64 = require('./dependencies/img2base64')
const rev = require('gulp-rev')
const revReplace = require('gulp-rev-replace')

let env = 'development'
let webpackconfig = null
let rebuildConfig = null
let isMinify = false

const runServer = () => {
  const server = gls('./server/server.js', null, process.env.LIVE_RELOAD_PORT)
  server.start()
  return server
}

gulp.task('clean', cb => del(devConf.del))

gulp.task('sprite', cb => {
  const conf = devConf.sprite
  let spriteData = null
  const options = require('./dependencies/sprite')(conf)
  Object.keys(options).forEach(function (key) {
    const item = options[key]
    spriteData = gulp
      .src(item.src)
      .pipe(spritesmith(item))
      .pipe(gulp.dest(conf.dist))
  })
  return spriteData
})

gulp.task('scss2css', cb => {
  const conf = devConf.scss2css
  return gulp
    .src(conf.src)
    .pipe(newer(conf.dist))
    .pipe(
      sass({
        includePaths: conf.includePaths,
        outputStyle: 'expanded',
        sourceComments: true
      }).on('error', sass.logError)
    )
    .pipe(
      autoprefixer({
        browsers: ['chrome >= 34', 'ios >= 7', 'android >= 2.0']
      })
    )
    .pipe(
      gulpIf(
        appConfig(env).px2rem,
        px2rem({
          remUnit: 100
        })
      )
    )
    .pipe(require('./dependencies/cssMinify')({}, isMinify))
    .pipe(gulp.dest(conf.dist))
})

gulp.task('webpack:dll', cb => {
  !isMinify
    ? webpack(
      require('./dependencies/webpack.dll')(devConf.webpack, isMinify),
      (err, stats) => {
        err && console.error(err)
        cb()
      }
		  )
    : cb()
})

gulp.task('webpack', cb => {
  webpackconfig = require('./dependencies/webpack')(
    Object.assign({ env, isMinify, eslint: argv.eslint }, devConf.webpack),
    isMinify,
    argv.eslint
  )
  webpack(rebuildConfig || webpackconfig, function (err, stats) {
    let isError = false
    // console.log(stats)
    if (err) {
      console.error(
        '----------------- webpack error --------------------\n',
        err
      )
      isError = true
    }
    if (stats.hasErrors()) {
      const errors = stats.toJson({ errorDetails: true }).errors
      Object.keys(errors).forEach(key => {
        console.error(
          '----------------- webpack error --------------------\n',
          errors[key]
        )
      })
      isError = true
    }
    if (env !== 'development' && isError) {
      process.exit(1)
    }
    if (stats.hasWarnings()) {
      const warnings = stats.toJson().warnings
      Object.keys(warnings).forEach(key => {
        console.warn(warnings[key])
      })
    }
    cb()
  })
})

gulp.task('img2base64:css', cb => {
  const conf = devConf.img2base64.cssjs
  return gulp
    .src(conf.src)
    .pipe(img2base64())
    .pipe(gulp.dest(conf.dist))
})

gulp.task('img2base64:ejs', cb => {
  const conf = devConf.img2base64.ejs
  return gulp
    .src(conf.src)
    .pipe(img2base64())
    .pipe(gulp.dest(conf.dist))
})

gulp.task('rev:assets', cb => {
  const conf = devConf.revAssets
  return gulp
    .src(conf.src, {
      base: conf.base
    })
    .pipe(rev())
    .pipe(gulp.dest(conf.build))
    .pipe(rev.manifest())
    .pipe(gulp.dest(conf.dist))
})

gulp.task('rev:cssjs', cb => {
  const conf = devConf.revCssjs
  return gulp
    .src(conf.src, {
      base: conf.base
    })
    .pipe(rev())
    .pipe(gulp.dest(conf.build))
    .pipe(rev.manifest())
    .pipe(gulp.dest(conf.dist))
})

gulp.task('replace:hash:cssjs', cb => {
  const conf = devConf.replaceCssJsHash
  const manifest = gulp.src(conf.manifest)
  return gulp
    .src(conf.src)
    .pipe(
      revReplace({
        manifest: manifest,
        prefix: devConf.cdn
      })
    )
    .pipe(gulp.dest(conf.dist))
})

gulp.task('replace:hash:ejs', cb => {
  const conf = devConf.replaceEjsHash
  const manifest = gulp.src(conf.manifest)
  return gulp
    .src(conf.src)
    .pipe(
      revReplace({
        replaceInExtensions: conf.replaceInExtensions,
        manifest: manifest,
        prefix: devConf.cdn
      })
    )
    .pipe(gulp.dest(conf.dist))
})

gulp.task('common', cb => {
  runSequence(
    ['clean'],
    ['sprite'],
    ['scss2css'],
    ['webpack:dll'],
    ['webpack'],
    cb
  )
})

gulp.task('advance', cb => {
  const tasks = [
    ['common'],
    ['img2base64:css'],
    ['rev:assets'],
    ['replace:hash:cssjs'],
    ['rev:cssjs'],
    ['replace:hash:ejs'],
    ['img2base64:ejs'],
    cb
  ].filter(item => {
    if (
      (!argv.ftp && item[0] === 'ftp') ||
			(!argv.ejs2html && item[0] === 'ejs2html')
    ) {
      return false
    }
    return true
  })
  runSequence.apply(null, tasks)
})

// ---------------------------
// gulp dev --minify
// gulp dev --eslint=off --open
gulp.task('dev', () => {
  let notifyTimer = null
  env = 'development'
  console.log(' argv.minify:', argv.minify)
  argv.minify && (isMinify = true)
  runSequence(['common'], () => {
    const conf = devConf.watch
    console.log('start runServer')
    const server = runServer()
    const watch = require('chokidar').watch
    const { getAssets, getRebuildConfig } = require('./dependencies/pageAssets')
    const gulpArr = [
      [
        conf.restart,
        () => {
          server.start.bind(server)()
        }
      ],
      [
        conf.notify,
        file => {
          notifyTimer && clearTimeout(notifyTimer)
          notifyTimer = setTimeout(() => {
            server.notify(file)
          }, 200)
        }
      ],
      [conf.scss2css, ['scss2css']],
      [conf.webpack, ['webpack']]
    ]

    gulpArr.forEach(item => {
      const exec = file => {
        typeof item[1] === 'function' ? item[1](file) : gulp.start(item[1])
      }
      watch(item[0], { ignoreInitial: true }).on('all', (event, path) => {
        rebuildConfig = getRebuildConfig(event, path)
        exec({ type: event, path })
      })
    })
    openInBrowser(argv)
    getAssets(webpackconfig)
  })
})

// --------------------------
// gulp production --ftp --ejs2html
gulp.task('production', cb => {
  env = 'production'
  isMinify = true
  runSequence(['advance'], () => {
    cb()
  })
})
