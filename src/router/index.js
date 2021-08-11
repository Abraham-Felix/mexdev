import firebase from '../plugins/firebase';
import Vue from 'vue';
import VueRouter from 'vue-router';

import Contact from '../views/Contact.vue';
import Jobs from '../views/Jobs.vue';
import Tutorials from '../views/Tutorials.vue';
import Profile from '../views/Profile.vue';
import Portfolio from '../views/Portfolio.vue';
import Landing from '../views/Landing.vue';

Vue.use(VueRouter)

  const routes = [
    {
      path: '*',
      redirect: '/home'
    },
    {
      path: '/',
      redirect: '/home'
    },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact,
    meta: {
      requiresAuth:true
    }
  },
  {
    path: '/tutorials',
    name: 'Tutorials',
    component: Tutorials,
    meta: {
      requiresAuth:true
    }
  },
  {
    path: '/jobs',
    name: 'Jobs',
    component: Jobs,
    meta: {
      requiresAuth:true
    }
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile,
    meta: {
      requiresAuth:true
    }
  },
  {
    path: '/portfolio',
    name: 'Portfolio',
    component: Portfolio,
    meta: {
      requiresAuth:true
    }
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
    meta: {
      requiresAuth:true
    }
  },
  {
    path: '/landing',
    name: 'Landing',
    component: Landing
  },
  {
  path: '/home',
  name: 'Home',
  component: () => import(/* webpackChunkName: "Home" */ '../views/Home.vue'),
  meta: {
    requiresAuth:true
  }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});
    router.beforeEach((to, from, next) =>  {
      const currentUser = firebase.auth().currentUser;
      const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
      if (requiresAuth && !currentUser) next('landing');
      else if (!requiresAuth && currentUser) next('home');
      next(firebase.auth().onAuthStateChanged(currentUser => {
          currentUser}));
    });

export default router;
