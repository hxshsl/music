<template>
    <div class="swiper">
        <el-carousel :interval="4000" type="card">
          <el-carousel-item v-for="(item,index) in swiperList">
            <img :src="item.picImg" />
          </el-carousel-item>
        </el-carousel>
    </div>
</template>

<script>
import {swiperList} from "@/assets/data/swiper";

export default {
  name: "Swiper",
  data(){
    return{
      swiperList:[],
    }
  },
  created() {
    this.swiperList = swiperList;
  }
}
</script>

<style scoped>
@import '@/assets/css/swiper.css';
</style>