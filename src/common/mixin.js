import {debounce} from './utils.js'
import BackTop from 'components/content/backtop/BackTop'

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
export const backTopMixin = {
  components:{
    BackTop,
  },
  data(){
    return {
      isShow:false
    }
  },
  methods:{
    backClick(){
      this.$refs.scroll.scrollTo(0,0,500)
    }
  }
}