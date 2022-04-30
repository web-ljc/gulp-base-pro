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
    
    4. gulp-uglify
      - 把js文件压缩
      - 下载 yarn add gulp-uglify -D
    
    5. gulp-babel
      - 对 ES6 转 ES5
      - gulp-bael的版本
        - gulp-babel@7 使用在gulp@3
        - gulp-babel@8 使用在gulp@4
      - 下载
        - gulp-babel 需要依赖2个包一起下载 @babel/core  @babel/preset-env
      - 导入
        - 只要导入一个包就可以了，自动导入另外2个包

    6. gulp-htmlmin
      - 下载 yarn add gulp-htmlmin
      - 导入后得到一个可以处理流文件的函数

    7. gulp-imagemin
      - 压缩图片

        