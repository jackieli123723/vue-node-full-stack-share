// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import 'reveal.js/css/reveal.css'
import 'reveal.js/css/theme/black.css'

import Hljs from 'highlight.js'


Vue.directive('highlightjs', function() {
  let blocks = this.el.querySelectorAll('pre code');
  Array.prototype.forEach.call(blocks, Hljs.highlightBlock);
})



Vue.config.productionTip = false
Vue.filter('date', (val, param) => {
  return val + '--' + param
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})


