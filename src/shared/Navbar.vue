<template lang="html">
  <nav class="navbar navbar-expand-lg navbar-light">
    <div class="container">
      <a class="navbar-brand" href="#">App</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
              @click="toggleNav" >
        <span class="navbar-toggler-icon"></span>
      </button>

      <transition name="slide-fade">
        <div class="collapse navbar-collapse" id="navbarSupportedContent" v-if="isShowing"  >
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <a class="nav-link" href="#">Register</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Login</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Categories</a>
            </li>
          </ul>
        </div>
      </transition>
    </div>
  </nav>
</template>

<script>
export default {
  data () {
    return {

      isShowing: false
    }
  },
  methods: {
    toggleNav () {
      console.log(this.isShowing)
      this.isShowing = !this.isShowing
    }
  }
}
</script>

<style lang="scss">
@import '../assets/_variables.scss';

nav {
  background-color: transparent;
  .container > a.navbar-brand {
    color: $textColor;
    &:hover, &:focus {
      color: $hoverLinkColor;
    }
  }
  #navbarSupportedContent .nav-link {
    color: $textColor;
    &:hover, &:focus {
      color: $hoverLinkColor;
    }
  }


}

//transition
.slide-fade-enter-active {
  opacity: 0;
  display: none;
}
.slide-fade-enter-active {
  display: block;
  transition: opacity .300s ease forwards;
}
.slide-fade-leave-active {
  transition: opacity .300s ease forwards;
  opacity: 0;
  display: none;
}

//animation
// .slide-fade-enter {
//   opacity: 0;
//   /*transform: translateY(20px);*/
// }
//
// .slide-fade-enter-active {
//   animation: slide-in 1s ease-out forwards;
//   transition: opacity .5s;
//   display: block;
// }
//
// .slide-fade-leave-active {
//   animation: slide-out 1s ease-out forwards;
//   transition: opacity 1s;
//   opacity: 0;
//   position: absolute;
// }
//
// .slide-fade-move {
//   transition: transform 1s;
// }
//
// @keyframes slide-in {
//   from {
//       transform: translateY(20px);
//   }
//   to {
//       transform: translateY(0);
//   }
// }
//
// @keyframes slide-out {
//   from {
//       transform: translateY(0);
//   }
//   to {
//       transform: translateY(20px);
//   }
// }
</style>
