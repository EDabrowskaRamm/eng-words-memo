<template lang="html">
  <ul>
    <li class="category" v-for="category in categories">
      <i class="fa fa-pencil-square-o" aria-hidden="true"></i>
      <p>
        <a class="" data-toggle="collapse" href="#collapseExample" role="button"
            aria-expanded="false" aria-controls="collapseExample" 
            @click="toggleCat = !toggleCat"> {{ category1.mainTitle }}
        </a>
      </p>
      <transition-group name="slide-fade">
        <div class="collapse" id="collapseExample" :class="{ show: toggleCat }"
              v-for="(item, id) in category1.subTitles" :key="id">
          <div class="card card-body">
            <p> {{ item }} </p>
            <!-- <a class="btn btn-outline-secondary" role="button">Learn</a>
            <a class="btn btn-outline-dark" role="button">Test</a> -->
            <span>
              <a class="btn btn-outline-secondary" role="button">Learn</a>
              <a class="btn btn-outline-dark" role="button">Test</a>
            </span>
            <!-- <li class="nav-item" v-if="auth">
              <router-link class="nav-link" to="/categories" active-class="active">
                Categories
              </router-link>
            </li> -->
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
        categories: [this.category1],
        category1: {
          mainTitle: 'Home',
          subTitles: ['Kitchen', 'Living room', 'Bathroom']
        }
      }
    }
  }
</script>

<style lang="scss">
  ul {
    list-style-type: none;
    padding-left: 0;
    .category {
      text-align: left;
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