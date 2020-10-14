<template>
  <div class="checked-button" :class='{checked:isChecked}'>
    <img src="~assets/img/cart/tick.svg" alt="">
  </div>
</template>

<script>
export default {
  name:'CheckedButton',
  props:{
    isChecked:{
      type:Boolean,
      default:false
    }
  }
}
</script>

<style scoped>
.checked-button{
  width:20px;
  height:20px;
 
  border-radius: 50%;
  text-align: center;
  border:1px solid #aaa;
}
.checked{
  border-color:#ff6700;
   background-color: #ff6700;
}
</style>