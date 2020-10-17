<template>
  <div id="user-info">
    <div class="message">
        <img src="~assets/img/profile/message.svg" alt="">
        <span>我的消息</span>
    </div>
    <div class="message">
        <img src="~assets/img/profile/market.svg" alt="">
        <span>积分商城</span>
    </div>
    <div class="message">
        <img src="~assets/img/profile/vip.svg" class="about" alt="">
        <span>开通会员</span>
    </div>

    <div class="set">
        <div class="setIn">
            <img src="~assets/img/profile/set.svg" alt="">
            <span>设置</span>
        </div>
        <div class="setIn">
            <img src="~assets/img/profile/about.svg" alt="">
            <span>关于</span>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name:'userInfo'
}
</script>

<style scoped>
#user-info {
  padding: 8px 5px 0 5px;
  border-top: solid 5px #f2f2f2;
  color: #666;
}
#user-info img{
  width: 8%;
  height: 8%;
  margin-top: 15px;
}
.message{
  position: relative;
  padding: 0 5px 2px 10px;
  border-bottom: solid 2px #f2f2f2;
}
.message span{
  position: absolute;
  margin: 20px 0 0 20px;
}
#listview .about{
  width: 9%;
  height: 9%;
  margin-right: -3px;
}
.set{
  margin-top: 16px;
}
.setIn {
  position: relative;
  padding: 0 5px 2px 10px;
  border-bottom: solid 2px #f2f2f2;
}
.setIn span{
  position: absolute;
  margin: 20px 0 0 20px;
}
</style>