import Vue from 'vue'
import App from './App'
import router from './router'
// import Router from 'vue-router'

// Vue.use(Router)

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
