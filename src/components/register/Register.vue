<template lang="html">
  <div class="container">
    <form @submit.prevent="onSubmit" >
      <h3>Register</h3>
      <div class="form-group" :class="{invalid: $v.userName.$error}">
        <i class="fa fa-user" aria-hidden="true"></i>
        <!-- <NameInput/> -->
        <input class="form-control" aria-describedby="emailHelp" placeholder="User name"
                type="text" id="userName" v-model="userName" @input="$v.userName.$touch()">
        <p v-if="$v.userName.$error" :class="{invalid: $v.userName.$error}">
          User name should have at least {{ $v.userName.$params.minLength.min }} letters
        </p>
      </div>
      <div class="form-group" :class="{invalid: $v.email.$error}" >
        <i class="fa fa-envelope" aria-hidden="true"></i>
        <!-- <EmailInput/> -->
        <input class="form-control" aria-describedby="emailHelp" placeholder="Email"
                type="email" id="email" v-model="email" @input="$v.email.$touch()">
        <p v-if="$v.email.$error" :class="{invalid: $v.email.$error}">
          Please provide a valid email address
        </p>
      </div>
      <div class="form-group" :class="{invalid: $v.password.$error}">
        <i class="fa fa-lock" aria-hidden="true"></i>
        <!-- <PassInput/> -->
        <input class="form-control" aria-describedby="passwordInput" placeholder="Password"
                type="password" id="password" v-model="password" @input="$v.password.$touch()">
        <p v-if="$v.password.$error" :class="{invalid: $v.password.$error}">
          Password should have at least {{ $v.password.$params.minLength.min }} characters
        </p>
      </div>
      <button type="button" name="button" class="btn btn-outline-success">
        Create account
      </button>
    </form>
  </div>
</template>

<script>
  import NameInput from '../../shared/NameInput'
  import PassInput from '../../shared/PassInput'
  import EmailInput from '../../shared/EmailInput'
  import { required, email, minLength } from 'vuelidate/lib/validators'

  export default {
    components: {
      NameInput,
      PassInput,
      EmailInput
    },
    data () {
      return {
        userName: '',
        email: '',
        password: ''
      }
    },
    validations: {
      email: {
        required,
        email
      },
      userName: {
        required,
        minLength: minLength(5)
      },
      password: {
        required,
        minLength: minLength(6)
      }
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
