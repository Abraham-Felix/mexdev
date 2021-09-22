<style scoped>
.v-card {
  height: auto;
  max-width: 600px !important;
  width: min-content;
  width: auto;
  -webkit-box-pack: center;
}
button {
  box-shadow: 0px 0px 3px -2px #b6bbc0 ;
  background: #b6bbc0;
  color:white;
  padding:.5vh;
  border-radius: 10px;
  margin:2vh;
}
.signUp {
    margin-top:40px;
  }
  .d-sign-up{
    max-width: 200px;
    margin: auto;
  }
  span {
  display:block;
  margin-top: 20px;
  font-size: 11px;
  }
.block {
  display:block!important;
}
</style>

<template>
  <v-form @submit.prevent="register" >
   <div class="d-sign-up">
   <h5> Sign up </h5>

    <p class="center">Let's create a new account!</p><br>
   <v-text-field class=" form-control" type="text" v-model="email" placeholder="Email"></v-text-field><br>
   <v-text-field class="form-control" type="password"  @keyup.enter="register" v-model="password" placeholder="Password"></v-text-field><br>
     <v-btn depressed small color="primary" @click="register">sign up</v-btn><br>

  <div class="oneH">
  <div class="grid-50">
    <v-divider class="mb-5"/>
  <h5>Other methods</h5>
  <v-btn @click="signInWithGoogle"><v-icon>mdi-google</v-icon></v-btn>
  </div>
</div>
</div>
</v-form>
</template>

<script>

import firebase from 'firebase';
import toastr from 'toastr';

  export default {
    name:  'SignUp',
    data() {
      return {
        email: '',
        password: '',
        authUser: null,
      }
    },
    methods: {
      register: function() {
        firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
        .then(
      (user) => {
          this.$router.go('home' + user.message + this.authUser || true )
          toastr.success('Welcome visitor! nice having you around!')
        }
      )
      .catch (err =>
        toastr.error('Yikes! '+ err.message))
    },
    signInWithGoogle: function(){
      const provider = new firebase.auth.GoogleAuthProvider()
      firebase.auth().signInWithPopup(provider)
      .then(
        data => console.log(data.user, data.credential.accessToken),
        toastr.success('Welcome visitor! nice having you around!')
      ).catch(err =>
        toastr.error('Yikes '+ err.message))
    },
  },
  created () {
    firebase.auth().onAuthStateChanged(user => {
      this.authUser = user
      if (user) {
        this.displayName = user.displayName
        this.photoURL = user.photoURL
        this.email = user.email
      }
    })
  },
}

</script>
