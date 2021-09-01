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
    max-height: 332px;
    min-height: 280px;
    overflow: auto;
}
.p-box h5 {
    text-align: left;
}
.gardient-button {
    padding: 10px;
    border-radius: 10px;
    background: #474747;
    color: #ffffff !important;
}
.i {
    color: lightgray !important;
    margin-top: 20px;
}
.i:hover {
    color: darkgray !important;
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
    -webkit-box-shadow: 0px 0px 25px -16px rgba(161, 161, 161, 1);
    -moz-box-shadow: 0px 0px 25px -16px rgba(161, 161, 161, 1);
    box-shadow: 0px 0px 25px -16px rgba(161, 161, 161, 1);
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
    -webkit-box-shadow: 0px 0px 35px -16px rgba(161, 161, 161, 1);
    -moz-box-shadow: 0px 0px 35px -16px rgba(161, 161, 161, 1);
    box-shadow: 0px 0px 35px -16px rgba(161, 161, 161, 1);
}
.Fgrid {
    display: flex;
    flex-wrap: wrap;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    grid-auto-rows: minmax(150px, auto);
    grid-gap: 2em;
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 50px;
    transition: 1s;
}
.exespotbody {
    margin-top: 100px;
    max-wdth: 1000px;
}
.slide-section {
  display:grid;
}
@media screen and (max-width:1400px) {
    .Fgrid {
        max-width: 600px;
    }
}
.v-dialog {
    background: #FFFFFF;
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
    text-align: center;
    margin-bottom: 30px;
}
.e4 {
    width: 400px;
    margin: auto;
}
.des {
    transition: .3s;
    background: #313233b0;
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
  .port-slider {
    height: auto !important;
  }
    .des {
        width: 100%;
        display: inline-block;
        text-align: left;
        height: max-content;
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
.hover-shadow {
    box-shadow: 0px 0px 10px -7px #5388e6;
}
.hover-shadow:hover {
    box-shadow: 0px 0px 10px -3px #5388e6;
}
.w-80{
  max-width: 300px !important;
  margin: auto;
}
.main-img {
  max-width:600px !important;
  margin-right: 40px !important;
}
.v-image.v-responsive.v-carousel__item.theme--dark {
  height: auto !important;
}
.t-c {
  text-align:center;
  color: dodgerblue;
}
.main-pbox {
  max-width:600px ;
}
</style>

<template>
<v-container>
    <div class="shocase-card">
        <h1> welcome to showcase </h1>
        <h3> Fintech Horizons Media </h3>
        <v-divider class="w-80 d-flex mb-10"></v-divider>
        <v-btn class="rainbow" href="/contact">
        <b class="center white">For sale - send us a message</b>
        </v-btn>
        <div class="showcase-img">
            <img class="main-img" src="../assets/fhm-mockup.png" style="object-fit: contain; width: 100%; height: 100%;">
        </div>
        <div class="Fgrid">
            <div class=" col-12 py-10 back">
                <v-container class="p-box main-pbox mt-n15">
                    <h5>highlights:</h5>
                    <hr>
                    <p class="text--primary">A professional, robust Ruby on Rails App and Fintech Newsletter. Its backend is PostgreSQL, Rails and SendGrid, and includes its own API. The API supports an upgraded site (dealfunnel.net) that has a NUXT/Vue.js frontend and a mobile
                        app project built with Ionic/ Vue.js.
                    </p>
                    <p class="text--primary"> The project uses Git and GitHub for code storage/management, Heroku for hosting, AWS for storage, Redis for caching, and Google Analytics Tags for optimization. </p>
                </v-container>
                <v-btn align-center depressed elevation="2" color="primary" class="gardient-button" target="_blank" href="http://fintechhorizonsmedia.com">
                  site is down
                </v-btn><br>
                <b>
                <p class="center t-c">We can sell the project & if posible work for you in it! <br> We are out of money! help us get back on track!  </p>
                </b>
            </div>
            <div class="Gmodule py-10 back">
                <h3> Laguna Shores Resorts </h3>
                <v-divider></v-divider>
                <div class="showcase-img" style="width: 500px; height: 500px;">
                    <img src="../assets/ls-mockup.png" style="object-fit: contain; width: 100%; height: 100%;">
                </div>
                <div class="p-box">
                    <h5>highlights:</h5>
                    <hr>
                    <p class="text--primary">The app/content management system was created in WordPress and transferred to Adobe Catalyst.
                    </p>
                    <p class="text--primary"> It was designed to work seamlessly with the resort’s existing inventory management database and includes a mailing campaign system used by the call center and marketing teams for templating emails. </p>
                    <p class="text--primary"> The project makes use of GoDaddy for hosting, AWS for storage, and Google Analytics for search optimization.
                    </p>
                </div>
                <br>
                <v-btn align-center depressed elevation="2" color="primary" class="gardient-button" target="_blank" href="http://www.lagunashoresresort.com">
                    <b class="mdi mdi-open-in-new "> live view </b>
                </v-btn>
            </div>
            <div class="Gmodule py-10 back">
                <h3> Classic Car Pal </h3>
                <v-divider></v-divider>
                <div class="showcase-img" style="width: 500px; height: 500px;">
                    <img src="../assets/ccp-mockup.png" style="object-fit: contain; width: 100%; height: 100%;">
                </div>
                <div class="p-box">
                    <h5>highlights:</h5>
                    <hr>
                    <p class="text--primary">A classic car showcase webdesign, it uses gallery and event most of the project was design and migrating the website from and old CMS system.
                    </p>
                    <p class="text--primary"> The project uses weebly for hosting and Google Analytics Tags for optimization. </p>

                </div>
                <br>
                <v-btn align-center depressed elevation="2" color="primary" target="_blank" class="gardient-button" href="http://www.classiccarpal.com">
                    <b class="mdi mdi-open-in-new"> live view </b>
                </v-btn>
            </div>
        </div>
    </div>
    <div>
        <h2> Our approach </h2>
        <div class="Fgrid">
            <div class="Gmodule py-10 back">
                <div class="pa-5">
                    <h3> Organized & clean code. </h3>
                    <v-divider class="mx-15"></v-divider>
                    <p class="center text--primary"> We are experienced software developers who write clean code, adhere to SOLID principles and use git to ensure code-base integrity. Our areas of expertise include Vue, NUXT, node.js, Postgres, Ruby on Rails, CSS, SCSS and HTML. </p>
                </div>
                <div class="showcase-img" style="width: 500px; height: 500px;">
                    <img src="https://firebasestorage.googleapis.com/v0/b/mexdev-40fff.appspot.com/o/giff%2FRaisesTour.gif?alt=media&token=010f1b21-0c96-44ab-9c2c-1c295718fa38
" style="object-fit: contain; width: 90%; height: 100%; border-radius:10px; box-shadow: 0px 0px 10px -3px black; ">
                </div>
            </div>
        </div>
    </div>
    <div>
      <v-card>
        <h2> Ui/Ux </h2>
      <v-img height="450px" src="https://media.giphy.com/media/U0dOlZ6QhFqp24uhRi/giphy.gif"/>
      <p class="center">we like to make our day easier, with funny moments :)</p>
      <v-divider/>
      <v-row justify="space-around">
          <v-col cols="auto">
              <v-dialog transition="dialog-bottom-transition" max-width="600">
                  <template v-slot:activator="{ on, attrs }">
                      <v-btn class="mt-5" color="primary" v-bind="attrs" v-on="on">UX/UI showcase</v-btn>
                  </template>
                  <template v-slot:default="dialog">
                      <v-card class="px-5">
                        <v-card-actions class="justify-end">
                            <v-btn text @click="dialog.value = false"> X </v-btn>
                        </v-card-actions>
                          <h2> Vue UI Demo on Codepen </h2>
                          <v-divider/>

                          <v-card-text class="hover-shadow my-10 pa-10">
                          <h5 class="my-3"> Wireframe Live Figma Project </h5>
                          <v-divider class="mb-5"/>
                              <a target="_blank" href="https://www.figma.com/file/1R0sVqlkEPWupn2gbmxFGA/Wireframing-in-Figma?node-id=109%3A276">
                                  <v-img class="pa-10" src="@/assets/elevator-ui-wireframe.png"></v-img>
                              </a>
                        </v-card-text>

                          <v-card-text class="hover-shadow my-10 pa-10 ">
                            <h5 class="my-3"> Layout from Mockup </h5>
                              <v-divider class="mb-5"/>
                              <a target="_blank" href="https://codepen.io/apesyntax/pen/ExmpVRB">
                                  <v-img src="@/assets/Ux-Design-Potrait-Ipad.png"></v-img>
                              </a>
                          </v-card-text>

                        <v-card-text class="hover-shadow my-10 pa-10">
                        <h5 class="my-3"> Character Creation Gallery </h5>
                        <v-divider class="mb-5"/>
                            <a target="_blank" href="https://codepen.io/apesyntax/full/poJboNm">
                              <v-img class="pa-10" src="@/assets/thanks.png"></v-img>
                            </a>
                      </v-card-text>
                      </v-card>
                  </template>
              </v-dialog>
          </v-col>
      </v-row>
    </v-card>
  </div>
    <section class="slide-section">
        <div class="Gmodule pb-10">
            <v-carousel class="port-slider">
                <v-carousel-item
                gradient="to top right, rgba(100,115,201,.33), rgba(25,32,72,.7)"
                v-for="(uxitem,i) in uxitems" :key="i" :src="uxitem.src"
                class="pt-5 carousel"
                reverse-transition="fade-transition"
                transition="fade-transition">
                    <v-col class="mt-5">
                        <v-text class="des py-10 px-10 text--tertiary rounded">{{uxitem.title}} <v-divider class="mt-2"/> <br>{{uxitem.des}}</v-text>
                    </v-col>
                </v-carousel-item>
            </v-carousel>
        </div>
      </section>
</v-container>
</template>

<script>
export default {
    name: 'Portfolio',
    data() {
        return {
            // Importing external JS files sample by appending it in head
            mounted() {
                    let externalScript = document.createElement('script')
                    externalScript.setAttribute('src', 'https://cpwebassets.codepen.io/assets/embed/ei.js')
                    document.head.appendChild(externalScript)
                },
                uxitems: [{
                    src: require("@/assets/Prototyping.png"),
                    title: 'Prototyping',
                    des: 'A simulation or sample version of a final product, which is used for testing prior to launch. The goal of a prototype is to test products & product ideas before sinking lots of time and money into the final product. Prototyping is essential for resolving usability issues before launch. It can also reveal areas that need improvement. Once a draft of your product idea is in the hands of real users, you will finally see how they want to use the product. You can then go back and adjust your initial guesswork.'
                }, {
                    src: require("@/assets/Moodded.png"),
                    title: 'Mood Boards',
                    des: 'Mood boards are a collage of images, fonts, interactions, features, icons, and UI elements to communicate the artistic direction of a project. As everything in user experience design your mood board should be focused on meeting user needs and problem-solving.'
                }, {
                    src: require("@/assets/ComplexityColor.png"),
                    title: 'Complexity breakdown in color desing',
                    des: 'In professional environments, the work produced is complex. As long as the content is in the hands of the creator, complexity is easily manageable. Remember, that complexity is subjective, and everything makes sense in the head of the creator. While an increase in alignment between the agent and the designer leads to more complex but better quality products, higher product demand or lower competition among designers leads to more complex and lower quality products.'
                }, {
                    src: require("@/assets/elevator-ui-wireframe.png"),
                    title: 'Wireframing',
                    des: 'Wireframe service contains information about the user interface architecture, it provides us a detailed description of its behavior and user interaction. It will demonstrate the flow of transitions within the application in order to give a better comprehensive idea of how to build the actual code layout.'
                }, ],
        }
    },
}

</script>
