import Vue from 'vue'
import Vuex from 'vuex'

import axios from './axios-auth'
import mainAxios from 'axios'
import router from './router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    idToken: null,
    userId: null,
    user: null,
    isLoginError: false,
    name: null,
    password: null,
    email: null
  },
  mutations: {
    authUser (state, userData) {
      state.idToken = userData.token
      state.userId = userData.userId
      state.name = userData.name
      state.password = userData.password
      state.email = userData.email
    },
    storeUser (state, user) {
      state.user = user
    },
    clearAuthData (state) {
      // mutation to clear data to log out user
      state.idToken = null
      state.userId = null
      state.password = null
      state.email = null
    }
  },
  actions: {
    register ({ commit, dispatch }, authData) {
      axios.post('/signupNewUser?key=AIzaSyALHfVfvRmXgkuvAeFJc5cSvyVFWwMcfrQ', {
        name: authData.name,
        email: authData.email,
        password: authData.password,
        returnSecureToken: true
      })
        .then(res => {
          // save data to auth database
          commit('authUser', {
            token: res.data.idToken,
            userId: res.data.localId,
            name: res.data.name,
            password: res.data.password,
            email: res.data.email
          })
          // save token id to local storage so that user won't be loggedout after browser refresh
          const now = new Date()
          const expirationDate = new Date(now.getTime() + res.data.expiresIn * 1000)
          localStorage.setItem('token', res.data.idToken)
          localStorage.setItem('expirationDate', expirationDate)
          localStorage.setItem('userId', res.data.localId)
          // save data to firebase
          dispatch('storeUser', authData)
          router.replace('/userAccount')
          console.log(res)
        })
        .catch(err => {
          console.log(err)
          this.isLoginError = true
        })
    },
    login ({ commit, dispatch }, authData) {
      axios.post('/verifyPassword?key=AIzaSyALHfVfvRmXgkuvAeFJc5cSvyVFWwMcfrQ', {
        name: authData.name,
        email: authData.email,
        password: authData.password,
        returnSecureToken: true
      })
        .then(res => {
          // console.log(res)
          // save token id to local storage so that user won't be loggedout after browser refresh
          const now = new Date()
          const expirationDate = new Date(now.getTime() + res.data.expiresIn * 1000)
          localStorage.setItem('token', res.data.idToken)
          localStorage.setItem('expirationDate', expirationDate)
          localStorage.setItem('userId', res.data.localId)
          commit('authUser', {
            token: res.data.idToken,
            userId: res.data.localId,
            name: res.data.name,
            password: res.data.password,
            email: res.data.email
          })
          router.replace('/userAccount')
          console.log(authData)
        })
        .catch(err => {
          console.log(err)
          this.isLoginError = true
        })
    },
    tryAutoLogin ({ commit }) {
      const token = localStorage.getItem('token')
      const userId = localStorage.getItem('userId')
      const expirationDate = localStorage.getItem('expirationDate')
      const now = new Date()

      if (!token) {
        router.replace('/login')
        return null
      }

      if (now >= expirationDate) {
        // if token and date are expired clear localstorage
        localStorage.removeItem('token')
        localStorage.removeItem('userId')
        localStorage.removeItem('expirationDate')
        router.replace('/login')
        return null
      }

      commit('authUser', {
        token: token,
        userId: userId
      })
    },
    logout ({ commit }) {
      commit('clearAuthData')
      localStorage.removeItem('token')
      localStorage.removeItem('userId')
      localStorage.removeItem('expirationDate')

      router.replace('/login')
    },
    storeUser ({ commit, state }, userData) {
      if (!state.idToken) {
        //  if we don't have token
        return
      }
      // else
      mainAxios.post('/users.json' + '?auth=' + state.idToken, userData)
        .then(res => {
          console.log(res.data.name)
          console.log(userData)
        })
        .catch(err => console.log(err))
    },
    fetchUser ({ commit, state }, userData) {
      if (!state.idToken) {
        //  if we don't have token
        return
      }
      // else
      axios.post('/getAccountInfo?key=AIzaSyALHfVfvRmXgkuvAeFJc5cSvyVFWwMcfrQ', {
        'idToken': state.idToken
      })
        .then(res => {
          console.log('fetch:', userData)

          commit('storeUser', res.data.users[0])
        })
        .catch(err => console.log(err))
    }
  },
  getters: {
    user (state) {
      return state.user
    },
    isAuthenticated (state) {
      // if token is not null we are authenticated and can login
      return state.idToken !== null
    }
  }
})
