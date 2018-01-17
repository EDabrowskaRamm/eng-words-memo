<template lang="html">
  <div class="container kitchen">
    <h3> {{ catTitle }}: {{ catSubtitle }} </h3>
    <div class="wrapper">
      <img src="../../../assets/kitchen.jpg" class="img-fluid" alt="kitchen"/>
      <span :class="`${item.replace(/ +/g, '')}`" v-for="(item, index) in kitchenEN">
        <i class="fa fa-plus-circle" aria-hidden="true" @click="chair = !chair"></i>
        <p v-if="chair"> {{ item }} </p>
        <p v-else> {{ kitchenPL.index }} </p>
      </span>
    </div>
  </div>
</template>

<script>
  import home from './home.json'

  export default {
    data () {
      return {
        catTitle: home.title,
        catSubtitle: 'Kitchen',
        kitchenEN: {
          item1: home.en.kitchen.item1,
          item2: home.en.kitchen.item2,
          item3: home.en.kitchen.item3,
          item4: home.en.kitchen.item4,
          item5: home.en.kitchen.item5,
          item6: home.en.kitchen.item6,
          item7: home.en.kitchen.item7,
          item8: home.en.kitchen.item8,
          item9: home.en.kitchen.item9,
          item10: home.en.kitchen.item10
        },
        kitchenPL: {
          item1: home.pl.kitchen.item1,
          item2: home.pl.kitchen.item2,
          item3: home.pl.kitchen.item3,
          item4: home.pl.kitchen.item4,
          item5: home.pl.kitchen.item5,
          item6: home.pl.kitchen.item6,
          item7: home.pl.kitchen.item7,
          item8: home.pl.kitchen.item8,
          item9: home.pl.kitchen.item9,
          item10: home.pl.kitchen.item10
        },
        chair: true,
        microwave: true
      }
    },
    methods: { }

  }
</script>

<style lang="scss">
  .container.kitchen {
    h3 {
      text-transform: capitalize;
    }
    .wrapper {
      position: relative;
      .img-fluid {
        padding: 1rem 0;
      }
      p {
        background-color: #c3c3c3;
        display: inline-block;
      }

      span {
        display: block;
        position: absolute;
        min-width: 10%;
      }

      .chair {
        top: 75%;
        left: 65%;
      }

      .cupboard {
        top: 35%;
        left: 65%;
      }

      .dishwasher {
        top: 55%;
        left: 70%;
      }

      .freezer {
        top: 71%;
        left: 15%;
      }

      .fridge {
        top: 31%;
        left: 15%;
      }

      .kettle {
        top: 50%;
        left: 25%;
      }

      .microwaveoven {
        top: 31%;
        left: 36%;
      }

      .oven {
        top: 61%;
        left: 36%;
      }

      .sink {
        top: 53%;
        left: 57%;
      }

      .kitchentable {
        top: 60%;
        left: 65%;
      }
    }
  }

</style>
