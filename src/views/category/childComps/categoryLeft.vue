<template>
  <div id='category-left'>
      <div class='left-tab-item'
     v-for="(item,index) in list" 
     :key='index'
     @click='itemClick(index)'
     :class="{ active:currentIndex==index}"
     >
     <p>{{item.title}}</p>
    </div>
  </div>
</template>

<script>
import { getCategory } from 'network/category.js'


export default {
  name:'categoryLeft',
  components:{

  },
  data(){
    return {
      currentIndex:0,
      currnetMaitKey:0,
      list:[]

    }
  },
  mounted(){
    this.getCategory()
    // getCategory().then(res => {
    //   const list = res.data.category.list
      // console.log(list);
    // })
  },
  methods:{
    async getCategory(){
      let res = await getCategory()
      if(res){
        this.list = res.data.category.list
        this.itemClick(0)
        // console.log(this.list);
      }
    },
    itemClick(index){
      
      this.currentIndex = index
  
        this.currnetMaitKey = this.list[index].maitKey
        // console.log(this.currnetMaitKey);
        this.$emit('itemChange',this.currnetMaitKey)
      //   if(index < 4){
      //     this.$parent.getCategoryInfo(this.currnetMaitKey)
      //   }
      
    }
  }
}
</script>

<style scoped>
#category-left{
  width:25%;
  background-color: #f6f6f6;
}
.left-tab-item {
  height: 38px;
  line-height: 38px;
}
.left-tab-item p {
  width: 100%;
  text-align: center;
  color: rgb(100, 100, 100);
  display: inline-block;
  line-height: 8px; 
  border-left: 1px solid #f6f6f6;
}
.left-tab-item.active {
  background-color: #fff;
}
.left-tab-item.active>p {
  color: var(--color-high-text);
  font-weight: 600;
  border-left: 1px solid var(--color-high-text);
}
</style>