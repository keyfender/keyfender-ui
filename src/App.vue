<template>
  <div id="app">
    <h1><img id="logo" src="./assets/nethsm-logo.svg"/>NetHSM</h1>
    <key-list></key-list>
    <h2>Links</h2>
    <ul>
      <li><a href="https://github.com/nethsm" target="_blank">GitHub</a></li>
    </ul>
  </div>
</template>

<script>
import KeyList from './KeyList.vue'
export default {
  name: 'app',
  components: {
    KeyList
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
/*  text-align: center;*/
  color: #2c3e50;
  margin-top: 60px;
}

img#logo {
  height: 1em;
}

h1, h2 {
  font-weight: normal;
}

ul {
/*  list-style-type: none;*/
/*  padding: 0; */
}

li {
/*  display: inline-block;*/
/*  margin: 0 10px;*/
}

a {
  color: #42b983;
}
</style>
