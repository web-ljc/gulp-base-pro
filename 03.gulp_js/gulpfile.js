const gulp = require('gulp')
const cssmin = require('gulp-cssmin')
const autoprefixer = require('gulp-autoprefixer')
// 引入sass
const sass = require('gulp-sass')(require('sass'))
const uglify = require('gulp-uglify')
const babel = require('gulp-babel')
const htmlmin = require('gulp-htmlmin')

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
    .src('./src/css/*.scss')
    .pipe(sass())
    .pipe(autoprefixer())
    .pipe(cssmin())
    .pipe(gulp.dest('./dist/css/'))
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

// 导出
module.exports = {
  cssHandler,
  sassHandler,
  jsHandler,
  htmlHandler,
  imgHandler,
  videoHandler,
  libHandler
}