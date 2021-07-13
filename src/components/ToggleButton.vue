<style>
.toggle_container {
  width: 90% !important;
  box-shadow: 0px 0px 10px 1px gray;
}
.Uiux {
  margin-top: 20px;
  margin-bottom: 200px;
}
</style>
<template>
<v-card class="Uiux">
    <v-card-text>
      <v-container fluid>
      <v-row class="dark--text">
        <v-col cols="6">
          on
        </v-col>
        <v-col cols="6">
          off
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="6">
          <v-switch
            color="primary"
            value
            input-value="true"
          ></v-switch>
        </v-col>
        <v-col cols="6">
          <v-switch color="primary"></v-switch>
        </v-col>
      </v-row>
      <v-row class="dark--text">
        <v-col cols="6">
          on disabled
        </v-col>
        <v-col cols="6">
          off disabled
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="6">
          <v-switch
            color="primary"
            value
            input-value="true"
            disabled
          ></v-switch>
        </v-col>
        <v-col cols="6">
          <v-switch disabled></v-switch>
        </v-col>
      </v-row>
      <v-row class="dark--text">
        <v-col cols="6">
          on loading
        </v-col>
        <v-col cols="6">
          off loading
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="6">
          <v-switch
            loading="warning"
            value
            input-value="true"
          ></v-switch>
        </v-col>
        <v-col cols="6">
          <v-switch loading="warning"></v-switch>
        </v-col>
      </v-row>
    </v-container>
    </v-card-text>
</v-card>
</template>
<script>
export default {
    props: {
        defaultState: {
            type: Boolean,
            default: false
        }
    },

    data() {
        return {
            currentState: this.defaultState,
            ex11: ['red', 'indigo', 'orange', 'primary', 'secondary', 'success', 'info', 'warning', 'error', 'red darken-3', 'indigo darken-3', 'orange darken-3'],

        }
    },

    computed: {
        isActive() {
            return this.currentState;
        },
        checkedValue: {
       get() {
           return this.defaultState
       },
       set(newValue) {
           this.currentState = newValue;
           this.$emit('change', newValue);
       }
   },
    }
}
</script>
