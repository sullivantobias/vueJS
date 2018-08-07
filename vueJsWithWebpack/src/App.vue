<template>
  <div id="app">
    <img src="./assets/logo.png">
    <h1>{{ msg }}</h1>
     
    <!-- My Counter -->
    <counter></counter>
  </div>
</template>

<script>
import counter from "./Counter-Component/Counter.vue";

export default {
  name: 'app',
  components: {counter},
  data () {
    return {
      msg: 'This is my Counter Test with vue-cli'
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1,
h2 {
  font-weight: normal;
}
</style>
