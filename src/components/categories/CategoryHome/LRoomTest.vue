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
        <p>You got {{ score }} / 9</p>
      </div>
    </div>
    
    <button class="btn btn-outline-secondary" role="button" @click="scoreTest">
      Score</button>   
  </div>
</template>

<script>
  import home from './home.json'

  export default {
    data () {
      return {
        catTitle: home.title,
        catSubtitle: 'livingRoom',
        scored: false,
        score: 0,
        disable: false,
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
      scoreTest () {
        const inputArray = this.$refs.input
        // iterate over all inputs
        for (let i = 0; i < inputArray.length; i++) {
          // iterate over english object and compare input value to object value
          for (const key in this.livingRoomEN) {
            if (inputArray[i].value === this.livingRoomEN[key]) {
              this.score++
              inputArray[i].classList.add('goodAnswer')
              console.log(inputArray[i].classList)
            }
          }
        }

        this.disable = true
        this.scored = true

        localStorage.setItem('livingRoomTestScore', this.score)
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
        input {
          width: 96px;
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
        margin: 0 auto;
      }
    }
  }

</style>
