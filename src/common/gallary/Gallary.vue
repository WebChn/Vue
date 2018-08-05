<template>
    <div class="container" @click="handleGallaryClick">
        <div class="wrapper">
            <swiper :options="swiperOptions">  <!--实现轮播图显示页码的一步 -->
                <swiper-slide 
                    v-for="(item, index) in imgs"
                    :key="index"
                >
                    <img class="gallary-img" :src="item">
                </swiper-slide>
               <div class="swiper-pagination"  slot="pagination"></div>  <!--专门用来显示分页-->
            </swiper>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CommonGallary',
    props: {
        imgs: {
            type: Array,
            default () { // es6语法  等于 default: function () {}
                return []
            }

        }
    },
    data () {
        return {
            swiperOptions: {
                pagination: '.swiper-pagination',  // 使轮播图出现分页效果
                paginationType: 'fraction',   // 显示分页的形式是分号形式
                observeParents: true,
                observer: true   // Swiper插件只要监听到这个元素或者父级元素的dom结构有变化时 就会自动刷新一次
            }
        }
    },
    methods: {
        handleGallaryClick () {
            this.$emit('close')
        }
    }
}
</script>

<style lang="stylus" scoped>
    .container >>> .swiper-container
        overflow inherit
    .container
        display flex
        flex-direction column 
        justify-content center
        z-index 99
        position fixed
        left 0
        right 0
        top 0
        bottom 0
        background #000
        .wrapper
            height 0
            width 100%
            padding-bottom 100%
            .gallary-img
                width 100%
            .swiper-pagination
                color #ffffff
                bottom -1rem
</style>
