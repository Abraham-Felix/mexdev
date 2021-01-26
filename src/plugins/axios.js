"use strict";

import Vue from 'vue';
import axios from "axios";

// Full config:  https://github.com/axios/axios#request-config
// axios.defaults.baseURL = process.env.baseURL || process.env.apiUrl || '';
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

let config = {

  apiKey: "AIzaSyBwm78M4-oek8ezVNjRE2dmnRT5d6n06j8",
    authDomain: "mexdev-40fff.firebaseapp.com",
    databaseURL: "https://mexdev-40fff.firebaseio.com",
    projectId: "mexdev-40fff",
    storageBucket: "mexdev-40fff.appspot.com",
    messagingSenderId: "770107026470",
    appId: "1:770107026470:web:b0d98b70c568fb90e64ae7",
    measurementId: "G-9DFV1746NX"
};

const _axios = axios.create(config);

_axios.interceptors.request.use(
  function(config) {
    // Do something before request is sent
    return config;
  },
  function(error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
_axios.interceptors.response.use(
  function(response) {
    // Do something with response data
    return response;
  },
  function(error) {
    // Do something with response error
    return Promise.reject(error);
  }
);

Plugin.install = function(Vue) {
  Vue.axios = _axios;
  window.axios = _axios;
  Object.defineProperties(Vue.prototype, {
    axios: {
      get() {
        return _axios;
      }
    },
    $axios: {
      get() {
        return _axios;
      }
    },
  });
};

Vue.use(Plugin)

export default Plugin;
