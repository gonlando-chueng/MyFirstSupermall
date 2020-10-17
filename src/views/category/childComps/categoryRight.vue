<template>
  <div id="category-right">
    <scroll class="contents" ref="scroll">
      <div class="tab-item" v-for="(item, index) in rightItem" :key="index">
        <a :href="item.link">
          <img :src="item.image" @load="imgLoad" />
          <p class="item-text">{{ item.title }}</p>
        </a>
      </div>
    </scroll>
  </div>
</template>

<script>
import Scroll from 'components/common/scroll/Scroll'
export default {
  name:'catagoryRight',
  components:{
    Scroll
  },
  props:{
    rightItem:{
      type:Array,
      default(){
        return []
      }
    }
  },
  data(){
    return {
      count:0
    }
  },
  methods:{
    imgLoad(){
       this.count++;
      if (this.count >= this.rightItem.length) {
        this.$refs.scroll.refresh();
        this.count = 0;
      }
    }
  }
}
</script>

<style scoped>
#category-right {
  flex: 1;
  position:relative;
  height:100vh;
}
.contents {
position:absolute;
height:calc(100% - 44px - 50px);
/* top:0px;
bottom:60px;
left:0;
right:0; */
overflow: hidden;
}
.tab-item {
  display: inline-block;
  width: 80px;
  margin: 8px 5px;
}
.tab-item a {
  display: block;
}
.tab-item img {
  width: 100%;
}
.item-text {
  margin-top: 1.5px;
  text-align: center;
}
</style>