// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

import Vuelidate from 'vuelidate'
import VueFire from 'vuefire'
import axios from 'axios'
import store from './store'

import router from './router'

require('../node_modules/bootstrap/scss/bootstrap.scss')

Vue.config.productionTip = false
Vue.use(Vuelidate)
Vue.use(VueFire)

axios.defaults.baseURL = 'https://eng-words-memo.firebaseio.com'
axios.defaults.headers.get['Accepts'] = 'application/json'

const reqInterceptor = axios.interceptors.request.use(config => {
  console.log('Request Interceptor', config)
  return config
})
const resInterceptor = axios.interceptors.response.use(res => {
  console.log('Response Interceptor', res)
  return res
})

axios.interceptors.request.eject(reqInterceptor)
axios.interceptors.response.eject(resInterceptor)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  // template: '<App/>',
  // components: { App }
  render: h => h(App)
})
