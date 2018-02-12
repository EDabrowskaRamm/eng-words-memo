<template lang="html">
  <div class="container livingRoom">
    <h3> {{ catTitle }}: {{ catSubtitle }} </h3>
    <div class="wrapper">
      <img src="../../../assets/livingroom.jpg" class="img-fluid" alt="livingRoom"/>
      <span :class="`${item.replace(/ +/g, '')}`" v-for="(item, index) in livingRoomEN">
        <i class="fa fa-plus-circle" aria-hidden="true" @click="toggleLang(index, $event)"></i>
        <p ref="toggleWord" > {{ item }} </p>
      </span>
    </div>
    <a href="https://unsplash.com/" target="_blank">fot. Unsplash</a>
    <div class="mobileTranslations">
      <p v-for="(item, index) in livingRoomPL" ref="translationPl"> {{ item }} </p>
    </div>
  </div>
</template>

<script>
  import home from './home.json'

  export default {
    data () {
      return {
        catTitle: home.title,
        catSubtitle: 'livingRoom',
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
    methods: {
      toggleLang (id, event) {
        // get item that it clicked
        let clickedItem = event.srcElement.nextElementSibling.innerText
        let enVal = this.livingRoomEN[id]
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
          langVal = this.livingRoomPL[id]
        } else {
          langVal = this.livingRoomEN[id]
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

  .container.livingRoom {
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
        top: 56%;
        left: 26%;
      }
      .TV {
        top: 48%;
        left: 91%;
      }
      @media screen and (max-width: 767px) {
        .armchair {
          top: 71%;
          left: 62%;
        }
        .blanket {
          top: 63%;
          left: 38%;
        }
        .coffeetable {
          top: 58%;
          left: 51%;
        }
        .cushion {
          top: 49%;
          left: 65%;
        }
        .stairs {
          top: 45%;
        }
        .sofa {
          top: 50%;
          left: 21%;
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
