<template>
    <div class="header">  
       <div class="header-left">
           <div class="iconfont back-icon">&#xe600;</div>
       </div>
       <div class="header-input">
           <span class="iconfont">&#xe614;</span>
           输入城市/景点/游玩主题
           </div>
       <router-link to='/city'>   <!--该标签专门用来跳转 -->
            <div class="header-right">
                {{this.city}}
                <span class="iconfont arrow-icon">&#xe64a;</span>
            </div>
        </router-link>
    </div>
</template>

<script>
export default {
  name: 'HomeHeader',
  props: {
      city: String
  }
}
</script>
<!--
/*lang="stylus" 表示用stylus来写样式 scoped表示这里的样式只应用于这一个组件 不影响其他组件*/
1rem = html font-size = 50px   初始化样式里 设置了font-size为50px    86/100  设计图是2倍尺寸图片 所以设置样式时要以设计图的尺寸的一半
使用了flex布局  flex：1  会自动撑开
@import '../../../assets/styles/varibles.styl'   引入了样式文件 ../上一级 ./同级
@import '~@/assets/styles/varibles.styl'  ~@代表src目录
在webpack.base.conf.js文件中设置了      
      '@': resolve('src'),
      'styles': resolve('src/assets/styles'),
 -->
<style lang="stylus" scoped>
    @import '~styles/varibles.styl' 
    .header
        display: flex
        line-height: $headerHeight
        background: $bgColor
        color: #fff
        .header-left
            width: .64rem
            float: left 
            .back-icon
                text-align: center
                font-size: .4rem
                padding-left: .2rem
        .header-input
            flex: 1
            height: .64rem
            line-height .64rem
            margin-top: .12rem
            margin-left: .2rem
            padding-left: .2rem
            background: #fff 
            border-radius: .1rem
            color: #ccc
            
        .header-right
            width: 1.24rem
            float: right 
            text-align: center
            color: #fff
            .arrow-icon
                margin-left: -0.1rem
                font-size: .24rem
</style>