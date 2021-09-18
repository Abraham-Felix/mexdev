<style>
p {
  font-size: 12px !important;
}
h1 {
   font-size: min(3rem, 200%, 20vw) ;
}
h4 {
  text-align: revert !important;
}
.anislide {
  margin-bottom: -80px;
}
@media (max-width:400px){
  .anislide {
    margin-bottom: -180px;
  }
}
.get {
  font-size: min(3rem, 200%, 20vw);
  color: #5388E6;
}
.on {
  font-size: 25px ;
  font-family: poppins ;
}
.done {
  letter-spacing:16px ;
}
.v-card {
  padding: 20px;
}
.mdi-code-tags {
  font-size:16px;
  display: inline;
  color:#5388E6;
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
@media screen and (max-width:1264px) {
.medium-opt {
  margin-bottom: -150px !important;
}
}
@media screen and (max-width:960px) {
.medium-opt {
  margin-bottom: 0pc !important;
}
}
.break {
  color: #5388E6;
}
.product-card {
  min-height: 730px;
}
</style>

<template>
<main>
  <h1 class="pt-7"> MXDV Products </h1>
  <v-container>
    <v-row>
      <v-col col="4">
    <transition appear name="slide-ub">
     <v-card class="product-card mt-5">
       <h1 class="mt-n3">
        <span class="get pulsate-css" transition="scroll-y-transition"> MXDV </span>
       </h1>
       <h3> Give yourself a <span class="text-decoration-line-through break">break!</span> LIFE :D </h3> <br>
        <v-container class="text-sm-body-2 ">
          <v-img class="center" width="380px" src="../assets/thanks.png"/>
          </v-container>
          <v-btn primary dark class="mt-5 center" href="contact"> Hire Us! </v-btn><br>
     </v-card>
   </transition>
 </v-col>
 <v-col col="4">
<transition appear name="slide-ub">
<v-card class="product-card mt-5">
  <h1 class="mt-n3">
   <span class="get pulsate-css" transition="scroll-y-transition"> NuStack </span>
  </h1>
  <h3> The contractor <span class="blue--text"> solution </span> Product! </h3> <br>
   <v-container class="text-sm-body-2 ">
      <NuStackTechSlide/>
     </v-container>
     <v-btn primary dark class="mt-5 center" href="contact"> 699$ USD </v-btn><br>
</v-card>
</transition>
</v-col>
 <v-col col="4">
<transition appear name="slide-ub">
<v-card class="product-card mt-5">
  <h1 class="mt-n3">
   <span class="get pulsate-css" transition="scroll-y-transition"> NuDream </span>
  </h1>
  <h3 class="medium-opt"> All in one <span class="text-decoration-line-through break">struggle!</span> Product! </h3> <br>
   <v-container class="text-sm-body-2 mt-sm-n16 mt-md-0">
     <NuDreamTechSlide/>
     </v-container>
     <v-btn primary dark class="mt-5 center" href="contact"> 699$ USD </v-btn><br>
</v-card>
</transition>
</v-col>
 </v-row>
     </v-container>
     <v-container class="text-sm-body-2">
      <p class="f-p text-sm-body-2 font-weight-medium align-justify ">
        <span class="blue--text">What is NuDream? (Beta)</span><br><br>
        <b>NuDream</b> is a sophisticaded mobile first scalable solution designed for you! it will help you build your new product without going
        through the hard parts of the initial configurations and installation of technologies like <b> vue.js, vue-router, vuex,
        axios, express.js, vuetify, firebase, vue-cli, email.js, vue-gtag, sass-loaders, google sheets api & other important things to make it run...</b>
        Yes you heard right! i took all the pain to build this easy start up app, just for you to go on install configure your accounts
        and kaboom! start editing the project as much as you need, you can customize it as much as you love. "Enjoy your new journey in the digital business!"
        <span><v-icon>mdi-phone</v-icon><b> +52 638-113-4196 </b></span> or send us an <v-icon>mdi-email</v-icon> <a href="/contact" > email </a>.
      </p>
      <p class="f-p text-sm-body-2 font-weight-medium align-justify ">
        <span class="blue--text">What is MexDev?</span><br><br>
        <b>MexDev</b> is a support team that is here to help out! dont worry we got your back, you can explain for what purpose you need the application and we will help
        you trhougout the whole process of installation and configuration even escalating to fit your business purpose, we been in the developtment
        business for decades! that is right this is our lifestyle and we are here you help you and your busines grow!  give us a call today!
        <span><v-icon>mdi-phone</v-icon><b> +52 638-113-4196 </b></span> or send us an <v-icon>mdi-email</v-icon> <a href="/contact" > email </a>.
      </p>
      <p class="f-p text-sm-body-2 font-weight-medium align-justify ">
        <span class="blue--text">What is NuStack?</span><br><br>
        <b>NuStack</b> imagine you are a contractor and have hundreds of gigs to start looking for tech individuals to fill you gigs (positions)
        and you can't fin an easy way to organize your gigs and present them in a nice way for developers to call you and start the interview process,
        well then NuStack is designed to help you out in a simple way using google sheets! yes you can easily fill your sheets on google and have your jobs
        presented in a beautifull ui that is mobile friendly for developers to start contacting you for your gigs! we are here you help you and your busines grow!  give us a call today!
        <span><v-icon>mdi-phone</v-icon><b> +52 638-113-4196 </b></span> or send us an <v-icon>mdi-email</v-icon> <a href="/contact" > email </a>.
      </p>
    </v-container>
</main>
</template>

<script>
import NuDreamTechSlide from '@/components/animations/NuDreamTechSlide.vue'
import NuStackTechSlide from '@/components/animations/NuStackTechSlide.vue'
export default {
  name: 'Products',
  components: {
    NuDreamTechSlide,
    NuStackTechSlide
  }
}
</script>
