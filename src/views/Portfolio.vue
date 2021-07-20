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
    transition: 0.6s;
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
    grid-gap: 2em;
    max-width: 1000px !important;
    width: 100%;
    margin-left:auto;
    margin-right:auto;
    margin-bottom: 50px;
    transition:1s;
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

.col-50 {
  width: 50%;
  display: inline-grid;
}

/* toggle css */

.toggle_container {
    margin: 0px auto;
    background: #efefef;
    width: 120px;
    padding: 10px 0;
    border-radius: 30px;
    transition: all .25s;
}

.toggle_container.active {
    background: #e9ffef;
}

.box {
    text-align:center;
    margin-bottom: 30px;
}


.e4 {
  width: 400px;
  margin: auto;
}
.des{
  transition:.3s;
  background:#313233b0;
  display: inline-grid;
  width: 80%;
  }
.des:hover {
  border-radius: 10px;
  box-shadow: 0px 0px 10px -5px black;
  
}

.uiux-title {
    background: #ffffff;
    box-shadow: 0px 0px 10px -5px gray;
    text-align: center;
    padding: 5px;
    width: 100%;
}
.Fgrid .v-btn {
  transition: 1s;
}
@media screen and (max-width:600px) {
  .des {
    width:100%;
    display: inline-block;
    text-align: justify;
    height: -webkit-fill-available;
    margin-top: -20px !important;
  }
  .Fgrid .v-btn {
    background: #ffffff97 !important;
    color: gray !important;
    box-shadow: 0px 0px 7px -2px #5388e6 !important;
    border-radius: 3px;
    transition: 1s;
  }
}
</style>

<template>
  <v-container>
    <div class="shocase-card">
    <h2> ShowCase </h2>
    <div class="Fgrid">
      <div class="Gmodule py-10 back" >
      <h3> Fintech Horizons Media </h3>
        <v-divider></v-divider>
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
      </div><br>
      <v-btn
        align-center
        depressed
        elevation="2"
        color="primary"
        class="gardient-button"
        href="http://fintechhorizonsmedia.com">
        <b class="mdi mdi-open-in-new"> live view </b>
      </v-btn>
      </div>
      <div class="Gmodule py-10 back">
      <h3> Laguna Shores Resorts </h3>
        <v-divider></v-divider>
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
          <p>The app/content management system was created in WordPress and transferred to Adobe Catalyst.
          </p>
          <p> It was designed to work seamlessly with the resort’s existing inventory management database and includes a mailing campaign system used by the call center and marketing teams for templating emails. </p>
          <p> The project makes use of GoDaddy for hosting, AWS for storage, and Google Analytics for search optimization.
          </p>
      </div><br>
      <v-btn
        align-center
        depressed
        elevation="2"
        color="primary"
        class="gardient-button"
        href="http://www.lagunashoresresort.com">
      <b class="mdi mdi-open-in-new "> live view </b>
      </v-btn>
      </div>
      <div class="Gmodule py-10 back">
      <h3> Classic Car Pal </h3>
      <v-divider></v-divider>
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

      </div><br>
      <v-btn
        align-center
        depressed
        elevation="2"
        color="primary"
        class="gardient-button"
        href="http://www.classiccarpal.com">
        <b class="mdi mdi-open-in-new"> live view </b>
      </v-btn>
      </div>
      </div>
  </div>

  <div>
    <h2> Our approach </h2>
    <div class="Fgrid">
      <div class="Gmodule py-10 back">
      <div class="p-box">
            <h3> Organized & clean code. </h3>
          <v-divider></v-divider>
          <p> We are experienced software developers who write clean code, adhere to SOLID principles and use git to ensure code-base integrity.
Our areas of expertise include Vue, NUXT, node.js, Postgres, Ruby on Rails, CSS, SCSS and HTML. </p>
      </div>
        <i class="i">scroll to zoom-in</i><br><br>
      <v-zoomer  title="Scroll to zoom-in" class="showcase-img" style="width: 500px; height: 500px;">

         <img
         src="https://firebasestorage.googleapis.com/v0/b/mexdev-40fff.appspot.com/o/giff%2FRaisesTour.gif?alt=media&token=010f1b21-0c96-44ab-9c2c-1c295718fa38
"
         style="object-fit: contain; width: 90%; height: 100%; border-radius:10px; box-shadow: 0px 0px 10px -3px black; "
         >
     </v-zoomer>
  </div>
  </div>
  </div>
  <h2> Ui/Ux </h2>
    <div class="Fgrid">
      <v-container class="Gmodule pb-10 back">
          <v-carousel>
           <v-carousel-item
             v-for="(uxitem,i) in uxitems"
             :key="i"
             :src="uxitem.src"
             reverse-transition="fade-transition"
             transition="fade-transition"
           >
           <p class="uiux-title">{{uxitem.title}} </p>
           <p class="des py-10 px-10 white">{{uxitem.des}}</p>
         </v-carousel-item>
          </v-carousel>
      </v-container>
    </div>
  </v-container>
</template>

<script>
export default {
  name: 'Portfolio',
  data () {
     return {
       uxitems: [
         {
           src: require("@/assets/Prototyping.png"),
           title: 'Prototyping',
           des: 'A simulation or sample version of a final product, which is used for testing prior to launch. The goal of a prototype is to test products & product ideas before sinking lots of time and money into the final product. Prototyping is essential for resolving usability issues before launch. It can also reveal areas that need improvement. Once a draft of your product idea is in the hands of real users, you will finally see how they want to use the product. You can then go back and adjust your initial guesswork.'
         },
         {
           src: require("@/assets/mood-board.png"),
           title: 'Mood Boards',
           des: 'Mood boards are a collage of images, fonts, interactions, features, icons, and UI elements to communicate the artistic direction of a project. As everything in user experience design your mood board should be focused on meeting user needs and problem-solving.'
         },
         {
           src: require("@/assets/ComplexityColor.png"),
           title: 'Complexity breakdown in color desing',
           des: 'In professional environments, the work produced is complex. As long as the content is in the hands of the creator, complexity is easily manageable. Remember, that complexity is subjective, and everything makes sense in the head of the creator.'
         },
         {
           src: require("@/assets/interlex.png"),
           title: 'Complexity breakdown in color desing',
           des: 'While an increase in alignment between the agent and the designer leads to more complex but better quality products, higher product demand or lower competition among designers leads to more complex and lower quality products. '
         },
       ],
     }
   },
}
</script>
