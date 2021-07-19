import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

const vuetify = new Vuetify({
  theme: {
    themes: {
      light: {
        primary: '#313233 ',
        secondary: '#DADCE0 !important',
        anchor: '#5388E6 ',
      },
      dark: {
        primary: '#465061 ',
        secondary: '#5388E6 ',
        tertiary: 'A8AAAD',
        anchor: '#DADCE0',
      },
    },
  },
})

export default vuetify


/* mexdev color scheme
.mexdev-1-hex { color: #313233; }
.mexdev-2-hex { color: #5388E6; }
.mexdev-3-hex { color: #DADCE0; }
.mexdev-4-hex { color: #465061; }
.mexdev-5-hex { color: #A8AAAD; } */
