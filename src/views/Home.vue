<template>
<div id="app">
    <v-container class="mt-15" >
     <v-card>
       <h1>
        <span class="get" transition="scroll-y-transition"> Get </span>
          your project done <br>
        <span class="in">I</span>n simple steps
       </h1>
        <vs-container class="text-sm-body-2 mb-15 ">
          <v-divider/>
          <p class="f-p text-sm-body-2 font-weight-medium align-justify text--secondary">
            <span class="text--primary">what is mexdev?</span> MexDev is a web development agency providing coding solutions as a service for individuals,
            companies & contractors, upgrading into the online business model or updating their current app progress.
          </p>
          <p class=" center">PS:"se habla español"</p>
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
