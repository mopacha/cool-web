'use strict'

module.exports = {
  cdn: 'http://localhost:3005', // 前端静态资源上传cdn，替换本地相对路径
  del: [
    './build',
    './dist/**',
    './static/styles/includes/sprites/**',
    './server/view/release/',
    './rev-manifest.json'
  ],
  sprite: {
    src: './static/images/sprites/',
    imgName: './dist/images/sprites/',
    cssName: './static/styles/includes/sprites/',
    cssTemplate: './dependencies/sprite.scss.template.handlebars',
    dist: './'
  },
  scss2css: {
    src: ['./static/styles/**/*.scss', '!./static/styles/includes/**/*.scss'],
    includePaths: [
      './static/styles/',
      './static/styles/includes',
      './static/apps/'
    ],
    dist: './dist/styles'
  },
  dist: './dist/',

  webpack: {
    entry: {
      common: ['vue', 'vue-router', 'vuex']
    },
    commonManifest: './dist/scripts/apps/common-manifest.json',
    src: './static/apps/',
    dist: './dist/scripts/apps/',
    public: '',
    regexp: /\/static\/apps\/(.*)\.js$/
  },
  watch: {
    sprite: ['./static/images/sprites/**/*'],
    scss2css: ['./static/styles/**/*.scss'],
    webpack: ['./static/apps/**/*'],
    restart: [
      './server/*',
      './app.config.js',
      './routes/**/*.js',
      './models/*',
      './utils/**/*.js',
      './mocks/**/*'
    ],
    notify: [
      './views/**/*.ejs',
      './static/images/**/*',
      './dist/styles/**/*.css',
      './dist/**/*.js'
    ]
  },
  img2base64: {
    cssjs: {
      src: ['./dist/**/*', '!./dist/images/**/*'],
      dist: './dist/'
    },
    ejs: {
      src: ['./views/release/**/*'],
      dist: './views/release/'
    }
  },

  revAssets: {
    src: [
      './static/**/*',
      './dist/images/**/*',
      '!./static/styles/**/*',
      '!./static/apps/**/*',
      '!./static/images/sprites/**/*',
      '!./static/images/base64/**/*'
    ],
    base: './dist/',
    build: './build/',
    dist: './dist/'
  },
  revCssjs: {
    src: [
      './dist/**',
      '!./dist/images',
      '!./dist/scripts/**/*.js.map',
      '!./dist/rev-manifest.json'
    ],
    base: './dist/',
    build: './build/',
    dist: './dist/'
  },

  replaceCssJsHash: {
    src: ['./dist/**/*.css', './dist/**/*.js'],
    manifest: './dist/rev-manifest.json',
    dist: './dist/'
  },

  replaceEjsHash: {
    src: ['./server/view/**/*', '!./server/view/release/'],
    manifest: './dist/rev-manifest.json',
    dist: './server/view/release/',
    replaceInExtensions: ['.js', '.css', '.html', '.hbs', '.ejs']
  }
}
