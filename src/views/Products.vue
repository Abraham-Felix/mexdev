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
    <v-row class="d-flex">
      <v-col col="4">
    <transition appear name="slide-ub">
     <v-card class="product-card mt-5">
       <h1 class="mt-n3">
        <span class="get pulsate-css" transition="scroll-y-transition"> MXDV </span>
       </h1>
       <h3> Give yourself a <span class="text-decoration-line-through break">break!</span> LIFE :D </h3>
       <p class="center">"Leave the hard work to our supprt team"</p> <br>

        <v-container class="text-sm-body-2 ">
          <v-img class="center" width="380px" src="../assets/thanks.png"/>
          </v-container>
          <v-btn primary dark class="mt-5 center" href="contact"> Get quote! </v-btn><br>
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
  <h3 class="medium-opt"> All in-one <span class=" break"> <a href="https://nudream.herokuapp.com/landing"> live preview </a> </span> Product! </h3> <br>
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
        <b>NuDream</b> is a sophisticated super fast light speed! "Test it out!. Tell us if there is a faster app around beacuase we havent found a faster application",
         this is a mobile-first scalable app solution designed and programmed to fit your business!. We deliver it as you request!. It means integrating a design
         and customizing it to fit your needs, we also offer Mexdev support service for mentoring your developers!, you can see a preview <a target="_blank" href="https://nudream.herokuapp.com/landing">here</a>
         to get an idea of what  we can build, but if you request a blank product you get a blank product with no design, or if you request a customization product to fit your business model we
         can build it for you with a custom quote, or we can sell the template for you that will help you build your new product without going through the
         hard parts of the initial configurations and installation of technologies like  <b> vue.js, vue-router, vuex,
        axios, express.js, vuetify, firebase, vue-cli, email.js, vue-gtag, sass-loaders, google sheets api & other important things to make it run...</b>
        Yes you heard right! we went through all the pain to build this easy start up app, just for you to go on install configure your accounts
        and kaboom! start editing the project as much as you need, hire a programmer to help you build your ideas or hire us for costumzing it, the paplication comes with Documentation
        for intalling and setting up the db and server, it includes authentition, user login, contact form & other pages. you can customize it as much as you love.<br> "Enjoy your new journey in the digital business!"
        Give us a call today! <span><v-icon class="green--text"> mdi-phone </v-icon><b> +52 638-113-4196 </b></span> or send us an <v-icon>mdi-email</v-icon> <a href="/contact" > email </a>.
      </p>
      <p class="f-p text-sm-body-2 font-weight-medium align-justify ">
        <span class="blue--text">What is MexDev support?</span><br><br>
        <b>MexDev support</b> is a support team that is here to help out!. we got your back, you can explain for what purpose you need the application &
        we will help you throughout the whole process of installation and configuration, even escalating to fit your business purpose. We have
        been in the development business for decades!. That is correct! this is our lifestyle & we are here you help you and your business grow! Call us today!
        <span><v-icon class="green--text">mdi-phone</v-icon><b> +52 638-113-4196 </b></span> or send us an <v-icon>mdi-email</v-icon> <a href="/contact" > email </a>.
      </p>
      <p class="f-p text-sm-body-2 font-weight-medium align-justify ">
        <span class="blue--text">What is NuStack?</span><br><br>
        <b>NuStack</b> imagine you are a contractor and have hundreds of gigs to start looking for tech individuals to fill you gigs (positions)
        and you can't fin an easy way to organize your gigs and present them in a nice way for developers to call you and start the interview process,
        well then NuStack is designed to help you out in a simple way using google sheets! yes you can easily fill your sheets on google and have your jobs
        presented in a beautifull ui that is mobile friendly for developers to start contacting you for your gigs! we are here you help you and your busines grow!  give us a call today!
        <span><v-icon class="green--text">mdi-phone</v-icon><b> +52 638-113-4196 </b></span> or send us an <v-icon>mdi-email</v-icon> <a href="/contact" > email </a>.
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
