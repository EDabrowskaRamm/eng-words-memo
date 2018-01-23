import Vue from 'vue'
import VueRouter from 'vue-router'

import AdminPanel from './components/admin/AdminPanel.vue'
import Login from './components/login/Login.vue'
import Register from './components/register/Register.vue'
import UserAccount from './components/userAccount/UserAccount.vue'

import CategoriesPanel from './components/categories/CategoriesPanel.vue'
import KitchenLearn from './components/categories/CategoryHome/KitchenLearn.vue'
import KitchenTest from './components/categories/CategoryHome/KitchenTest.vue'

// import store from './store'

Vue.use(VueRouter)

const routes = [
  { path: '/admin', component: AdminPanel },
  { path: '/login', component: Login },
  { path: '/register', component: Register },
  { path: '/userAccount', component: UserAccount },
  { path: '/categories', component: CategoriesPanel },
  { path: '/kitchenLearn', component: KitchenLearn },
  { path: '/kitchenTest', component: KitchenTest }

]

export default new VueRouter({mode: 'history', routes})
