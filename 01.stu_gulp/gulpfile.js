/* 
  执行一个gulp配置好的任务  
    + 切换到 gulpfile.js 所在目录
    + 执行命令： gulp 任务名称
*/
// 项目打包配置流程
// 配置gulpfile.js文件就按照 node 的模块化语法进行书写 CommonJS
const gulp = require('gulp')
// 导入gulp-cssmin
const cssmin = require('gulp-cssmin')

// console.info(gulp)
// 1打包css的任务
// gulp@3标准书写语法
// gulp.task('cssHandler', function() {
//   // 需要捕获该任务的结束，需要把这个流 return 出去。 task就会处理
//   // 1找到源文件 2压缩 3输出
//   return gulp
//     .src('./src/css/*.css')
//     .pipe(cssmin())
//     .pipe(gulp.dest('./dist/css/'))
// })
// gulp@4标注书写
const cssHandler = function() {
  return gulp
    .src('./src/css/*.css')
    .pipe(cssmin())
    .pipe(gulp.dest('./dist/css/'))
}

// 将方法暴露出去
module.exports.cssHandler = cssHandler