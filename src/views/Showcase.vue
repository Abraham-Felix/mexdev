<style>
.gray {
  background-color: #e1e1e1 !important;
}
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
.p-box-main {
    padding: 20px;
    max-height: 300px;
    min-height: 250px;
    overflow: auto;
    text-align: left;
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
    display: inline-table;
    align-items: center;
    justify-content: center;
    height: 350px;
    border-radius: 2px;
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
    display: grid;
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

.w-80 {
    max-width: 300px !important;
    margin: auto;
}

.main-img {
    max-width: 600px !important;
    margin-right: 40px !important;
}

.v-image.v-responsive.v-carousel__item.theme--dark {
    height: auto !important;
}

.t-c {
    text-align: center;
    color: dodgerblue;
}

.main-pbox {
    max-width: 800px;
}

.design-card {
    width: 100%;
}

.t-white {
    color: #ffffff;
}
.top-div {
  background-color: black;
}
.l-div{
  background: linear-gradient(308deg, #25ee15, #359eff, #da30e0);
      border-radius: 0px 356px 0px 0px;
      box-shadow: -4px 18px 20px 0px #212f34;
}

.bl-div{
  background: #000000;
}

.piggy {
  background: url(../assets/cofeetime.png);
  background-size: contain;
  background-repeat: no-repeat;
  background-position: bottom;
}
@media screen and (max-width:600px) {
  .piggy {
    display:none !important;
  }
  .l-div {
    min-width: 100% !important;
    border-radius: 100%;
    margin-top: 20px !important;
  }
  .hr-1 {
    margin-bottom:30px !important;
  }
  .r-div {
    min-width: 100% !important;
  }
  .bl-div {
    min-width:100%;
    display: flex;
  flex-direction: column-reverse;
  }
}
.laguna {
  background: url(../assets/lagunalogo.png);
  background-size: contain;
  background-repeat: no-repeat;
  background-position: left;
}
.center-img {
  margin-top: -550px;
}
.s-main {
  background: linear-gradient(0deg, black, gray, white)  ;
}
.welike {
  mix-blend-mode: overlay;
}
</style>

<template>

<main class="my-n7 s-main pt-5">
    <div class="shocase-card">
      <!-- main top division -->
        <v-row class="mx-0 top-div">
            <v-col class="col-6 py-10 l-div">
                <h1 class="t-white  hr-1"> Fintech Horizons Media </h1>
                <p class="center t-white" > Wonderful energy for fascinating experience!</p>
                <hr class="w-80 d-flex "/>
                <div class="showcase-img">
                    <img class="main-img" src="../assets/fhm-mockup.png" style="object-fit: contain; width: 100%; height: 100%;">
                </div>
            </v-col>
            <v-col class="mt-15 col-4  py-10 r-div">
                <v-container class="p-box-main main-pbox  ">
                    <h5 class="t-white mb-5">highlights:</h5>
                    <hr>
                    <p class="t-white">A professional, robust Ruby on Rails App and Fintech Newsletter. Its backend is PostgreSQL, Rails and SendGrid, and includes its own API. The API supports an upgraded site (dealfunnel.net) that has a NUXT/Vue.js frontend and a mobile
                        app project built with Ionic/ Vue.js.
                    </p>
                    <p class="t-white"> The project uses Git and GitHub for code storage/management, Heroku for hosting, AWS for storage, Redis for caching, and Google Analytics Tags for optimization. </p>
                </v-container>
                <div class="center mt-n15">
                  <p class="mt-10 t-c"><b>We are selling our project & if posible work for you in it! <br> We are out of money! help us get back on track!</b> </p>
                  <br>
                </div>
                <br>
                <v-btn class="rainbow" href="/contact">
                <b class="t-white">For sale!</b>
              </v-btn><br>
                <hr width="300px" class="mt-10 center">
            </v-col>
            <v-col class="mt-15 piggy">
            </v-col>
        </v-row>
        <!-- 2nd division -->
        <section class="black">
        <v-container>
        <v-row class="pt-15 bl-div t-white">
          <div class="mt-15 col-6  bl-div xs-col-12 py-10" >
            <div class="p-box mt-15 ">
                <h5 class="mb-5">highlights:</h5>
                <hr>
                <p>The app/content management system was created in WordPress and transferred to Adobe Catalyst.
                </p>
                <p> It was designed to work seamlessly with the resort’s existing inventory management database and includes a mailing campaign system used by the call center and marketing teams for templating emails. </p>
                <p> The project makes use of GoDaddy for hosting, AWS for storage, and Google Analytics for search optimization.
                </p>
            </div>
            <br>
            <v-btn
            align-center
            depressed
            elevation="2"
            color="primary"
            class="gardient-button"
            target="_blank"
            href="http://www.lagunashoresresort.com">
                <b class="mdi mdi-open-in-new "> live view </b>
            </v-btn>
      </div>
        <div class="bl-div col-6" >
                <h2> Laguna Shores Resorts </h2>
                <v-divider></v-divider>
                <div class="showcase-img" style="width: 500px; height: 500px;">
                    <img src="../assets/ls-mockup.png" style="object-fit: contain; width: 100%; height: 100%;">
                </div>
              </div>
            </v-row>
            <!--  third division -->
            <v-row class="pt-15 bl-div t-white">
            <div class="bl-div col-6 t-white" >
                <h3> Classic Car Pal </h3>
                <v-divider></v-divider>
                <div class="showcase-img" style="width: 500px; height: 500px;">
                    <img src="../assets/ccp-mockup.png" style="object-fit: contain; width: 100%; height: 100%;">
                </div>
              </div>
                <div class="mt-15 col-6  bl-div xs-col-12 py-10" >
                <div class="p-box mt-15">
                    <h5 class="mb-5">highlights:</h5>
                    <hr>
                    <p>A classic car showcase webdesign, it uses gallery and event most of the project was design using a thirdparty system, after it was migrated from wix the old CMS system.
                    </p>
                    <p> The services provided icluded our certified knowledge from Google an Hp on digital marketing as social media marketing & social media management, The project uses weebly for hosting and Google Analytics Tags for optimization. </p>

                </div>
                <br>
                <v-btn align-center depressed elevation="2" color="primary" target="_blank" class="gardient-button" href="http://www.classiccarpal.com">
                    <b class="mdi mdi-open-in-new"> live view </b>
                </v-btn>
            </div>
        </v-row>
      </v-container>
    </section>
    </div>
    <div>
        <h2 class="t-white"> Developtment & Design approach </h2>
        <div class="Fgrid">
            <div class="Gmodule py-10 gray">
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
    <div class="design-card t-white">
      <h2 class="center"> Ui/Ux Key Concepts </h2> <br>
  <p class="center px-5 "> our UX/Ui concepts are based on accessibility, usability, information architecture, wireframes, interaction design, agile Ux/Ui, graphic Design, mobile-first, target persona & A/B testing.  </p>
    <v-container>
        <v-row  justify="space-around" class="py-10">
            <v-col cols="12" sm="6" >
                <v-img class="d-flex align-end" height="500px" src="https://media.giphy.com/media/U0dOlZ6QhFqp24uhRi/giphy.gif">
                <h3 class="mb-5 center t-white welike">we like to make our day easier, with funny moments :D</h3>
              </v-img>
                <v-dialog transition="dialog-bottom-transition" max-width="600">
                    <template v-slot:activator="{ on, attrs }">
                        <v-btn class="center-img rainbow" v-bind="attrs" v-on="on">UX/UI showcase</v-btn>
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
                                <v-divider class="mb-5" />
                                <a target="_blank" href="https://www.figma.com/file/1R0sVqlkEPWupn2gbmxFGA/Wireframing-in-Figma?node-id=109%3A276">
                                    <v-img class="pa-10" src="@/assets/elevator-ui-wireframe.png"></v-img>
                                </a>
                            </v-card-text>

                            <v-card-text class="hover-shadow my-10 pa-10 ">
                                <h5 class="my-3"> Layout from Mockup </h5>
                                <v-divider class="mb-5" />
                                <a target="_blank" href="https://codepen.io/apesyntax/pen/ExmpVRB">
                                    <v-img src="@/assets/Ux-Design-Potrait-Ipad.png"></v-img>
                                </a>
                            </v-card-text>

                            <v-card-text class="hover-shadow my-10 pa-10">
                                <h5 class="my-3"> Character Creation Gallery </h5>
                                <v-divider class="mb-5" />
                                <a target="_blank" href="https://codepen.io/apesyntax/full/poJboNm">
                                    <v-img class="pa-10" src="@/assets/thanks.png"></v-img>
                                </a>
                            </v-card-text>
                        </v-card>
                    </template>
                </v-dialog>
            </v-col>
            <v-col cols="12" sm="6">
                <section class="slide-section">
                    <div class="Gmodule">
                        <v-carousel class="port-slider">
                            <v-carousel-item gradient=" rgba(100,115,201,.33), rgba(25,32,72,.7)" v-for="(uxitem,i) in uxitems" :key="i" :src="uxitem.src"
                            class="carousel" reverse-transition="fade-transition" transition="fade-transition">
                                <v-col class="mt-5">
                                    <v-text class="des py-10 px-10 text--tertiary rounded">{{uxitem.title}}
                                        <v-divider class="mt-2" />
                                        <br>{{uxitem.des}}</v-text>
                                </v-col>
                            </v-carousel-item>
                        </v-carousel>
                    </div>
                </section>
            </v-col>
        </v-row>
      </v-container>
    </div>
</main>

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
