import AdminPanel from './components/admin/AdminPanel.vue'
import Login from './components/login/Login.vue'
import Register from './components/register/Register.vue'
import CategoriesPanel from './components/categories/CategoriesPanel.vue'
import UserAccount from './components/userAccount/UserAccount.vue'

// import E404 from './components/error/404.vue'

export const routes = [
  { path: '/admin', component: AdminPanel },
  { path: '/login', component: Login },
  { path: '/register', component: Register },
  { path: '/categories', component: CategoriesPanel },
  { path: '/userAccount', component: UserAccount }

]
