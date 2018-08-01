import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home.vue' // @指src这个目录  .vue后缀如果不加 系统也会自动去找
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/', // 当用户访问根路径时
      name: 'Home',
      component: Home
    }
  ]
})
