import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import "./main.css"

window.$config = {
  //url: '',
  //url: 'http://localhost:8081',
  url: window.location.origin,
  username: 'admin',
  password: 'secret'
};

window.$axios = function () { return new axios.create({
  baseURL: $config.url,
  auth: {
    username: $config.username,
    password: $config.password
  }
})};

var vm = new Vue({
  el: '#app',
  render: h => h(App)
})

