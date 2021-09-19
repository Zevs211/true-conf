import Vue from 'vue'
import VueRouter from 'vue-router'
import VColor from '@/components/VColor.vue'

Vue.use(VueRouter)
export default new VueRouter({
  routes: [
    {
      path: '/red',
      component: VColor
    },
    {
      path: '/yellow',
      component: VColor
    },
    {
      path: '/green',
      component: VColor
    },
  ],
  mode: 'history'
})