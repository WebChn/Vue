<template>
    <div class="list" ref="wrapper">
        <div>
            <div class="area">
                <div class="title border-topbottom">当前城市</div>
                <div class="button-list">
                    <div class="button-wrapper">
                        <div class="button">北京</div>
                    </div>
                </div>
            </div>
            <div class="area">
                <div class="title border-topbottom">热门城市</div>
                <div class="button-list">
                    <div class="button-wrapper" v-for="item in hot" :key="item.id">
                        <div class="button">{{item.name}}</div>
                    </div>
                </div>
            </div>

            <div 
                class="area" 
                v-for="(item, key) of cities" 
                :key="key"   
                :ref="key"
            >    <!--cities是对象  第二项指key指key值 -->
                <div class="title border-topbottom">{{key}}</div>
                <div class="item-list">
                    <div 
                        class="item border-bottom"
                        v-for="innerItem of item"
                        :key="innerItem.id"
                    >
                        {{innerItem.name}}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Bscroll from 'better-scroll'
export default {
    name: "CityList",
    props: {
        hot: Array,
        cities: Object,
        letter: String
    },
    mounted () {    // 生命周期函数  页面挂载完后执行
        this.scroll = new Bscroll(this.$refs.wrapper)
    },
    watch: {   // 监听器       实现了点击右侧字母  城市列会跳到对应的城市
        letter() {   //letter有变化 就执行这里的代码
            if (this.letter) {
                const element =  this.$refs[this.letter][0]  //通过￥refs可以获取对应（this.letter）字母对应的area区域
                this.scroll.scrollToElement(element)                                       // [0] 循环得到的element是一个数组  scrollToElement这个函数要接收的得是一个元素
            }
        }
    }
}
</script>

<!--
子标签用了左浮动 父标签要启动BFC(这里用了overflow hidden)
 -->
<style lang="stylus" scoped>
    @import '~styles/varibles.styl'
    .border-topbottom
        &:before
            border-color #cccccc
        &:after
            border-color #cccccc
    .list
        position absolute 
        overflow hidden
        top 1.58rem
        left 0
        right 0
        bottom 0
        .title
            line-height .54rem
            background #eeeeee
            padding-left .2rem
            color #666
            font-size .26rem
        .button-list
            overflow hidden
            padding .1rem .6rem .1rem .1rem
            .button-wrapper
                float left 
                width 33.33%
                .button
                    margin .1rem
                    padding .1rem 0
                    text-align center
                    border .02rem solid #ccc
                    border-radius .06rem
        .item-list
            .item
                line-height .76rem
                padding-left .2rem
            .border-bottom
                box-sizing border-box
                border-bottom 1px solid #cccccc
        

</style>
