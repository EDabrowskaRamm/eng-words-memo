<template lang="html">
  <nav class="navbar navbar-expand-lg navbar-light">
    <div class="container">
      <a class="navbar-brand" href="#">App</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
              @click="toggleNav = !toggleNav" >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent" :class="{ show: toggleNav }" >
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
</style>
