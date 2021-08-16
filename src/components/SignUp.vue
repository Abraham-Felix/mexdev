<style scoped>
.v-card {
  margin: 10vw;
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
<div>
 <v-card class="center block">
   <h5> Sign up </h5>
   <form @submit.prevent="register" class="d-sign-up">
 <p class="center">Let's create a new account!</p><br>
   <input class="my-5" type="text" v-model="email" placeholder="Email"><br>
   <input class="mb-5" type="password"  @keyup.enter="register" v-model="password" placeholder="Password"><br>
     <v-btn depressed small color="primary" @click="register">sign up</v-btn><br>
  </form>
  <div class="oneH">
  <div class="grid-50">
  <h5>Other methods</h5>
  <v-btn @click="signInWithGoogle"><v-icon>mdi-google</v-icon></v-btn>
</div>
</div>
<v-divider/>

</v-card>
</div>
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
        firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then(
      (user) => {
          this.$router.go('home' + user.message)
        } ,
       (err) => {
          alert('Oops.' + err.message)
        }
      );
    },
    signInWithGoogle: function(){
      const provider = new firebase.auth.GoogleAuthProvider()
      firebase.auth().signInWithPopup(provider)
      .then(
        data => console.log(data.user, data.credential.accessToken)
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
