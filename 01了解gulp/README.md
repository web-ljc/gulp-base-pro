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


      

