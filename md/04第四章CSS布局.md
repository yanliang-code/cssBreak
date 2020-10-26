##### 一、历史

1. CSS只是体系的重中之重
2. 早期以table为主（简单）
3. 后来以技巧性布局为主（难）
4. 现在有flexbox/grid（偏简单）
5. 响应式布局时必备知识

##### 二、常用布局方法

1. table表格布局   chapter4\03-table.html
   - 两种方式使用table布局
     - 直接使用table元素
     - 使用div，通过css种display：table来模拟table布局
2. float浮动 + margin（重要，国内主流）
   - 元素“浮动”
   - 脱离文档流，但不脱离文本流  chapter4\04-float.html  第一div
   - float
     - 对自身的影响
       - 形成“块”（BFC 形成区域，宽高自己决定）  chapter4\04-float.html  第一个div
       - 位置尽量靠上    chapter4\04-float.html  第二个div
       - 位置尽量靠左（靠右）  chapter4\04-float.html  第二个div
     - 对兄弟的影响
       - 上面贴非float元素
       - 旁边贴float元素
       - 不影响其他块级元素位置
       - 影响其他块级元素内部文本   chapter4\04-float.html  第一个div
     - 对父级元素的影响
       - 从布局上“消失”
       - 高度塌陷   chapter4\04-float.html  第二个div .container2
3. inline-block布局
   - 像文本一样的排列block元素
   - 没有清楚浮动等问题
   - 需要处理间隙
   - 自适应效果比较难实现，但对于定宽的布局可以使用
4. flexbox布局   chapter4\07-flex.html
   - CSS第一次提供真正布局的方式
   - 弹性盒子
   - 盒子本来就是并列的
   - 指定宽度即可
   - 兼容性不太好（需要写一些兼容语法）
5. 其他
   1. 盒子模型（设置width、height是给其内容设置的）
      - ![2020-08-29_113415](D:\coding\cssBreak\md\mdPic\第四章\2020-08-29_113415.png)
   2. display/position
      - 确定元素的显示类型 display   chapter4\01-display.html
        - block/inline/inline-block
      - 确定元素的位置 position  chapter4\02-position.html
        - static  
          - 按正常的文档流布局
        - relative  
          - 按文档流布局（因为还占据着空间），偏移相对于本身进行的
        - absolute  
          - 脱离文档流（对其他元素的布局不会造成影响）
          - 相对于最近的relative、absolute、fixed（不为static的position值）祖先元素（若没有，为body）进行定位
          - 使用此样式的元素的高度使用百分比，依赖父元素的高度计算，父元素找法同上（float则就是代码编写时的父元素）
        - fixed  r
          - 脱离文档流（相对于可视区域进行布局）
        - 脱离文档流后可能出现元素重叠现象，可通过设置z-index调整显示的上下位置（relative、absolute、fixed都可以设置）



##### 三、响应式设计和布局

1. 在不同设备上正常使用

2. 一般主要处理屏幕大小问题

3. 主要方法：

   - 隐藏（弹出菜单） + 折行（多行显示） + 自适应空间（除定长区域，其他位置自适应宽高）

   - rem / viewport / media query

     - rem 

       - 通过HTML字体大小来确定元素大小
       - 精确性不高

     - viewport

       - ```css
         <!-- 可视区域的大小就是屏幕的大小 -->
         <meta name="viewport" content="width=device-width, initial-scale=1.0" />
         ```

     - media query 根据不同大小的屏幕来设定样式  

       - 范围大的放在上面，范围小的放在下面

       - ```css
         @media (max-width: 640px) {
             .left {
                 display: none;
             }
         }
         ```

##### 四、CSS面试真题

1. 实现两栏（三栏）布局方法
   - 表格布局
   - float + margin 布局（主流方案，兼容性好）
   - inline-block布局（间隙记得处理）
   - flexbox布局
2. position：absolute / fixed有什么区别
   - 前者相对于最近absolute / relative / fixed 属性值的祖先元素（若没有，为body）进行定位
   - 后者相对于可视区域、屏幕（移动端）
3. display: inline-block的间隙
   - 原因：字符间距
   - 解决：消灭字符（删除空白字符）和消灭间距（字体大小设置为0）
4. 如何清楚浮动
   - 让盒子负责自己的布局，不要出现盒子内的元素影响其他地方的布局
   - overflow：hidden（auto）
   - ::after{ clear: both }
5. 如何适配移动端页面
   - viewport
   - rem / viewport / media query
   - 设计上：隐藏大部分元素，改为弹出方式  /  折行，横排改为纵排  /  不需要定长的区域自适应



##### 知识点

1. 布局主要在处理横向排列，纵向排列本身就做的很好，比如div

​	















