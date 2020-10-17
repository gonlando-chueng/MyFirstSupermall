<template>
  <div id="category">
    <nav-bar class='nav-bar'>
      <div slot='center'>分类</div>
    </nav-bar>
    <div class="main">
       <category-left @itemChange='itemChange'></category-left>
       <catagory-right :rightItem='rightItem' ></catagory-right>
    </div>
  </div>
</template>

<script>
import {getCategoryInfo} from 'network/category.js'

import NavBar from 'components/common/navbar/NavBar'
import categoryLeft from './childComps/categoryLeft'
import catagoryRight from './childComps/categoryRight'

export default {
  name:'Category',
  components:{
    NavBar,
    categoryLeft,
    catagoryRight
  },
  data(){
    return {
      rightItem:[],
      maitKey:3627,
      currnetMaitKey:0
    }
  },
  mounted(){
    this.getCategoryInfo(3627)
  },
  methods:{
    async getCategoryInfo(maitKey){
      let res = await getCategoryInfo(maitKey)
      if(res){
        this.rightItem = res.data.list
        // console.log(this.rightItem);
      }
    },
    itemChange(currnetMaitKey){
      
      this.getCategoryInfo(currnetMaitKey)
    }
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
.main{
  display:flex;
}
</style>