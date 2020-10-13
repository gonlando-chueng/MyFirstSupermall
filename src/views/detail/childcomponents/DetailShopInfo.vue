<template>
  <div id="shop-info">
    <div class="shop-info-top">
      <img :src="shop.logo" alt="">
      <span>{{shop.name}}</span>
    </div>
    <div class="shop-middle">
      <div class="shop-middle-item shop-middle-left">
      <div class="info-sells">
        <div class='sells-count'>
          {{shop.sells|sellsCountFilter}}
          </div>
        <div class='sells-text'>总销量</div>
      </div>
      <div class="info-goods">
        <div class="goods-count">
          {{shop.goodsCount}}
        </div>
        <div class="goods-text">全部宝贝</div>
      </div>
    </div>
    <div class="shop-middle-item shop-middle-right">
      <table>
        <tr v-for='(item,index) in shop.score' :key='index'>
          <td>{{item.name}}</td>
          <td class='score' :class="{'score-better':item.isBetter}">
             <span>{{item.score}}</span>
             </td>
          <td class='better' :class="{'better-more':item.isBetter}">
            <span>{{item.isBetter ? '高':'低'}}</span>
          </td>
        </tr>
      </table>
    </div>
    </div>
    <div class="shop-bottom">
      <div class="enter-shop">进店逛逛</div>
    </div>
  </div>
</template>

<script>
export default {
  name:'DetailShopInfo',
  props:{
    shop:{
      type:Object,
      default(){
        return {}
      }
    }
  },
  filters:{
    sellsCountFilter: function(value){
      if(value<10000) return value;
      return (value/10000).toFixed(1) + '万'
    }
  }
}
</script>

<style scoped>
#shop-info{
  padding: 20px 0;
  background-color: #fff;
  border-bottom: 1px solid rgba(128, 128, 128, 0.2);
}
.shop-info-top{
  width:100%;
  /* height:80px; */
  line-height: 80px;
  border-bottom: 1px solid rgba(128, 128, 128, .2);
}
.shop-info-top>img{
  position:relative;
  top:18px;
  width:44px;
  border-radius: 50%;
  margin:0 5px;
}
.shop-info-top>span{
  display:inline-block;
  height:80px;
}
.shop-middle{
  width:100%;
  /* height:100px; */
  display:flex;

}
.shop-middle-left,
.shop-middle-right{
  flex:1;
}
.shop-middle-left{
  display:flex;
  justify-content: space-around;
  align-items: center;
  padding:25px;
}
.info-sells,.info-goods{
  flex:1;
}
.info-sells,.info-goods{
  text-align:center;
  
}
.sells-count,.goods-count{
  font-size:20px;
  margin-bottom:10px;
}
.info-goods{
  border-right:1px solid rgba(128, 128, 128, .2)
}
.shop-middle-right > table {
  margin: 0 auto;
  font-size: 16px;
  border-spacing: 10px;
}
.shop-middle-right .score-better span{
  color:#f13e3a;
}
.shop-middle-right .better span{
  background-color:#5ea732;
  color:#fff;
  text-align:center
}
.shop-middle-right .better-more span{
  background-color:#f13e3a
}
.enter-shop{
  text-align: center;
  padding:5px;
  width:100px;
  height:24px;
  border-radius:12px;
  margin:0 auto;
  background-color:rgba(128, 128, 128, .2)
}
</style>