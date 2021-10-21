
<template>

<main>
  <v-container>
   <!-- mxdvsupport -->
   <div>
   <h1> Servicios </h1>
   <h3 class="blue--text">¡Podemos optimizar su modelo de negocio digital!</h3>
   </div>
        <v-row class="d-flex justify-space-around" >
            <v-col col="4" >
                <transition appear name="slide-ub">
                    <v-card class="product-card mt-5">
                        <div class="product-card-title">
                            <h1 class="mt-n3">
        <span class="get pulsate-css" transition="scroll-y-transition"> MXDV </span>
       </h1>
                            <h3> Dale tiempo a tu <span class="text-decoration-line-through break">descanso</span> VIDA! :D </h3>
                        </div>
                        <v-container class="text-sm-body-2 ape-pic">
                            <v-img class="center ape-img" width="auto" src="../assets/graphics/apesyntax.png" />
                        </v-container>
                        <div class="product-card-button">
                          <v-btn primary dark class="mt-5 center"
                          href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=L4GRV2X7J83DN"> $600mxn P/Hr </v-btn>
                          <br>
                          <p class="center">"Deje el trabajo duro a nuestro equipo de soporte"</p>
                        <br>
                        </div>
                    </v-card>
                </transition>
            </v-col>
<!-- nuedream -->
            <v-col col="4">
                <transition appear name="slide-ub">
                    <v-card class="product-card mt-5">
                        <div class="product-card-title">
                            <h1 class="mt-n3">
   <span class="get pulsate-css" transition="scroll-y-transition"> NuDream </span>
  </h1>
                            <h3>Comienza tu startup</h3>
                            <v-btn
                            class="mt-10"
                            color="blue--text"
                            href="https://nudream.herokuapp.com/landing"
                            > ¡vista previa en vivo!
                            </v-btn>
                        </div>
                        <v-container  class="text-sm-body-2 ape-pic">
                          <v-img class="center ape-img"  width="auto" src="../assets/graphics/ape-thumbs-up.png" />

                            <NuDreamTechSlide/>
                        </v-container>
                        <div class="product-card-button">
                        <v-btn primary dark class="mt-5 center"
                        href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=XMENJA5EKK93S"> $20,000.00 mxn </v-btn>
                        <br>
                        <p title="If you are form Mexico let us know!" class="center">"¡Empecemos a construir tu sueño!"</p>
                        <br>
                        </div>
                    </v-card>
                </transition>
            </v-col>
<!-- nustack
            <v-col col="4">
                <transition appear name="slide-ub">
                    <v-card class="product-card mt-5">
                        <div class="product-card-title">
                            <h1 class="mt-n3">
          <span class="get pulsate-css" transition="scroll-y-transition"> NuStack </span>
          </h1>
                            <h3> The recruiter <span class="blue--text"> <a target="_blank" href="https://forms.gle/FPr6DBgpEMdLf51T7" >solution! </a> </span> </h3>
                        </div>

                        <v-container class="text-sm-body-2 ">
                            <NuStackTechSlide/>
                        </v-container>
                        <div class="product-card-button">
                        <v-btn primary dark class=" center" href="contact"> Learn more! </v-btn>
                        <br>
                        <p class="center"><a target="_blank" href="https://forms.gle/RkwW8hkiVbUg8C9H8"> Help us</a> build the best product for you! </p>
                        <br>
                        </div>
                    </v-card>
                </transition>
            </v-col> -->

        </v-row>
    </v-container>
    <v-container>
      <v-row>
        <v-col
          cols="6"
          v-for="(productDescription, i) in productDescriptions" :key="i"
        >
        <v-card>
          <v-card-text>
          <p class="f-p text-sm-body-2 font-weight-medium text-justify  text-left">
            <span class="blue--text ">Que es {{ productDescription.title }} ?</span>
            <v-chip
              v-if="productDescription.tag"
              class="ma-2"
              label
              outlined
              color="green"
            >{{productDescription.tag}}
            </v-chip>
                <v-divider></v-divider>
            <br>
            <b>{{ productDescription.title }}</b> {{productDescription.description}}
          </p>
          </v-card-text>
      </v-card>
      </v-col>
    </v-row>
    </v-container>
</main>

</template>

<script>

// import NuDreamTechSlide from '@/components/animations/NuDreamTechSlide.vue'
// import NuStackTechSlide from '@/components/animations/NuStackTechSlide.vue'
export default {
    name: 'Products',
    components: {
      //  NuDreamTechSlide,
      //  NuStackTechSlide
    },
    data() {
      return {

        productDescriptions: [

           {
              title: "Mxdv",
              description: 'es un equipo de soporte de desarrollo de aplicaciones web, ¡hizo 916 contribuciones a Github el año pasado! podemos crear una solución personalizada o ayudar a diseñar soluciones para optimizar su servicio digitalmente, usted puede ayudarnos con dinero y podemos ayudarlo con su negocio en línea. ¡Llevamos décadas en el negocio del desarrollo! ¡Estamos aquí para ayudarlo a usted y a su negocio a crecer! ¡Llámenos hoy!',
          },
          {
            title: "Nudream",
            description: "es una plantilla de Start-up, diseñada en base a conceptos escalables con optimización para dispositivos móviles, ¡una solución personalizada que se adapta a su negocio !. ¡Te lo entregamos como lo solicites !. Significa integrar un diseño y personalizarlo para que se adapte a sus necesidades. Dado que la aplicación viene con un servicio personalizado, podemos proporcionar un presupuesto personalizado."
        },
        /* {
            title: "NuStack",
            tag: "Comming soon!",
            description: "is a Web-App for Recruiters, Developers, & Companies looking for specific Gigs. Imagine you are a recruiter/contractor and have hundreds of gigs to start with, you want to expose them easily or if you are a developer looking for gigs/jobs you can find cool gigs!. Mexdev is building a nice UI for this exact purpose, called: NuStack. Designed to help out on this particular process with enhancements like Real-time data on profile updates, customer & client feedback, internal inbox, task manager all included in the same application, even an administration console for all three parties to manage their data. If you are interested in participating, you can by providing ideas through our feedback form. We listen to every answer and decide what you guys are looking to improve in this business sector.",
        }, */
      ],
    }
  }
}

</script>
<style scoped>

p {
    font-size: 12px !important;
}

h1 {
    font-size: min(3rem, 200%, 20vw);
}

h4 {
    text-align: revert !important;
}

.anislide {
    margin-bottom: -80px;
}

@media (max-width:400px) {
    .anislide {
        margin-bottom: -180px;
    }
}

.ape-img {
  min-width: 200px;
}

.get {
    font-size: min(3rem, 200%, 20vw);
    color: #5388E6;
}

.on {
    font-size: 25px;
    font-family: poppins;
}

.done {
    letter-spacing: 16px;
}

.v-card {
    padding: 20px;
    width: 100% !important;
}

.h-des {
    font-size: 16px;
    font-family: monospace;
    line-height: 1.8;
    max-width: 85%;
    margin: auto;
    text-align: justify;
    transition: 1s;
}

/*media queries */
@media screen and (max-width:900px) {
    .h-des {
        font-size: 0.8em !important;
    }
    .f-p {
        font-size: 0.6em !important;
        width: 80%;
        transition: 1s;
    }
}

@media screen and (max-width:1264px) {
    .medium-opt {
        margin-bottom: -150px !important;
    }
}

@media screen and (max-width:960px) {
    .medium-opt {
        margin-bottom: 0pc !important;
    }
}

.break {
    color: #5388E6;
}

.product-card {
    min-height: 700px;
    width: 100%;
}

.product-card-title {
    height: 200px;
}

.ape-pic {
  height: 278px;
}

</style>
