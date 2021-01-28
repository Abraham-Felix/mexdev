import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

const vuetify = new Vuetify({
  theme: {
    themes: {
      light: {
        primary: '#313233',
        secondary: '#DADCE0',
        anchor: '#5388E6',
      },
    },
  },
})

export default vuetify
