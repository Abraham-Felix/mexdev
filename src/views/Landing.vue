<template>
<div id="app">
  <div id="clouds">
<div class="cloud x1"></div>
<!-- Time for multiple clouds to dance around -->
<div class="cloud x2"></div>
<div class="cloud x3"></div>
<div class="cloud x4"></div>
<div class="cloud x5"></div>
</div>
  <v-container >
  <transition appear name="fade">
   <v-card class="mt-n5">
      <h5>
        <span class="get primary--text pulsate-css" transition="scroll-y-transition"> Mexdev </span>
      </h5>
      <h3 class="mt-3" style="color:dodgerblue">

        Success: <h5> 5 happy international clients! <v-icon color="green"> mdi-clipboard-check </v-icon></h5>
      </h3>
       <v-divider class="mb-5" />
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
           <span class="web-nav-btns" title="create an account"> sign up</span>
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
      <v-container class="text-sm-body-2">
        <p class="f-p text-sm-body-2 font-weight-medium align-justify text--secondary">
          <span class="text--primary">What is Mexdev?</span><br><br> MexDev is a USA and Mexico web/app development team providing coding solutions as a service for individuals &
          digital products to enhance your business in a digital way, we help companies & contractors by upgrading into the online business model or updating their current app progress.
        </p>
      </v-container>
      <v-container class="mt-10 mt-md-n7">
      <!-- Mockup Slider -->
      <div class="slideshow ">
        <MockupSlider/>
      </div><br>
    </v-container>
      <v-container class="mt-n15 mt-md-15">
        <v-divider class="mb-5  mt-md-15"></v-divider>
        <v-btn dark href="/products" title="Get your products done!">Products</v-btn>
        <br>
        <p class="center "><b>PS: “disfruten de todo su duro trabajo. Eso es un regalo de Dios” <a href="https://www.jw.org/es/biblioteca/biblia/biblia-estudio/libros/Eclesiast%C3%A9s/3/#v21003013">(Eclesiastés 3:13)</a>.</b></p>
      </v-container>
   </v-card>
 </transition>
 </v-container>
 <AnimatedSlide class="anislide mb-n13"/>
</div>
</template>

<script>
import AnimatedSlide from '../components/AnimatedSlide.vue'
import firebase from 'firebase';
import toastr from 'toastr';
import { mapGetters } from "vuex";
import Login from "../components/Login.vue";
import SignUp from "../components/SignUp.vue";
import MockupSlider from "@/components/animations/MockupSlider.vue";

export default {
  name: 'Landing',
  components: {
    Login,
    SignUp,
    MockupSlider,
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
#body {
      overflow: hidden !important;
}
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
  max-width: 900px !important;
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
@media all and (max-width:500px){
  #cf4a {
    height: 350px;
    margin: -33px auto !important;
}
}

/* cloud animation 1 */
#clouds{
  padding-top: 150px;
  margin-bottom: -400px;
}

/*Time to finalise the cloud shape*/
.cloud {
	width: 200px; height: 60px;
	background: lightblue;

	border-radius: 200px;
	-moz-border-radius: 200px;
	-webkit-border-radius: 200px;

	position: relative;
}

.cloud:before, .cloud:after {
	content: '';
	position: absolute;
	background: lightblue;
	width: 100px; height: 80px;
	position: absolute; top: -15px; left: 10px;

	border-radius: 100px;
	-moz-border-radius: 100px;
	-webkit-border-radius: 100px;

	-webkit-transform: rotate(30deg);
	transform: rotate(30deg);
	-moz-transform: rotate(30deg);
}

.cloud:after {
	width: 120px; height: 120px;
	top: -55px; left: auto; right: 15px;
}

/*Time to animate*/
.x1 {
	-webkit-animation: moveclouds 15s linear infinite;
	-moz-animation: moveclouds 15s linear infinite;
	-o-animation: moveclouds 15s linear infinite;
}

/*variable speed, opacity, and position of clouds for realistic effect*/
.x2 {
	left: 200px;

	-webkit-transform: scale(0.6);
	-moz-transform: scale(0.6);
	transform: scale(0.6);
	opacity: 0.6; /*opacity proportional to the size*/

	/*Speed will also be proportional to the size and opacity*/
	/*More the speed. Less the time in 's' = seconds*/
	-webkit-animation: moveclouds 25s linear infinite;
	-moz-animation: moveclouds 25s linear infinite;
	-o-animation: moveclouds 25s linear infinite;
}

.x3 {
	left: -250px; top: -200px;

	-webkit-transform: scale(0.8);
	-moz-transform: scale(0.8);
	transform: scale(0.8);
	opacity: 0.8; /*opacity proportional to the size*/

	-webkit-animation: moveclouds 20s linear infinite;
	-moz-animation: moveclouds 20s linear infinite;
	-o-animation: moveclouds 20s linear infinite;
}

.x4 {
	left: 470px; top: -250px;

	-webkit-transform: scale(0.75);
	-moz-transform: scale(0.75);
	transform: scale(0.75);
	opacity: 0.75; /*opacity proportional to the size*/

	-webkit-animation: moveclouds 18s linear infinite;
	-moz-animation: moveclouds 18s linear infinite;
	-o-animation: moveclouds 18s linear infinite;
}

.x5 {
	left: -150px; top: -150px;

	-webkit-transform: scale(0.8);
	-moz-transform: scale(0.8);
	transform: scale(0.8);
	opacity: 0.8; /*opacity proportional to the size*/

	-webkit-animation: moveclouds 20s linear infinite;
	-moz-animation: moveclouds 20s linear infinite;
	-o-animation: moveclouds 20s linear infinite;
}

@-webkit-keyframes moveclouds {
	0% {margin-left: 1000px;}
	100% {margin-left: -1000px;}
}
@-moz-keyframes moveclouds {
	0% {margin-left: 1000px;}
	100% {margin-left: -1000px;}
}
@-o-keyframes moveclouds {
	0% {margin-left: 1000px;}
	100% {margin-left: -1000px;}
}
#clouds {
	/*To hide the horizontal scroller appearing during the animation*/
	overflow: hidden;
}
</style>
