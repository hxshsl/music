<template>
  <div class="content-list">
    <ul class="section-content">
      <li class="content-item" v-for="(item,index) in contentList" :key="index">
        <div class="kuo">
          <img class="item-img" :src="item.pic">
          <div class="mask">
            <svg t="1661091394762" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2372"><path d="M128 138.666667c0-47.232 33.322667-66.666667 74.176-43.562667l663.146667 374.954667c40.96 23.168 40.853333 60.8 0 83.882666L202.176 928.896C161.216 952.064 128 932.565333 128 885.333333v-746.666666z" p-id="2373"></path></svg>
          </div>
        </div>
        <p class="item-name">{{item.title||item.name}}</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "content-list",
  props:{
    contentList:{

    }
  },
}
</script>

<style lang="scss" scoped>

  .content-list{
    min-height: 500px;
    width: 90%;
    background-color: rgba(0,0,0,0.1);
    margin: 0 auto;
  }
  //.section-content{
  //
  //}
  .content-item{
    width: 18%;
    margin: 20px 1%;
    overflow: hidden;
    border-radius: 4px;
    position: relative;
    display:inline-block;
    box-shadow: 0 0 5px 1px rgba(0,0,0,0.1);
    &:hover{
      box-shadow: 0 0 5px 2px rgba(0,0,0,0.3);
    }
    &:hover .item-img{
      transform: scale(1.1);
    }
    .item-name{
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
      margin: 10px 8px;
    }
  }
  .item-img{
    width: 100%;
    transition: all 0.4s ease;

  }
  .kuo,
  .mask{
    width: 100%;
    padding-bottom: 100%;
    height: 0;
    overflow: hidden;
    background-color: rgba(52,47,41,0.4);
  }
  .mask{
    position: absolute;
    top: 0;
    background: none;
    transition: all 0.3s ease-in-out;
    svg{
      visibility: hidden;
      fill: rgba(52,47,41,0.4);
    }
    &:hover svg{
      visibility: visible;
      background-color: rgba(52,47,41,0.4);
    }
  }

</style>