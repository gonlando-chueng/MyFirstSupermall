<template>
  <div class="goods-info" v-if='Object.keys(detailInfo).length !==0'>
    <div class="info-desc clear-fix">
      <div class="start">
      </div>
      <div class="desc">{{detailInfo.desc}}</div>
      <div class="end"></div>
    </div>
    <div class="info-key">{{detailInfo.detailImage[0].key}}</div>
    <div class="info-list">
      <img v-for="(item,index) in detailInfo.detailImage[0].list" 
      :key='index' 
      :src="item" 
      @load='imgLoad'
      alt="">
    </div>
  </div>
</template>

<script>
export default {
  name:'DetailGoodsInfo',
  props:{
    detailInfo:{
      type:Object,
      default(){
        return {}
      }
    }
  },
  data(){
    return {
      counter:0,
      imagesLength:0
    }
  },
   methods: {
    imgLoad() {
      if(++this.counter === this.imagesLength){
        this.$emit("imageLoad");
      }
    }
  },
  watch:{
    detailInfo(){
      this.imagesLength = this.detailInfo.detailImage[0].list.length
    }
  }
}
</script>

<style scoped>
.goods-info {
  width:100%;
  font-size: 16px;
  padding:20 0;
  position: relative;
  background-color:#fff;
}
.info-desc {
  font-size: 20px;
  padding: 10px 5px;
}
.clear-fix{
  content:'';
  display:table;
  clear:both;
}
.start {
  width: 45px;
  height: 1px;
  background-color: gray;
  position: relative;
}
.end {
  position: absolute;
  top: 3px;
  display: inline-block;
  left:2px;
  width: 5px;
  height: 5px;
  background-color: black;
  border-radius: 50%;
}

.desc {
  padding: 20px 0;
  color: gray;
}

.info-key {
  padding: 10px 8px;
}
.info-list img {
  width: 100%;
}
</style>