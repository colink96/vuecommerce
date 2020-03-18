import './socket'
import Vue from 'vue'
import axios from 'axios'

Vue.component('app-head', {props: ['text'], template: '<h1>{{text}}</h1>'})

Vue.component('all-products', {
  props: ['products', 'fetched'],
  template:
    '<div v-bind:products="products"><ol><single-product v-for="product in products" :key="product.id" :product="product"></single-product></ol></div>'
})

Vue.component('single-product', {
  props: ['product'],
  template: '<li>{{product.name}}</li>'
})

var app = new Vue({
  el: '#app',
  data: {
    products: [],
    header: 'Welcome to VueCommerce!'
  },
  async mounted() {
    const {data} = await axios.get('/api/products')
    this.products = data
    this.fetched = true
    console.log(data)
  }
})
