<template lang="html">
  <div class="container">
    <form>
      <h3>Your account</h3>
      <div class="form-group">
        <i class="fa fa-user" aria-hidden="true"></i>
        <input class="form-control" aria-describedby="nameHelp" type="text"
                id="name" v-model="name">
      </div>
      <div class="form-group" >
        <i class="fa fa-envelope" aria-hidden="true"></i>
        <input class="form-control" aria-describedby="emailHelp" type="email"
                id="email" v-model="email">
      </div>
      <div class="form-group">
        <i class="fa fa-lock" aria-hidden="true"></i>
        <input class="form-control" aria-describedby="passwordInput" type="password"
                id="password" v-model="password">
      </div>
      <button type="submit" name="button" class="btn btn-outline-success"
              @click.prevent="saveAccountData">Save account
      </button>
    </form>
  </div>
</template>

<script>
  export default {
    data () {
      return {

      }
    },
    methods: {
      saveAccountData () {
        console.log('changed data')
        console.log(this.$store.getters.user.id)
      }
    },
    computed: {
      name () {
        return !this.$store.getters.user ? false : this.$store.getters.user.name
      },
      email () {
        return !this.$store.getters.user ? false : this.$store.getters.user.email
      },
      password () {
        return !this.$store.getters.user ? false : this.$store.getters.user.password
      }
    },
    created () {
      this.$store.dispatch('fetchUser')
    }
  }
</script>

<style lang="scss" scoped>
  @import '../../assets/_variables.scss';

  .container {
    form {
      display: flex;
      flex-direction: column;
      text-align: left;
      background-color: white;
      padding: 1rem;
      margin: 1rem 0;
      box-shadow: 10px 10px 5px -5px rgba(0,0,0,0.26);
      h3 {
        text-align: center;
        margin-bottom: 1.5rem;
      }
      .form-group {
        margin-bottom: 1.5rem;
        .fa {
          font-size: 1.4rem;
          padding-right: .75rem;
        }
        .fa-envelope {
          padding-right: .5rem;
        }
        input {
          border-radius: 0;
          border-top: none;
          border-left: none;
          border-right: none;
          width: calc(100% - 3rem);
          display: inline-block;
          background-color: white;
          &:focus, &:active {
            box-shadow: none;
          }
        }
        p.invalid {
          color: #dc3545;
          font-size: .9rem;
          padding-left: 2.2rem;
          padding-top: .2rem;
        }
      }
      button {
        align-self: flex-end;
      }
      .btn-outline-success {
        color: $vueColor;
        border-color: $vueColor;
        &:hover, &:focus, &:active {
          color: #fff;
          border-color: $vueColor;
          background-color: $vueColor;
        }
      }
      p.invalid {
        color: #dc3545;
        font-size: .9rem;
      }

      //validations
      .form-group.invalid {
        color: #dc3545;
      }
    }


    //mobile
    @media(min-width: 767px) {
      .container {
        display: flex;
        justify-content: center;
        form {
          width: 481px;
        }
      }
    }

  }
</style>
