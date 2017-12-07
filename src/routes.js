import AdminPanel from './components/admin/AdminPanel.vue'
import Login from './components/login/Login.vue'
import Register from './components/register/Register.vue'
// import E404 from './components/error/404.vue'
import App from './App.vue'

export const routes = [
  { path: '', component: App },
  { path: '/admin', component: AdminPanel },
  { path: '/login', component: Login },
  { path: '/register', component: Register }
  // { path: '/', component: Register }

]
