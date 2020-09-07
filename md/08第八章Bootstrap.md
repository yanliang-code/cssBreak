##### 一、介绍

1. Bootstrap框架  https://getbootstrap.com/
   - 一个CSS框架
   - twitter出品
   - 提供通用基础样式

##### 二、Bootstrap4

1. 特性
   - 兼容IE10+
   - 使用flexbox布局
   - 抛弃Nomalize.css（统一不同浏览器行为）
   - 提供布局（bootstrap-grid.css）、reboot（bootstrap-reboot.css）、全的（bootstrap.css）三种版本
2. 提供
   - 基础样式
   - 常用组件  https://getbootstrap.com/docs/4.5/components/alerts/
     - 按钮
     - 表单等等
   - JS组件
     - dropdown（下拉）
     - modal（弹出框）等等
     - 内部依赖项
       - jQuery
       - Popper.js（弹出框）
       - bootstrap.js
     - 使用方式
       - 基于data-*属性   chapter8\3-js.html
       - 基于JS  API
     - 使用缺点
       - 使用要严格按照格式来
       - 必须引入指定第三方js
     - 适用于比较临时性的项目，需要快速成型并且不再迭代升级的
3. Bootstrap响应式布局  chapter8\2-responsive.html
   - ![2020-09-03_210713](D:\coding\cssBreak\md\mdPic\第八章\2020-09-03_210713.png)
   - 不同的分辨率有不同的分配
     - 默认按照百分比分配，会导致可视区域变小，相应的盒子模型变小，内容有可能会盛不下；导致不同分辨率下，呈现效果有好有坏
     - 响应式：在不同分辨率下，为适应屏幕大小以及保证原有的显示效果，来进行布局调整；比如：大于900px，一行放3个；小于400px，一行放一个
     - 应用：在同一个盒子上加不同的class，不同宽度的可视区域使用不同的class选择器的样式
4. Bootstrap定制方法
   - 使用CSS同名类覆盖
     - 容易遗漏
     - 成本低
   - 修改源码重新构建
     - 版本4以前是Less编写，4以后是SCSS编写的；可直接修改源文件，重新编译
     - chapter8\bootstrap-custom\scss\bootstrap.scss  bootstrap样式主入口
     - 了解bootstrap内部结构关系，成本稍高
   - 引用SCSS源文件  修改变量
     - 相对于第二种，代码更加纯净
     - 需要了解每个模块的具体用提，成本更高

##### 三、CSS面试真题

1. 如何看待Bootstrap的优缺点
   - 优点：CSS代码结构合理，现成的样式可以直接使用
   - 缺点：定制较为繁琐，体积大
2. Bootstrap如何实现响应式布局
   - 原理：通过media query设置不同分辨率的class
   - 使用：为不同分辨率选择不同的网格class
3. 如何基于Bootstrap定制自己的样式
   - 使用CSS同名类覆盖
   - 修改源码重新构建
   - 引用SCSS源文件  修改变量



