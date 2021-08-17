<style>
.v-application .d-flex {
    display: flex !important;
    align-self: center;
    transition: 0.3s;
}
.app-bar {
  transition:0.6 !important;
}
.v-badge {
  z-index:99;
}
.v-list-item__title {
    color: #313233;
}
.v-list-item {
    padding: 0px;
}
</style>
<template>
  <div id="nav">
    <!-- non auth navbar -->
    <v-app-bar
    v-if="!user.loggedIn"
    class="app-bar"
      app
      color="primary"
      light
      elevate-on-scroll
    >
    <div class="center" >
      <v-img
        alt="Mexdev Small Navbar Logo"
        class="shrink d-none d-sm-flex"
        contain
        src="https://firebasestorage.googleapis.com/v0/b/mexdev-40fff.appspot.com/o/logos%2Ffavicon%20-%20Copy.png?alt=media&token=83158426-51b5-40c2-9423-9756710c79f0"
        transition="scale-transition"
        width="40"
      />
    </div>
  </v-app-bar>
  <!-- auth nav -->
    <v-app-bar
      v-if="user.loggedIn"
      class="app-bar"
      app
      color="primary"
      light
      elevate-on-scroll
    >
      <div center >
        <v-img
          alt="Mexdev Small Navbar Logo"
          class="shrink d-none t-l d-sm-flex"
          contain
          src="https://firebasestorage.googleapis.com/v0/b/mexdev-40fff.appspot.com/o/logos%2Ffavicon%20-%20Copy.png?alt=media&token=83158426-51b5-40c2-9423-9756710c79f0"
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
     <v-badge
       v-if="user.loggedIn"
       color="success"
       dot
       overlap
       class="py-2"
     >
     </v-badge><v-icon>mdi-account</v-icon>
     </v-btn>
   </template>
   <v-list class="nav-d-c">
     <v-list-item
         v-for="(item, i) in items"
         :key="i"
     >
       <v-list-item
          class="px-5"
         :href="item.url"
         :target="item.target"
       >
         {{ item.title }}
       </v-list-item>
     </v-list-item>
     <!-- Logout button -->
     <v-list-item
      class="px-5"
     @click="logout"
     >Logout
   </v-list-item>
   <v-list-item>
     <router-link to="/tutorials" class="px-5">
     <v-btn depressed dark small color="primary">Request Developer</v-btn>
     </router-link>
   </v-list-item>
   </v-list>
 </v-menu>
        </v-app-bar>
    </div>
</template>

<script>
import firebase from 'firebase';
import toastr from 'toastr';
import { mapGetters } from "vuex";

export default {
  name: "Nav",
data: () => ({
  items: [
        {
          title: "Profile",
          url: "/profile",
          //active:null,
        },
        {
          title: "About",
          url: "/about",
          //active:null,
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
    this.$router.replace('landing')
  })
  .catch (err =>
    toastr.error('Yikes! '+ err.message))
  .catch (
    toastr.success('You have logged out, Thanks for using Mexdev app, see ya!'))
},

},

}
</script>
