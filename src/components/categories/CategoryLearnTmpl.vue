<template lang="html">
  <span class="learningTmpl" >
    <h3> Learning {{ catTitle }}: {{ catSubTitle }} </h3>
    <div class="wrapper">
      <img :src="require(`@/assets/${picture}.jpg`)" class="img-fluid" :alt="picture"/>
      <!-- <div>
        <i class="fa fa-search-plus" aria-hidden="true"></i>
        <i class="fa fa-search-minus" aria-hidden="true"></i>
      </div> -->
    </div>
  </span>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  props: {
    catTitle: '',
    catSubTitle: '',
    picture: ''
  },
  methods: {

  }
}
</script>

<style lang="scss">
  .learningTmpl {
    .wrapper {
      position: relative;
    }
    .img-fluid {
      padding: 1rem 0;
    }
  }

</style>
