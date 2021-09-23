
<template>

<main>
    <h1 class="pt-7"> MXDV Products </h1>
    <h3 class="blue--text">We can optimize your digital business model!</h3>
    <v-container>
        <v-row class="d-flex">
<!-- mxdvsupport -->
            <v-col col="4">
                <transition appear name="slide-ub">
                    <v-card class="product-card mt-5">
                        <div class="product-card-title">
                            <h1 class="mt-n3">
        <span class="get pulsate-css" transition="scroll-y-transition"> MXDV </span>
       </h1>
                            <h3> Give yourself a <span class="text-decoration-line-through break">break!</span> LIFE :D </h3>
                        </div>
                        <v-container class="text-sm-body-2 ape-pic">
                            <v-img class="center" width="100%" src="../assets/thanks.png" />
                        </v-container>
                        <div class="product-card-button">
                          <v-btn primary dark class="mt-5 center" href="contact"> Get quote! </v-btn>
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
                            <h3> Start your startup,<span class="blue--text"> <a href="https://nudream.herokuapp.com/landing"> demo! </a> </span> </h3>
                        </div>
                        <v-container class="text-sm-body-2 ">
                            <NuDreamTechSlide/>
                        </v-container>
                        <div class="product-card-button">
                        <v-btn primary dark class=" center" href="contact"> Get quote! </v-btn>
                        <br>
                        <p title="If you are form Mexico let us know!" class="center">"Special limited price for MEXICO!"</p>
                        <br>
                        </div>
                    </v-card>
                </transition>
            </v-col>
<!-- nustack -->
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
                        <p class="center">"Build the best product for you!, suggestions <a target="_blank" href="https://forms.gle/FPr6DBgpEMdLf51T7"> here!"</a> </p>
                        <br>
                        </div>
                    </v-card>
                </transition>
            </v-col>

        </v-row>
    </v-container>
    <v-container v-for="(productDescription, i) in productDescriptions" :key="i">
        <v-card>
        <v-card-text>
        <p class="f-p text-sm-body-1 font-weight-medium text-justify  text-left">
            <span class="blue--text ">Whats is {{ productDescription.title }} ?</span>
                <v-divider></v-divider>
            <br>
            <b>{{ productDescription.title }}</b> {{productDescription.description}}
        </p>
      </v-card-text>
    </v-card>
    </v-container>
</main>

</template>

<script>

import NuDreamTechSlide from '@/components/animations/NuDreamTechSlide.vue'
import NuStackTechSlide from '@/components/animations/NuStackTechSlide.vue'
export default {
    name: 'Products',
    components: {
        NuDreamTechSlide,
        NuStackTechSlide
    },
    data: () => ({
        productDescriptions: [

           {
              title: "Mxdv",
              description: 'is a web app development support team, made 916 contributions in Github the last year! we can build a custom solution or help designing solutions to optimize your service digitally, you can help us with money, & we can help you with your online business. We have been in the development business for decades! we are here you help you and your business grow! Call us today!',
          },
          {
            title: "Nudream",
            description: "is a sophisticated web App Start-up template, a super-fast one, build with real-time data! Build based on mobile-first scalable concepts, a custom solution to fit your business!. We deliver it as you request!. It means integrating a design and customizing it to fit your needs. Since the app comes with a custom service, we can provide a custom quote, we want it to fit everyone's budget, we can even sell the template for you to escalate it with your developers or learn about web App development since it includes documentation for installing it. We can set it up for you with Vue.js, Vue-router, Vuex, Axios, Express.js, Vuetify, Bootstrap Firebase Auth & Real-time DB, Vue-cli, email.js, Vue-gtag, Sass-loaders, google sheets API to give you the sweetest jumpstart from zero to hero!. Yes, you heard right! we went through all the pain to build this easy start-up app template, you only have to configure your accounts & kaboom! you got your app for managing your online business, if you get stuck you can always contact our support during office hours and we will help you with the configuration.",
        },
        {
            title: "NuStack",
            description: "is an app for recruiters, imagine you are a recruiter/contractor and have hundreds of gigs to start with, you want to have a way to expose them easily to developers looking for gigs/jobs, and you can't fin an easy way to organize your gigs and present them in a nice user interface, well guess what? I designed a solution that will fit your needs!, NuStack is designed to help you out in a simple way using a admin form applicatin to fill in those jobs and present them to the world, yes you can easily fill a form inside an admin pannel and they will layout in a beatifull scalable interface without exposint the data you dont want them to see, so then they can apply using a contact form for you to set up the interviews for them, sounds awesome right, but thats not all this applicatin is 100% mobile friendly, oh yes, so you have no competition with other recruiters, so waht are you waiting for? sart your digital business, we are here you help you grow!  give us a call today! Special limited price, ending soon!",
        }, ],
    }),
}

</script>
<style>

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

//media queries
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
}

.product-card-title {
    height: 200px;
}

.ape-pic {
  height: 278px;
}

</style>
