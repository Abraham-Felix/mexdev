<style scoped>

.tutshow {
    background: #313233;
    color: #ffffff !important;
}
.tutorial-giff {
  max-width: 500px;
    height: auto;
    width: auto;
    border-radius: 5px;
    margin: 50px;
    transition: 1.3s;
}
@media screen and (max-width:900px) {
  .tutorial-giff {
      width: 80% !important;
      border-radius: 5px;
      margin: auto;
  }
}
</style>
<template>
  <v-container>
    <TutForm/>
    <TutShowMyTuts/>
    <v-card>
        <p style="text-align: center;">" Fill in your request form start by pressing the <span class="mdi mdi-plus"> ,</span><br>
         you will be contacted shortly by one of our developers "</p>
         <img class="tutorial-giff" src="https://firebasestorage.googleapis.com/v0/b/mexdev-40fff.appspot.com/o/giff%2FMexdev%20Wrok%20Request.gif?alt=media&token=fa370977-d60b-48da-8667-b3704f79e753"/>
      </v-card>
  </v-container>
</template>

<script>

import TutForm from '../components/TutForm.vue';
import TutShowMyTuts from '../components/TutShowMyTuts.vue';

export default {
  name: 'tutorials',
  components: {
    TutForm,
    TutShowMyTuts,
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
  .v-card{
    display:inline-block;
    max-width: 600px !important;
    width: -webkit-fill-available !important;
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
</style>
