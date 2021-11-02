<template>
  <div class="Subscriptions">

      <h1> Planes de subscripción | esta pagina esta en desarrollo no estamos aceptando pagos!</h1>
      <hr>
    <v-container>
        <!--Snackbar-->
        <v-snackbar color="info" text v-model="snackbar">
          You have selected <span>{{ selected.title }}</span>
        </v-snackbar>
        <v-row>
          <v-col cols="12" md="4" v-for="(item, index) in items" :key="index">
            <v-radio-group v-model="selected" row @change="selectedsubscription">
              <v-card width="100%" height="250px" elevation="5" tile>
                <v-card-text>
                  <div class="mb-2 primary--text body-1">{{ item.title }}</div>
                  <div class="title black--text">
                    <span >USD</span> {{ item.amount }}
                  </div>
                  <div v-html="item.text">{{ item.text }}</div>
                  <v-radio class="mt-4" :value="item"></v-radio>
                </v-card-text>
              </v-card>
            </v-radio-group>
          </v-col>
        </v-row>
      </v-container>
  </div>
</template>
<script>
export default {
  name: "Subscriptions",
  data() {
    return {
      snackbar: false,
      selected: {},
      items: [
        {
          title: "Basica",
          amount: "5.50",
          text:
            " -Videos basicos <br> -Perfil",
          plan_id: "P-3WW15109E9753274SMF2XHGA" // plan id
        },
        {
          title: "Pro",
          amount: "6.50",
          text:
            "-Incluye lo basico <br> -Videos Pro",
          plan_id: "P-2LA3108508919260HMF2XJXQ" // plan id
        },
        {
          title: "Premium",
          amount: "7.50",
          text:
            "-Incluye lo Pro <br> -Videos Premium <br> -Proyectos <br> -Soporte",
          //test
          plan_id: "P-6X196677491903040MGAN7EY"
          //real
          // plan_id: "P-3YL457250M0907618MF2XKVI" // plan id
        }
      ]
    };
  },
  methods: {
    // selected subscription function
    selectedsubscription() {
      // check if we are creating a new subscrption or upgrading
      const response = localStorage.getItem("@upgradesubscrption");
      // temporarily save your plan on local storage or use vuex
      // you only need the plan id
      // lets use local storage for beginer purposes
      localStorage.setItem("@selectedpackage", JSON.stringify(this.selected));
      // From here redirect for payment
      // set a timeout so user can see the package they hase selected
      // we can add a snackbar
      this.snackbar = true;
      // You can use one component and write the logic for both upgrade and payment. In my case I have separated them to two components (Payment and Upgrade)
      // Both payment and upgrade requires the user consent
      setTimeout(() => {
        if (response === true) {
          // upgrade
          this.$router.push("/upgrade-payment");
        } else {
          // new subscription
          this.$router.push("/subscription-payment");
        }
      }, 1000);
      // end
    }
  }
};
</script>
