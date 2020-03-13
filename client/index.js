import './socket'
import Vue from 'vue'

Vue.component('app-head', {props: ['text'], template: '<h1>{{text}}</h1>'})

var app = new Vue({
  el: '#app',
  data: {
    header: 'Welcome to VueCommerce!'
  }
})
