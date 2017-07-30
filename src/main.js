import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import "./main.css"

window.$config = Object.freeze({
  url: 'http://localhost:8081',
  //url: 'http://localhost:8081/api/v0/system/status',
  username: 'admin',
  password: 'secret'
});

window.$axios = Object.freeze(new axios.create({
  baseURL: $config.url,
  auth: {
    username: $config.username,
    password: $config.password
  }
}));

var vm = new Vue({
  el: '#app',
  render: h => h(App)
})

