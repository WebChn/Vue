// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import fastClick from 'fastclick'
import VueAwesomeSwiper from 'vue-awesome-swiper' /* 导入VueAwesomeSwiper这个插件 */
import 'babel-polyfill'
import store from './store'
import 'styles/reset.css'
import 'styles/border.css'/* 一像素边框解决方案 */
import 'styles/iconfont.css'
import 'swiper/dist/css/swiper.css'
Vue.config.productionTip = false
fastClick.attach(document.body) /* 移动端300毫秒点击事件延迟问题解决 */
Vue.use(VueAwesomeSwiper) /* 输入这一行后 就可以用VueAwesomeSwiper 这个插件了 */

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router, // ES6语法 router： router  键和值内容相同可以简写为router
  store, // 通过vuex 每个组件都可以提取到这里的数据
  components: { App }, // ES6语法 {App： App} 两个相同 可以简写成{App}
  template: '<App/>'
})

// 路由就是根据网址的不同，返回不同的内容给用户
