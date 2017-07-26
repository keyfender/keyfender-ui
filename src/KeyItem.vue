<template>
  <li>{{id}}</li>
</template>

<script>
export default {
  name: 'key-item',
  props: [
    'location'
  ],
  data() {
    return {
      id: ""
    };
  },
  created() {
    $axios.get(this.location)
      .then(result => this.id = result.data.data.id)
      .catch(error => console.log('error:', error));
  }
}
</script>

<style>
</style>
