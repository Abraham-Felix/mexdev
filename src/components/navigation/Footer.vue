<template>
  <!-- footer -->
  <div id="footer">
  <v-footer
    dark
    padless
      flat
      tile
      class="footer white--text text-center "
      color="primary"
      width="100%"
    >
      <v-card-text>
        <v-btn
        v-for="icon in icons"
        :key="icon"
        class="mx-3 f-btn"
        dark
        icon
      >
        <a :href="icon.url" :target="icon.target">
          <v-icon class="white--text" size="24px">{{ icon.name }}</v-icon>
        </a>
      </v-btn>
      <br>
      <strong>  {{ new Date().getFullYear() }} | © MexDev  </strong>
      </v-card-text>

  </v-footer>
</div>
</template>

<style scoped>
.footer {
  border-radius: 3px !important;
  height: 70px;
}
.f-btn{
  margin-top: -14px;
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
