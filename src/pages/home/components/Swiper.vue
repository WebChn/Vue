<template>
    <div class="wrapper">
        <swiper :options="swiperOption" v-if="showSwiper">
            <swiper-slide v-for="item of list" :key="item.id">
                <img class="swiper-img" :src="item.imgUrl">
            </swiper-slide>
            <div class="swiper-pagination"  slot="pagination"></div>  <!--专门用来显示分页-->
        </swiper>
    </div>
</template>

<script>
export default {
    name: 'HomeSwiper',
    props: {
        list: Array
    },
    data () {            //es6语法  es5语法是 data： function() {}, 非根组件data定义得以函数形式
        return {
            swiperOption: {
                pagination: '.swiper-pagination', //使轮播图上出现切换界面的提示点
                loop: true//使轮播支持循环轮播 
            }
        }
    },
    computed: {    
        showSwiper () {    // 使得轮播图一开始默认第一张 
            return this.list.length   
        }
    }
}
</script>
<!--
lang="stylus"表示使用stylus语法来写css
scoped表示选择器只在该组件里有用
        overflow: hidden
        width: 100%
        height: 0
        padding-bottom: 24.5%  实现图片宽高比例自适应
.wrapper >>> .swiper-pagination-bullet-active  使后者不受scoped属性的影响 可以在该组件里修改其他组件的样式  
 
 -->
<style lang="stylus" scoped>   
    .wrapper >>> .swiper-pagination-bullet-active
            background: #fff !important 
    .wrapper
        overflow: hidden
        width: 100%
        height: 0
        padding-bottom: 26.5% 
        background: #eeeeee
        
        .swiper-img
            width: 100%
</style>
