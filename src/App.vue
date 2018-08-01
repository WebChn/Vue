<template>      <!--单页面组件 这个文件相当于id为app的组件 这是组件的模板 -->
  <div id="app">
    <!--下面一行显示的是当前路由地址所对应的内容   -->
    <router-view/>
  </div>
</template>

<script>   //这是组件的逻辑关系
export default {
  name: 'App'
}
</script>

<style>        /*这是组建的css样式*/
</style>
