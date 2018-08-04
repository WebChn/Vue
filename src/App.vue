<template>      <!--单页面组件 这个文件相当于id为app的组件 这是组件的模板 -->
  <div id="app">
    <keep-alive>  <!--vue自带的标签 路由的内容被加载过一次后 就把内容放到内存中 下次进去这个路由时不用重新渲染页面 会直接从内容拿出来显示 提高了性能 -->
      <router-view/><!--下面一行显示的是当前路由地址所对应的内容   -->
    </keep-alive>
  </div>
</template>

<script>   //这是组件的逻辑关系
export default {
  name: 'App'
}
</script>

<style>        /*这是组建的css样式*/
</style>
