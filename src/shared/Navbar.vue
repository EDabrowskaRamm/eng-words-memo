<template lang="html">
  <nav class="navbar navbar-expand-lg navbar-light">
    <div class="container">
      <router-link class="navbar-brand" tag="a" to="/">App</router-link>
      <button class="navbar-toggler" type="button" data-toggle="collapse"
              data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
              aria-expanded="false" aria-label="Toggle navigation"
              @click="toggleNav = !toggleNav" >
        <span class="navbar-toggler-icon"></span>
      </button>

      <transition name="slide-fade">
        <div class="collapse navbar-collapse" id="navbarSupportedContent" :class="{ show: toggleNav }">
          <ul class="navbar-nav ml-auto">
            <!-- basic not logged view -->
            <li class="nav-item">
              <router-link class="nav-link" tag="li" to="/register" active-class="active"><a>Register</a></router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" tag="li" to="/login" active-class="active"><a>Login</a></router-link>
            </li>
            <!-- logged in user view -->
            <li class="nav-item">
              <router-link class="nav-link" tag="li" to="/userAccount" active-class="active"><a>Your account</a></router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" tag="li" to="/categories" active-class="active"><a>Categories</a></router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" tag="li" to="/" active-class="active"><a>Log out</a></router-link>
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
      toggleNav: false
    }
  },
  methods: {
    // window.addEventListener('blur', collapseNav (){
    //   this.toggleNav = false
    // })

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
// .slide-fade-enter {
//   opacity: 0;
// }
// .slide-fade-enter-active {
//   transition: all .8s ease;
// }
// .slide-fade-leave-active {
//   transition: all .8s ease;
//   opacity: 0;
// }


</style>
