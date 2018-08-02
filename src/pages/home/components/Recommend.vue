<template>
    <div>
        <div class="title">热销推荐</div>
        <ul>
            <li class="item" border-bottom 
<<<<<<< HEAD
            v-for="item of recommendList"
=======
            v-for="item of list"
>>>>>>> index-ajax
            :key="item.id"
            >
                <img class="item-img" :src="item.imgUrl" alt="">
                <div class="item-info">
<<<<<<< HEAD
                    <p class="item-title">{{item.titile}}</p>
=======
                    <p class="item-title">{{item.title}}</p>
>>>>>>> index-ajax
                    <p class="item-desc">{{item.desc}}</p>
                    <button class="item-button">查看详情</button>
                </div>
                
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'HomeRecommend',
<<<<<<< HEAD
    data () {
        return {
            recommendList: [
            {
                id: '0001',
                imgUrl: 'http://img1.qunarzz.com/sight/p0/1603/3b/3bd311262ee06d8c90.img.jpg_200x200_c118d7da.jpg',
                titile: '广州长隆旅游度假区',
                desc: '长隆旅游度假区，国家级AAAAA景区，占地面积1万亩，是一家集旅游景点',
            }, {
                id: '0002',
                imgUrl: 'http://img1.qunarzz.com/sight/p0/1603/3b/3bd311262ee06d8c90.img.jpg_200x200_c118d7da.jpg',
                titile: '广州长隆旅游度假区',
                desc: '长隆旅游度假区，国家级AAAAA景区，占地面积1万亩，是一家集旅游景点、酒店餐饮、娱乐休闲于一体的大型企业集团，坐落于羊城广州。',
            }, {
                id: '0003',
                imgUrl: 'http://img1.qunarzz.com/sight/p0/1603/3b/3bd311262ee06d8c90.img.jpg_200x200_c118d7da.jpg',
                titile: '广州长隆旅游度假区',
                desc: '长隆旅游度假区，国家级AAAAA景区，占地面积1万亩，是一家集旅游景点',
            }
        ]
        }
=======
    props: {
        list: Array
>>>>>>> index-ajax
    }
}
</script>

<style lang="stylus" scoped>
    @import '~styles/mixins.skyl'
    .title
        margin-top .2rem
        line-height .8rem
        background #eee
        text-indent .2rem
    .item
        overflow hidden
        display flex
        height 1.9rem
        .item-img
            width 1.7rem
            height 1.7rem
            padding .1rem
        .item-info
            flex 1
            padding .1rem
            min-width 0
            .item-title
                line-height .54rem
                font-size .32rem
                ellipsis()
            .item-desc
                line-height .4rem
                color #ccc
                ellipsis()
            .item-button
                line-height .25rem
                margin-top .10rem
                background #ff9300
                padding .2rem
                border-radius .06rem
                color #fff
            
</style>
