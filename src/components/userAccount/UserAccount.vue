<template lang="html">
  <div class="container">
    <form>
      <h3>Your account</h3>
      <div class="form-group">
        <i class="fa fa-user" aria-hidden="true"></i>
        <!-- <NameInput/> -->
        <input class="form-control" aria-describedby="nameHelp" type="text"
                id="userName" v-model="userName">
      </div>
      <div class="form-group" >
        <i class="fa fa-envelope" aria-hidden="true"></i>
        <!-- <EmailInput/> -->
        <input class="form-control" aria-describedby="emailHelp" type="email"
                id="email" v-model="email">
      </div>
      <div class="form-group">
        <i class="fa fa-lock" aria-hidden="true"></i>
        <!-- <PassInput/> -->
        <input class="form-control" aria-describedby="passwordInput" type="password"
                id="password" v-model="password">
      </div>
      <button type="submit" name="button" class="btn btn-outline-success"
              >
        Save account
      </button>
    </form>
  </div>
</template>

<script>
// import axios from 'axios'

export default {
  data () {
    return {
      userName: ''
      // email: '',
      // password: ''
    }
  },
  computed: {
    email () {
      return !this.$store.getters.user ? false : this.$store.getters.user.email
    }
  },
  created () {
    this.$store.dispatch('fetchUser')
  }
}
</script>

<style lang="scss">
</style>
