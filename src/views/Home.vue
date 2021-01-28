<template>
<div id="app">
  <v-card>
     <h1> <span  style="font-size:64px;color:#5388E6 "> Get </span>
        your project done <br>
        In simple stemps by </h1><br>
         <v-img
            alt="Apesyntax logo"
            class="shrink mr-2 home-image"
            contain
            src="https://firebasestorage.googleapis.com/v0/b/mexdev-40fff.appspot.com/o/logos%2Fmxdv%20-%20logo%20500px.png?alt=media&token=dc7d1c88-4580-4333-b07d-aeeb9f1295d2"
            transition="scale-transition"
            width="40"
          />
        <h4>Profesional Developers </h4>
        <span class="mdi mdi-code-tags"> </span> <br><br>
       <ol>
          <li> Start by creating your new <b> account or login </b> </li>
          <li> Navigate to <b>work requests</b> from top navbar <span class="mdi mdi-account"></span></li>
          <li> Click the plus sign <span class="mdi mdi-plus"></span> and <b> send work request.</b> </li>
          <br>
        <!--  <h5><a> check tutorial </a></h5> -->
       </ol>
    <br><br>
    <p> PS:"se habla espanol" </p>
     </v-card>
</div>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style>
.home-image {
    width: 137px !important;
    display: inline-flex;
}
.v-card {
  padding: 20px;
}
.mdi-code-tags {
  font-size: 5em;
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
