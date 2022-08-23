import { createStore } from 'vuex'
import Configure from "@/store/configure";
import user from '@/store/user'
import song from '@/store/song'

const store = createStore({
  modules: {
    Configure,user,song
  },

})
export default store