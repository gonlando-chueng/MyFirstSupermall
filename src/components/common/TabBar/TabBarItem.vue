<template>
  <div class="tab-bar-item" @click='itemClick'>
    <div :class='{active:isActive}'><slot name='item-icon'></slot></div>
    <div :class='{active:isActive}'><slot name='item-text'></slot></div>
  </div>
</template>

<script>
export default {
  name:'TabBarItem',
  props:{
    path:String,
  },
  computed:{
    isActive(){
      return this.$route.path.indexOf(this.path) !== -1
    }
  },
  methods:{
    itemClick(){
      this.$router.push(this.path).catch(() =>{})
    }
  }
}
</script>

<style>
@import "../../../assets/css/TabBarIcon/iconfont.css";
.tab-bar-item{
  flex:1;
  text-align:center;
  height:49px;
  position:relative;
}
.tab-bar-item div>p{
  width:24px;
  height:24px;
  font-size:24px;
  left:50%;
  transform:translateX(-50%);
  position:absolute;
  top:-34px;
}
.tab-bar-item>div div{
  position:absolute;
  left:50%;
  transform:translateX(-50%);
  top:12px;
}
.active{
  color:#ff6700;
}
</style>