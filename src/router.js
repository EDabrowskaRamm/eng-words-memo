import Vue from 'vue'
import VueRouter from 'vue-router'

import AdminPanel from './components/admin/AdminPanel.vue'
import Login from './components/login/Login.vue'
import Register from './components/register/Register.vue'
import CategoriesPanel from './components/categories/CategoriesPanel.vue'
import UserAccount from './components/userAccount/UserAccount.vue'

import store from './store'

Vue.use(VueRouter)

const routes = [
  { path: '/admin', component: AdminPanel },
  { path: '/login', component: Login },
  { path: '/register', component: Register },
  { path: '/categories',
    component: CategoriesPanel,
    beforeEnter (to, from, next) {
      // if the user is logged in one may enter, else one need to login
      if (store.state.idToken) {
        next()
      } else {
        next('/login')
      }
    }
  },
  { path: '/userAccount',
    component: UserAccount,
    beforeEnter (to, from, next) {
      // if the user is logged in one may enter, else one need to login
      if (store.state.idToken) {
        next()
      } else {
        next('/login')
      }
    }
  }

]

export default new VueRouter({mode: 'history', routes})
