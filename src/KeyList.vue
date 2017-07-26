<template>
  <ul id="key-list">
    <key-item
      v-for="location in locations"
      v-bind:key="location"
      v-bind:location="location">
    </key-item>
  </ul>
</template>

<script>
import KeyItem from './KeyItem.vue'
export default {
  name: 'key-list',
  data() {
    return {
      locations: []
    };
  },
  components: {
    KeyItem
  },
  created() {
    $axios.get("/api/v0/keys")
      .then(result => result.data.data.forEach(item => 
        this.locations.push(item.location), this))
      .catch(error => console.log('error:', error));
  }
}
</script>

<style>
</style>
