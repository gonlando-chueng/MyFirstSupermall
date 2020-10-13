<template>
  <div v-if='Object.keys(goods).length !== 0' class='base-info'>
    <div class="info-title">{{goods.title}}</div>
    <div class="info-price">
      <span class="n-price">{{goods.newPrice}}</span>
      <span class="o-price">{{goods.oldPrice}}</span>
      <span class="discount" v-if='goods.discount'>{{goods.discount}}</span>
    </div>
    <div class="info-other">
      <span>{{goods.columns[0]}}</span>
      <span>{{goods.columns[1]}}</span>
      <span>{{goods.services[goods.services.length-1].name}}</span>
    </div>
    <div class="info-service">
      <span class="info-service-item"
      v-for='index in goods.services.length-1'
      :key='index'>
      <img :src="goods.services[index-1].icon" alt="">
      <span>{{goods.services[index-1].name}}</span>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name:'DetailBaseInfo',
  props:{
    goods:{
      tyoe:Object,
      default(){
        return {}
      }
    }
  }
}
</script>

<style scoped>
.base-info{
  margin-top:15px;
  padding:0 8px;
  color:#999;
  border-bottom:5px solid #f2f5f8;
}
.info-title{
  color:#222
}
.info-price{
  margin-top:10px;
}
.info-price .n-price{
  font-size:24px;
  color:var(--color-high-text)
}
.info-price .o-price{
  font-size:13px;
  text-decoration:line-through;
  margin-left:5px;
}
.info-price .discount{
  font-size:14px;
  color:#fff;
  background-color: var(--color-high-text);
  border-radius: 10px;
  margin-left:5px;
  padding:3px;
  position:relative;
  top:-6px;
}
.info-other{
  display:flex;
  justify-content: space-between;
  margin:10px 0px;
  padding-bottom:10px;
  border-bottom:1px solid rgba(128, 128, 128, 0.3);
}
.info-service{
  display:flex;
  justify-content: space-between;
  color:black;
}

.info-service img {
  width: 14px;
  position: relative;
  top:2px;
  margin-right:2px;
}
</style>