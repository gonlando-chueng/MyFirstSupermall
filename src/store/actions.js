export default {
  addCart(context,payload){
    return new Promise((resolve,reject) => {
      let oldProduct = context.state.cartList.find(item => {return item.iid === payload.iid})
      if(oldProduct){
        //商品数量加1
        // oldProduct.count += 1
        context.commit('addCounter',oldProduct)
       resolve('当前商品数量+1')
      }else{
        //添加新的商品
        payload.count = 1
        // context.state.cartList.push(payload)
        context.commit('addToCart',payload)
        resolve('添加了新的商品')
      }
    })
  }
}