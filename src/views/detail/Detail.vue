<template>
  <div id="detail"> 
    <!-- <div v-for='(item,index) in $store.state.cartList' :key="index">{{item}}</div> -->
    <nav-item class='detail-nav' @titleClick="titleClick" ref='nav'></nav-item>
    <scroll class='detail-content' ref="scroll"
    :probe-type="3"
    @scroll="scroll">
    <detail-swiper :top-images="topImages"></detail-swiper>
    <detail-base-info :goods="goods"></detail-base-info>
    <detail-shop-info :shop="shop"></detail-shop-info>
    <detail-goods-info :detail-info="detailInfo" @imageLoad="imageLoad"></detail-goods-info>
    <detail-param-info ref='param' :param-info='paramInfo'></detail-param-info>
    <detail-commend-info ref='commend' :comment-info='commentInfo'></detail-commend-info>
    <goods-list ref='recommend' :goods='recommends'></goods-list>
    </scroll>
    <back-top @click.native='backClick' v-show='isShow'></back-top>
    <detail-bottom-nav @addToCart='addToCart'></detail-bottom-nav>
  </div>
</template>

<script>
import NavItem from "./childcomponents/navItem";
import DetailSwiper from "./childcomponents/DetailSwiper";
import DetailBaseInfo from "./childcomponents/DetailBaseInfo";
import DetailShopInfo from "./childcomponents/DetailShopInfo";
import DetailGoodsInfo from "./childcomponents/DetailGoodsInfo"
import DetailParamInfo from "./childcomponents/DetailParamInfo"
import DetailCommendInfo from "./childcomponents/DetailCommendInfo"
import DetailBottomNav from "./childcomponents/DetailBottomNav"


import Scroll from 'components/common/scroll/Scroll'
import GoodsList from 'components/content/goods/GoodsList'
import { getDetail, getRecommend,Goods, Shop ,GoodsParam} from "network/detail";

import {debounce} from 'common/utils.js'
import {itemImgListenerMixin,backTopMixin} from 'common/mixin'

export default {
  name: "Detail",
  components: {
    NavItem,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    DetailGoodsInfo,
    Scroll,
    DetailParamInfo,
    DetailCommendInfo,
    GoodsList,
    DetailBottomNav,
    
  },
  mixins:[itemImgListenerMixin,backTopMixin],
  data() {
    return {
      iid: null,
      topImages: [],
      goods: {},
      shop: {},
      detailInfo:{},
      paramInfo:{},
      commentInfo:{},
      recommends:[],
      themeTopYs:[],
      getThemeTopYs:null,
   
    };
  },
  destroyed(){
    this.$bus.$off('itemImgLoad',this.itemImgListener)
  },
  mounted(){
   
  },
  created() {
    //保存传入的iid
    this.iid = this.$route.params.iid;
    //根据iid请求详情数据
    getDetail(this.iid).then((res) => {
      const data = res.result;
      this.topImages = data.itemInfo.topImages;
      this.goods = new Goods(
        data.itemInfo,
        data.columns,
        data.shopInfo.services
      );
      this.shop = new Shop(data.shopInfo);
      this.detailInfo = data.detailInfo
      this.paramInfo = new GoodsParam(data.itemParams.info,data.itemParams.rule)
      if(data.rate.cRate !==0){
        this.commentInfo = data.rate.list[0]
      }
      this.getThemeTopYs = debounce(() => {
      this.themeTopYs = []
      this.themeTopYs.push(0)
      this.themeTopYs.push(this.$refs.param.$el.offsetTop -44)
      this.themeTopYs.push(this.$refs.commend.$el.offsetTop -44)
      this.themeTopYs.push(this.$refs.recommend.$el.offsetTop -44)
      this.themeTopYs.push(Number.MAX_VALUE)
      // console.log(this.themeTopYs);
      },100)
      // this.$nextTick(() => {
      //   //根据最新的数据，对应的DOM已经渲染完成，但图片还没加载完
      // this.themeTopYs = []
      // this.themeTopYs.push(0)
      // this.themeTopYs.push(this.$refs.param.$el.offsetTop)
      // this.themeTopYs.push(this.$refs.commend.$el.offsetTop)
      // this.themeTopYs.push(this.$refs.recommend.$el.offsetTop)
      // console.log(this.themeTopYs);
      // })
      
    });
    getRecommend().then(res => {
      this.recommends = res.data.list
    })
  },
  methods:{
    imageLoad(){
      this.$refs.scroll.refresh()
      this.getThemeTopYs()
    },
    titleClick(index){
      // console.log(index);
      this.$refs.scroll.scrollTo(0,-this.themeTopYs[index],200)
    },
    scroll(position){
      const positionY = -position.y
      let length = this.themeTopYs.length
      for(let i = 0;i < length-1; i++){
    
        if(this.currentIndex!==i&&(positionY >= this.themeTopYs[i] && positionY < this.themeTopYs[i+1])){
          this.currentIndex = i
          this.$refs.nav.currentIndex = this.currentIndex
        }
      }
      this.isShow = (-position.y) > 1000
    },
   addToCart(){
     const product = {}
     product.image = this.topImages[0]
     product.title = this.goods.title
     product.desc = this.goods.desc
     product.price = this.goods.realPrice
     product.iid = this.iid
      
      

     this.$store.dispatch('addCart',product).then(res => {
       this.$toast.show(res,2000)
     })
   }
  }
};
</script>

<style scoped>
#detail{
  position: relative;
  background-color: #fff;
  z-index:20;
  height:100vh;

}

#detail .detail-content{

/* overflow: hidden; */
height: calc(100% - 44px - 48px);

}
.detail-nav{
  position:relative;
  z-index:10;
  background-color: #fff;
}
</style>