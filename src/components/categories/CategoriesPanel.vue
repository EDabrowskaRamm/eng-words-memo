<template lang="html">
  <div class="container categories">
    <h3>Choose category</h3>
    <CategoryTmpl/>
  </div>
</template>

<script>
  import CategoryTmpl from './CategoryTmpl.vue'

  export default {
    components: {
      CategoryTmpl
    }
  }
</script>

<style lang="scss" scoped>

</style>