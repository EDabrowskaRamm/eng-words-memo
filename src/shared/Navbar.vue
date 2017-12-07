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
        <div class="navbar-collapse" id="navbarSupportedContent" v-if="isShowing">
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

  .collapsed {
    @media (min-width: 992px) {
      .navbar-collapse {
        display: block !important;
      }
    }
  }

}

//transition
.slide-fade-enter {
  opacity: 0;
}
.slide-fade-enter-active {
  transition: all .8s ease;
}
.slide-fade-leave-active {
  transition: all .8s ease;
  opacity: 0;
}


</style>
