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
    user: null
  },
  mutations: {
    authUser (state, userData) {
      state.idToken = userData.token
      state.userId = userData.userId
    },
    storeUser (state, user) {
      state.user = user
    },
    clearAuthData (state) {
      // mutation to clear data to log out user
      state.idToken = null
      state.userId = null
    }
  },
  actions: {
    register ({ commit, dispatch }, authData) {
      axios.post('/signupNewUser?key=AIzaSyALHfVfvRmXgkuvAeFJc5cSvyVFWwMcfrQ', {
        email: authData.email,
        password: authData.password,
        returnSecureToken: true
      })
        .then(res => {
          console.log(res)
          // save data to auth database
          commit('authUser', {
            token: res.data.idToken,
            userId: res.data.localId
          })
          // save token id to local storage so that user won't be loggedout after browser refresh
          localStorage.setItem('token', res.data.idToken)
          // save data to firebase
          dispatch('storeUser', authData)
        })
        .catch(err => console.log(err))
    },
    login ({ commit }, authData) {
      axios.post('/verifyPassword?key=AIzaSyALHfVfvRmXgkuvAeFJc5cSvyVFWwMcfrQ', {
        email: authData.email,
        password: authData.password,
        returnSecureToken: true
      })
        .then(res => {
          console.log(res)
          // save token id to local storage so that user won't be loggedout after browser refresh
          localStorage.setItem('token', res.data.idToken)
          commit('authUser', {
            token: res.data.idToken,
            userId: res.data.localId
          })
        })
        .catch(err => console.log(err))
    },
    // tryAutoLogin () {
    //   const token = localStorage.getItem('token')
    // },
    logout ({ commit }) {
      commit('clearAuthData')
      localStorage.removeItem('token')
      router.replace('/login')
    },
    storeUser ({ commit, state }, userData) {
      if (!state.idToken) {
        //  if we don't have token
        return
      }
      // else
      mainAxios.post('/users.json' + '?auth=' + state.idToken, userData)
        .then(res => console.log(res))
        .catch(err => console.log(err))
    },
    fetchUser ({ commit, state }) {
      if (!state.idToken) {
        //  if we don't have token
        return
      }
      // else
      mainAxios.get('/users.json' + '?auth=' + state.idToken)
      .then(res => {
        const data = res.data
        const users = []

        for (let key in data) {
          const user = data[key]

          user.id = key
          users.push(user)
        }
        console.log(users)

        // tu pobieram tylko przykładowe dane; trzeba ogarnąć, eby pobierane były dane konkretnego usera
        commit('storeUser', users[0])
        // this.userName = users[0].name
        // this.email = users[0].email
        // this.password = users[0].password
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
