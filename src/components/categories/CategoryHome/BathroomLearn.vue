<template lang="html">
  <div class="container bathroom">
    <h3> {{ catTitle }}: {{ catSubtitle }} </h3>
    <div class="wrapper">
      <img src="../../../assets/bathroom.jpg" class="img-fluid" alt="bathroom"/>
      <span :class="`${item.replace(/ +/g, '')}`" v-for="(item, index) in bathroomEN">
        <i class="fa fa-plus-circle" aria-hidden="true" @click="toggleLang(index, $event)"></i>
        <p ref="toggleWord" > {{ item }} </p>
      </span>
    </div>
    <a href="https://unsplash.com/" target="_blank">fot. Unsplash</a>
    <div class="mobileTranslations">
      <p v-for="(item, index) in bathroomPL" ref="translationPl"> {{ item }} </p>
    </div>
  </div>
</template>

<script>
  import home from './home.json'

  export default {
    data () {
      return {
        catTitle: home.title,
        catSubtitle: 'bathroom',
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
    methods: {
      toggleLang (id, event) {
        // get item that it clicked
        let clickedItem = event.srcElement.nextElementSibling.innerText
        let enVal = this.bathroomEN[id]
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
          langVal = this.bathroomPL[id]
        } else {
          langVal = this.bathroomEN[id]
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

  .container.bathroom {
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
        left: 89%;
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
