## 配置
  - 全局依赖环境gulp
    提供 gulp xxx 能力
  - 项目中安装第三方 yarn add gulp -D
    作为第三方包，使用gulp.xxx()方法
  
  ### gulp的常用插件
    - gulp的各种插件执行各种压缩、混淆、转码任务
    1. gulp-cssmin
      - 下载 yarn add gulp-cssmin -D
      - 导入 const cssmin = require('gulp-cssmin')
    
    2. gulp-autoprefixer
      - 下载 yarn add gulp-autoprefixer -D
      - 导入以后得到一个处理文件流的函数
      - 在package.json的文件配置browserslist
      - 直接在管道函数里使用，需传递参数 // {browsers: []}

    3. gulp-sass
      - 下载：yarn add sass gulp-sass -D
      - 导入：const sass = require('gulp-sass')(require('sass'))
      - 样式写在scss文件，变量写在sass文件
        