import { createRouter, createWebHistory } from 'vue-router'
import home from "@/views/Home";
import MyMusic from "@/views/MyMusic";
import Singer from "@/views/Singer";
import SongList from "@/views/SongList";

const routes = [
  {
    path: '/',
    name: 'home',
    component:home,
  },
  {
    path: '/my-music',
    name: 'my-music',
    component:MyMusic,
  },
  {
    path: '/singer',
    name: 'singer',
    component:Singer,
  },
  {
    path: '/song-list',
    name: 'song-list',
    component:SongList,
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
