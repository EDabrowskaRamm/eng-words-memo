<template lang="html">
  <nav class="navbar navbar-expand-lg navbar-light">
    <div class="container">
      <router-link class="navbar-brand" tag="a" to="/">
        <img src="../assets/ukduck.png" alt="logo" class="logo-duck">
      </router-link>
      <button class="navbar-toggler" type="button" data-toggle="collapse"
              data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
              aria-expanded="false" aria-label="Toggle navigation"
              @click="collapse = !collapse">
        <span class="navbar-toggler-icon"></span>
      </button>

      <transition name="slide" type="animation">
        <div class="navbar-collapse" id="navbarSupportedContent" v-show="collapse">
          <ul class="navbar-nav ml-auto">
            <!-- basic not logged view -->
            <li class="nav-item" v-if="!auth">
              <router-link class="nav-link" to="/register" active-class="active" 
                            @click.native="closeNav">Register
              </router-link>
            </li>
            <li class="nav-item" v-if="!auth">
              <router-link class="nav-link" to="/login" active-class="active"
                            @click.native="closeNav">Login
              </router-link>
            </li>
            <!-- logged in user view -->
            <li class="nav-item" v-if="auth">
              <router-link class="nav-link" to="/userAccount" active-class="active"
                            @click.native="closeNav">Your account
              </router-link>
            </li>
            <li class="nav-item" v-if="auth">
              <router-link class="nav-link" to="/categories" active-class="active"
                            @click.native="closeNav">Categories
              </router-link>
            </li>
            <li class="nav-item" v-if="auth">
              <a class="nav-link" @click="onLogout">Log out</a>
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
      collapse: false
    }
  },
  methods: {
    onLogout () {
      this.$store.dispatch('logout')
      this.collapse = false
    },
    closeNav () {
      this.collapse = false
    }
  },
  computed: {
    auth () {
      // use getters as a property, not function (don't need ())
      return this.$store.getters.isAuthenticated
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '../assets/_variables.scss';

  nav {
    background-color: $navColor;
    margin-bottom: 2rem;
    .container > a.navbar-brand {
      color: $textColor;
      &:hover, &:focus, &:active {
        color: $hoverLinkColor;
      }
    }
    .navbar-brand {
      .logo-duck {
        height: 50px;
        transition: 0.70s;
        &:hover {
          transition: 0.70s;
          transform: rotate(360deg);
        }
      }
    }
    #navbarSupportedContent .nav-link {
      color: $textColor;
      &:hover, &:focus, &:active {
        color: $hoverLinkColor;
      }
    }

  }

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
