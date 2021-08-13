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
</style>

<template>
<div id="app">
    <v-container class="mt-15" >
     <v-card>
       <h1>
        <span class="get" transition="scroll-y-transition"> Dream big! </span>
       </h1>
       <h3> give yourself a break! :D </h3> <br>
        <v-container class="text-sm-body-2 mb-15 ">
          <v-divider/>
          <p class="f-p text-sm-body-2 font-weight-medium align-justify text--secondary">
            <span class="text--primary">what is mexdev?</span> MexDev is a USA and Mexico web/app development agency providing coding solutions as a service for individuals,
            companies & contractors, upgrading into the online business model or updating their current app progress.
          </p>
          <p class="f-p text-sm-body-2 font-weight-medium align-justify text--secondary">
            <span class="text--primary">know more?</span> MexDev is backed up by experienced developers covering fullstack, if you like to know more about the type of solutions, we offer send us a message and we will get back to you ASAP!
          </p>
          <v-btn primary dark class="mt-5" href="contact"> contact </v-btn><br>
          <p class="center mt-10">PS:"se habla español"</p>
        </v-container>
     </v-card>
   </v-container>
</div>
</template>

<script>
export default {
  name: 'Home'
}
</script>
