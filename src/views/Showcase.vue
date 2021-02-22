<style>
.showcase-card {
  max-width: 1000px !important;
  width: auto !important;
}
.showcase-img {
  width: auto !important;
  height: auto !important;
}
.p-box {
  padding: 20px;
}
.p-box h5{
  text-align:left;
}
.gardient-button {
  padding: 10px;
  border-radius: 10px;
  background: #474747;
  color: #ffffff !important;
}
.i {
  color: lightgray !important;
  margin-top:20px;
}
.i:hover{
  color: darkgray !important;
}
</style>

<template>
  <v-container>
  <v-card class="shocase-card">
    <h1> ShowCase </h1>
    <h3> Fintech Horizons Media </h3>
    <i class="i">scroll to zoom-in</i>
    <v-zoomer title="Scroll to zoom-in" class="showcase-img" style="width: 500px; height: 500px;">
     <img
       src="https://firebasestorage.googleapis.com/v0/b/mexdev-40fff.appspot.com/o/showcase%2Ffhm-mockup.png?alt=media&token=39813dd2-672d-4574-bc0b-afba2d4cb14b"
       style="object-fit: contain; width: 100%; height: 100%;"
     >
   </v-zoomer>
    <div class="p-box">
        <h5>highlights:</h5>
        <hr>
        <p>A professional, robust Ruby on Rails App and Fintech Newsletter. Its backend is PostgreSQL, Rails and SendGrid, and includes its own API. The API supports an upgraded site (dealfunnel.net) that has a NUXT/Vue.js frontend and a mobile app built with Ionic/ Vue.js.
        </p>
        <p> The project uses Git and GitHub for code storage/management, Heroku for hosting, AWS for storage, Redis for caching, and Google Analytics Tags for optimization. </p>

        <a class="gardient-button" href="http://fintechhorizonsmedia.com"><b>live view</b></a>
    </div><br>
  </v-card>
</v-container>
</template>

<script>
</script>
