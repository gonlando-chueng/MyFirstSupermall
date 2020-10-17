<template>
  <div id="profile">
    <nav-bar class='nav-bar'><div slot="center">个人中心</div></nav-bar>
    <user></user>
    <user-info></user-info>
  </div>
</template>

<script>
import navBar from 'components/common/navbar/NavBar'
import User from './childComps/User'
import userInfo from './childComps/userInfo'

export default {
  name:'Profile',
  components:{
    navBar,
    User,
    userInfo
  }
}
</script>

<style scoped>
.nav-bar{
  background-color: var(--color-tint);
  color:#fff;
  left:0;
  right:0;
  top:0;
  position: relative;
  z-index:99;
}
</style>