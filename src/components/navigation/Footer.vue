<template>
  <!-- footer -->
  <div id="footer">
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
      justify="center"
      no-gutters>
        <v-btn
        v-for="icon in icons"
        :key="icon.id"
        class="mx-3 f-btn"
        dark
        icon
      >
        <a :href="icon.url" :target="icon.target">
          <v-icon class="white--text" size="24px">{{ icon.name }}</v-icon>
        </a>
      </v-btn>
      <br>
      <v-col
       class="primary lighten-1 text-center white--text"
       cols="12"
     >
      <strong>  {{ new Date().getFullYear() }} | © MexDev  </strong>
      </v-col>
    </v-row>

  </v-footer>
</div>
</template>

<style scoped>
#footer {
  align-self: end;
}
.footer {
  border-radius: 3px !important;
  height: 70px;
}
</style>

<script>
export default {
  name: "Footer",
data: () => ({
  icons: [
    {
        name:'mdi-gmail',
        url: 'mailto:mexdev@fintechhorizonsmedia.com',
        target: '_blank'
    },
    {
        name:'mdi-github',
        url: 'https://www.github.com/abraham-felix',
        target: '_blank'
    },
  ],
})
}
</script>
