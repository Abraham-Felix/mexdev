<template>
<div id="app" class="pt-5">
  <!-- <ChatApp/> -->
  <ContactForm />
  <br>
</div>
</template>

<script>

import ContactForm from '@/components/forms/ContactForm.vue';
//import ChatApp from '../components/ChatApp.vue';

export default {
  name: 'contact',
  components: {
    ContactForm,
    //ChatApp
  }
}

</script>

<style scoped>
h1 {
    margin-bottom:1vw;
  }
.bold {
    -webkit-text-stroke-width: medium;
  }
.margin {
    margin:10px !important;
  }
.mx-auto {
   margin-top: 10vw;
   margin-bottom: 10vw;
  }
.v-input .v-label {
    margin: 0.4vw !important;
}
.v-image {
   z-index: 0 !important;
}
</style>
