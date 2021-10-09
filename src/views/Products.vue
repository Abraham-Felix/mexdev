
<template>

<main>
  <v-container>
   <!-- mxdvsupport -->
   <div>
   <h1 class="pt-7"> MXDV Products </h1>
   <h3 class="blue--text">We can optimize your digital business model!</h3>
   </div>
        <v-row class="d-flex justify-space-around" >
            <v-col col="4" >
                <transition appear name="slide-ub">
                    <v-card class="product-card mt-5">
                        <div class="product-card-title">
                            <h1 class="mt-n3">
        <span class="get pulsate-css" transition="scroll-y-transition"> MXDV </span>
       </h1>
                            <h3> Give yourself a <span class="text-decoration-line-through break">break!</span> LIFE :D </h3>
                        </div>
                        <v-container class="text-sm-body-2 ape-pic">
                            <v-img class="center ape-img" width="auto" src="../assets/graphics/apesyntax.png" />
                        </v-container>
                        <div class="product-card-button">
                          <v-btn primary dark class="mt-5 center" href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=L4GRV2X7J83DN"> $599.00 / Week </v-btn>
                          <br>
                          <p class="center">"Leave the hard work to our support team"</p>
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
                            <h3> Start your startup</h3>
                            <v-btn
                            class="mt-10"
                            color="blue--text"
                            href="https://nudream.herokuapp.com/landing"
                            > live preview!
                            </v-btn>
                        </div>
                        <v-container  class="text-sm-body-2 ape-pic">
                          <v-img class="center ape-img"  width="auto" src="../assets/graphics/ape-thumbs-up.png" />

                            <NuDreamTechSlide/>
                        </v-container>
                        <div class="product-card-button">
                        <v-btn primary dark class="mt-5 center" href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=XMENJA5EKK93S"> $1,999.00 </v-btn>
                        <br>
                        <p title="If you are form Mexico let us know!" class="center">"Lets start building your dream!"</p>
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
            <span class="blue--text ">Whats is {{ productDescription.title }} ?</span>
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
              description: 'is a web app development support team, made 916 contributions to Github the last year! we can build a custom solution or help designing solutions to optimize your service digitally, you can help us with money, & we can help you with your online business. We have been in the development business for decades! we are here you help you and your business grow! Call us today!',
          },
          {
            title: "Nudream",
            description: "is a Start-up template, desing based on mobile-first scalable concepts, a custom solution to fit your business!. We deliver it as you request!. It means integrating a design and customizing it to fit your needs. Since the app comes with a custom service, we can provide a custom quote, we want it to fit everyone's budget, we can even sell the template for you to escalate it with your developers or learn about web App development since it includes documentation for installing it."
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
