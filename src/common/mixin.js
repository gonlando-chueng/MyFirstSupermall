import {debounce} from './utils.js'

export const itemImgListenerMixin = {
  data(){
    return {
      itemImgListener:null
    }
  },
  mounted(){
    const refresh = debounce(this.$refs.scroll.refresh,500 )
    this.itemImgListener = () => {
        refresh()}
    this.$bus.$on('itemImgLoad',this.itemImgListener)
  
  }
}