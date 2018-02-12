<template lang="html">
  <div class="container livingRoom">
    <h3>Test {{ catTitle }}: {{ catSubtitle }} </h3>
    <div class="wrapper">
      <img src="../../../assets/livingroom.jpg" class="img-fluid" alt="livingRoom"/>
      <span :class="`${item.replace(/ +/g, '')}`" v-for="(item, index) in livingRoomEN">
        <i class="fa fa-pencil-square-o" aria-hidden="true"></i>
        <input type="text" ref="input" :disabled="disable">
      </span>
      <div class="scoreDisplay" v-if="scored">
        <p v-if="passed">Congratulations! You passed, {{ score }} / 9</p>
        <p v-else>Try again, {{ score }} / 9</p>
      </div>
    </div>
    <div class="caption">
      <a href="https://unsplash.com/" target="_blank">fot. Unsplash</a>
    </div>
    <button class="btn btn-outline-secondary" role="button" @click="scoreTest">
      Score</button>
    <div class="mobileTranslations">
      <input v-for="(item, index) in livingRoomPL" ref="translationPl" :placeholder="item"
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
        catSubtitle: 'livingRoom',
        scored: false,
        passed: false,
        score: 0,
        disable: false,
        windowWidth: 0,
        livingRoomEN: {
          item1: home.en.livingRoom.item1,
          item2: home.en.livingRoom.item2,
          item3: home.en.livingRoom.item3,
          item4: home.en.livingRoom.item4,
          item5: home.en.livingRoom.item5,
          item6: home.en.livingRoom.item6,
          item7: home.en.livingRoom.item7,
          item8: home.en.livingRoom.item8,
          item9: home.en.livingRoom.item9
        },
        livingRoomPL: {
          item1: home.pl.livingRoom.item1,
          item2: home.pl.livingRoom.item2,
          item3: home.pl.livingRoom.item3,
          item4: home.pl.livingRoom.item4,
          item5: home.pl.livingRoom.item5,
          item6: home.pl.livingRoom.item6,
          item7: home.pl.livingRoom.item7,
          item8: home.pl.livingRoom.item8,
          item9: home.pl.livingRoom.item9
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

  .container.livingRoom {
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
          width: 96px;
          @media screen and (max-width: 767px) {
            display: none;
          }
        }
      }
      .armchair {
        top: 73%;
        left: 65%;
      }
      .blanket {
        top: 68%;
        left: 41%;
      }
      .bookcase {
        top: 17%;
        left: 60%;
      }
      .coffeetable {
        top: 62%;
        left: 45%;
      }
      .cushion {
        top: 52%;
        left: 71%;
      }
      .stairs {
        top: 53%;
        left: 2%;
      }
      .painting {
        top: 15%;
        left: 5%;
      }
      .sofa {
        top: 59%;
        left: 26%;
      }
      .TV {
        top: 48%;
        left: 89%;
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
        margin-top: 21%;
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
