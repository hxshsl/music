<template>
  <div class="the-header">
    <div class="header-logo"  @click="goHome">
      <img src="../assets/music_logo.png">
      <span>音乐网站</span>
    </div>
      <ul class="navbar">
        <li :class="{active:item.name == activeName}" v-for="item in navMsg" :key="item.path" @click="goPage(item.name,item.path)">
          {{item.name}}
        </li>
        <li class="search">
            <el-input
                class="search-text"
                placeholder="关键字"
                @keyup.enter="goSearch"
                style="display: inline"
                v-model="keyword"
            />
              <div style="display: inline">
                <svg @click="goSearch" t="1661258445868" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1389"><path d="M469.333333 768c-166.4 0-298.666667-132.266667-298.666666-298.666667s132.266667-298.666667 298.666666-298.666666 298.666667 132.266667 298.666667 298.666666-132.266667 298.666667-298.666667 298.666667z m0-85.333333c119.466667 0 213.333333-93.866667 213.333334-213.333334s-93.866667-213.333333-213.333334-213.333333-213.333333 93.866667-213.333333 213.333333 93.866667 213.333333 213.333333 213.333334z m251.733334 0l119.466666 119.466666-59.733333 59.733334-119.466667-119.466667 59.733334-59.733333z" p-id="1390"></path></svg>
              </div>
<!--            <button class="search-button" @click="goSearch" style="display: inline">-->
<!--              <svg t="1661258445868" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1389"><path d="M469.333333 768c-166.4 0-298.666667-132.266667-298.666666-298.666667s132.266667-298.666667 298.666666-298.666666 298.666667 132.266667 298.666667 298.666666-132.266667 298.666667-298.666667 298.666667z m0-85.333333c119.466667 0 213.333333-93.866667 213.333334-213.333334s-93.866667-213.333333-213.333334-213.333333-213.333333 93.866667-213.333333 213.333333 93.866667 213.333333 213.333333 213.333334z m251.733334 0l119.466666 119.466666-59.733333 59.733334-119.466667-119.466667 59.733334-59.733333z" p-id="1390"></path></svg>-->
<!--            </button>-->

        </li>
      </ul>
    <div style="flex: 1"></div>
    <div class="the-header-right">
      <el-dropdown style="display: contents">
    <span class="el-dropdown-link">
      {{user.name}}
      <el-icon class="el-icon--right">
        <arrow-down/>
      </el-icon>
    </span>
        <template #dropdown>
          <el-dropdown-menu>
            <!--            <el-dropdown-item @click="$router.push('/person')">个人信息</el-dropdown-item>-->
            <el-dropdown-item @click="$router.push('/login')">退出系统</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>

  </div>
</template>

<script>
import {navMsg} from "@/assets/data/header";
import {ArrowDown} from '@element-plus/icons-vue'
import {mapGetters} from 'vuex'
export default {
  name: "Header",
  props:["user"],
  data(){
    return {
      user:{},
      navMsg:[],
      keyword:"",
    }
  },
  created() {
    let userStr = sessionStorage.getItem("user")||"{}";
    this.user = JSON.parse(userStr);
    this.navMsg = navMsg;
  },
  computed:{
    ...mapGetters([
        'activeName'
    ])
  },
  components:{
    ArrowDown,
    navMsg,
  },
  methods:{
    goHome(){
      this.goPage("首页",'/')
    },
    goPage(name,path){
      this.$store.commit('setActiveName',name);
      this.$router.push({path:path});
    },
    goSearch(){
      console.log(this.keyword)
    }
  }
}
</script>

<style lang="scss" scoped>
.the-header{
  height: 50px;
  line-height: 50px;
  border-bottom: 1px solid #ccc;
  display: flex;
  text-align: center;
}
.header-logo{
  width: 200px;
  font-weight: bold;
  white-space: nowrap;
  cursor: pointer;
  color: gray;
  img{
    height: 50px;
    line-height: 50px;
    vertical-align: middle;
    margin-right: -10px;
    margin-top: -10px;
    color: gray;
  }
}
.navbar {
  //width: 400px;
  list-style: none;
  padding-left: 0;
  color: gray;
  li{
    //width: 80px;
    display:inline-block;
    margin: 0 10px;
  }
}
.search{
  width: 300px;
  height: 50px;

  .search-text,{
    top: -4px;
  }

}
.icon{
  fill: #cccccc;
  width: 32px;
  line-height: 50px;
  vertical-align: middle;
  margin-right: -10px;
  margin-top: -10px;
  color: gray;
}
.the-header-right{
  width: 150px;
}
.active{
  color: dodgerblue;
}
</style>