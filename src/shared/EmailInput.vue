<template lang="html">
  <input type="email" class="form-control" id="emailInput" aria-describedby="emailHelp" placeholder="Email">
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
