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
.break {
  color: #5388E6;
}
</style>

<template>
<main>
  <v-container>
    <transition appear name="slide-ub">
     <v-card class="mt-5">
       <h1 class="mt-n3">
        <span class="get pulsate-css" transition="scroll-y-transition"> Dream BIG! </span>
       </h1>
       <h3> Give yourself a <span class="text-decoration-line-through break">break!</span> LIFE :D </h3> <br>
        <v-container class="text-sm-body-2 ">
          <v-img class="center" width="300px" src="../assets/thanks.png"/>
          <p class="f-p text-sm-body-2 font-weight-medium align-justify text--secondary">
            <span class="text--primary">Why am i so energetic?</span> I love working hard, it is what I have been though to do,
            my loving god has teched me to,and this means I study high-end technologies, not the obsolete hard, and hard to use,
            that can end up being hard to maintain & very expensive. Sounds painful, right?... but don't you worry because the more sophisticated technology is
            here providing simple and easy to maintain modular & effectively fast-paced development! and instead of using 100 hands,
            I use 2, my own hands! and sometimes "A whole team that helps me get huge amazing projects!" <b> - Abraham Felix </b>
          </p>
          <v-divider/>
          <p class="f-p text-sm-body-2 font-weight-medium align-justify text--secondary">
            <span class="text--primary">What is mexdev?</span> MexDev is a USA and Mexico web/app development team providing coding solutions as a service for individuals,
            companies & contractors, upgrading into the online business model or updating their current app progress.
          </p>
          <p class="f-p text-sm-body-2 font-weight-medium align-justify text--secondary">
            <span class="text--primary">Know more?</span> MexDev is backed up by 2 experienced developers covering fullstack, if you like to know more about the type of solutions, we offer send us a message and we will get back to you ASAP!
          </p>
          <v-btn primary dark class="mt-5" href="contact"> Hire me! </v-btn><br>
          <p class="center mt-10"><b>PS:"Se habla español, dejame saber que es lo que tienes en mente!"</b></p>
          <a href="/showcase"><h2 style="color:dodgerblue"><v-icon color="green"> mdi-clipboard-check </v-icon> Success: 5 happy international clients!</h2>
       </a>
          </v-container>
     </v-card>
   </transition>
     </v-container>

       <AnimatedSlide class="anislide"/>
</main>
</template>

<script>
import AnimatedSlide from '../components/AnimatedSlide.vue'

export default {
  name: 'Home',
  components: {
    AnimatedSlide,
  }
}
</script>
