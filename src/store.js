import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);
export default new Vuex.Store({
  state: {
    authenticated: false,
    user: {
      loggedIn: false,
      data: null
    },
    subscriber: {
      basic: false,
      pro: false,
      premium: false,
    }
  },
  getters: {
    user(state){
      return state.user
    },
    subscriber(state){
      return state.subscriber
    }
  },
  mutations: {
    SET_LOGGED_IN(state, value) {
      state.user.loggedIn = value;
      state.user.emailVerified = value;
    },
    SET_USER(state, data) {
      state.user.data = data;
    },
    setAuthentication(state, status) {
    state.authenticated = status;
    }
  },
  actions: {

    fetchUser({ commit }, user) {
      commit("SET_LOGGED_IN", user !== null);
      if (user) {
        commit("SET_USER", {
          data: user,
          displayName: user.displayName,
          email: user.email,
          uid: user.uid,
          photoURL: user.photoURL,
        });
      } else {
        commit("SET_USER", null);
      }
    }
  }
});
