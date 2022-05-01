## 配置
  - 全局依赖环境gulp
    提供 gulp xxx 能力
  - 项目中安装第三方 yarn add gulp -D
    作为第三方包，使用gulp.xxx()方法

  ### package.json
    - dependencies
      - 项目的 项目依赖
      - 比如 jquery
      - 指项目运行需要用到的内容，将来上线后也需要用到的内容
    - devDependencies
      - 项目的 开发依赖
      - 比如 gulp
      - 项目开发阶段所需要用到的内容，将来上线后不需要用到
  
  ### gulp的API
    1. gulp.task()
      - 语法：gulp.task(任务名, 任务处理函数)
      - 作用：创建一个基于流的任务
      - 例子：
        ```js
          gulp.task('htmlHandler', function() {
            // 找到html源文件，进行压缩，打包，放入指定目录
          })
        ```
    2. gulp.src()
      - 语法：gulp.src(路径信息)
      - 作用：找到源文件
      - 例子：
        ```js
          // 找到一个指定文件
          gulp.src('./a/b.html')
          // 找到指定目录下，指定后缀文件
          gulp.src('./a/*.html')
          // 找到指定目录下所有文件
          gulp.src('./a/**')
          // 找到a目录下所有子目录里面的所有文件
          gulp.src('./a/** /*')
          // 找到a目录下所有子目录里面的所有 .html 文件
          gulp.src('./a/** /*.html')
        ```
    
    3. gulp.dest()
      - 语法：gulp.dest(路径信息)
      - 作用：把一个内容放入指定目录
      - 例子
        ```js
          // 把接收的内容放到dist目录
          gulp.dest('./dist')
        ```
    4. gulp.watch()
      - 语法：gulp.watch(路径信息, 任务名称)
      - 作用：监控指定目录下的文件，一旦发生变化，从新执行后面的任务
      - 例子
        ```js
          // 当指定目录下的文件发生变化，就会执行htmlHandler任务
          gulp.watch('./src/*.html', htmlHandler)
        ```
    5. gulp.series()
      - 语法：gulp.series(任务1, 任务2， ...)
      - 作用：逐个执行多个任务，前一个任务结束，第二个任务开始

    6. gulp.parallel()
      - 语法：gulp.parallel(任务1, 任务2， ...)
      - 作用：并行开始多个任务

    7. pipe()
      - 管道函数
      - 接收当前流，进入下一个流过程的管道函数
      - 例子
        ```js
          // 工作过程
          gulp.src().pipe(压缩任务).pipe(转码).pipe(gulp.dest())
        ```
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
    
    8. del
      - 下载 yarn add del -D
      - 作用：删除文件删除
    
    9. gulp-webserver
      - 作用：基于node书写的服务器
      - 下载：yarn add gulp-webserver -D

    10. gulp-file-include
      - 作用：在一个html页面里导入一个html片段
      - 下载： yarn add gulp-file-include -D

  ### gulp配置
    - 默认任务叫做default，可以直接执行 gulp
    - 执行gulp时，不会清除dist文件，会一直放进去

  ### gulp启动服务器
    - gulp可以启动一个基于node的服务器
    - 启动服务时，dist目录作为根目录
    - proxies服务器代理

## 组件