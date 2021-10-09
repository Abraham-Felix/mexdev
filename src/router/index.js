import firebase from '../plugins/firebase';
import Vue from 'vue';
import VueRouter from 'vue-router';
import Gigs from '../views/Gigs.vue';
import Contact from '../views/Contact.vue';
import Jobs from '../views/Jobs.vue';
import Requests from '../views/Requests.vue';
import Profile from '../views/Profile.vue';
import Showcase from '../views/Showcase.vue';
import Landing from '../views/Landing.vue';
import Taskit from '../views/Taskit.vue';
import Virtualdom from '../school/virtualdom.vue';
import Google from '../views/Google.vue';
import Privacy from '../views/Privacy.vue';
import Admin from '../views/Admin.vue';
import GigsAvailable from '../views/GigsAvailable.vue';
import store from '@/store'
import AdminLogin from '@/components/forms/AdminLogin.vue'

Vue.use(VueRouter)

  const routes = [
    {
      path: '*',
      redirect: '/landing'
    },
    {
      path: '/',
      redirect: '/landing'
    },
    {
          path: "/adminlogin",
          name: "AdminLogin",
          component: AdminLogin
      },
    {
      path: '/school/virtualdom',
      name: 'virtualdom',
      component: Virtualdom,
      meta: {
        requiresAuth:true
      }
    },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
    //meta: {
  //    requiresAuth:true
  //  }
  },
  {
    path: '/gigs',
    name: 'Gigs',
    component: Gigs
    //meta: {
  //    requiresAuth:true
  //  }
  },
  {
    path: '/admin',
    name: 'Admin',
    component: Admin,
    beforeEnter: (to, from, next) => {
                if(store.state.authenticated == false) {
                    next(false);
                    next("adminlogin")
                } else {
                    next();
                }
            }
  },
  {
    path: '/google',
    name: 'Google',
    component: Google,
    meta: {
      requiresAuth:true
    }
  },
  {
    path: '/gigsavailable',
    name: 'GigsAvailable',
    component: GigsAvailable,
    meta: {
      requiresAuth:true
    }
  },
  {
    path: '/requests',
    name: 'Requests',
    component: Requests,
    meta: {
      requiresAuth:true
    }
  },
  {
    path: '/jobs',
    name: 'Jobs',
    component: Jobs,
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
    path: '/showcase',
    name: 'Showcase',
    component: Showcase,
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
  {
    path: '/landing',
    name: 'Landing',
    component: Landing
  },
  {
    path: '/taskit',
    name: 'Taskit',
    component: Taskit,
    meta: {
      requiresAuth:true
    }
  },
  {
  path: '/products',
  name: 'Products',
  component: () => import(/* webpackChunkName: "Home" */ '../views/Products.vue'),
},
  {
    path: '/privacy',
    name: 'Privacy',
    component: Privacy
  },
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
      else if (!requiresAuth && currentUser) next();
      else next();
      next(firebase.auth().onAuthStateChanged(currentUser => {
          currentUser}));
    });

export default router;
