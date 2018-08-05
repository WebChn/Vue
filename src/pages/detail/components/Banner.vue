<template>
    <div>
        <div class="banner" @click="handleBannerClick">
            <img class="banner-img" src="//img1.qunarzz.com/sight/p0/1603/3b/3bd311262ee06d8c90.img.jpg_600x330_cd2e3bf7.jpg" alt="">
            <div class="banner-info">
                <div class="banner-title">广州长隆旅游度假区(AAAAA景区)</div>
                <div class="banner-number">
                    <span class="iconfont banner-icon">&#xe626;</span>
                    39
                </div>
            </div>
        </div>
        <common-gallary 
            :imgs="imgs"
            v-show="showGallary"
            @close="handleGallaryClose" 
        ></common-gallary>  <!--close事件是src/common/gallary/Gallary.vue发送出来的-->
    </div>
</template>

<script>
import CommonGallary from 'common/gallary/Gallary'
export default {
    name: 'DetailBanner',
    data () {
        return {
            showGallary: false,
            imgs: ["http://img1.qunarzz.com/sight/p0/1707/33/33d47d55bbab5c84a3.img.jpg_r_800x800_a9489697.jpg", //如果没有收到数据 就显示这个
                       "http://img1.qunarzz.com/sight/p0/1707/29/29e09ca18a802c5ca3.img.jpg_r_800x800_84729340.jpg"]
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
        CommonGallary
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
