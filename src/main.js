// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Materials from 'vue-materials'
import App from './App'
import Header from './components/Header'
import Selection from './components/Selection'
import Tous from './components/Tous'
import Nav from './components/Nav'
import router from './router'

Vue.use(Materials)

Vue.config.productionTip = false

Vue.component('app-mobile-header', Header)
Vue.component('selection-filter', Selection)
Vue.component('tous-filter', Tous)
Vue.component('app-bottom-bar', Nav)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
