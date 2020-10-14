export default {
  //mutations中的每个方法尽可能完成的事件比较单一
  addCounter(state,payload){
    payload.count+=1
  },
  addToCart(state,payload){
    payload.checked = true
    state.cartList.push(payload)
  }
}