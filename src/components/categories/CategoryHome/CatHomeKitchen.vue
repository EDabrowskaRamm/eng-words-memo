<template lang="html">
  <div class="container kitchenLearn">
    <CategoryLearnTmpl :catTitle="catTitle" :catSubTitle="catSubTitle" 
                        :picture="picture" />
    <span class="microwave" >
      <i class="fa fa-plus-circle" aria-hidden="true" @click="microwave = !microwave"></i>
      <p v-if="microwave"> {{ item5 }} </p>
      <p v-else> {{ home.pl.kitchen.item5 }} </p>
    </span>
  </div>
</template>

<script>
  import CategoryLearnTmpl from '../CategoryLearnTmpl'
  import home from './home.json'

  export default {
    components: {
      CategoryLearnTmpl
    },
    data () {
      return {
        catTitle: home.title,
        catSubTitle: home.en.kitchen.title,
        picture: home.en.kitchen.title,
        microwave: true,
        item5: home.en.kitchen.item5
      }
    },
    methods: { }

  }
</script>

<style lang="scss">
  .container.kitchenLearn {
    p {
      background-color: #c3c3c3;
    }

    .microwave {
      display: block;
      position: absolute;
      top: 25%;
      left: 39%;
      min-width: 10%;
      p {
        display: inline-block;
      }
    }
  }

</style>
