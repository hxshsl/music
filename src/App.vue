<template>
  <div id="app">
    <the-header class="the-header"/>
    <router-view class="music-content" />
  </div>

</template>

<style>
</style>
<script>
import TheHeader from "@/components/TheHeader";
export default {
  name:"Home",
  components:{
    TheHeader
  }
}
</script>