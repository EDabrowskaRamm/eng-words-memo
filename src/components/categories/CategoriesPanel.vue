<template lang="html">
  <div class="container categories">
    <h3>Choose category</h3>
    <CategoryTmpl/>
    <Progressbar/>
  </div>
</template>

<script>
  import CategoryTmpl from './CategoryTmpl.vue'
  import Progressbar from '../../shared/Progressbar.vue'

  export default {
    components: {
      CategoryTmpl,
      Progressbar
    }
  }
</script>

<style lang="scss">
  .container.categories {

  }
</style>