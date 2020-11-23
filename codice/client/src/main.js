import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import Vuex from 'vuex'

import { innerRoutes, outerRoutes, noAuthRouteList } from './router';
import baseComponents from './components';
import './assets/css/app.css';

Vue.use(VueRouter);
const router = new VueRouter({
  mode: "history",
});

Vue.use(Vuex)
const store = new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {}
})

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
