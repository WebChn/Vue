// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import fastClick from 'fastclick'
import './assets/styles/reset.css'
import './assets/styles/border.css'/* 一像素边框解决方案 */

Vue.config.productionTip = false
fastClick.attach(document.body) /* 移动端300毫秒点击事件延迟问题解决 */
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router, // ES6语法 router： router  键和值内容相同可以简写为router
  components: { App }, // ES6语法 {App： App} 两个相同 可以简写成{App}
  template: '<App/>'
})

// 路由就是根据网址的不同，返回不同的内容给用户
