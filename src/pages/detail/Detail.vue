<template>
    <div>
        <detail-banner 
            :sightName="sightName"
            :bannerImg="bannerImg"
            :bannerImgs="gallaryImgs"
        ></detail-banner>
        <detail-header></detail-header>
        <div class="content">
            <detail-list :list="list"></detail-list>
        </div>

    </div>
</template>

<script>
import DetailBanner from './components/Banner'
import DetailHeader from './components/Header'
import DetailList from './components/List'
import axios from 'axios'  // 引入axios 发送ajax请求才能成功
export default {
    name: 'Detail',
    components: {
        DetailBanner,
        DetailHeader,
        DetailList
    },
    data () {
        return {
            sightName: '',
            bannerImg: '',
            gallaryImgs: [],
            list: []
        }
    },
    methods: {
        getDetailInfo () {
            axios.get('/api/detail.json?id=', {   //等同于'/api/detail.json?id=' + this.$route.params.id
                params: {     
                    id: this.$route.params.id   
                }
            }) .then(this.handleGetDataSucc)                         //?开始部分是将序号也一起发送 来自router/index.js   第一项是接口名
        },
        handleGetDataSucc (res) {
            res = res.data
            if (res.ret && res.data) {
                const data = res.data
                this.sightName = data.sightName
                this.bannerImg = data.bannerImg
                this.gallaryImgs = data.gallaryImgs
                this.list =data.categoryList
            }
        }
    },
    mounted () {
        this.getDetailInfo()
    }
}
</script>

<style lang="stylus" scoped >
    .content
        min-height 15rem
</style>
