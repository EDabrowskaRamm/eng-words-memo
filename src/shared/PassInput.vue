<template lang="html">
  <input type="password" class="form-control" id="passInput" aria-describedby="passwordInput" placeholder="Password">
</template>

<script>
export default {
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
