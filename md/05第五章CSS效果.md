##### 一、效果属性

1. 这个效果怎么实现？？？
   - box-shadow
   - text-shadow
   - border-radius
   - background
   - clip-path

##### 二、CSS效果具体实现

1. box-shadow  chapter5\01-box-shadow.html
   - 会在原图基础上在指定位置显示一个相同的图形，可以通过改变属性控制显示效果（相当于复制）
     - box-shadow：64px 64px 24px 40px rgba(0, 0, 0, 0.4)
     - 64px 64px   原图相对于x、y轴的偏移量
     - 24px   外层模糊的阴影效果
     - 40px  偏移后外层实心效果范围
     - ![2020-08-30_084035](D:\coding\cssBreak\md\mdPic\第五章\2020-08-30_084035.png)
   - 应用
     - 营造层次感（立体感）  例如：内凹外凸的按钮
     - 充当没有宽度的边框（模糊那层设置为0，此边框没有宽度，不影响排版） chapter5\01-box-shadow.html
     - 特殊效果   例如：一个div画机器猫   chapter5\03-box-shadow.html
2. text-shadow
   - 相对于box-shadow，少了一个参数,不能同时设置实阴影、虚阴影
     - text-shadow: 1px 1px 0 #aaa;
     - 1px 1px   原图相对于x、y轴的偏移量
     - 0 设置为0就是实阴影，和原图一样宽；大于0，就会逐渐变成虚阴影
   - 应用  chapter5\04-text-shadow.html
     - 立体感
     - 印刷品质感
3. border-radius   chapter5\05-border-radius.html
   - 圆角矩形   border-radius
   - 圆形    border-radius：50%
   - 半圆 / 扇形   指定具体方向设置border-radius
   - 一些奇怪的角角    指定具体方向的水平、垂直半径设置
4. background
   - 纹理、图案（通过线性、镜像渐变、背景图来叠加显示）
   - 渐变
   - 雪碧图动画  chapter5\06-background-animate.html
     - 不断移动position来动态变化背景图，达到动态效果
   - 背景图片尺寸适应  chapter5\07-background-size.html
5. clip-path   chapter5\08-clip-path.html
   - 对容器进行裁剪
   - 常见几何图形（指定关键字）
   - 自定义路径（指定id，html设置svg路径）
   - 浏览器兼容性不太好
6. 2D、3D变换   chapter5\09-3d.html
   - transform
     - tanslate  位移
     - scale  缩放
     - skew  斜切（扭曲）
     - rotate  旋转
     - ![2020-08-30_122449](D:\coding\cssBreak\md\mdPic\第五章\2020-08-30_122449.png)
   - 应用
     - 性能不太好
     - 复杂场景下，与预期效果不同（浏览器bug）

##### 三、CSS面试真题

1. 如何用一个div画XXX
   - box-shadow无限投影（产生无数个目标元素）
   - ::before
   - ::after
2. 如何产生不占空间的边框
   - box-shadow
   - outline
   - box-sizing：border-box
3. 如何实现圆形元素（头像）
   - border-radius：50%
4. 如何实现IOS图标的圆角
   - clip-path:（svg）
5. 如何实现半圆、扇形等图形
   - border-radius组合：
     - 有无边框
     - 边框粗细
     - 圆角半径
6. 如何实现背景图居中显示 / 不重复 / 改变大小
   - background-position
   - background-repeat
   - background-size( cover / contain )
7. 如何平移 / 放大一个元素
   - transform：translateX(100px)
   - transform：scale(2)
8. 如何实现3D效果
   - perspective：500px    透视角度
   - transform-style：preserve-3d    3d效果
   - transform：translate  rotate  ....    图形变换















