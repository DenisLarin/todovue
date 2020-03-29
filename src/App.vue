<template>
  <div id="app">
    <NavBar/>
    <div class="container">
      <router-view/>
    </div>

  </div>
</template>

<style lang="scss">
  @import "default";

  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #0e0e0e;
    font-size: 18px;
  }
  .container{
    width: 100%;
    padding: 20px 60px;
  }
  .row{
    width: 100%;
  }

</style>

<script>
  import NavBar from "./components/NavBar";

  export default {
    components: {NavBar}
  }
</script>