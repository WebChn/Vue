<template>
    <div>
        <div
            class="item"
            v-for="(item, index) of list"
            :key="index"
        >
            <div class="item-title border-bottom">
                <span class="item-title-icon"></span>
                {{item.title}}
            </div>
            <div v-if="item.children" class="item-children">    <!-- 递归组件 -->
                <detail-list :list="item.children">{{item.children.title}}</detail-list>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'DetailList', // 组件名字的一个作用之一 方便使用递归组件
  props: {
    list: Array
  }
}
</script>

<style lang="stylus" scoped>
    .item-title
        line-height .8rem
        font-size .32rem
        padding 0 .2rem
        border-bottom 0.001rem solid #ddd
    .item-title-icon
        position relative
        left .06rem
        top .06rem
        display inline-block
        width .36rem
        height .36rem
        background url(//s.qunarzz.com/piao/image/touch/sight/detail.png) 0 -.45rem no-repeat
        margin-right .1rem
        background-size .4rem 3rem;
    .item-children
        padding 0 .2rem
</style>
