<template>
    <div>
        <div class="banner" @click="handleBannerClick">
            <img class="banner-img" :src="bannerImg">
            <div class="banner-info">
                <div class="banner-title">
                    {{this.sightName}}
                </div>
                <div class="banner-number">
                    <span class="iconfont banner-icon">&#xe626;</span>
                    {{this.bannerImgs.length}}
                </div>
            </div>
        </div>
        <fade-animation> <!--组件标签内部的内容作为插槽的形式 会出现在slot标签里-->
            <common-gallary
                :imgs="bannerImgs"
                v-show="showGallary"
                @close="handleGallaryClose"
            ></common-gallary>  <!--close事件是src/common/gallary/Gallary.vue发送出来的-->
        </fade-animation>
    </div>
</template>

<script>
import CommonGallary from 'common/gallary/Gallary'
import FadeAnimation from 'common/fade/FadeAnimation'
export default {
  name: 'DetailBanner',
  props: {
    sightName: String,
    bannerImg: String,
    bannerImgs: Array
  },
  data () {
    return {
      showGallary: false
    }
  },
  methods: {
    handleBannerClick () {
      this.showGallary = true
    },
    handleGallaryClose () {
      this.showGallary = false
    }
  },
  components: {
    CommonGallary,
    FadeAnimation
  }
}
</script>

<style lang="stylus" scoped >
    .banner
        position relative
        overflow hidden
        height 0
        padding-bottom 55%
        .banner-img
            width 100%
        .banner-info
            position absolute
            display flex
            left 0
            right 0
            bottom 0
            line-height .6rem
            color #fff
            background-image linear-gradient(top,  rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8))
            .banner-title
                flex 1
                font-size .32rem
                padding .2rem
            .banner-number
                height .32rem
                line-height .32rem
                margin-top .4rem
                padding 0 .4rem
                border-radius .2rem
                background rgba(0, 0, 0, .8)
                font-size .24rem
            .banner-icon
                font-size .24rem

</style>
