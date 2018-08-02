<template>
    <div> 
        <home-header :city="city"></home-header>
        <home-swiper :list="swiperList"></home-swiper>
        <home-icons :list="iconList"></home-icons>
        <home-recommend :list="recommendList"></home-recommend>
        <home-weekend :list="weekendList"></home-weekend>
    </div>
</template>

<script>
import HomeHeader from './components/Header' // 引入了局部组件
import HomeSwiper from './components/Swiper' // 引入Swiper.vue组件
import HomeIcons from './components/Icons'
import HomeRecommend from './components/Recommend'
import HomeWeekend from './components/Weekend'
import axios from 'axios'
export default {
  name: 'Home', 
  components: {
      HomeHeader: HomeHeader,     // 把局部组件注册到Home组件里 就可以在Home模板里使用
      HomeSwiper: HomeSwiper,   //es6语法 键和值相同 可以省略一部分
      HomeIcons,    
      HomeRecommend,
      HomeWeekend
  },
  data () {
      return {
          city: '',
          swiperList: [],
          iconList: [],
          recommendList: [],
          weekendList: []
      }
  },
  methods: {
      getHomeInfo() {
          axios.get('/api/index.json')
          .then(this.getHomeInfoSucc)
      },
      getHomeInfoSucc(res) {
          res = res.data
          if (res.ret && res.data) {
              const data = res.data
              this.city = data.city 
              this.swiperList = data.swiperList
              this.iconList = data.iconList
              this.recommendList = data.recommendList
              this.weekendList = data.weekendList
          }
      }
  },
  mounted () {   // 生命钩子函数   页面挂载好后执行
      this.getHomeInfo()
  }
}
</script>

<style>
    .home {
        font-size: 50px;
    }
</style>

