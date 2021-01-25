import Vue from 'vue'
import App from './App.vue'
import router from './router'
import api from './services/api'
import "slick-carousel"

import "./components";

Vue.config.productionTip = false;
Vue.prototype.$api = api;

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