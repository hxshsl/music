<template>
  <div class="scroll-top" @click="returnTop">
    <div class="box-in">
     <p>顶部</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "scroll-top",
  methods:{
    returnTop(){
      document.documentElement.scrollTop = document.body.scrollTop = 0;
    }
  }
}
</script>

<style scoped lang="scss">
.scroll-top{
  font-size: 20px;
  width: 50px;
  height: 50px;
  background-color: lightgray;
  position: fixed;
  right: 30px;
  bottom: 30px;
}
.box-in{
  width: 100%;
  height: 50px;
  background-color: lightskyblue;
  line-height: 50px;
  text-align: center;
  text-decoration: none;
  border: 1px solid lightgray;
}

</style>