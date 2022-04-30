const gulp = require('gulp')
// 压缩css
const cssmin = require('gulp-cssmin')
// 兼容css
const autoprefixer = require('gulp-autoprefixer')
// 引入sass
const sass = require('gulp-sass')(require('sass'))
// 压缩js
const uglify = require('gulp-uglify')
// 兼容js
const babel = require('gulp-babel')
// 压缩html
const htmlmin = require('gulp-htmlmin')
// 删除打包文件
const del = require('del')
// 服务器
const webserver = require('gulp-webserver')

// 1打包css任务
const cssHandler = function() {
  return gulp
    .src('./src/css/*.css')         // 1.找到内容
    .pipe(autoprefixer())           // 3.添加前缀，兼容
    .pipe(cssmin())                 // 2.压缩
    .pipe(gulp.dest('./dist/css/')) // 4.输出文件
}
// 2打包sass任务
const sassHandler = function() {
  return gulp
    .src('./src/sass/*.scss')
    .pipe(sass())
    .pipe(autoprefixer())
    .pipe(cssmin())
    .pipe(gulp.dest('./dist/sass/'))
}
// 3打包js
const jsHandler = function() {
  // 1入口文件 2解析es6 3压缩 4输出
  return gulp
    .src('./src/js/*.js')
    .pipe(babel({
      presets: ['@babel/env']
    }))
    .pipe(uglify())
    .pipe(gulp.dest('./dist/js/'))
}
// 4打包html
const htmlHandler = function() {
  return gulp
    .src('./src/*.html')
    .pipe(htmlmin({
      collapseWhitespace: true, // 移除空格
      removeEmptyAttributes: true, // 移除空的属性(仅限于原生属性)
      collapseBooleanAttributes: true, // 移除checked类似的布尔值属性
      removeAttributeQuotes: true, // 移除属性上的双引号
      minifyCSS: true, // 压缩内嵌式css代码（只能压缩不能补全前缀）
      minifyJs: true, // 压缩内嵌式js代码（只能压缩不能进行转码）
      removeStyleLinkTypeAttributes: true, // 移除 style 和 link 标签上的 type 属性
      removeScriptTypeAttributes: true
    }))
    .pipe(gulp.dest('./dist/'))
}
// 5打包 images 文件的任务
const imgHandler = function() {
  return gulp
    .src('./src/images/**')
    .pipe(gulp.dest('./dist/img/'))
}
// 6打包videos文件的任务
const videoHandler = function() {
  return gulp
    .src('./src/videos/**')
    .pipe(gulp.dest('./dist/videos/'))
}
// 7打包第三方的任务
const libHandler = function() {
  return gulp
    .src('./src/lib/**')
    .pipe(gulp.dest('./dist/lib/'))
}
// 8删除dist文件
const delHandler = function() {
  return del(['./dist/'])
}
// 服务
const webHandler = function() {
  return gulp
    .src('./dist')
    .pipe(webserver({
      host: 'localhost', // 域名,host代理
      port: '8080', // 端口
      livereload: true, // 文件修改时，是否自动刷新页面
      open: './index.html', // 默认打开那一个文件，dist目录下的文件
      // 配置代理，没有代理不要写空对象
      proxies: [{
        source: '/api',
        target: 'https://api.bilibili.com/x/web-interface/cdn/report'
      }]
    }))
}
// 监控文件更新重新打包
const watchHandler = function() {
  return gulp
    .watch('./src/*.html', htmlHandler)
    .watch('./src/js/*.js', jsHandler)
    .watch('./src/css/*.css', cssHandler)
    .watch('./src/sass/*.sass', sassHandler)
}

// 导出
module.exports = {
  cssHandler,
  sassHandler,
  jsHandler,
  htmlHandler,
  imgHandler,
  videoHandler,
  libHandler,
  delHandler
}

// 配置一个默认任务
// 把所有的任务一起执行
// gulp.series() 或者 gulp.parallel()
// 方式1
// gulp.task('default', () => {})
// 方法2
// module.exports.default = () => {}

// 创建一个默认任务，可以通过gulp直接执行
// module.exports.default = gulp.parallel(cssHandler, sassHandler, jsHandler, htmlHandler)
// 优化默认指令
// 删除文件， 并行打包， 启动服务, 监控文件更新
module.exports.default = gulp.series(
  delHandler,
  gulp.parallel(cssHandler, sassHandler, jsHandler, htmlHandler),
  webHandler,
  watchHandler
)
