<template>
  <div>
<v-dialog
class="mb-16 z-top"
v-model="apedialog"
width="fit-content"
>
<div class="mb-n12 top-r">
    <v-btn
    class="form-close-btn"
    width="10px"
    @click="apedialog = false"
    >
        <v-icon> mdi-close </v-icon>
    </v-btn>
  </div>
  <contactForm/>

</v-dialog>
     <transition
       appear
       name="slide-ape-rl"
      >
          <v-img
            title="Envia tu mensaje!"
            @click.stop="apedialog = true"
            class="ape-form-image smile"
            width="200px"
            src="@/assets/graphics/ape-sign-smile.png">
          </v-img>
     </transition>
  </div>
</template>

<script>

import contactForm from "@/components/forms/ContactForm.vue"
export default {
  name: "ApeSignAnimation",
  data: () => ({
    apedialog: false,
  }),
  components: {
    contactForm,
  }
}
</script>

<style scoped>
.ape-form-image {
  position: absolute;
    right: -153px;
    top: 700px;
    margin-top: -209px;
    transition: 1s;
    cursor: pointer;
    z-index: 9999;
    transform: rotate3d(1, 1, 1, -48deg);
}
.ape-form-image:hover {
  transform: rotate3d(1, 1, 1, 0deg);
  right: -23px;
}
.z-top {
  z-index:9999;
}
.slide-ape-rl-enter-active {
  transition: all 1s ease;
}
.slide-ape-rl-leave-active {
  transition: all 2s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-ape-rl-enter, .slide-ape-rl-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
</style>
