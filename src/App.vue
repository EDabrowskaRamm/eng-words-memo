<template>
  <div id="app">
    <div class="container">
      <Navbar/>
      <router-view></router-view>
      <img src="./assets/logo.png">

    </div>
  </div>
</template>

<script>
import Navbar from './shared/Navbar'

export default {
  name: 'app',
  components: {
    Navbar
  },
  created () {
    this.$store.dispatch('tryAutoLogin')
  }
}
</script>

<style lang="scss">
@import './assets/_variables.scss';

html {
  background: rgba(255,255,255,1);
}
body {
  background: rgba(255,255,255,1);
  background: linear-gradient(to bottom, rgba(255,255,255,1) 0%, rgba(180,221,215,1) 0%, rgba(5,142,123,1) 46%, rgba(43,61,79,1) 100%);
  color: $textColor;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;


}

</style>
