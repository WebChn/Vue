import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home.vue' // @指src这个目录  .vue后缀如果不加 系统也会自动去找
import City from '@/pages/city/City.vue' // .vue的后缀还是加上好 虽然vue会自动查找 但是刚刚改了代码却没能显示出来 还是有点问题的
import Detail from '@/pages/detail/Detail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/', // 当用户访问根路径时
      name: 'Home',
      component: Home
    }, {
      path: '/city', // 当用户访问/city路径时
      name: 'City',
      component: City
    }, {
      path: '/detail/:id', // 动态路由 ：id前路径必须是反斜杠  后面带的参数会放到id的变量里
      name: 'Detail',
      component: Detail
    }
  ]
})
