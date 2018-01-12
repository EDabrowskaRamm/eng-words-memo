<template lang="html">
  <ul class="row">
    <li class="category col-xs-12 col-sm-6 col-md-4 col-lg-3" 
        v-for="(category, catId) in categories" :key="catId">
      <i class="fa fa-pencil-square-o" aria-hidden="true"></i>
      <p>
        <a class="" data-toggle="collapse" href="#collapseExample" role="button"
            aria-expanded="false" aria-controls="collapseExample" 
            @click="showSubcat(catId)"> {{ category.mainTitle }}
        </a>
      </p>
      <transition name="slide" type="animation">
        <span>
          <div class="collapse" id="collapseExample" :class="{ show: toggleCat }"
                v-for="(item, itemId) in category.subTitles" :key="itemId">
            <div class="card card-body">
              <p> {{ item }} </p>
              <span>
                <a class="btn btn-outline-secondary" role="button" @click="goLearn(itemId)">Learn</a>
                <a class="btn btn-outline-dark" role="button" @click="doTest(itemId)">Test</a>
              </span>
            </div>
          </div>
        </span>
      </transition>
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
      showSubcat (id) {
        console.log(id)
        !this.toggleCat ? this.toggleCat = true : this.toggleCat = false
      },
      goLearn (id) {
        console.log(id)
      },
      doTest (id) {
        console.log(id)
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '../../assets/_variables.scss';
  
  ul {
    list-style-type: none;
    padding-left: 0;
    .category {
      text-align: left;
      padding-top: 1rem;
      p {
        display: inline-block;
        a {
          color: $textColor;
          &:hover, &:focus {
            color: $hoverLinkColor;
            text-decoration: none;
          }
        }
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

  // animation
  .slide-enter {
    opacity: 0;
  }

  .slide-enter-active {
    animation: slide-in .5s ease-out forwards;
    transition: opacity .8s;
  }

  .slide-leave-active {
    animation: slide-out .5s ease-out forwards;
    transition: opacity .5s;
    opacity: 0;
  }

  // .slide-move {
  //   transition: transform 1s;
  // }

  @keyframes slide-in {
    from {
      transform: translateY(-10px);
    }
    to {
      transform: translateY(0);
    }
  }

  @keyframes slide-out {
    from {
      transform: translateY(0);
    }
    to {
      transform: translateY(-10px);
    }
  }
</style>
