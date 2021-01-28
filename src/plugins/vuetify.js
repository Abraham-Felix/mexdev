import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

const vuetify = new Vuetify({
  theme: {
    themes: {
      light: {
        primary: '#AFBAC7',
        secondary: '#475F7A',
        anchor: '#475E7A',
      },
    },
  },
})

export default vuetify
