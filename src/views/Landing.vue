<template>
<div id="app">
  <v-container >
   <v-card>
     <h1>
      <span class="get" transition="scroll-y-transition"> welcome! </span>
     </h1>
      <v-container class="text-sm-body-2">
        <v-divider/>
        <p class="f-p text-sm-body-2 font-weight-medium align-justify text--secondary">
          <span class="text--primary">what is mexdev?</span> MexDev is a USA and Mexico web/app development team providing coding solutions as a service for individuals,
          companies & contractors, upgrading into the online business model or updating their current app progress.
        </p>
        <p class=" center">PS:"se habla español"</p>
      </v-container>
      <!-- gallery slideshow -->
      <div class="slideshow">
        <Slideshow/>
      </div>
      <div class="center nav-col-mid d-flex justify-center align-center">
        <v-dialog
          transition="dialog-bottom-transition"
          max-width="600"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              v-if="!user.loggedIn"
              class="mx-10 nav-btns"
              dark
              small
              title="login"
              color="primary"
              v-bind="attrs"
              v-on="on"
            >
            <span class="web-nav-btns"> login </span>
            <span class="mobile-icons mdi mdi-account-key"></span></v-btn>
          </template>
          <template v-slot:default="dialog">
            <v-card class="my-0">
              <v-card-actions class="justify-end">
                <v-btn
                  text
                  @click="dialog.value = false"
                ><v-icon>mdi-close</v-icon></v-btn>
              </v-card-actions>
              <v-card-text>
                <!-- Login Component  -->
              <Login/>
              </v-card-text>
            </v-card>
          </template>
        </v-dialog>
        <v-dialog
          transition="dialog-bottom-transition"
          max-width="600"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-btn
            v-if="!user.loggedIn"
            class="mx-10 nav-btns"
            dark
            small
            title="sign up"
            color="primary"
            v-bind="attrs"
            v-on="on"
            >
            <span class="mobile-icons mdi mdi-account-edit"></span>
            <span class="web-nav-btns"> sign up</span>
          </v-btn>
          </template>
          <template v-slot:default="dialog">
            <v-card class="my-0">
             <v-card-actions class="justify-end">
               <v-btn
                 text
                 @click="dialog.value = false"
               ><v-icon>mdi-close</v-icon>
               </v-btn>
             </v-card-actions>
               <SignUp/>
            </v-card>
          </template>
        </v-dialog>
      </div>
     <h2 style="color:dodgerblue">Goals met: 5 happy clients!</h2>
   </v-card>
 </v-container>
 <AnimatedSlide class="anislide"/>
</div>
</template>

<script>
import AnimatedSlide from '../components/AnimatedSlide.vue'
import firebase from 'firebase';
import toastr from 'toastr';
import { mapGetters } from "vuex";
import Login from "../components/Login.vue";
import SignUp from "../components/SignUp.vue";
import Slideshow from "../components/slideshow.vue";

export default {
  name: 'Landing',
  components: {
    Login,
    SignUp,
    Slideshow,
    AnimatedSlide
  },
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
}
}
</script>

<style>
.slideshow{
  padding-top: 50px;
  display: contents;
}
p {
  font-size: 12px !important;
}
h1 {
   font-size: min(3rem, 200%, 20vw) ;
}
h4 {
  text-align: revert !important;
}
.get {
  font-size: min(3rem, 200%, 20vw);
  color: #5388E6;
}
.on {
  font-size: 25px ;
  font-family: poppins ;
}
.v-card {
  padding: 20px;
}
.h-des {
  font-size: 16px ;
  font-family: monospace;
  line-height: 1.8;
  max-width:85%;
  margin:auto;
  text-align: justify;
  transition: 1s;
}
//media queries
@media screen and (max-width:900px) {
  .h-des {
    font-size: 0.8em !important;
  }
  .f-p {
      font-size: 0.6em !important;
      width:80%;
      transition: 1s;
    }
}
.anislide {
  margin-bottom: -80px;
}
@media (max-width:400px){
  .anislide {
    margin-bottom: -180px;
  }
}
</style>
