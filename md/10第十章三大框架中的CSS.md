##### 一、框架中的CSS

1. Angular  Vue  React 三大框架

2. Angular  Vue 内置样式集成

3. React 一些业界实践

4. 通用的处理组件内css方式（限制范围）

   1. ShadowDOM

      - 逻辑上一个DOM（其实内部存在结构）
      - 结构上存在子集结构
      - 在调试面板中打开shadowDOM开关，可以观看内部结构

   2. Scoped CSS

      - 限定了范围的CSS

      - 无法影响外部元素

      - 外部样式一般不影响内部

      - 可通过 /deep/ 或 >>> 穿透

      - 模拟Scoped CSS（ShadowDOM与Scoped CSS兼容性不太好）

        - 方案一：随机选择器

          - 使用CSS modules

        - 方案二：随机属性

          - ```html
            <div abcdefg >1111</div>
            ```

          - div[abvdefg] {   }

##### 二、Angular

1. Angular.js（1.x）

   - 没有样式集成能力

2. Angular（2+）

   - 提供样式封装能力
   - 与组件深度集成

3. 样式处理的三种方式

   - encapsulation（指定样式如何封装 ）

     - Emulated模拟(模拟Scoped CSS)

       ​      此时，所有组件的style都在head中，但css选择器名会加属性，从而保证唯一性

       ​      不支持 :host 写法

     - Native原生（ShadowDOM）

       ​      此种方式不会对css选择器的名称做改变，因为shdowDOM本身就是封闭的（style就在shadowDOM内定义）

     - None不做任何额外处理

       ​      此时，所有组件的style都在head中，css选择器也不会特殊处理，来保证唯一性

     - 不支模拟 Scoped CSS 方案一

4. 打包后

   - Angular不支持提取出组件的css样式，因为其思想的组件模板与样式是强关联性的，若提出，导致许多特性无法实现
   - 目前只能将全局的css样式单独生成css文件

5. 官方脚手架 

   - ng

三、Vue

1. 样式处理的两种方式
   - style上加 scoped 属性
     - 模拟Scoped CSS，在原有选择器的基础上加上属性，保证唯一性
   - style上加 module 属性（CSS Module，Vue内置webpack配置文件中存在）
     - 直接替换原有选择器，改为UUID，并将原有选择器与UUID的映射关系挂载到当前Vue组件实例，属性名为$style
   - 不支持ShadowDOM
2. 打包后
   - 打包后会有css、js，不区分是否为组件内css样式，都会放在css文件内
3. 官方脚手架
   - vue-cli

##### 四、React

1. 概况
   - 官方没有集成方案
   - 社区方案众多
     - css modules
     - （babel）react-css-modules
     - styled components （对组件进一步封装，将样式封装到组件内）
     - styled jsx（使得jsx能直接写样式）
   - 工程结构
     - chapter10\react\demo\src\index.js  入口
2. 处理方式
   - 首先要通过eject将react内置的配置文件显示，用于修改
   - 1.css modules
     - webpack.config.dev在css-loader增加配置参数
     - 引入css处赋值变量，template部分改为在变量中获取属性
       - 注意：App-header    需要通过中括号获取  css[ ' App-header  ' ]
   - 2.styled components
     - 通过npm下载styled-components插件
     - 在需要的组件内引入，赋值给styled
     - const Div = styled.div ‘ olor: red ’ ;（此时Div可理解为自定义样式的HTML标签）
     - 使用自定义样式的HTML标签时加上属性，Div中可定义函数，通过属性进行逻辑，返回不同样式组合
     - 还支持复用，在复用的基础上再声明独有的CSS属性
3. 官方脚手架
   - create-react-app







