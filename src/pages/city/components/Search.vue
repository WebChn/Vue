<template>
    <div>
        <div class="search">
            <input v-model="keyword" class="search-input" type="text" placeholder="输入城市名或拼音">
        </div>
        <div 
            class="search-content" 
            ref="search"
            v-show="keyword"
        >     <!--上面v-show部分 当输入框为空时 不生成区域 即原来的东西会正常显示 -->
            <ul>
                <li 
                    class="search-item border-bottom" 
                    v-for="item of list" 
                    :key="item.id"
                    @click="handleCityClick(item.name)"
                >
                    {{item.name}}
                </li>
                <li class="search-item border-bottom" v-show="hasNoData"><!--如果list没有长度就出现 模板里尽量简洁 不要出现逻辑运算 逻辑运算在JS部分实现 -->
                    没有找到匹配的城市
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import Bscroll from 'better-scroll'
import {mapMutations} from 'vuex'
export default {
    name: "CitySearch",
    props: {
        cities: Object
    },
    data () {
        return {
            keyword: '',
            list: [],
            timer: null,  // 做节流
        }
    },
    computed: {
        hasNoData () {
            return !this.lislength
        }
    },
    watch: {
        keyword () {
            if (this.timer) {
                clearTimeout(this.timer) 
            }
            if (!this.keyword) {     //当输入值为空时 下面的可能项消失
                    this.list = []
                    return
            }
            this.timer = setTimeout(() => {
                const result = []
                
                for(let i in this.cities) {
                    this.cities[i].forEach((value) => {
                        if (value.spell.indexOf(this.keyword) > -1 ||
                        value.name.indexOf(this.keyword) > -1) {
                            result.push(value)
                        }
                    })
                }
                this.list = result
            }, 100)
        }
    },
    methods: {
        handleCityClick (city) {  //这里的city就是前面传入的list.name
            //this.$store.commit('changeCity', city)
            this.changeCity(city)
            this.$router.push('/')  //用vue-router跳转页面
        },
        ...mapMutations(['changeCity'])
    },
    mounted () {
        this.scroll = new Bscroll(this.$refs.search)
    }
}
</script>

<style lang="stylus" scoped>
    @import '~styles/varibles.styl'
    .search
        box-sizing border-box
        height .72rem
        padding 0.1rem
        background $bgColor
        .search-input
            box-sizing border-box
            width 100%
            height .55rem
            padding .1rem
            text-align center
            border-radius .06rem
            color #666
    .search-content
        z-index 1
        overflow hidden
        position absolute 
        top 1.58rem
        left 0
        right 0
        bottom 0
        background #eee 
        .search-item
            line-height .62rem
            padding-left .2rem
            background #fff
            color #666
            border-bottom .1px #eee solid
</style>
