<template>
  <!-- footer -->
  <div id="footer">
  <v-footer
    dark
    padless
      flat
      tile
      class=" white--text text-center"
      color="primary"
      width="100%"
    >
      <v-card-text>
        <v-btn
        v-for="icon in icons"
        :key="icon"
        class="mx-3 "
        dark
        icon
      >
        <a :href="icon.url" :target="icon.target">
          <v-icon class="white--text" size="24px">{{ icon.name }}</v-icon>
        </a>
      </v-btn>
      </v-card-text>


      <v-card-text class="white--text">
      <strong>  {{ new Date().getFullYear() }} | MexDev  </strong>
      </v-card-text>

  </v-footer>
</div>
</template>

<style>

</style>

<script>
export default {
  name: "Footer",
data: () => ({
  icons: [
    {
        name:'mdi-gmail',
        url: 'mailto:admin@mexdev.io',
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
