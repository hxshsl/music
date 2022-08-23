<template>
  <div class="home">
    <swiper/>
    <div class="section" v-for="(item,index) in songsList" :key="index">
      <div class="section-title">{{item.name}}</div>
      <content-list :contentList="item.list"></content-list>
    </div>
    <scroll-top></scroll-top>
  </div>
</template>


<script>
import request from "@/utils/request";
import contentList from "@/components/ContentList";
import Swiper from "@/components/Swiper";
import ScrollTop from "@/components/ScrollTop";
export default {
  name: "home",
  components:{
    Swiper,
    contentList,
    ScrollTop
  },
  data(){
    return{
      songsList:[
          {name:'歌单',list:[]},
          {name:'歌手',list:[]}
      ]
    }
  },
  created() {
    this.songsList[0].list={};
    this.songsList[1].list={};
    this.getSongList();
    this.getSinger();
  },
  methods:{
    getSongList(){
      request.get("/songlist",{params:{
          pageNum:1,
          pageSize:10,
        }
      }).then(res=>{
        this.songsList[0].list=res.data.records;
      }).catch(err=>{
        console.log(err);
      })
    },
    getSinger(){
      request.get("/singer",{params:{
        pageNum:1, pageSize:10,search:''
      }
      }).then(res=>{
        this.songsList[1].list=res.data.records;
      }).catch(err=>{
        console.log(err);
      })
    },
  }
}
</script>

<style lang="scss" scoped>
  .home{
    height: calc(100vh - 50px);
  }
  .section-title{
    width: 90%;
    height: 50px;
    line-height: 50px;
    margin: 0 auto;
    text-align: center;
  }
</style>