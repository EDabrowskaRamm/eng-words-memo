import Vue from 'vue'
import VueRouter from 'vue-router'

import AdminPanel from './components/admin/AdminPanel.vue'
import Login from './components/login/Login.vue'
import Register from './components/register/Register.vue'
import UserAccount from './components/userAccount/UserAccount.vue'

import CategoriesPanel from './components/categories/CategoriesPanel.vue'
import KitchenLearn from './components/categories/CategoryHome/KitchenLearn.vue'
import KitchenTest from './components/categories/CategoryHome/KitchenTest.vue'
import BathroomLearn from './components/categories/CategoryHome/BathroomLearn.vue'
import BathroomTest from './components/categories/CategoryHome/BathroomTest.vue'
import LRoomLearn from './components/categories/CategoryHome/LRoomLearn.vue'
import LRoomTest from './components/categories/CategoryHome/LRoomTest.vue'

// import store from './store'

Vue.use(VueRouter)

const routes = [
  // { path: '/', component: CategoriesPanel },
  { path: '/admin', component: AdminPanel },
  { path: '/login', component: Login },
  { path: '/register', component: Register },
  { path: '/userAccount', component: UserAccount },
  { path: '/categories', component: CategoriesPanel },
  { path: '/kitchenLearn', component: KitchenLearn },
  { path: '/kitchenTest', component: KitchenTest },
  { path: '/bathroomLearn', component: BathroomLearn },
  { path: '/bathroomTest', component: BathroomTest },
  { path: '/lRoomLearn', component: LRoomLearn },
  { path: '/lRoomTest', component: LRoomTest }

]

export default new VueRouter({mode: 'history', routes})
// export default new VueRouter({mode: 'history', routes, base: process.env.ROUTER_BASE})
