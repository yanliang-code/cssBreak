##### 一、CSS基础

1. 概念
   - 全称：Cascading Style Sheet （层叠样式表）
   - chapter3\css-basic.html
   - 选择器基本规则
     - 选择器{ 属性：值；属性：值}    此处的分号；是分割符，起分割效果，不是语句结束符
     - 用于匹配HTML元素，有不同的匹配规则，多个选择器可叠加
2. 选择器
   - 用于匹配HTML元素
     - 浏览器解析CSS样式：由右到左，目的是加快解析速度，更快速的确定不符合要求的元素
   - 分类和权重
     - 分类（9种）
       - 元素选择器  a{}
       - 伪元素选择器  ::before{}  
         - 真实存在的元素，在页面中可以有内容、样式
         - 必须有content属性，值可为空字符；无此属性，则不显示此伪元素
       - 类选择器  .link{}
       - 属性选择器 [type=radio]{}
       - 伪类选择器  :hover{}
         - 一个元素的状态，本身不是一个元素，要依附于其他具体元素
       - ID选择器  #id{}
         - 一般是指定一个区域，不会用于多个元素
       - 组合选择器  [type=checkbox] + label{}
         - 下方兄弟元素为复选框，并且标签为label，该样式会作用于此label元素上
       - 否定选择器  :not(.link){}
         - 除了符合.link{}的元素外的元素们
       - 通用选择器  *{}  
         - 全匹配
     - 权重
       - ID选择器  #id{}  +100
       - 类  属性   伪类  +10
       - 元素  伪元素  +1
       - 其他选择器  +0
       - 除选择器本身的其他权重
         - !important  优先级最高
         - 元素属性  优先级高（内联样式）
         - 相同权重  后写的生效
     - 简单例子
       - ![2020-08-27_220252](D:\coding\cssBreak\md\mdPic\第二章\2020-08-27_220252.png)
       - 10个类选择器，不会与1个id选择器平起平坐；所以说是不进位
       - 先生效左侧#id .link a[href]，再生效右侧 #id .link.active，后生效的会覆盖先生效的相同样式
       - chapter3\selector-priority.html

##### 二、非布局样式

1. 字体、字重、颜色、大小、行高（字体相关）

   1. 字体  chapter3\fonts.html
      - 字体族
        - serif  称体，周围会有弯曲的小勾子，例如：宋体
        - sans-serif  非称体，规矩的字体，例如：微软雅黑
        - monospace  等宽字体  每个字体宽度相同
        - cursive  手写体
        - fantasy  花体（一般在英文里存在）
      - 多字体fallback
        - 按指定的字体顺序，左到右挨个尝试，直到当前浏览器支持
      - 网络字体、自定义字体
        - 指定什么字符对应什么样子
      - iconfont
        - 指定什么字符对应什么图标
        - 使用伪元素选择器实现
   2. 行高
      - 行高的构成  chapter3\inline.html
      - 行高的现象及方案   chapter3\line-height.html
        - 文字在容器中垂直居中（第一个div   line-height）
        - 不同fontSize的文字垂直具中（第二个div  文本对齐方式vertical-align）
        - img在容器下方有留白（第三个div）

2. 背景、边框（盒子相关）

   1. 背景
      - 背景颜色  chapter3\background.html
        - 背景颜色四种定义方式
      - 渐变色背景   chapter3\background.html   .c2
      - 多背景叠加   chapter3\background.html   .c2
      - 背景图片和属性（雪碧图） chapter3\background-image.html
        - 背景各属性的含义
        - 雪碧图的优点：节省http请求数量
      - base64和性能优化（只适用于小图标）
        - 其实是文本格式，代表图片本身（体积会变成原来的4/3倍）
        - 优点：节省http请求数量
        - 缺点：1.图片转成base64本身变大  2.由于本身变大，所在的js也变大  3.解码开销增大
      - 多分辨率适配  chapter3\background-image.html
        - 一般移动端2、3个像素对用PC端1个像素，详情看指定html
   2. 边框  chapter3\border.html
      - 边框属性：线型、大小、颜色
      - 边框背景图
      - 边框衔接（三角形）

3. 滚动、换行

   1. 滚动  chapter3\scroll.html
      - 出现情况
        - 内容比容器多的情况，需要滑动轮出现，让其看全内容
      - 滚动行为和滚动条
        - visible：滚动条隐藏，内容超出容器显示
        - hidden：滚动条隐藏，超出容器的内容隐藏
        - scroll：不管内容是否超出容器，都会显示滚动条（win如此，mac中scroll效果同auto）
        - auto：内容超出容器，显示滚动条；不超出，不显示
        - ![2020-08-29_070813](D:\coding\cssBreak\md\mdPic\第三章\2020-08-29_070813.png)
   2. 文字折行  chapter3\wrap.html
      - overflow-wrap(word-wrap) 通用换行控制
        - 换行时是否保留单词
      - word-break 针对多字节文字
        - 是否把单个字母看作一个单位，是否把单个单词看作一个单位
      - white-space 空白处是否断行
        - 属性值nowrap，不换行

4. 粗体、斜体、下划线

   1. 字重（粗体）font-weight   chapter3\font-weight.html
   2. 斜体  font-style：itatic
   3. 下划线  text-decoration
   4. 指针 cursor

   

##### 三、CSS Hack

- Hack即不合法但生效的写法（hack写法写在后面）
- 主要用于区分不同浏览器（兼容IE6、7、8，只有特定的浏览器能生效的）

- 缺点：难理解、难维护、易失效
- 替代方案：
  - 特性检测（检测当前使用的浏览器以及版本）
  - 针对性加class



##### 四、第三章涉及的案例

- 雪碧图
- 边框图片炫酷效果
- 选择器上的应用（美化checkbox）chapter3\checkbox.html
  - 思路：隐藏原生的控件，通过选择器写好原生控件状态变化后，美化控件的样式，通过+选择器定位
  - 其他应用：树形的收缩与展开，通过判断父级节点的勾选框是否勾选，决定后代元素是否显示
- 字体图标



##### 五、CSS面试真题

1. CSS样式（选择器）的优先级
   - 计算权重确定
   - ！important
   - 内联样式
   - 后写的优先级高
2. 雪碧图的作用
   - 减少HTTP请求书，提高加载性能
   - 有些情况下可以减少图片的大小
3. 自定义字体的使用场景
   - 宣传/品牌/banner等固定文案
   - 字体图标
4. base64使用
   - 减少HTTP请求
   - 适用于小图片
   - base64的体积约为原图的4/3
5. 伪类和伪元素的区别
   - 伪类表状态 hover
   - 伪元素是真的有元素（必须有content值，空字符串也行，无值则不存在）
   - 前者单冒号，后者双冒号（由于历史原因，有可能后者也需要携程单冒号）
6. 如何美化checkbox
   - label[for]和id
   - 隐藏原生input
   - :checked + label

​      













1. 

   























