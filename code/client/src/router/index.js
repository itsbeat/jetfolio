import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue';
import Profilo from '../views/Profilo.vue';
import DettaglioPortfolio from '../views/DettaglioPortfolio.vue';
import NewPortfolio from '../views/NewPortfolio.vue';
Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: Home,
    meta:{
      label: "Home",
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: {
      label: "Login",
    },
  },
  {
    path: '/profilo',
    name: 'Profilo',
    component: Profilo,
    meta: {
      label: "Profilo",
    },
  },
  {
    path: '/dettaglioportfolio',
    name: 'DettaglioPortfolio',
    component: DettaglioPortfolio,
    meta:{
      label: "Dettaglio",
    }
  },
  {
    path: '/newportfolio',
    name: 'NewPortfolio',
    component: NewPortfolio,
    meta:{
      label: "NewPortfolio",
    }
  },
  {
    path: '*',
    redirect: 'home'
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
