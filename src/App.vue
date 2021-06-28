<template>
  <div id="nav">
    <navigation-bar></navigation-bar>
  </div>
  <router-view/>
</template>

<script>
import navigationBar from '@/components/navigation/navigation.vue'
export default {
  components: {
    navigationBar
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

#nav {
  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
a{
  text-decoration: none;
}
li{
  list-style-type: none;
}
</style>
