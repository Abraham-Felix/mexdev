<template>
  <!-- footer -->
  <div id="footer">
    <div class="rainbowelement1 "></div>
  <v-footer
    dark
    padless
      flat
      tile
      class="footer white--text text-center d-flex justify-space-around "
      color="primary"
      width="100%"
    >
      <v-row
      class="mb-n3"
      justify="center"
      no-gutters>
        <v-btn
        v-for="icon in icons"
        :key="icon.id"
        class="mx-3 f-btn mt-n3"
        dark
        icon
      >
        <a :href="icon.url" :target="icon.target">
          <v-icon class="white--text" size="24px">{{ icon.name }}</v-icon>
        </a>
      </v-btn>
      <br>
      <v-col
       class="primary lighten-1 text-center mt-1 white--text"
       cols="12"
     >
      <strong>  {{ new Date().getFullYear() }} | © MexDev  </strong>
      </v-col>
    </v-row>

  </v-footer>
</div>
</template>

<style scoped>
.rainbowelement1 {
  width: 100%;
  height: 10px;
  box-shadow: 0px 0px 10px -5px gray;
  background: rgb(38,145,83);
  background: linear-gradient(90deg, rgba(38,145,83,1) 0%, rgba(154,255,63,1) 23%, rgba(83,136,230,1) 50%, rgba(123,0,136,1) 77%, rgba(255,25,25,1) 100%);
  background-size: cover;
  clip-path: polygon(100% 100%, 100% 10%, 0% 80%, 0% 100%);
}
.rainbowelement1 {
    background: linear-gradient(270deg, #cc298c, #f5b30d, #0df516, #0dabf5, #ac0df5);
    background-size: 1000% 1000%;

    -webkit-animation: AnimationName 6s ease infinite;
    -moz-animation: AnimationName 6s ease infinite;
    animation: AnimationName 6s ease infinite;
}

@-webkit-keyframes AnimationName {
    0%{background-position:0% 50%}
    50%{background-position:100% 50%}
    100%{background-position:0% 50%}
}
@-moz-keyframes AnimationName {
    0%{background-position:0% 50%}
    50%{background-position:100% 50%}
    100%{background-position:0% 50%}
}
@keyframes AnimationName {
    0%{background-position:0% 50%}
    50%{background-position:100% 50%}
    100%{background-position:0% 50%}
}
#footer {
    align-self: end;
    position: fixed;
    width: 100%;
    /* mozzila firefox */
    width: 100%;
    bottom: 0;
    z-index: 999;
}
.footer {
  height: 70px;
}
</style>

<script>
export default {
  name: "Footer",
data: () => ({
  icons: [
    {
      name:'mdi-github',
      url: 'https://www.github.com/abraham-felix',
      target: '_blank'
  },
  {
      name:'mdi-text-box',
      url: '/privacy',
      target: '_blank'
  },
  ],
})
}
</script>
