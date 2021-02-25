<style>
.showcase-card {
  width: 1200px !important;
}
.showcase-img {
  width: auto !important;
  height: auto !important;
}
.p-box {
  padding: 20px;
  max-height:300px;
  overflow: auto;
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
.module-showcase {

}
.Gmodule p {
  color: #474747;
}
.Gmodule {
    background: white;
    display: inline-table;
    align-items: center;
    justify-content: center;
    height: 350px;
    padding: 15px;
    border-radius: 10px;
    -webkit-box-shadow: 0px 0px 25px -16px rgba(161,161,161,1);
    -moz-box-shadow: 0px 0px 25px -16px rgba(161,161,161,1);
    box-shadow: 0px 0px 25px -16px rgba(161,161,161,1);
    text-align: center;
    text-decoration: none;
    margin-left: 5px;
    margin-right: 5px;
    flex: 1 1 300px;
    margin: 0;
    color:#4f81bd !important;
}
.Gmodule:hover {
    background: #fbfbfb;
    -webkit-box-shadow: 0px 0px 35px -16px rgba(161,161,161,1);
    -moz-box-shadow: 0px 0px 35px -16px rgba(161,161,161,1);
    box-shadow: 0px 0px 35px -16px rgba(161,161,161,1);
}
.Fgrid {
    display: flex;
    flex-wrap: wrap;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    grid-auto-rows: minmax(150px, auto);
    grid-gap: 3em;
    max-width: 1000px !important;
    width: 100%;
    margin-left:auto;
    margin-right:auto;
    margin-bottom: 50px;

}
.exespotbody{
  margin-top:100px;
  max-wdth: 1000px;
}
@media screen and (max-width:1400px) {
  .Fgrid {
    max-width: 600px;
  }
}
</style>

<template>
  <v-container>
  <div class="shocase-card">
    <h1> ShowCase </h1>
    <div class="Fgrid">
      <div class="Gmodule">
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
      </div>
      <div class="Gmodule">
      <h3> Laguna Shores Resorts </h3>
      <i class="i">scroll to zoom-in</i>
      <v-zoomer title="Scroll to zoom-in" class="showcase-img" style="width: 500px; height: 500px;">
         <img
         src="https://firebasestorage.googleapis.com/v0/b/mexdev-40fff.appspot.com/o/showcase%2FLaguna%20Shores%20Resort%20-%20responsive%20mockup.png?alt=media&token=a25608b9-e68f-4992-8a3b-35cca734b5e1"
         style="object-fit: contain; width: 100%; height: 100%;"
         >
     </v-zoomer>
      <div class="p-box">
          <h5>highlights:</h5>
          <hr>
          <p>A CMS ressort application transfered from Wordpress CMS to Adobe Catalyst Systems, built and designed side by side with a Visual Basic database conected to an sql app to manage inventory and status, it includes its mailling campaing system with templated emails for the calling center marketing deaprtment.
          </p>
          <p> The project uses Godaddy for hosting, AWS for storage, and Google Analytics Tags for optimization. </p>
          <a class="gardient-button" href="http://fintechhorizonsmedia.com"><b>live view</b></a>
      </div><br>
      </div>
      <div class="Gmodule">
      <h3> Classic Car Pal </h3>
      <i class="i">scroll to zoom-in</i>
      <v-zoomer title="Scroll to zoom-in" class="showcase-img" style="width: 500px; height: 500px;">
         <img
         src="https://firebasestorage.googleapis.com/v0/b/mexdev-40fff.appspot.com/o/showcase%2FCCP%20-%20responsive%20mockup.png?alt=media&token=28e626bc-6846-417e-9f7f-142ef477c52e"
         style="object-fit: contain; width: 100%; height: 100%;"
         >
     </v-zoomer>
      <div class="p-box">
          <h5>highlights:</h5>
          <hr>
          <p>A classic car showcase webdesign, it uses gallery and event most of the project was design and migrating the website from and old CMS system.
          </p>
          <p> The project uses weebly for hosting and Google Analytics Tags for optimization. </p>
          <a class="gardient-button" href="http://fintechhorizonsmedia.com"><b>live view</b></a>
      </div><br>
      </div>
      </div>
  </div>
</v-container>
</template>

<script>
</script>
