##### 一、概述

1. 动画的原理
   - 视觉暂留作用
   - 画面逐渐变化（1s出现40、60个画面）
2. 动画的作用
   - 让人产生愉悦感
   - 引起注意
   - 信息反馈
   - 掩饰  例如：请求数据加载慢
3. CSS动画类型
   - transition补间动画
     - 元素从一个状态转化为另一个状态，根据状态转化，计算出的动画
   - keyframe关键帧动画
     - 可指定多个状态转化时的动画，每个变化动画都是一个关键帧
   - 逐帧动画
     - 按顺序执行动画

##### 二、动画类型

1. 补间动画   chapter6\01-transition.html  与元素状态的变化有关

   - 动画写法
     - transition: width 1s, background 3s;  指定多个属性不同动画效果
     - chromeTool，点击Esc，通过左侧三个点将Animations显示出，观看动画过程变化
     -  过渡动画（简写顺序）
       -  动画开始前停留的时长 transition-delay
       - 动画属性 transition-property
       - 时长 transition-duration
       - 缓动（定义动画进度与时间的关系）transition-timing-function
         - ![2020-08-30_173844](D:\coding\cssBreak\md\mdPic\新建文件夹 (2)\2020-08-30_173844.png)

   - 动画属性可包含如下
     - 位置 - 平移（left / right / margin / transform）
     - 方位 - 旋转（transform）
     - 大小 - 缩放（transform）
     - 透明度（opacity）
     - 其它 - 线性变化（transform）

2. 关键帧动画  chapter6\02-keyframe.html

   - 相当于多个补间动画
   - 与元素状态的变化无关
   - 定义更加灵活
     - 控制播放几次
     - 正着播放、反着播放
     - 停止播放时停留的位置
     - 当前动画的状态

3. 逐帧动画（也属于关键帧动画，特殊的一种） chapter6\03-animal.html

   - 适用于无法补间计算的动画
     - 补间计算：就是过渡，状态变化的间隙如何进行过渡
   - 资源较大
   - 使用steps()
     - 去除补间（过渡），直接到指定时间，切换到指定状态
   - 适用场景
     - 动画的面积比较小
     - 动画本身时长不大（循环播放不累加）



##### 三、CSS面试真题

1. CSS动画实现方式有几种（注重具体使用的写法）
   - transition  补间动画（过渡动画）
   - keyframes（animation） 关键帧动画
2. 过渡动画和关键帧动画的区别
   - 过渡动画需要有状态变化
   - 关键帧动画不需要状态变化
   - 关键帧动画能控制更精细
3. 如何实现逐帧动画
   - 使用关键帧动画
   - 去掉补间 / 过渡（steps）
4. CSS动画的性能
   - 性能不坏（CSS指定的属性不过，浏览器已内置实现）
   - 部分情况下优于JS
   - 但JS可以做到更好
   - 部分高危属性  box-shadow等  耗CPU