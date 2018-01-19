<template lang="html">
  <ul class="row">
    <li class="category col-xs-12 col-sm-6 col-md-4 col-lg-3" 
        v-for="(category, catId) in categories" :key="catId">
      <i class="fa fa-pencil-square-o" aria-hidden="true"></i>
      <p>
        <a class="" data-toggle="collapse" :href="catId" role="button"
            aria-expanded="false" aria-controls="collapseExample"
            @click.prevent="showSubcat(catId, $event)"> {{ category.mainTitle }}
        </a>
      </p>
      <transition name="slide" type="animation">
        <span class="collapse" :id="catId">
          <div v-for="(item, itemId) in category.subCategories" :key="itemId">
            <div class="card card-body">
              <p> {{ item.subTitle }} </p>
              <span>
                <router-link class="btn btn-outline-secondary" role="button" :to="item.learn"
                              active-class="active"> Learn
                </router-link>
                <router-link class="btn btn-outline-dark" role="button" :to="item.test"
                              active-class="active"> Test
                </router-link>
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
        categories: [
          {
            mainTitle: 'Home',
            subCategories: [
              {
                subTitle: 'Kitchen',
                learn: '/kitchenLearn',
                test: '/kitchenTest'
              }
              // {
              //   subTitle: 'Living room',
              //   learn: 'url',
              //   test: 'url'
              // },
              // {
              //   subTitle: 'Bathroom',
              //   learn: 'url',
              //   test: 'url'
              // }
            ]
          }
          // {
          //   mainTitle: 'Animals',
          //   subTitles: ['Wild', 'Domestic', 'Farm animals']
          // },
          // {
          //   mainTitle: 'Food',
          //   subTitles: ['Fruits', 'Vegetables', 'Meals', 'Drinks']
          // },
          // {
          //   mainTitle: 'Other',
          //   subTitles: ['School', 'Work']
          // }
        ]
      }
    },
    methods: {
      showSubcat (id, event) {
        const collapsedSpan = event.srcElement.parentElement.nextElementSibling

        if (collapsedSpan.classList.value === 'collapse show') {
          collapsedSpan.classList.remove('show')
        } else {
          collapsedSpan.classList.add('show')
        }
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
          border: none;
          background-color: transparent;
          padding: 0;
          span {
            display: flex;
            margin-bottom: 1rem;
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
