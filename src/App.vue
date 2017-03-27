<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-link :to="{ path:'/' }">Hello</router-link>
    <router-link :to="{ name: 'Vuextest' }">Vuextest</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  background-color: #060;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 10px;
}
</style>
