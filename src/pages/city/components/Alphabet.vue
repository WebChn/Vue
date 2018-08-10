<template>
    <ul class="list">
        <li
            class="item"
            v-for="item of letters"
            :key="item"
            :ref="item"
            @touchstart.prevent="handleTouchStart"
            @touchmove="handleTouchMove"
            @touchend="handleTouchEnd"
            @click="handleLetterClick"
        >
            {{item}}
        </li>
    </ul>
</template>
<!--
做了两点性能提升
第一点用生命周期函数uodated计算了startY的值
第二点对handleTouchMove做了一个函数节流
 -->
<script>
export default {
  name: 'CityAlphabet',
  props: {
    cities: Object
  },
  data () {
    return {
      touchStatus: false, // 定义一个标识符 用来让touchMove事件在touchStart事件之后才能触发
      startY: 0,
      timer: null
    }
  },
  updated () { // 生命周期钩子 当页面数据更新时并且完成渲染后执行
    this.startY = this.$refs['A'][0].offsetTop
  },
  computed: {
    letters () {
      const letters = []
      for (let i in this.cities) {
        letters.push(i)
      }
      return letters// letters = ['A','B','C',...]
    }
  },
  methods: {
    handleLetterClick (e) { // 当点击时 会接受到e事件对象
      this.$emit('change', e.target.innerText)// 第一项向外触发的事件 第二项是事件携带的内容
    },
    handleTouchStart () {
      this.touchStatus = true
    },
    handleTouchMove (e) { // 实现触摸右侧的字母上下滑动到哪里 城市列表就会对应跳到哪
      if (this.touchStatus) {
        if (this.timer) { // 如果正在做手指滚动 在16毫秒之间 如果又做了手指滚动 那么这里会把第一次的时间取消
          clearTimeout(this.timer)
        }
        this.timer = setTimeout(() => { // const startY = this.$refs['A'][0].offsetTop   这是定值 在循环里性能不高 所以用了一个生命周期钩子来优化   //object.offsetTop 获取对象距离顶部的距离  这里求的是第一个字符A距离顶部的位置
          const touchY = e.touches[0].clientY - 79// touches数组是事件对象来的  object.clientY事件距离最顶部的距离 79list上面的区域高度
          const index = Math.floor((touchY - this.startY) / 20)
          if (index >= 0 && index < this.letters.length) {
            this.$emit('change', this.letters[index])
          }
        }, 16)
      }
    },
    handleTouchEnd () {
      this.touchStatus = false
    }
  }
}
</script>

<style lang="stylus" scoped>
    @import '~styles/varibles.styl'
    .list
        display flex
        flex-direction column
        justify-content center
        position absolute
        top 1.58rem
        right 0
        bottom 0
        width .4rem
        .item
            line-height .4rem
            text-align center
            color $bgColor

</style>
