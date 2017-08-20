<template>
  <div id="app">
    <h1>
      <img id="logo" src="./assets/logo.png" />key<b>fender</b></h1>
    <key-list></key-list>
    <h2>Links</h2>
    <ul>
      <li>
        <a href="https://github.com/keyfender" target="_blank">GitHub</a>
      </li>
    </ul>
  </div>
</template>

<script>
import KeyList from './KeyList.vue';
var components = {};
components[KeyList.name] = KeyList;
export default {
  name: 'app',
  components: components
}
</script>

<style>
/* #app {
} */

img#logo {
  height: 2em;
  margin-bottom: -.6em;
}

h1, h2 {
  font-weight: normal;
}

/* ul {
  list-style-type: none;
  padding: 0; 
} */

/* li {
  display: inline-block;
  margin: 0 10px;
} */

/* a {
  color: #42b983;
} */
</style>
