<template>
  <div :class="$style.demo">Hello, I'm {{ name }}</div>
  <!-- <div class="demo">Hello, I'm {{ name }}</div> -->
</template>

<script>
export default {
  name: "Demo",
  data() {
    return {
      name: "demo"
    };
  }
};
</script>
/* Vue内置CSS样式处理 scoped 模拟Scoped
CSS，在原有选择器的基础上加上属性，保证唯一性 module
直接替换原有选择器，改为UUID，并将原有选择器与UUID的映射关系挂载到当前Vue组件实例，属性名为$style
*/
<style module>
.demo {
  color: red;
}
</style>
