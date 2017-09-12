<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import "font-awesome/css/font-awesome.css";
export default {
  name: "app"
};
</script>

<style>
body {
  background: rgb(241, 242, 247);
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
