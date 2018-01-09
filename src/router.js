import Vue from 'vue'
import VueRouter from 'vue-router'

import AdminPanel from './components/admin/AdminPanel.vue'
import Login from './components/login/Login.vue'
import Register from './components/register/Register.vue'
import CategoriesPanel from './components/categories/CategoriesPanel.vue'
import UserAccount from './components/userAccount/UserAccount.vue'

// import store from './store'

Vue.use(VueRouter)

const routes = [
  { path: '/admin', component: AdminPanel },
  { path: '/login', component: Login },
  { path: '/register', component: Register },
  { path: '/categories',
    component: CategoriesPanel
  },
  { path: '/userAccount',
    component: UserAccount
  }

]

export default new VueRouter({mode: 'history', routes})
