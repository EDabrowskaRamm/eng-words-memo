<template lang="html">
  <ul class="row">
    <li class="category col-xs-12 col-sm-6 col-md-4 col-lg-3" 
        v-for="(category, catId) in categories" :key="category">
      <i class="fa fa-pencil-square-o" aria-hidden="true"></i>
      <p>
        <a class="" data-toggle="collapse" href="#collapseExample" role="button"
            aria-expanded="false" aria-controls="collapseExample" 
            @click="showSubcat"> {{ category.mainTitle }}
        </a>
      </p>
      <transition-group name="slide-fade">
        <div class="collapse" id="collapseExample" :class="{ show: toggleCat }"
              v-for="(item, itemId) in category.subTitles" :key="itemId">
          <div class="card card-body">
            <p> {{ item }} </p>
            <span>
              <a class="btn btn-outline-secondary" role="button" @click="goLearn">Learn</a>
              <a class="btn btn-outline-dark" role="button" @click="doTest">Test</a>
            </span>
          </div>
        </div>
      </transition-group>
    </li>
  </ul>
</template>

<script>
  export default {
    data () {
      return {
        toggleCat: false,
        categories: [
          {
            mainTitle: 'Home',
            subTitles: ['Kitchen', 'Living room', 'Bathroom']
          },
          {
            mainTitle: 'Animals',
            subTitles: ['Wild', 'Domestic', 'Farm animals']
          },
          {
            mainTitle: 'Food',
            subTitles: ['Fruits', 'Vegetables', 'Meals', 'Drinks']
          },
          {
            mainTitle: 'Other',
            subTitles: ['School', 'Work']
          }
        ]
      }
    },
    methods: {
      showSubcat () {
        console.log()
        !this.toggleCat ? this.toggleCat = true : this.toggleCat = false
      },
      goLearn () {
        console.log('learn')
      },
      doTest () {
        console.log('test')
      }
    }
  }
</script>

<style lang="scss" scoped>
  ul {
    list-style-type: none;
    padding-left: 0;
    .category {
      text-align: left;
      padding-top: 1rem;
      p {
        display: inline-block;
      }
      .collapse {
        border-radius: 0;
        .card.card-body {
          border-radius: 0;
          span {
            display: flex;
            a {
              flex-grow: 1;
            }
            .btn-outline-dark {
              margin-left: 10px;
              &:hover {
                color: white;
              }
            }
          }
        }
      }
    }

    @media (min-width: 577px) {
      ul {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-evenly;
      }
    }

  }
  // span{
  //       display: flex;
  //   justify-content: space-evenly;
    // a {
    //   width: 100%;
    // }
  // }
</style>


// v-for="category in categories"
// {{ category1.mainTitle }}

// v-for="item in category1.subTitles"
// {{ item }}