<template>
  <div id="app">
  <router-view></router-view>
  </div>
</template>

<script>


export default {
  name: 'app',

}
</script>

<style lang='scss'>

body {
  margin: 0;
  padding: 0;
  font-family: 'Lato', sans-serif;
}

#app {
  margin-bottom: 100px;
}

.container {
  max-width: 1024px;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  padding: 0 15px;
}


</style>
