<template lang="html">
  <div class="container kitchen">
    <h3>Test {{ catTitle }}: {{ catSubtitle }} </h3>
    <div class="wrapper">
      <img src="../../../assets/kitchen.jpg" class="img-fluid" alt="kitchen"/>
      <span :class="`${item.replace(/ +/g, '')}`" v-for="(item, index) in kitchenEN">
        <i class="fa fa-pencil-square-o" aria-hidden="true"></i>
        <input type="text" ref="input" :disabled="disable">
      </span>
      <div class="scoreDisplay" v-if="scored">
        <p v-if="passed">Congratulations! You passed, {{ score }} / 10</p>
        <p v-else>Try again, {{ score }} / 10</p>
      </div>
    </div>
    <div class="caption">
      <a href="https://unsplash.com/" target="_blank">fot. Unsplash</a>
    </div>
    <button class="btn btn-outline-secondary" role="button" @click="scoreTest">
      Score</button>
    <div class="mobileTranslations">
      <input v-for="(item, index) in kitchenPL" ref="translationPl" :placeholder="item"
              :disabled="disable">
    </div>
  </div>
</template>

<script>
  import home from './home.json'
  import router from '../../../router'

  export default {
    data () {
      return {
        catTitle: home.title,
        catSubtitle: 'Kitchen',
        scored: false,
        passed: false,
        score: 0,
        disable: false,
        windowWidth: 0,
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
    mounted () {
      this.$nextTick(() => {
        window.addEventListener('resize', this.getWindowWidth)
        this.getWindowWidth()
      })
    },
    methods: {
      scoreTest () {
        console.log(this.windowWidth)
        this.windowWidth <= 767 ? this.mobileScoring() : this.scoreTest()

        // set variables
        this.disable = true
        this.scored = true

        if (this.score >= 75 / 100 * 10) {
          this.passed = true
        }

        // save scores to lockalstorage
        localStorage.setItem('kitchenTestScore', this.score)

        // automatically change view to categories
        setTimeout(() => {
          router.replace('/categories')
        }, 2000)
      },
      desktopScoring () {
        const inputArray = this.$refs.input
        // iterate over all inputs
        for (let i = 0; i < inputArray.length; i++) {
          // iterate over english object and compare input value to object value
          for (const key in this.kitchenEN) {
            if (inputArray[i].value === this.kitchenEN[key]) {
              this.score++
              inputArray[i].classList.add('goodAnswer')
            }
          }
        }
      },
      mobileScoring () {
        const inputArrayMob = this.$refs.translationPl

        for (let i = 0; i < inputArrayMob.length; i++) {
          // iterate over english object and compare input value to object value
          for (const key in this.kitchenEN) {
            if (inputArrayMob[i].value === this.kitchenEN[key]) {
              this.score++
              inputArrayMob[i].classList.add('goodAnswer')
            }
          }
        }
      },
      getWindowWidth (event) {
        this.windowWidth = document.documentElement.clientWidth
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
      clear: both;
    }
    .caption {
      text-align: right;
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
      }
      span {
        display: block;
        position: absolute;
        min-width: 10%;
        i {
          color: $iconToggleColor;
        }
        input {
          width: 130px;
          @media screen and (max-width: 767px) {
            display: none;
          }
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
        top: 49%;
        left: 59%;
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
    .scoreDisplay {
      background: linear-gradient(
        rgba(0, 0, 0, 0.8), 
        rgba(0, 0, 0, 0.8)
      );
      text-align: center;
      position: absolute;
      top: 0;
      height: 100%;
      width: 100%;
      padding: 1rem 0;
      p {
        background-color: transparent;
        color: white;
        font-size: 3rem;
        margin-top: 25%;
      }
    }

    button {
      margin-top: 1rem;
    }

    .mobileTranslations {
      display: none;
      @media screen and (max-width: 767px) {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        input {
          display: flex;
          margin-top: 1rem;
          width: auto;
        }
      }
    }
    .goodAnswer {
      background-color: $vueColor;
      border-color: $vueColor;          
    }
    .badAnswer {
      background-color: $badAnswerColor;
      border-color: $badAnswerColor;          
    }
  }

</style>
