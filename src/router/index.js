import Vue from 'vue'
import Router from 'vue-router'
// import Dashboard from '@/components/Dashboard'
import Dashboard from '../components/menus/Dashboard.vue'
import Other from '../components/menus/Other.vue'
import NavItem1 from '../components/menus/NavItem1.vue'
import NavItem2 from '../components/menus/NavItem2.vue'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/src/components/menus/Dashboard.vue',
    name: 'Dashboard',
    component: Dashboard
  },
  {
    path: '/src/components/menus/NavItem1.vue',
    name: 'NavItem1',
    component: NavItem1
  },
  {
    path: '/src/components/menus/NavItem2.vue',
    name: 'NavItem2',
    component: NavItem2
  },
  {
    path: '/src/components/menus/Other.vue',
    name: 'Other',
    component: Other
  }
  ]
})
