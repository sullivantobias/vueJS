<template>
  <div id="app">
    <img src="./assets/logo.png">
    <h1>{{ counterMessage }}</h1>
     
    <!-- counter component -->
    <counter></counter>

    <h1>{{ animatedMessage }}</h1>
    <!-- animated component -->
    <animatedComponent></animatedComponent>
  </div>
</template>

<script>
import counter from "./Counter-Component/Counter.vue";
import animatedComponent from './Animations-Transitions/animatedComponent.vue'

export default {
  name: 'app',
  components: {counter, animatedComponent},
  data () {
    return {
      counterMessage: 'This is my Counter Test with vue-cli',
      animatedMessage: 'This is my Animated Component with vue-cli'
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
