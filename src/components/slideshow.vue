<style scoped>
img#img {
    max-width: 600px;
}
@media (max-width:900px){
  img#img {
      max-width: fill !important;
  }
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

#cf4a {
height:350px;
margin:0 auto;
}
#cf4a img {
position:absolute;
left:0;
}

#cf4a img {
-webkit-animation-name: cf4FadeInOut;
-webkit-animation-timing-function: ease-in-out;
-webkit-animation-iteration-count: infinite;
-webkit-animation-duration: 8s;

-moz-animation-name: cf4FadeInOut;
-moz-animation-timing-function: ease-in-out;
-moz-animation-iteration-count: infinite;
-moz-animation-duration: 8s;

-o-animation-name: cf4FadeInOut;
-o-animation-timing-function: ease-in-out;
-o-animation-iteration-count: infinite;
-o-animation-duration: 8s;

animation-name: cf4FadeInOut;
animation-timing-function: ease-in-out;
animation-iteration-count: infinite;
animation-duration: 8s;
}
#cf4a img:nth-of-type(1) {
-webkit-animation-delay: 6s;
-moz-animation-delay: 6s;
-o-animation-delay: 6s;
animation-delay: 6s;
}
#cf4a img:nth-of-type(2) {
-webkit-animation-delay: 4s;
-moz-animation-delay: 4s;
-o-animation-delay: 4s;
animation-delay: 4s;
}
#cf4a img:nth-of-type(3) {
-webkit-animation-delay: 2s;
-moz-animation-delay: 2s;
-o-animation-delay: 2s;
animation-delay: 2s;
}
#cf4a img:nth-of-type(4) {
-webkit-animation-delay: 0;
-moz-animation-delay: 0;
-o-animation-delay: 0;
animation-delay: 0;
}
</style>

<template>
  <div id="cf4a" >
     <img
     id="img"
     src="https://firebasestorage.googleapis.com/v0/b/mexdev-40fff.appspot.com/o/showcase%2Ffhm-mockup.png?alt=media&token=39813dd2-672d-4574-bc0b-afba2d4cb14b">
     <img
       id="img"
       src="https://firebasestorage.googleapis.com/v0/b/mexdev-40fff.appspot.com/o/showcase%2FLaguna%20Shores%20Resort%20-%20responsive%20mockup.png?alt=media&token=a25608b9-e68f-4992-8a3b-35cca734b5e1"
       >
     <img
       id="img"
       src="https://firebasestorage.googleapis.com/v0/b/mexdev-40fff.appspot.com/o/showcase%2FCCP%20-%20responsive%20mockup.png?alt=media&token=28e626bc-6846-417e-9f7f-142ef477c52e"
       >
     <img
       id="img"
       src="https://firebasestorage.googleapis.com/v0/b/mexdev-40fff.appspot.com/o/showcase%2Fdealfunnel%20-%20responsive%20mockup.png?alt=media&token=2a305f96-61d9-43ef-a975-24deff614a6b"
       >
  </div>
</template>

<script>
  export default {
    name: "Slideshow"
  }
</script>
