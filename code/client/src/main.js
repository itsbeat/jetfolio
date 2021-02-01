import Vue from 'vue'
import VueAgile from 'vue-agile'
import App from './App.vue'
import router from './router'
import api from './services/api'
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'

import "./components";

Vue.config.productionTip = false;
Vue.prototype.$api = api;
Vue.use(VueAgile)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

// //carousel landing

// $('.landing-carousel').slick({
//   centerMode: true,
//   centerPadding: '60px',
//   slidesToShow: 3,
//   responsive: [
//     {
//       breakpoint: 768,
//       settings: {
//         arrows: false,
//         centerMode: true,
//         centerPadding: '40px',
//         slidesToShow: 3
//       }
//     },
//     {
//       breakpoint: 480,
//       settings: {
//         arrows: false,
//         centerMode: true,
//         centerPadding: '40px',
//         slidesToShow: 1
//       }
//     }
//   ]
// });