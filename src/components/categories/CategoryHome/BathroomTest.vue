<template lang="html">
  <div class="container bathroom">
    <h3>Test {{ catTitle }}: {{ catSubtitle }} </h3>
    <div class="wrapper">
      <img src="../../../assets/bathroom.jpg" class="img-fluid" alt="bathroom"/>
      <span :class="`${item.replace(/ +/g, '')}`" v-for="(item, index) in bathroomEN">
        <i class="fa fa-pencil-square-o" aria-hidden="true"></i>
        <input type="text" ref="input" :disabled="disable">
      </span>
      <div class="scoreDisplay" v-if="scored">
        <p v-if="passed">Congratulations! You passed, {{ score }} / 11</p>
        <p v-else>Try again, {{ score }} / 11</p>
      </div>
    </div>
    <div class="caption">
      <a href="https://unsplash.com/" target="_blank">fot. Unsplash</a>
    </div>
    <button class="btn btn-outline-secondary" role="button" @click="scoreTest">
      Score</button>
    <div class="mobileTranslations">
      <input v-for="(item, index) in bathroomPL" ref="translationPl" :placeholder="item"
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
        catSubtitle: 'bathroom',
        scored: false,
        passed: false,
        score: 0,
        disable: false,
        windowWidth: 0,
        bathroomEN: {
          item1: home.en.bathroom.item1,
          item2: home.en.bathroom.item2,
          item3: home.en.bathroom.item3,
          item4: home.en.bathroom.item4,
          item5: home.en.bathroom.item5,
          item6: home.en.bathroom.item6,
          item7: home.en.bathroom.item7,
          item8: home.en.bathroom.item8,
          item9: home.en.bathroom.item9,
          item10: home.en.bathroom.item10,
          item11: home.en.bathroom.item11
        },
        bathroomPL: {
          item1: home.pl.bathroom.item1,
          item2: home.pl.bathroom.item2,
          item3: home.pl.bathroom.item3,
          item4: home.pl.bathroom.item4,
          item5: home.pl.bathroom.item5,
          item6: home.pl.bathroom.item6,
          item7: home.pl.bathroom.item7,
          item8: home.pl.bathroom.item8,
          item9: home.pl.bathroom.item9,
          item10: home.pl.bathroom.item10,
          item11: home.pl.bathroom.item11
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

  .container.bathroom {
    h3 {
      text-transform: capitalize;
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
      .bath {
        top: 60%;
        left: 65%;
      }
      .bathroomcabinet {
        top: 70%;
        left: 20%;
      }
      .mirror {
        top: 20%;
        left: 13%;
      }
      .rug {
        top: 84%;
        left: 45%;
      }
      .scale {
        top: 87%;
        left: 15%;
      }
      .shower {
        top: 18%;
        left: 56%;
      }
      .soap {
        top: 52%;
        left: 10%;
      }
      .toilet {
        top: 61%;
        left: 46%;
      }
      .toothbrush {
        top: 36%;
        left: 15%;
      }
      .towel {
        top: 60%;
        left: 84%;
      }
      .washbasin {
        top: 52%;
        left: 30%;
      }
      @media screen and (max-width: 767px) {
        .bath {
          top: 59%;
        }
        .scale {
          top: 83%;
        }
        .soap {
          left: 8%;
        }
        .toothbrush {
          left: 11%;
        }
        .towel {
          top: 60%;
          left: 85%;
        }
        .washbasin {
          left: 24%;
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
        margin-top: 42%;
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
