<template>
    <div>
        <div class="title">周末去哪儿</div>
        <ul>
            <li class="item" border-bottom 
            v-for="item of recommendList"
            :key="item.id"
            >
                <div class="item-img-wrapper">
                    <img class="item-img" :src="item.imgUrl" alt="">
                </div>
                <div class="item-info">
                    <p class="item-title">{{item.titile}}</p>
                    <p class="item-desc">{{item.desc}}</p>
                </div>
                
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'HomeWeekend',
    data () {
        return {
            recommendList: [
            {
                id: '0001',
                imgUrl: 'http://img1.qunarzz.com/sight/source/1505/92/580e9ea4f37a1b.jpg_r_640x214_72112761.jpg',
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
    .item-img-wrapper
        overflow hidden
        height 0
        padding-bottom 33.9%
        .item-img
            width 100%
    .item-info
        padding .1rem
        .item-title
            line-height .54rem
            font-size .32rem
            ellipsis()
        .item-desc
            line-height .4rem
            color #ccc
            ellipsis()
            
</style>
