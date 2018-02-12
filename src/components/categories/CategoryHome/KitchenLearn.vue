<template lang="html">
  <div class="container kitchen">
    <h3> {{ catTitle }}: {{ catSubtitle }} </h3>
    <div class="wrapper">
      <img src="../../../assets/kitchen.jpg" class="img-fluid" alt="kitchen"/>
      <span :class="`${item.replace(/ +/g, '')}`" v-for="(item, index) in kitchenEN">
        <i class="fa fa-plus-circle" aria-hidden="true" @click="toggleLang(index, $event)"></i>
        <p ref="toggleWord" > {{ item }} </p>
      </span>
    </div>
    <a href="https://unsplash.com/" target="_blank">fot. Unsplash</a>
    <div class="mobileTranslations">
      <p v-for="(item, index) in kitchenPL" ref="translationPl"> {{ item }} </p>
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
        }
      }
    },
    methods: {
      toggleLang (id, event) {
        // get item that it clicked
        let clickedItem = event.srcElement.nextElementSibling.innerText
        let enVal = this.kitchenEN[id]
        let idNumber
        let langVal

        // get item number
        if (id.length > 5) {
          idNumber = id.slice(4, 7) - 1
        } else {
          idNumber = id.split('').pop() - 1
        }

        // toggle language after + click
        if (clickedItem === enVal) {
          langVal = this.kitchenPL[id]
        } else {
          langVal = this.kitchenEN[id]
        }

        // put changed value into html
        this.$refs.toggleWord[idNumber].innerText = langVal

        // mobile solutions
        // show clicked en words
        if (this.$refs.toggleWord[idNumber].style.display === '') {
          this.$refs.toggleWord.forEach(element => {
            element.style.display = ''
          })
          this.$refs.toggleWord[idNumber].style.display = 'inline-block'
        } else {
          this.$refs.toggleWord[idNumber].style.display = ''
        }
        // show translation
        if (this.$refs.translationPl[idNumber].style.display === '') {
          this.$refs.translationPl.forEach(element => {
            element.style.display = ''
          })
          this.$refs.translationPl[idNumber].style.display = 'block'
        } else {
          this.$refs.translationPl[idNumber].style.display = ''
        }
      }
    }

  }
</script>

<style lang="scss" scoped>
  @import '../../../assets/_variables.scss';

  .container.kitchen {
    overflow: auto;
    h3 {
      text-transform: capitalize;
    }
    a {
      float: right;
      clear: both;
    }
    .wrapper {
      position: relative;
      .img-fluid {
        padding: 1rem 0;
      }
      p {
        background-color: #c3c3c3;
        display: inline-block;
        padding: 1px 5px;
        @media screen and (max-width: 767px) {
          display: none;
        }
      }
      span {
        display: block;
        position: absolute;
        min-width: 10%;
        i {
          color: $iconToggleColor;
        }
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
      @media screen and (max-width: 767px) {
        .cupboard {
          top: 31%;
          left: 57%;
        }
        .dishwasher {
          top: 53%;
        }
        .kettle {
          top: 47%;
          left: 24%;
        }
        .sink {
          top: 50%;
          left: 55%;
        }
        .kitchentable {
          left: 56%;
        }
      }
    }
    .mobileTranslations {
      display: none;
      p {
        display: none;
      }
      @media screen and (max-width: 767px) {
        display: block;
        p {
          font-size: 2em;
          margin-top: 30px;
        }
      }
    }
  }

</style>
