<template lang="html">
  <form>
    <h3> {{ name }} </h3>
    <div class="form-group">
      <i class="fa fa-user" aria-hidden="true"></i>
      <NameInput/>
    </div>
    <div class="form-group">
      <i class="fa fa-envelope" aria-hidden="true"></i>
      <EmailInput/>
    </div>
    <div class="form-group">
      <i class="fa fa-lock" aria-hidden="true"></i>
      <PassInput/>
    </div>
    
  </form>
</template>

<script>
export default {
  data () {
    return {
      name: 'Log in'
    }
  }
}
</script>

<style lang="scss">
</style>
