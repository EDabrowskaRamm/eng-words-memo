<template lang="html">
  <span>
    <h3> Learning {{ catTitle }}: {{ catSubTitle }} </h3>
    <span>
      <img :src="require(`@/assets/${picture}.jpg`)" class="img-fluid" :alt="picture" />
    </span>
  </span>
</template>

<script>
export default {
  data () {
    return {
      catTitle: '',
      catSubTitle: '',
      picture: 'kitchen'
    }
  },
  methods: {

  }
}
</script>

<style lang="scss">


</style>
