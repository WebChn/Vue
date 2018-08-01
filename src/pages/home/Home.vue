<template>
    <div> 
        <home-header></home-header>
    </div>
</template>

<script>
import HomeHeader from './components/Header' // 引入了局部组件
export default {
  name: 'Home',
  components: {
      HomeHeader: HomeHeader     // 把局部组件注册到Home组件里 就可以在Home模板里使用
  }
}
</script>

<style>
    .home {
        font-size: 50px;
    }
</style>

