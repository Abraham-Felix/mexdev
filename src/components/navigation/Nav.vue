<style>
.v-application .d-flex {
    display: flex !important;
    align-self: center;
    transition: 0.3s;
}
.app-bar {
  transition:0.6 !important;
}
</style>
<template>
  <div id="nav">
    <v-app-bar
    class="app-bar"
      app
      color="primary"
      light

      elevate-on-scroll
    >
      <div center >
        <v-img
          alt="Mexdev Small Navbar Logo"
          class="shrink d-none d-sm-flex"
          contain
          src="https://firebasestorage.googleapis.com/v0/b/mexdev-40fff.appspot.com/o/logos%2Fmxdv%20-%20logo%20500px.png?alt=media&token=dc7d1c88-4580-4333-b07d-aeeb9f1295d2"
          transition="scale-transition"
          width="40"
        />
      </div>
      <div class="nav-col-mid d-flex justify-space-around align-center">
        <router-link to="/home">
        <v-btn v-if="user.loggedIn" class="nav-btns pa-2" depressed small color="primary" title="home" >
          <span class="mobile-icons mdi mdi-home"></span>
          <span class="web-nav-btns"> home </span>
        </v-btn>
        </router-link>
        <router-link to="/portfolio">
        <v-btn v-if="user.loggedIn" class="nav-btns" depressed dark small color="primary" title="Portfolio">
          <span class="mobile-icons mdi mdi-briefcase-account-outline"></span>
          <span class="web-nav-btns"> portfolio </span>
        </v-btn>
        </router-link>
      <router-link to="/about">
      <v-btn v-if="user.loggedIn" class="nav-btns" depressed small color="primary" title="about us">
        <span class="mobile-icons mdi mdi-information-outline"></span>
        <span class="web-nav-btns"> about us </span>
      </v-btn>
      </router-link>
      <router-link to="/contact">
      <v-btn v-if="user.loggedIn" class="nav-btns" depressed dark small color="primary" title="contact us">
        <span class="mobile-icons mdi mdi-at"></span>
        <span class="web-nav-btns"> contact </span>
      </v-btn>
      </router-link>
      <router-link to="/jobs">
      <v-btn v-if="user.loggedIn" class="nav-btns" depressed dark small color="primary" title="jobs">
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
     <v-btn depressed dark small color="primary">Request Developer</v-btn>
     </router-link>
   </v-list-item>
   </v-list>
 </v-menu>
        </v-app-bar>
    </div>
</template>

<script>

import firebase from 'firebase'
import toastr from 'toastr'
import { mapGetters } from "vuex"

export default {
  name: "Nav",
data: () => ({
  items: [
        {
          title: "Profile",
          url: "/profile",
          active: true,
        }
      ]
}),
computed: {
  // map `this.user` to `this.$store.getters.user`
  ...mapGetters({
    user: "user",
  })
},
methods: {
logout: function() {
  firebase.auth().signOut()
  .then(() => {
    this.$router.replace('login')
  })
  .catch (err =>
    toastr.error('Yikes! '+ err.message))
  .catch (
    toastr.success('You have logged out, Thanks for using Mexdev app, see ya!'))
},

},

}
</script>
