<template>
  <div id='home' >
    <nav-bar class='home-nav'><div slot='center'>购物街</div></nav-bar>
    <scroll class='content'
     ref='scroll' 
     :probe-type='3' 
     @scroll="contentScroll"
     :pullUpLoad='true'
     @pullingUp='loadMore'>
      <home-swiper :banners='banners'></home-swiper>
      <recom-view :recommends='recommends'></recom-view>
      <feature-view></feature-view>
      <tab-control :titles='["流行","新款","精选"]'
      class='tab-control'
      @tabClick='tabClick'
     ></tab-control>
      <goods-list :goods='showGoods'></goods-list>
    </scroll>
    <back-top @click.native='backClick' v-show='isShow'></back-top>
  </div>
</template>

<script>
import homeSwiper from './childComps/homeSwiper'
import RecomView from './childComps/RecomView'
import FeatureView from './childComps/featureView'

import TabControl from 'components/content/tabcontrol/TabControl'
import NavBar from 'components/common/navbar/NavBar'
import GoodsList from 'components/content/goods/GoodsList'
import Scroll from 'components/common/scroll/Scroll'
import BackTop from 'components/content/backtop/BackTop'

import {getHomeMultidata,getHomeGoods} from 'network/home'
export default {
  name:'Home',
  components:{
    homeSwiper,
    RecomView,
    FeatureView,
    NavBar,
    TabControl,
    GoodsList,
    Scroll,
    BackTop,

  },
  data(){
    return {
     banners:[],
     recommends:[],
     goods:{
       'pop':{page: 0, list:[]},
       'new':{page: 0, list:[]},
       'sell':{page: 0, list:[]},
     },
     currentType: 'pop',
     isShow: false,
    }
  },
  created(){
    this.getHomeMultidata()
    this.getHomeGoods('pop')
    this.getHomeGoods('new')
    this.getHomeGoods('sell')
    
  },
  computed:{
    showGoods(){
      return this.goods[this.currentType].list
    }
  },
  methods:{
    //时间监听相关的方法
    tabClick(index){
      switch(index){
        case 0:
          this.currentType = 'pop'
          break;
        case 1:
          this.currentType = 'new'
          break;
        case 2:
          this.currentType = 'sell'
          break;
      
      }
    },
    backClick(){
      this.$refs.scroll.scroll.scrollTo(0,0,500)
    },
    contentScroll(position){
      this.isShow = (-position.y) > 1000
    },
    loadMore(){
      this.getHomeGoods(this.currentType)
    },
    //网络请求相关的方法
    getHomeMultidata(){
         getHomeMultidata().then(res =>{
      this.banners = res.data.banner.list;
      this.recommends = res.data.recommend.list;
    })
    },
    getHomeGoods(type){
        const page = this.goods[type].page + 1
        getHomeGoods(type,page).then(res =>{
          this.goods[type].list.push(...res.data.list)
          this.goods[type].page += 1
         this.$refs.scroll.scroll.finishPullUp()
    })
    }
  }
    
}
</script>

<style scoped>
#home{
  position:relative;
  padding-top:44px;
  height:100vh
}
.home-nav{
  background-color:var(--color-tint);
  color:#fff;
  position:fixed;
  left:0;
  right:0;
  top:0;
  z-index:99;
}
.tab-control{
  position:sticky;
  top:44px;
  z-index:10;
}
.content{
position:absolute;
top:43px;
bottom:50px;
left:0;
right:0;
overflow: hidden;
}

</style>