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
        <span class="mdi mdi-code-braces"> </span>
         </div>
        <br><br>
       <ol>
          <li> Start by creating your new <b> account or login </b> </li>
          <li> Navigate to <b>work requests</b> from top navbar <span class="mdi mdi-account"></span></li>
          <li> Click the plus sign <span class="mdi mdi-plus"></span> and <b> send work request.</b> </li>
          <br>
        <!--  <h5><a> check tutorial </a></h5> -->
       </ol>

    <br><br>
    <v-divider></v-divider>
    <p class="center"> PS:"se habla espanol" </p>
     </v-card>

</div>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style>

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
ol {
  font-size: 16px !important;
  font-family: monospace;
  line-height: 1.9;
}
p {
  font-size: 12px !important;
}
</style>
