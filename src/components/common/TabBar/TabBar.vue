<template>
     <div id="tab-bar">
       <slot></slot>
    </div>
</template>

<script>
export default {
  name:'TabBar'
}
</script>

<style scoped>

*{
  margin:0;
  padding:0;

}
#tab-bar{
  display:flex;
  background-color:#f6f6f6;
  position:fixed;
  line-height: 49px;
  left:0;
  right:0;
  bottom:-1px;
  box-shadow:0 -3px 1px rgba(100, 100, 100, .1)
}

</style>