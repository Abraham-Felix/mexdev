<template>
  <div id="cf4a">
    <img
      id="img"
      v-for="(img,i) in imgs"
      :key="i"
      :src="img.src"
      >
  </div>
</template>

<script>
export default {
  name: "MockupSlider",
  data() {
    return {
      // refactoring components to reduce markup using items in array
      imgs: [
        {
        src: require("@/assets/mockups/sd-mockup-900px.png")
      },
      {
        src: require("@/assets/mockups/df-mockup-900px.png")
      },
      {
        src: require("@/assets/mockups/ccp-mockup-900px.png")
      },
      {
        src: require("@/assets/mockups/ls-mockup-900px.png")
      },
      {
        src: require("@/assets/mockups/fhm-mockup-900px.png")
      }
    ]
    }
  }
}
</script>

<style scoped>
#cf4a img {
  position: absolute;
    display: block;
}

#cf4a {
height:350px;
margin:0 auto;
}


#cf4a img {
-webkit-animation-name: cf4FadeInOut;
-webkit-animation-timing-function: ease-in-out;
-webkit-animation-iteration-count: infinite;
-webkit-animation-duration: 10s;

-moz-animation-name: cf4FadeInOut;
-moz-animation-timing-function: ease-in-out;
-moz-animation-iteration-count: infinite;
-moz-animation-duration: 10s;

-o-animation-name: cf4FadeInOut;
-o-animation-timing-function: ease-in-out;
-o-animation-iteration-count: infinite;
-o-animation-duration: 10s;

animation-name: cf4FadeInOut;
animation-timing-function: ease-in-out;
animation-iteration-count: infinite;
animation-duration: 10s;
}
#cf4a img:nth-of-type(1) {
-webkit-animation-delay: 8s;
-moz-animation-delay: 8s;
-o-animation-delay: 8s;
animation-delay: 8s;
}
#cf4a img:nth-of-type(2) {
-webkit-animation-delay: 6s;
-moz-animation-delay: 6s;
-o-animation-delay: 6s;
animation-delay: 6s;
}
#cf4a img:nth-of-type(3) {
-webkit-animation-delay: 4s;
-moz-animation-delay: 4s;
-o-animation-delay: 4s;
animation-delay: 4s;
}
#cf4a img:nth-of-type(4) {
-webkit-animation-delay: 2s;
-moz-animation-delay: 2s;
-o-animation-delay: 2s;
animation-delay: 2s;
}
#cf4a img:nth-of-type(5) {
-webkit-animation-delay: 0;
-moz-animation-delay: 0;
-o-animation-delay: 0;
animation-delay: 0;
}

img#img {
    max-width: 900px;
}
@media (max-width:1200px){
  #cf4a img {
     width: -webkit-fill-available;
     margin: 10% 20%;
 }
}

@media all and (max-width:500px){
}
 .header-zoom img {
   max-width:600px;
 }
 @-webkit-keyframes cf4FadeInOut {
0% {
opacity:1;
}
17% {
opacity:1;
}
25% {
opacity:0;
}
92% {
opacity:0;
}
100% {
opacity:1;
}
}

@-moz-keyframes cf4FadeInOut {
0% {
opacity:1;
}
17% {
opacity:1;
}
25% {
opacity:0;
}
92% {
opacity:0;
}
100% {
opacity:1;
}
}

@-o-keyframes cf4FadeInOut {
0% {
opacity:1;
}
17% {
opacity:1;
}
25% {
opacity:0;
}
92% {
opacity:0;
}
100% {
opacity:1;
}
}

@keyframes cf4FadeInOut {
0% {
opacity:1;
}
17% {
opacity:1;
}
25% {
opacity:0;
}
92% {
opacity:0;
}
100% {
opacity:1;
}
}

</style>
