const gulp = require('gulp')
const cssmin = require('gulp-cssmin')
const autoprefixer = require('gulp-autoprefixer')
// 引入sass
const sass = require('gulp-sass')(require('sass'))

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

// 导出
module.exports = {
  cssHandler,
  sassHandler
}