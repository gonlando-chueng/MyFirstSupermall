<template>
  <tab-bar class='tab-bar'>
      <tab-bar-item path='/home'>
        <p class='iconfont icon-home1' slot='item-icon'></p>
        <div slot='item-text'>首页</div>
      </tab-bar-item>
      <tab-bar-item path='/category'>
        <p class='iconfont icon-leimupinleifenleileibie2' slot='item-icon'></p>
        <div slot='item-text'>分类</div>
      </tab-bar-item>
      <tab-bar-item path='/cart'>
        <p class='iconfont icon-gouwuchekong' slot='item-icon'></p>
        <div slot='item-text'>购物车</div>
      </tab-bar-item>
      <tab-bar-item path='/profile'>
        <p class='iconfont icon-wodedangxuan' slot='item-icon'></p>
        <div slot='item-text'>我的</div>
      </tab-bar-item>
    </tab-bar>
</template>

<script>
import TabBar from 'components/common/TabBar/TabBar'
import TabBarItem from 'components/common/TabBar/TabBarItem'
export default {
  name:'MainTabBar',
  components:{
    TabBar,
    TabBarItem
  }
}
</script>

<style>
.tab-bar{
  z-index:11;
}
</style>