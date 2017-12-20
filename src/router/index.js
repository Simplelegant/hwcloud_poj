import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Ops from '@/components/Ops'
import ActiveMap from '@/components/ActiveMap'
import UserCenter from '@/components/UserCenter'
import traveldetail from '@/components/traveldetail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Ops',
      component: Ops
    },
    {
    	path: '/activemap',
      	name: 'ActiveMap',
      	component: ActiveMap
    },
    {
    	path: '/usercenter',
      	name: 'UserCenter',
      	component: UserCenter
    },
    {
      path: '/traveldetail',
        name: 'traveldetail',
        component: traveldetail
    }
  ]
})
