##### 一、介绍

1. 工程化
   - 针对此项目或者工程，怎么样能让它更好的跑起来
   - 不同公司不同项目会有不同的方法
2. CSS工程化关注点
   - 组织
     - 代码的组织，分成怎样的结构、模块，才能方便大家合作
   - 优化
     - 两种写法有区别吗，哪种方式更好点，为什么在团队合作中需要使用此方式的代码
   - 构建
     - 代码写完需要哪些处理步骤，例如：优化、压缩、上线等等
   - 维护
     - 团队新人上手是否容易；后期修改代码是否方便

##### 二、CSS工程化工具（可代替SCSS、Less等预处理器）

1. PostCSS

   - CSS - PostCSS解析转换 - CSS
   - 在PostCSS解析转换此步骤，可以做很多事情；比如：模块化、加前缀、兼容性等等
   - PostCSS本身只有解析的能力，将一个选择器拆解成类似对象，对象上有各种属性帮助你了解此选择器   chapter9\src\01-postcss.css
   - 各种神奇的特性全靠其他插件（目前至少有200多个插件）
     - import 模块合并
       - 减少请求数量
     - autoprefixier 自动加前缀
       - 比如： -webkit-、-moz-
     - cssnano 压缩代码
       - 除去重复属性
       - 合并可以合并的属性写法
       - 减小代码体积
     - cssnext 使用CSS新特性
     - precss变量、mixin、循环等
   - 使用方式 （chapter9）
     - .\node_modules\.bin\postcss .\src\01-postcss.css -o .\build\01-postcss.css
       - src是源码、build是编译后的代码
       - 此情况是没有使用其他插件的
     - PostCSS结合其他插件使用方式
       - npm下载指定的插件
       - 创建一个名为postcss.config.js文件（postcss配置参数的文件）
       - 在postcss.config.js中require引入并声明
     - autoprefixier 插件（ chapter9\src\02-plugins-main.css）
       - 声明时需要指定浏览器版本  browsers: ['Firefox > 1']
       - 底层是依赖browserList，它是会去https://caniuse.com/此网站获取信息
         - ![2020-09-04_210039](D:\coding\cssBreak\md\mdPic\第九章\2020-09-04_210039.png)
     - postcss-import 插件 （chapter9\src\02-plugins-main.css）
       - 通过遍历依赖关系，来合并代码，最终生成一个css文件
     - cssnext 插件 （chapter9\src\02-plugins-module.css）
       - 作用类似于JS中的babel，让CSS新特性编译目前浏览器兼容的写法
       - ![2020-09-04_221327](D:\coding\cssBreak\md\mdPic\第九章\2020-09-04_221327.png)
     - cssnano 插件（chapter9\src\03-cssnext.css）
       - 除去重复属性
       - 合并可以合并的属性写法
       - 去除空格以及回车，减小代码体积
     - precss插件 （chapter9\src\04-precss.css）
       - 与SCSS、Less预处理能力类似
         - 变量
         - 条件（if）
         - 循环
         - Mixin  Extend
         - import
         - 属性值引用

   

   ##### 三、PostCSS结合构建工具

   1. PostCSS本身没有构建能力，支持的工具如下

      - cli命令行工具（.\node_modules\.bin\postcss .\src\01-postcss.css -o .\build\01-postcss.css）
      - webpack  postcss-loader
      - Gulp  gulp-postcss
      - Grunt  grunt-postcss
      - Rollup  rollup-postcss
      - ......
   2. Gulp应用PostCSS

      - chapter9\gulpfile.js

      - 使用此命令gulp postcss（需要-g 全局安装gulp）

   3. webpack应用PostCSS

      - webpack核心思想
        - JS是整个应用的核心入口
        - 一切资源都有JS管理依赖
        - 一切资源都有webpack打包
      - 使用方式
        - .\node_modules\.bin\webpack  .\src\05-webpack-main.js   .\build\05-webpack-main.js（指令位置  源码位置  输出位置）  chapter9\src\05-webpack-main.js
        - JS为入口，那么JS中引用CSS，能打包成功？？  chapter9\src\06-webpack-main.js
          - 不可以，因为webpack是处理JS文件的，用webpack去处理CSS，一定会解析错误；需要引入处理CSS相关的loader，使用此loader加载CSS文件，将其转化为webpack能处理的格式
          - 在webpack.config.js（此名是webpack默认配置文件名）
          - css-loader：将css文件处理成js文件，交给webpack去处理
          - style-loader：将变成js文件的css，注入到页面中
        - 组件内自己独有CSS样式  chapter9\src\07-webpack-component.js
          - 问题  chapter9\webpack.config.js
            - 样式不是组件独有的，是全局的，造成全局CSS样式污染
              - 早期解决方式：为组件加一个唯一的id或类选择器，编写CSS样式时，比较麻烦
              - 开启 css-loader 的 modules: true 参数配置，此时CSS样式都会替换为UUID，页面绑定CSS通过引入CSS文件返回的参数来获取
            - 需要加载完JS，才能加载CSS样式 
              - 打包时单独生成CSS，使用link引入，不通过style-loader注入
              - 使用extract-text-webpack-plugin插件

   

   ##### 四、小结

   1. css-loader：将CSS转化为JS，从而实现JS管理CSS的想法
   2. style-loader：将JS样式插入html的head中
   3. ExtractTextPlugin：将CSS从JS中提取出来（不需要JS去插入CSS样式，CSS样式与JS一同加载）
   4. css modules：解决CSS命名冲突的问题（将类选择器名转化为uuid，同时提供换名前后的关系映射表）
   5. less-loader、scss-loader各类预处理器（先将其转化为CSS，再使用上面的插件、加载器）
   6. postcss-loader  PostCSS处理（此加载器搭配其他插件也可达到上面预处理器的效果）

   

   ##### 五、CSS面试真题

   1. 如何解决CSS模块化问题（必须编译）
      - Less、SCSS等CSS预处理器
      - PostCSS插件（postcss-import / precss 等）
      - webpack处理CSS（css-loader + style-loader）
        - webpack在处理css中含有require时，会再次调用css-loader处理
   2. PostCSS可以做什么
      - PostCSS本身只能解析CSS，提供给插件，插件进行操作，最后，PostCSS再将其转化为CSS。具体能做什么取决于插件可以做什么
      - autoprefixier  cssnext  precss（提供新语法） 等  兼容性处理
      - import模块合并
      - css语法检查  兼容性检查
      - 压缩文件
   3. CSS modules是做什么的，如何使用
      - 解决类名冲突的问题
      - 使用PostCSS或者webpack等构建工具进行编译
      - 在HTML模板中使用编译过程产生的类名
   4. 为什么使用JS来引用、加载CSS
      - JS作为入口，管理资源有天然优势
      - 将组件的结构、样式、行为封装到一起，增强内聚力，减少耦合
      - 可以做更多的处理（webpack）

   

   SCSS、Less：自定义语法   ----  CSS语法

   PostCSS结合其他插件：CSS语法（除cssnext、precss这类需要使用自定义语法的）  ----    CSS语法

   









