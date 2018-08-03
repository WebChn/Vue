<template>
    <div>
        <city-header></city-header> 
        <city-search :cities="cities"></city-search>
        <city-list 
            :cities="cities" 
            :hot="hotCities"
            :letter="letter"    
        >
        </city-list>
        <city-alphabet 
            :cities="cities"
            @change="handleLetterChange"
        >                           <!--监听Alphabet发出来的changhe事件-->
        </city-alphabet>
    </div>
</template>

<script>
import axios from 'axios'   // 写这个才能用ajax
import CityHeader from './components/Header'
import CitySearch from './components/Search'
import CityList from './components/List'
import CityAlphabet from './components/Alphabet'
export default {
    name: "City",
    components: {
        CityHeader,
        CitySearch,
        CityList,
        CityAlphabet
    },
    data () {
        return {
            cities: {},
            hotCities: [],
            letter: ''
        }
    },
    methods: {
        getCityInfo () {
            axios.get('/api/city.json')   //发送一个ajax请求
                .then(this.handleGetCityInfoSucc)  //ajax返回值？promise？
        },
        handleGetCityInfoSucc (res) {  // 接收ajax的数据
            res = res.data
            if (res.ret && res.data) {
                const data =res.data
                this.cities = data.cities
                this.hotCities = data.hotCities
            }
        },
        handleLetterChange(letter) {
            this.letter = letter
        }
    },
    mounted () {     
        this.getCityInfo ()
    }
}
</script>

<style lang="stylus" scoped>

</style>
