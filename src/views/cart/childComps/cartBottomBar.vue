<template>
  <div class="bottom-bar">
    <div class="check-content">
      <checked-button class='check-button' 
      :is-checked='selectAll'
      @click.native='allSelect'></checked-button>
      <span>全选</span>
    </div>
    <div class='price'>
      合计{{totalPrice}}
    </div>
    <div class='calculate' @click = 'calcClick'>
      结算( {{checkLength}} )
    </div>
  </div>
</template>

<script>
import CheckedButton from 'components/content/checkedButton/CheckedButton'

export default {
  name:'cartBottomBar',
 
  components:{
    CheckedButton
  },
  computed:{
    totalPrice(){
      return "￥" + this.$store.state.cartList.filter(item => {
        return item.checked
      }).reduce((preValue,item) => {
        return preValue + item.price * item.count
      },0).toFixed(2)
    },
    checkLength(){
      return this.$store.state.cartList.filter(item => {
        return item.checked
      }).length
    },
    selectAll(){
      if(this.$store.state.cartList.length === 0 ) return false
      return !this.$store.state.cartList.find(item => !item.checked)
    }
  },
  methods:{
    allSelect(){
      console.log('111');
      if(this.selectAll){
        this.$store.state.cartList.forEach(item => {
          item.checked = false
        });
      }else{
         this.$store.state.cartList.forEach(item => {
          item.checked = true
        })
      }
    },
    calcClick(){
      if(this.checkLength === 0){
         this.$toast.show('请选择购买的商品',2000)
      }
    }
  }
}
</script>

<style scoped>
  .bottom-bar{
    height:40px;
    background-color: #eee;
    position: relative;
    line-height: 40px;
    display:flex;
    font-size:14px
    /* bottom:40px; */
  }
  .check-content{
    display:flex;
    align-items: center;
    margin:0 10px;
    width:60px;
  }
  .check-button{
    line-height: 20px;
    margin-right:8px;
  }
  .price{
    flex:1;
    text-align: center;
  }
  .calculate{
    width:90px;
    background-color: #ff6700;
    text-align:center;
    color:#fff;
  }
</style>