<template>
    <div> 
        <home-header></home-header>
        <home-swiper></home-swiper>
        <home-icons></home-icons>
        <home-recommend></home-recommend>
        <home-weekend></home-weekend>
    </div>
</template>

<script>
import HomeHeader from './components/Header' // 引入了局部组件
import HomeSwiper from './components/Swiper' // 引入Swiper.vue组件
import HomeIcons from './components/Icons'
import HomeRecommend from './components/Recommend'
import HomeWeekend from './components/Weekend' 
export default {
  name: 'Home', 
  components: {
      HomeHeader: HomeHeader,     // 把局部组件注册到Home组件里 就可以在Home模板里使用
      HomeSwiper: HomeSwiper,   //es6语法 键和值相同 可以省略一部分
      HomeIcons,    
      HomeRecommend,
      HomeWeekend
  }
}
</script>

<style>
    .home {
        font-size: 50px;
    }
</style>

