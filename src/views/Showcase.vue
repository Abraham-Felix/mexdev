<style>
/* wavy design*/
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
    margin-bottom:0px !important;
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
.ndiv{
  background-color: #E7E8E8;
}
</style>

<template>

<main class="my-n7 s-main pt-5">
    <div class="shocase-card">
      <!-- main top division -->
        <v-row class="mx-0 top-div">
            <transition appear name="slide-lr">
            <v-col class="col-6 pa-10 l-div">
                <h1 class="t-white hr-1"> Fintech Horizons Media </h1>
                <p class="center t-white text-md-h6" > ¡Energía maravillosa para experiencias fascinantes! </p>
                <hr class="w-80 "/>
                <div class="showcase-img">
                    <img class="main-img" src="../assets/mockups/fhm-mockup.png" style="object-fit: contain; width: 100%; height: 100%;">
                </div>
            </v-col>
            </transition>
              <transition appear name="slide-ub">
            <v-col class="mt-15 col-4  py-10 r-div">
                <v-container class="p-box-main main-pbox  ">
                    <h5 class="t-white mb-5">Destacado:</h5>
                    <hr>
                    <p class="t-white text-md-h6">Una aplicación profesional y sólida de Ruby on Rails y un boletín informativo de Fintech. Su backend es PostgreSQL, Rails y SendGrid, e incluye su propia API. La API admite un sitio actualizado (dealfunnel.net) que tiene una interfaz NUXT / Vue.js y una
                        proyecto de aplicación creado con Ionic / Vue.js..
                    </p>
                    <p class="t-white text-md-h6"> El proyecto utiliza Git y GitHub para el almacenamiento / administración de código, Heroku para el alojamiento, AWS para el almacenamiento, Redis para el almacenamiento en caché y etiquetas de Google Analytics para la optimización. </p>
                </v-container>
                <div class="center mt-n15">
                  <p class="mt-16 t-c text-md-h5"><b> ¡Ups! ¡Se me acabó el dinero! <br>
¡Ayúdanos a volver al camino! </b> </p>
                  <br>
                </div>
                <br>
                <v-btn class="rainbow" href="/contact">
                <b class="t-white">For sale!</b>
              </v-btn><br>
                <hr width="300px" class="mt-10 center">
            </v-col>
              </transition>
            <transition appear name="slide-rl">
              <v-col class="mt-15 piggy">
              </v-col>
            </transition>
        </v-row>
        <!-- 2nd division -->
        <section class="black">
        <v-container>
        <v-row class="pt-15 bl-div t-white">
          <div class="mt-15 col-6  bl-div xs-col-12 py-10" >
            <div class="p-box mt-15 ">
                <h5 class="mb-5">Destacado:</h5>
                <hr>
                <p class="text-md-h6">
                El sistema de administración de aplicaciones se diseño en visual basic y se distribuyo con MySQL. El contenido se creó en WordPress y se transfirió a Adobe Catalyst.
                </p>
                <p class="text-md-h6"> Fue diseñado para funcionar a la perfección con la base de datos de gestión de inventario existente del complejo e incluye
                  un sistema de campañas de correo que utilizan el centro de llamadas y los equipos de marketing para crear plantillas de correos electrónicos. </p>
                <p class="text-md-h6"> El proyecto utiliza GoDaddy para el alojamiento, AWS para el almacenamiento y Google Analytics para la optimización de la búsqueda.
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
                    <img src="../assets/mockups/ls-mockup.png" style="object-fit: contain; width: 100%; height: 100%;">
                </div>
              </div>
            </v-row>
            <!--  third division -->
            <v-row class="pt-15  t-white">
            <div class="bl-div col-6 t-white" >
                <h3> Classic Car Pal </h3>
                <v-divider></v-divider>
                <div class="showcase-img" style="width: 500px; height: 500px;">
                    <img src="../assets/mockups/ccp-mockup.png" style="object-fit: contain; width: 100%; height: 100%;">
                </div>
              </div>
                <div class="mt-15 col-6  bl-div xs-col-12 py-10" >
                <div class="p-box mt-15">
                    <h5 class="mb-5">Destacado:</h5>
                    <hr>
                    <p class="text-md-h6">
                      Un diseño web clásico de exhibición de autos, utiliza galería y evento, la mayor parte del proyecto fue diseñado
                      usando un sistema de terceros, después de que se migró de wix al antiguo sistema CMS.
                    </p>
                    <p class="text-md-h6">
                      Los servicios proporcionados incluyeron nuestro conocimiento certificado de Google y Hp sobre marketing digital
                      como marketing en redes sociales y gestión de redes sociales. El proyecto utiliza weebly para alojamiento y etiquetas de Google Analytics para optimización.
                    </p>

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
    <div class="ndiv">
      <div style="height: 150px; overflow: hidden;">
  <svg viewBox="0 0 500 150" preserveAspectRatio="none" style="height: 100%; width: 100%;">
    <path d="M0.00,92.27 C216.83,192.92 304.30,8.39 500.00,109.03 L500.00,0.00 L0.00,0.00 Z" style="stroke: none;fill: #000000;"></path>
  </svg>
        </div><h2> Enfoque de desarrollo y diseño </h2>
        <div>
            <div class="Gmodule py-10 gray mb-15">
                <div class="pa-5">
                    <h3> Código organizado y limpio. </h3>
                    <v-divider class="mx-15"></v-divider>
                    <p class="center text-md-h5 pa-15 text--primary">
                      Desarrollo de software experimentado de escritura de código limpio, con principios SÓLIDOS y usando git para garantizar la integridad de la base del código.
                      Mis áreas de especialización incluyen Vue, NUXT, node.js, Postgres, Ruby on Rails, CSS, SCSS y HTML. </p>
                    </div>
                <div class="showcase-img" style="width: 500px; height: 500px;">
                    <img src="https://firebasestorage.googleapis.com/v0/b/mexdev-40fff.appspot.com/o/giff%2FRaisesTour.gif?alt=media&token=010f1b21-0c96-44ab-9c2c-1c295718fa38
" style="object-fit: contain; width: 90%; height: 100%; border-radius:10px; box-shadow: 0px 0px 10px -3px black; ">
                </div>
            </div>
        </div>
    </div>
    <div class="design-card t-white">
      <h2 class="center"> Conceptos clave de Ui / Ux </h2> <br>
      <p class="center px-5 text-md-h6">
Mis conceptos de UX / Ui se basan en accesibilidad, usabilidad, arquitectura de información,
wireframes, diseño de interacción, Agile Ux / Ui, diseño gráfico, Mobile-first, Target persona y pruebas A / B.<br>
Enfoque de UX: umbral de Doherty, ley de Fits, efecto de usabilidad estética, efecto de gradiente de meta, navaja de Occam,
 principio de Pareto, ley de Postel, ley de Tesler. Usando las Leyes de UX como estándares.  </p>
      <v-img class="ma-md-15 mx-5 " src="@/assets/UxUi-tech.png"></v-img>
      <v-container>
        <v-row  justify="space-around" class="py-10">
            <v-col cols="12" sm="6" >
                <v-img class="d-flex align-end rounded-xl" height="500px" src="https://media.giphy.com/media/U0dOlZ6QhFqp24uhRi/giphy.gif">
                <h3 class="mb-5 center t-white welike">Nos gusta hacernos el día más fácil, con momentos divertidos: D</h3>
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
                            <h2> UX/UI Demos </h2>
                            <p class="center">click on images to visit them</p>
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
                                    <v-img width="300px" class="center pa-10" src="@/assets/thanks.png"></v-img>
                                </a>
                            </v-card-text><v-card-text class="hover-shadow my-10 pa-10">
                                <h5 class="my-3"> Google Sheets API Table UI </h5>
                                <v-divider class="mb-5" />
                                <a target="_blank" href="/gigs">
                                    <v-img width="600px" class="center pa-10" src="@/assets/gs-api.svg"></v-img>
                                </a>
                            </v-card-text>
                        </v-card>
                    </template>
                </v-dialog>
            </v-col>
            <v-col cols="12" sm="6">
                <section class="slide-section ">
                    <div class="Gmodule ">
                        <v-carousel class="port-slider rounded-xl">
                            <v-carousel-item
                            gradient=" rgba(100,115,201,.33), rgba(25,32,72,.7)"
                            v-for="(uxitem,i) in uxitems"
                            :key="i"
                            :src="uxitem.src"
                            class="carousel"
                            reverse-transition="fade-transition"
                            transition="fade-transition">
                                <v-col class="mt-5">
                                    <v-text
                                    class="des py-10 px-10 text--tertiary rounded text-md-body-1"
                                    >
                                    {{uxitem.title}}
                                    <v-divider class="mt-2" />
                                    <br> {{uxitem.des}} </v-text>
                                </v-col>
                            </v-carousel-item>
                        </v-carousel>
                    </div>
                </section>
            </v-col>
        </v-row>
      </v-container>
      <v-container class="mb-10"  >
        <v-row >
          <v-col class="mb-10 ">
            <section >
              <h1 class="mb-8 md-mb-16">
                Certificado por:
              </h1>
              <v-divider dark class="pb-10"></v-divider>
              <v-img width="70%" class="center mx-md-15"  src="@/assets/certified.png"></v-img>
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
                    des: 'Una simulación o una versión de muestra de un producto final, que se utiliza para realizar pruebas antes del lanzamiento. El objetivo de un prototipo es probar productos e ideas de productos antes de invertir mucho tiempo y dinero en el producto final. La creación de prototipos es esencial para resolver problemas de usabilidad antes del lanzamiento. También puede revelar áreas que necesitan mejoras. Una vez que un borrador de la idea de su producto esté en manos de usuarios reales, finalmente verá cómo quieren usar el producto. Luego puede volver atrás y ajustar sus conjeturas iniciales.'
                }, {
                    src: require("@/assets/Moodded.png"),
                    title: 'Mood Boards',
                    des: 'Los pizarrones de humor son un collage de imágenes, fuentes, interacciones, características, íconos y elementos de la interfaz de usuario para comunicar la dirección artística de un proyecto. Como todo en el diseño de la experiencia del usuario, su panel de estado de ánimo debe centrarse en satisfacer las necesidades del usuario y la resolución de problemas.'
                }, {
                    src: require("@/assets/ComplexityColor.png"),
                    title: 'Complexity breakdown in color desing',
                    des: 'En entornos profesionales, el trabajo producido es complejo. Siempre que el contenido esté en manos del creador, la complejidad es fácilmente manejable. Recuerda que la complejidad es subjetiva y todo tiene sentido en la cabeza del creador. Si bien un aumento en la alineación entre el agente y el diseñador conduce a productos más complejos pero de mejor calidad, una mayor demanda de productos o una menor competencia entre los diseñadores conduce a productos más complejos y de menor calidad.'
                }, {
                    src: require("@/assets/elevator-ui-wireframe.png"),
                    title: 'Wireframing',
                    des: 'El servicio Wireframe contiene información sobre la arquitectura de la interfaz de usuario, nos proporciona una descripción detallada de su comportamiento e interacción con el usuario. Demostrará el flujo de transiciones dentro de la aplicación para dar una idea más completa de cómo construir el diseño de código real.'
                }, ],
        }
    },
}

</script>
