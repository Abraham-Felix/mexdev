<style>

.rainbow {
    background: linear-gradient(270deg, #cc298c, #f5b30d, #0df516, #0dabf5);
    background-size: 800% 800%;

    -webkit-animation: AnimationName 1s ease infinite;
    -moz-animation: AnimationName 1s ease infinite;
    animation: AnimationName 1s ease infinite;
}

@-webkit-keyframes AnimationName {
    0%{background-position:0% 50%}
    50%{background-position:100% 50%}
    100%{background-position:0% 50%}
}
@-moz-keyframes AnimationName {
    0%{background-position:0% 50%}
    50%{background-position:100% 50%}
    100%{background-position:0% 50%}
}
@keyframes AnimationName {
    0%{background-position:0% 50%}
    50%{background-position:100% 50%}
    100%{background-position:0% 50%}
}
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
a.px-5.nav-link {
    width: 100%;
    text-align: left;
    color: dimgray;
}
a.px-5.nav-link:hover {
    background: #f3f3f3;
    padding: 13px;
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
    <div center >
      <router-link to="/landing">
      <v-img
        alt="Mexdev Small Navbar Logo"
        class="shrink  t-l d-sm-flex"
        contain
        src="https://firebasestorage.googleapis.com/v0/b/mexdev-40fff.appspot.com/o/logos%2Ffavicon%20-%20Copy.png?alt=media&token=83158426-51b5-40c2-9423-9756710c79f0"
        transition="scale-transition"
        width="40"
      />
    </router-link>
    </div>
    <div class="nav-col-mid pt-3 d-flex justify-space-around align-center">
      <router-link to="/products">
      <v-btn v-if="!user.loggedIn" class="nav-btns pa-2"
      depressed small color="primary" title="products" >
        <span class="mobile-icons mdi mdi-store"></span>
        <span class="web-nav-btns"> servicios </span>
      </v-btn>
      </router-link>
      <router-link to="/Showcase">
      <v-btn v-if="!user.loggedIn" class="nav-btns" depressed dark small color="primary" title="Exposicion">
        <span class="mobile-icons mdi mdi-briefcase-account-outline"></span>
        <span class="web-nav-btns"> Exposición </span>
      </v-btn>
      </router-link>
    <router-link to="/jobs">
    <v-btn v-if="!user.loggedIn" class="nav-btns" depressed dark small color="primary" title="Empleos">
      <span class="mobile-icons mdi mdi-briefcase-search-outline"></span>
      <span class="web-nav-btns"> Empleos </span>
    </v-btn>
    </router-link>
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
        <router-link to="/landing">
        <v-img
          alt="Mexdev Small Navbar Logo"
          class="shrink  t-l d-sm-flex"
          contain
          src="https://firebasestorage.googleapis.com/v0/b/mexdev-40fff.appspot.com/o/logos%2Ffavicon%20-%20Copy.png?alt=media&token=83158426-51b5-40c2-9423-9756710c79f0"
          transition="scale-transition"
          width="40"
        />
      </router-link>
      </div>
      <div class="nav-col-mid pt-3 d-flex justify-space-around align-center">
        <router-link to="/products">
        <v-btn v-if="user.loggedIn" class="nav-btns pa-2"
        depressed small color="primary" title="products" >
          <span class="mobile-icons mdi mdi-store"></span>
          <span class="web-nav-btns"> servicios </span>
        </v-btn>
        </router-link>
        <router-link to="/Showcase">
        <v-btn v-if="user.loggedIn" class="nav-btns" depressed dark small color="primary" title="Showcase">
          <span class="mobile-icons mdi mdi-briefcase-account-outline"></span>
          <span class="web-nav-btns"> Exposición </span>
        </v-btn>
        </router-link>
      <router-link to="/tutorials">
      <v-btn v-if="user.loggedIn" class="nav-btns" depressed dark small color="primary" title="Video Tutoriales">
        <span class="mobile-icons mdi mdi-at"></span>
        <span class="web-nav-btns"> Tutoriales </span>
      </v-btn>
      </router-link>
      <router-link to="/jobs">
      <v-btn v-if="user.loggedIn" class="nav-btns" depressed dark small color="primary" title="jobs">
        <span class="mobile-icons mdi mdi-briefcase-search-outline"></span>
        <span class="web-nav-btns"> empleos </span>
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
     </v-badge>
     <v-img :src="authUser.photoURL"></v-img>
     </v-btn>
   </template>
   <v-list class="nav-d-c">

          <!-- boton de contacto y perfil -->
     <v-list-item
         v-for="(item, i) in items"
         :key="i"
     >
       <router-link
          class="px-5 nav-link"
         :to="item.to"
         :target="item.target"
       >
         {{ item.title }}
       </router-link>
     </v-list-item>
     <!-- Logout button -->
     <v-list-item
      class="px-5"
     @click="logout"
     >Cerrar session
   </v-list-item>
   <v-list-item>
   <router-link to="/admin" class="px-5">
     <v-btn depressed small block color="primary">admin console</v-btn>
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
  authUser: '',
  displayName: '',
  items: [
        {
          title: "Perfil",
          to: "/profile",
          //active:null,
        },
        {
          title: "Contacto",
          to: "/contact",
          //active:null,
        },

      ]
}),
computed: {
  // map `this.user` to `this.$store.getters.user`
  ...mapGetters({
    user: "user",
    admin: "admin"
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
    toastr.success('Officially logged outty! Have a good day! :O '))
},

},
created: function() {
    // functions
    var user = firebase.auth().currentUser;
    var uid;
    if (user != null) {
      uid = user.uid; // The user's ID, unique to the Firebase project. Do NOT use
                       // this value to authenticate with your backend server, if
                       // you have one. Use User.getToken() instead.
    }
      this.userID= uid;
    //data => console.log(data.user, data.credential.accessToken)
    firebase.auth().onAuthStateChanged(user => {
        this.authUser = user
        if (user) {
            this.displayName = user.displayName
            this.photoURL = user.photoURL
            }
          })
    }

}
</script>
