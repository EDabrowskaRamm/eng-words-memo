<template lang="html">
  <div class="container">
    <p>register!!</p>
    <form>
      <div class="form-group">
        <label for="firstName">First name
          <NameInput/>
        </label>
        <label for="firstName">Last name
          <NameInput/>
        </label>
      </div>
    </form>

  </div>
</template>

<script>
import NameInput from '../../shared/NameInput'

export default {
  components: {
    NameInput
  }
}
</script>

<style lang="scss">
  form {
    text-align: left;
  }
</style>
