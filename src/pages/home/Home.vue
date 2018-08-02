<template>
    <div> 
        <home-header></home-header>
        <home-swiper></home-swiper>
        <home-icons></home-icons>
    </div>
</template>

<script>
import HomeHeader from './components/Header' // 引入了局部组件
import HomeSwiper from './components/Swiper' // 引入Swiper.vue组件
<<<<<<< HEAD
import HomeIcons from './components/Icons'

=======
import HomeIcons from './components/Icons'   // 引入了Icons.vue组件
>>>>>>> origin/index-icons
export default {
  name: 'Home', 
  components: {
      HomeHeader: HomeHeader,     // 把局部组件注册到Home组件里 就可以在Home模板里使用
      HomeSwiper: HomeSwiper,   //es6语法 键和值相同 可以省略一部分
      HomeIcons    
  }
}
</script>

<style>
    .home {
        font-size: 50px;
    }
</style>

