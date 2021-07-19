<template>

<v-app>
<!-- it might need more height in body as content so it works properly -->
<head>
<meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
  <!-- navbar -->
    <div id="nav">
      <v-app-bar
        app
        color="primary"
        dark
      >
        <div class="d-flex align-center nav-col-left">
          <v-img
            alt="Apesyntax logo"
            class="shrink "
            contain
            src="https://firebasestorage.googleapis.com/v0/b/mexdev-40fff.appspot.com/o/logos%2Fmxdv%20-%20logo%20500px.png?alt=media&token=dc7d1c88-4580-4333-b07d-aeeb9f1295d2"
            transition="scale-transition"
            width="40"
          />


        </div>
        <div class="nav-col-mid">
          <router-link to="/home">
          <v-btn class="nav-btns" depressed small color="primary" title="home" >
            <span class="mobile-icons mdi mdi-home"></span>
            <span class="web-nav-btns"> home </span>
          </v-btn>
          </router-link>
          <router-link to="/portfolio">
          <v-btn  class="nav-btns" depressed dark small color="primary" title="Portfolio">
            <span class="mobile-icons mdi mdi-briefcase-account-outline"></span>
            <span class="web-nav-btns"> portfolio </span>
          </v-btn>
          </router-link>
        <router-link to="/about">
        <v-btn  class="nav-btns" depressed small color="primary" title="about us">
          <span class="mobile-icons mdi mdi-information-outline"></span>
          <span class="web-nav-btns"> about us </span>
        </v-btn>
        </router-link>
        <router-link to="/contact">
        <v-btn  class="nav-btns" depressed dark small color="primary" title="contact us">
          <span class="mobile-icons mdi mdi-at"></span>
          <span class="web-nav-btns"> contact </span>
        </v-btn>
        </router-link>
        <router-link to="/jobs">
        <v-btn  class="nav-btns" depressed dark small color="primary" title="jobs">
          <span class="mobile-icons mdi mdi-briefcase-search-outline"></span>
          <span class="web-nav-btns"> jobs </span>
        </v-btn>
        </router-link>
        </div>
        <v-spacer></v-spacer>
        <v-menu
        v-if="user.loggedIn"
     transition="scroll-x-transition"
     bottom
     id="drop-d"
   >
     <template v-slot:activator="{ on, attrs }">
       <v-btn
         class="purple"
         color="primary"
         dark
         v-bind="attrs"
         v-on="on"
       >
         <v-icon>mdi-account</v-icon>
       </v-btn>
     </template>
     <v-list >
       <v-list-item
         v-for="(item, i) in items"
         :key="i"
       >
       <a
            :href="item.url"
            :target="item.target">
         <v-list-item-title >{{ item.title }}
         </v-list-item-title>
       </a>
       </v-list-item>
       <v-list-item
       @click="logout"
       >Logout
     </v-list-item>

     <v-list-item>
       <router-link to="/tutorials">
       <v-btn depressed dark small color="primary">Work Request</v-btn>
       </router-link>
     </v-list-item>
     </v-list>
   </v-menu>
          </v-app-bar>
      </div>

     <!-- body -->
      <div id="body">
        <main>
          <router-view/>
        </main>
     </div>
       <Footer/>

  </v-app>
</template>
<script>
import firebase from 'firebase'
import toastr from 'toastr';
import { mapGetters } from "vuex"
import Footer from './components/navigation/Footer.vue';

export default {
  name: 'App',
  components: {
    Footer,
  },
  computed: {
    // map `this.user` to `this.$store.getters.user`
    ...mapGetters({
      user: "user",
    })
  },
data: () => ({
  items: [
        {
          title: "Profile",
          url: "/profile",
          active: true,
        }
      ]
}),
methods: {
  logout: function() {
    firebase.auth().signOut()
    .then(() => {
      this.$router.replace('login')
    })
    .catch (err =>
      toastr.error('Yikes! '+ err.message))
    .catch (
      toastr.success('You have logged out, Thanks for using Mexdev app, se ya!'))
  },

},


}
</script>


<style lang="scss">
@media screen and (min-width:900px) {
  .mobile-icons {
    display: none;
    font-size:1.3rem;
  }
}
@media screen and (max-width:900px) {
  .web-nav-btns {
    display: none;
    font-size:1.3rem;
  }
  .nav-btns {
    width:20px !important;
  }
}
.nav-btns {
  width: 100px;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
      z-index: 10;

  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
.nav-col-mid {
    width: 100%;
    display: -webkit-inline-box;
    -webkit-box-pack: center;
}

// iphone6/7/8/9/x/+/S
@media only screen and (max-width: 400px){
    .v-parallax__content {
       padding:0px !important;
       transition: 1s;
       }
}
@media only screen and (max-width: 497px){
  .nav-col-mid {
      width: 100%;
      display: flex !important;
      -webkit-box-pack: center;
  }
}
#drop-d {
  z-index:99;
}
</style>
