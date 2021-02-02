import Vue from 'vue'
import VueRouter from 'vue-router'
import Homepage from '../views/Homepage.vue'
import LandingPage from '../views/LandingPage.vue'
import Login from '../views/Login.vue';
import Profilo from '../views/Profilo.vue';
import DettaglioPortfolio from '../views/DettaglioPortfolio.vue';
import NewPortfolio from '../views/NewPortfolio.vue';
import NuovoPortfolio from '../views/creaportfolio.vue';
import Edit from '../views/ChangeProfile.vue';
Vue.use(VueRouter)

const routes = [
  {
    path: '/homepage',
    name: 'Homepage',
    component: Homepage,
    meta: {
      label: "Home",
    },
  },
  {
    path: '/landingpage',
    name: 'LandingPage',
    component: LandingPage,
    meta: {
      label: "Landing",
    },
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
    path: '/nuovoportfolio',
    name: 'NuocoPortfolio',
    component: NuovoPortfolio,
    meta: {
      label: "NuovoPortfolio",
    },
  },
  
  {
    path: '/profilo',
    name: 'Profilo',
    component: Profilo,
  },
  {
    path: '/editprofile',
    name: 'EditProfile',
    component: Edit,
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
      requiresAuth: true,
    }
  },
  {
    path: '*',
    redirect: 'homepage'
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// Auth based guard
router.beforeEach((to, from, next) => {

  if (to.matched.some(record => record.meta.requiresAuth)) {

    // if route requires auth
    if (localStorage.getItem('user')) {
      
      // if user is logged in
      console.log('auth: OK, vai pure')
      next()

    } else {
      // if user is not logged in
      console.log('auth: NO, rilogga')

      router.push('/login');
      next(false);
    }
  } else {
    next();
  }
});

export default router
