<template>
  <div class="cart">
    <nav-bar class='nav-bar'>
      <div slot='center'>购物车({{itemCount}})</div>
    </nav-bar>
    <scroll class='content' ref='scroll'>
      <cart-list></cart-list>
    </scroll>
    <cart-bottom-bar></cart-bottom-bar>
  </div>
</template>

<script>
import navBar from 'components/common/navbar/NavBar'
import cartList from './childComps/cartList'
import cartBottomBar from './childComps/cartBottomBar'

import Scroll from 'components/common/scroll/Scroll'

import { mapGetters } from 'vuex'

export default {
  name:'Cart',
  components:{
    navBar,
    cartList,
    Scroll,
    cartBottomBar
  },
  computed:{
    ...mapGetters(['itemCount'])
  },
  activated(){
    this.$refs.scroll.refresh()
  }
}
</script>
<style scoped>
.cart{
  position:relative;
  height:100vh;

}
.nav-bar{
  background-color: var(--color-tint);
  color:#fff;
  left:0;
  right:0;
  top:0;
  position: relative;
  z-index:99;
}
.content{
  /* height:100%; */
  /* position: absolute;
  top:44px;
  bottom:90px;
  left:0;
  right:0;
  overflow: hidden; */
  height:calc(100% - 44px - 48px - 40px);
  overflow: hidden;
}
</style>