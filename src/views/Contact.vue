<template>
<div id="app">
<v-card
   class="mx-auto"
   max-width="344"
 >
 <h1>Contact</h1>
 <v-img
   alt="Apesyntax logo"
   class="shrink mr-2 margin center"
   contain
   src="https://firebasestorage.googleapis.com/v0/b/mexdev-40fff.appspot.com/o/logos%2Fmxdv%20-%20logo%20500px.png?alt=media&token=dc7d1c88-4580-4333-b07d-aeeb9f1295d2"
   transition="scale-transition"
   width="100"
 />

  <v-card-text>
    <p> send us a request, one our agents will get back to you as soon as posible,
      our stimate response time is 4hr, sincerly, <a href="mailto:apesyntax@gmail.com"><b>mexdev support</b>.</a></p>
     <ContactForm/>
    </v-card-text>
  </v-card>
</div>

</template>

<script>
import ContactForm from '../components/ContactForm.vue';


export default {
  name: 'contact',
  components: {
    ContactForm
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
