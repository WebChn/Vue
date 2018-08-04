<template>
    <div> 
        <home-header></home-header>
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
import { mapState } from 'vuex'
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
          lastCity: '',
          swiperList: [],
          iconList: [],
          recommendList: [],
          weekendList: []
      }
  },
  computed: {
      ...mapState(['city'])
  },
  methods: {
      getHomeInfo() {
          axios.get('/api/index.json?city=' + this.city)
          .then(this.getHomeInfoSucc)
      },
      getHomeInfoSucc(res) {
          res = res.data
          if (res.ret && res.data) {
              const data = res.data
              this.swiperList = data.swiperList
              this.iconList = data.iconList
              this.recommendList = data.recommendList
              this.weekendList = data.weekendList
          }
      }
  },
  mounted () {   // 生命钩子函数   页面挂载好后执行
      this.lastCity = this.city
      this.getHomeInfo()
  },
  activated () {   //用来弥补keep-alive标签用 当页面重新渲染时执行
      if (this.lastCity !== this.city) {  // 当选择的城市与当前城市不同时执行
        this.lastCity = this.city
        this.getHomeInfo()
      }

  }
}
</script>

<style>
    .home {
        font-size: 50px;
    }
</style>

