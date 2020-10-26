##### 一、概述

1. 基于CSS的另一种语言
2. 通过工具编译成CSS（ES6+语法 - babel > 原生js 、SCSS\LESS - css预处理器 > 原生css）
3. 添加了很多CSS不具备的特性
4. 能提升CSS文件的组织
   - js可以做模块化，css不可以
   - js可提取变量、函数、类，进行复用
5. 常见的CSS预处理器
   - Less（基于node编写，编译速度快，编程方式稍复杂）
   - SCSS（基于ruby编写，编译较慢，有解决方案）
6. 优点
   - 嵌套 反映层级和约束
     - 便于层级管理，避免由于层级指定不明确导致修改其他元素样式
   - 变量和计算 减少重复代码
     - 给定基础值，其他的值基于此值进行计算
   - Extend和Minxin代码片段
   - 循环 适用于复杂有规律的样式
     - 栅栏24列
   - import CSS 文件模块化
     - 原生的CSS  import，每有一个import都会发送一个请求
     - 预处理器使用import，编译后预处理器会将所有CSS合并到一个文件中



##### 二、应用（主要学习SCSS）

1. 嵌套（反映层级和约束） chapter7\1-nest.scss
   - 1-nest.scss
   - 嵌套默认是后代关系，不是父子关系；&代表父级本身，可以在其后面加伪类选择器
   - .\node_modules\.bin\node-sass 1-nest.scss > test.css
   - .\node_modules\.bin\lessc 1-nest.less > test.css
2. 变量和计算（减少重复代码） chapter7\2-variable.scss
   - 省去重复值（变量复用）
   - 可参与运算（两个内容相关，一个内容使用定义的变量，另一个可使用加减函数在变量基础上进行调整）
   - 使用方式
     - 使用$定义变量
3. CSS片段复用（mixin） chapter7\3-mixin.scss
   - 原生HTML可以达到此效果，将公用样式提出为c1，特有样式为a1，在给HTML元素绑定样式时，将c1、a1都写在上面
   - 若在CSS中就可以片段复用，那么只需要给HTML元素绑定a1即可
     - 使用 @mixin 显式声明CSS样式函数c1，可传参 （此处的样式编译后不会出现在CSS文件内容中）
     - 使用 @include 在需要复用CSS片段的地方c1，显式调用使用 @mixin 声明过的函数即可
   - 额外点
     - 原子类，每个类选择器都代表一个类的样式，例如：字体、行高、颜色等等，具体给某元素绑定样式时，随意组合；此时，使用预处理器，可以在CSS中就将其组合好，省去在HTML中使用多个类选择器
4. CSS片段复用的其他方法（extend） chapter7\4-extend.scss
   - 无须像 minxin 声明，可直接复用任意类选择器，只需要在指定类的嵌套内使用 @extend 标识符，后面加上指定类选择器名
   - 大量复用的代码片段维护工作从HTML转移到CSS本身上
   - 与mixin的区别
     - mixin是直接复制，会出现大量相同CSS代码，代码体积变大
     - extend是提出来，一同声明，节省许多空间
5. 循环语法  chapter7\5-loop.scss
   - 适用于高度重复并且有规律的情况下，例如：动画、24列网格布局（无法复用，写法大致相同，微小差异）
     - 递归写法（Less）
     - 递归写法：使用mixin定义函数，include递归调用函数 ；for循环写法（SCSS）
6. CSS文件模块化  chapter7\6-import-main.scss
   - 原生的CSS  import，每有一个import都会发送一个请求
   - 预处理器使用import，编译后预处理器会将所有CSS合并到一个文件中
   - 使用方式
     - @import "./6-import-variable";
     - @import "./6-import-module1";  @import "./6-import-module2"; 此处的两个文件内容，都要嵌套在各自文件名下的选择器下（最外层套以一个文件名为名称的类选择器），防止编译后，在一个文件下，相互覆盖

##### 三、CSS预处理器框架

1. SCSS - Compass
2. Less - Lesshat / EST
3. 提供现成直接mixin
4. 类似JS类库  封装常用功能

##### 四、CSS面试真题

1. 常见的CSS预处理器
   - Less（Node.js）
   - Sass（Ruby 也有Node版本）
2. 预处理器的作用
   - 帮助更好的组织CSS代码（根本作用）
   - 提高代码复用率（作用产生的好处）
   - 提升可维护性（好处的附带效果）
3. 预处理器的能力
   - 嵌套  反映层级和约束
   - 变量和计算  减少重复代码
   - Extend和Mixin  代码片段
   - 循环  适用于复杂有规律的样式
   - import  CSS文件模块化  可以真正按需拆解，不用担心性能问题
4. 预处理器的优缺点
   - 优点
     - 提高代码复用率
     - 提高可维护性
   - 缺点
     - 需要引入编译过程
     - 有一定的学习成本

















