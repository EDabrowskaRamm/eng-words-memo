<template lang="html">
  <input class="form-control" aria-describedby="emailHelp" placeholder="Email"
        type="email" id="email" v-model="email" @input="$v.email.$touch()"
  >
</template>

<script>
import { required, email } from 'vuelidate/lib/validators'

export default {
  data () {
    return {
      email: ''
    }
  },
  validations: {
    email: {
      required,
      email
    }
  }
}
</script>

<style lang="scss" scoped>
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

</style>
