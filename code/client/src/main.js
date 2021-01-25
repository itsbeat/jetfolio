import Vue from 'vue'
import App from './App.vue'
import router from './router'
import api from './services/api'
import VueAgile from 'vue-agile'

import "./components";

Vue.config.productionTip = false;
Vue.prototype.$api = api;
Vue.use(VueAgile)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
