import Vue from 'vue'
import VueRouter from 'vue-router'
import Homepage from '../views/Homepage.vue'
import LandingPage from '../views/LandingPage.vue'
import Login from '../views/Login.vue';
import Profilo from '../views/Profilo.vue';
import DettaglioPortfolio from '../views/DettaglioPortfolio.vue';
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
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/nuovoportfolio',
    name: 'NuovoPortfolio',
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
    path: '/projectdetail',
    name: 'projectdetail',
    component: DettaglioPortfolio,
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
