<template>
<div id="app">
  <v-card>
     <h1> <span  style="font-size:64px;color:#5388E6 "> Get </span>
        your project done <br>
        <span class="in">I</span>n simple steps b<b class="on">y </b> </h1><br>
         <v-img
            alt="Meddev Logo"
            class="shrink mr-2 home-image"
            contain
            src="https://firebasestorage.googleapis.com/v0/b/mexdev-40fff.appspot.com/o/logos%2Fmxdv%20-%20logo%20500px.png?alt=media&token=dc7d1c88-4580-4333-b07d-aeeb9f1295d2"
            transition="scale-transition"
            width="40"
          />
          <div>
        <h5 style="margin-top:-30px; display: contents;">Profesional Developers </h5>
        <span class="mdi mdi-code-braces mb-16px"> </span><br>
         </div>
         <v-container class="text-sm-body-2 mb-15 ">

           <div class="h-des">

          </div>
    <br><br>
    <v-divider></v-divider>
     <p class="f-p text-sm-body-2 font-weight-medium align-justify text--secondary">
       <span class="text--primary">what is mexdev?</span> MexDev is a web development agency providing coding solutions as a service for individuals,
         companies & contractors, upgrading into the online business model or updating their current app progress.
     </p>
    <p class=" center">PS:"se habla espanol"</p>
  </v-container>
     </v-card>

</div>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style>

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

.in {
  font-size: 40px ;
  font-family: poppins ;
}
.on {
  font-size: 25px ;
  font-family: poppins ;
}

.home-image {
    width: 137px !important;
    display: inline-flex;
}
.v-card {
  padding: 20px;
}
.mdi-code-tags {
  font-size:16px;
  display: inline;
  color:#5388E6;
}
h4 {
  text-align: revert !important;
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
p {
  font-size: 12px !important;
}
</style>
