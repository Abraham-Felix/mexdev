<template>
<div>
    <v-divider  />

      <h3 class="as-h3 text-body-2">Get back on track with top technologies:</h3>
    <section id="animate-area">
         <v-row>
           <v-col
           v-for="(img,i) in imgs"
           :key="i"
           >
             <a
              target="_blank"
             :href="img.href">
               <v-img
               class="hover-up "
               height="46px"
               contain
               :title="img.title"
               :src="img.src">
               </v-img>
             </a>
           </v-col>
         </v-row>
    </section>
</div>
</template>

<script>

export default {
    name: 'AnimatedSlide',
    data() {
          return {
        imgs:[
          {
            src: require("@/assets/tech-icons/vue-logo-46px.png"),
            title: "vue",
            href: "https://vuejs.org/"
          },
          {
            src: require("@/assets/tech-icons/vuex-logo-46px.png"),
            title: "vuex",
            href: "https://vuex.vuejs.org/"
          },
          {
            src: require("@/assets/tech-icons/vueitfy-logo-46px.png"),
            title: "vuetify",
            href: "https://vuetifyjs.com/"
          },
          {
            src: require("@/assets/tech-icons/bootstrap-logo-46px.png"),
            title: "bootstrap",
            href: "https://getbootstrap.com/"
          },
          {
            src: require("@/assets/tech-icons/css3-logo-46px.png"),
            title: "css3",
            href: "https://developer.mozilla.org/es/docs/Web/CSS"
          },
          {
            src: require("@/assets/tech-icons/html5-logo-46px.png"),
            title: "html5",
            href: "https://developer.mozilla.org/es/docs/Glossary/HTML5"
          },
          {
            src: require("@/assets/tech-icons/js-logo-46px.png"),
            title: "js",
            href: "https://developer.mozilla.org/es/docs/Web/JavaScript"
          },
          {
            src: require("@/assets/tech-icons/ror-logo-46px.png"),
            title: "ruby on rails",
            href: "https://rubyonrails.org/"
          },
          {
            src: require("@/assets/tech-icons/sheets-logo-46px.png"),
            title: "sheets",
            href: "https://www.google.com/sheets/about/"
          },
          {
            src: require("@/assets/tech-icons/firebase-logo-46px.png"),
            title: "firebase",
            href: "https://www.firebase.com/"
          },
          {
            src: require("@/assets/tech-icons/git-logo-46px.png"),
            title: "git",
            href: "https://www.git.com/"
          },
          {
            src: require("@/assets/tech-icons/github-logo-46px.png"),
            title: "github",
            href: "https://www.github.com/"
          },
          {
            src: require("@/assets/tech-icons/figma-logo-46px.png"),
            title: "figma",
            href: "https://www.figma.com/"
          },
          {
            src: require("@/assets/tech-icons/corel-logo-46px.png"),
            title: "corel",
            href: "https://www.corel.com/"
          },
          {
            src: require("@/assets/tech-icons/sg-logo-46px.png"),
            title: "screen to gif",
            href: "https://www.screentogif.com/"
          },
          {
            src: require("@/assets/tech-icons/drawio-logo-46px.png"),
            title: "draw.io",
            href: "https://www.draw.io"
          }
        ]
    }
  }
}

</script>
<style>

.as-h3 {
    color: #47484a;
}
.newfeaturesheader {
    font-size: 30px;
    text-align: center;
    font-family: 'Poppins', sans-serif;
    color: white !important;
}

@keyframes animatedBackground {
    0% {
        background-position: 0 0;
    }
    100% {
        background-position: -300px 0;
    }
}

@-moz-keyframes animatedBackground {
    0% {
        background-position: 0 0;
    }
    100% {
        background-position: -300px 0;
    }
}

@-webkit-keyframes animatedBackground {
    0% {
        background-position: 0 0;
    }
    100% {
        background-position: -300px 0;
    }
}

@-ms-keyframes animatedBackground {
    0% {
        background-position: 0 0;
    }
    100% {
        background-position: -300px 0;
    }
}

@-o-keyframes animatedBackground {
    0% {
        background-position: 0 0;
    }
    100% {
        background-position: -300px 0;
    }
}

.hover-up:hover {
  margin-top: -15px;
  transition: 0.5s;
}

#animate-area {
    width: 100%;
    position: inherit;
    height: 120px;
    background-image: url(../assets/graphics/just-clouds.png);
    background-position: 0px 0px;
    animation: animatedBackground 10s linear infinite;
    -moz-animation: animatedBackground 10s linear infinite;
    -webkit-animation: animatedBackground 10s linear infinite;
    -ms-animation: animatedBackground 10s linear infinite;
    -o-animation: animatedBackground 10s linear infinite;
}

</style>
