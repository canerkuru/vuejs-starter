// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import vueResource from 'vue-resource'
import App from './App'
import router from './router'

Vue.use(vueResource)
Vue.component('customTable', require('./Custom-Table-Component.vue'));


Vue.directive('focus', {
  inserted: function (el) {
    el.focus()
  }
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})


