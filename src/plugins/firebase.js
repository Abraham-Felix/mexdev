// Config file
import * as firebase from "firebase";

const config = {
  apiKey: "AIzaSyBwm78M4-oek8ezVNjRE2dmnRT5d6n06j8",
      authDomain: "mexdev-40fff.firebaseapp.com",
      databaseURL: "https://mexdev-40fff.firebaseio.com",
      projectId: "mexdev-40fff",
      storageBucket: "mexdev-40fff.appspot.com",
      messagingSenderId: "770107026470",
      appId: "1:770107026470:web:b0d98b70c568fb90e64ae7",
      measurementId: "G-9DFV1746NX"
};

export default !firebase.apps.length ? firebase.initializeApp(config) : firebase.app();
