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
