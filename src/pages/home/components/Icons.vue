<template>
    <div class="icons">
        <swiper :options="swiperOption">
            <swiper-slide v-for="(page, index) of pages" :key="index">  <!--实现根据小图标数量来轮播的效果 -->
                <div 
                    class="icon" 
                    v-for="item of page" 
                    :key="item.id"
                >
                    <div class="icon-img">
                    <img class="icon-img-content" :src="item.imgUrl" alt="">
                    </div>
                    <p class="icon-desc">{{item.desc}}</p>
                </div>
            </swiper-slide>
        </swiper>
        
    </div>
</template>

<script>
export default {
    name: 'HomeIcons',
    props: {
        list: Array
    },
    data () {
        return {
             swiperOption: {
                autoolay: false    //轮播图不会自动左右滚动
            }
        }
    },
    computed: {    //该算法 将一个有9个元素的一维数组转化为二维数组
        pages () {
            const pages = []
            this.list.forEach((item, index) => {
                const page = Math.floor(index / 8)
                if (!pages[page]) {
                    pages[page] = []
                }
                pages[page].push(item)
            })
            return pages
        }
    }
}
</script>
<!--
.icons 的样式作用是占位 高宽比 1:2 也就是50%
 -->

<style lang="stylus" scoped>
    @import '~styles/varibles.styl'
    @import '~styles/mixins.skyl'
    .icons >>> .swiper-container
        height 0
        padding-bottom 50%
    .icons
        margin-top .1rem
        .icon
            position relative
            overflow: hidden
            float: left
            width: 25%
            height 0
            padding-bottom: 25%
            .icon-img
                position: absolute
                top: .1rem
                right: 0
                left: 0
                bottom: .44rem
                box-sizing border-box
                padding .rem
                .icon-img-content
                    display block
                    margin 0 auto
                    height 90%
            .icon-desc
                position: absolute
                right: 0
                left: 0
                bottom: 0
                height .44rem
                line-height .44rem
                text-align center
                color $darkTextColor
                ellipsis()
</style>
