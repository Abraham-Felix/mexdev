<style scoped>

img.preview {
    width: 200px;
}
button {
  box-shadow: 0px 0px 3px -2px #b6bbc0 ;
  color:white;
  padding:.5vh;
  border-radius: 10px;
  margin:2vh;
}
.v-btn {
    height: 50px !important;
    min-width: 50px !important;
}
.v-container {
  padding:0px !important;
}
.link-sm {
  width: 200px;
  -webkit-box-pack: center;
}
.v-card {
    margin-top: 1vw;
    margin-bottom: 1vw;
    height: auto;
    padding: 1vw;
    max-width: 600px !important;
    width: auto;
    -webkit-box-pack: center;
}
@media only screen and (min-width:1000px){
  .v-card {
    width: 100% !important;
    max-width: 1000px !important;
  }
  form {
      width: 100%;
      display: table-cell !important;
      /* height: 117px; */
      box-shadow: 0px 0px 19px 4px #e6e8ec;
      border-radius: 10px;
      padding: 10px;
  }
}
@media ony screen and (max-width:1000px){
  .right-btn{
     float: right;
     position: relative;
     top: -10px;
     left: -125px;
}
form {
    padding: 10px;
    box-shadow: 0px 0px 10px 4px #e6e8ec;
    margin-top:20px;
    border-radius: 5px;
}
}
.authicons{
  margin-left:10px;
  marginright:10px;
}
.block {
    display: block!important;
}
.uid {
  font-size: 12px;
}
.update-profile-inputs{
display: inline-grid;
}
.update{
  height:28px !important;
  width: 30px;
  bottom: 0px;
  text-align: center;
  margin:20px auto auto auto;
}
.profile-pic {
  border-radius:10% 10% !important;
  box-shadow: 5px 3px 10px -3px gray;
}
.p-pad {
  padding:15px;
}
</style>

<template>

<div id="app">

    <v-container class="v-container">
        <v-card v-if="authUser" class="center p-pad block">
            <h1> Profile </h1>  <v-toolbar
                  flat
                  height="72"
                >
                  <v-switch
                    v-model="$vuetify.theme.dark"
                    hint="Change Ui Theme ( beta )"
                    inset
                    label="Vuetify Theme Dark"
                    persistent-hint
                  ></v-switch>
                </v-toolbar>
          <v-text-field readonly v-model="uid" label="Uid">
          </v-text-field>
             <v-card >
               <img class="profile-pic left ml-15" :src="authUser.photoURL" width="150">
               <p class="center">What's up, {{authUser.displayName || 'my friend'}}<br> we know you love {{authUser.favoriteFood || 'Programing'}} </p>
               <br>
               <v-icon class="authicons" color=green v-if="linkedGoogle" >mdi-google</v-icon>
               <v-icon class="authicons" color=green v-if="linkedGithub" >mdi-github</v-icon>
               <v-icon class="authicons" color=green v-if="linkedPassword"> mdi-email-check</v-icon> <br><br>
             </v-card>
             <v-divider class="m-tb-20"></v-divider>

             <h4 class="center mt-5">User profile</h4><br><br>

            <form  @submit.prevent="updateProfile">
              <h4><v-icon> mdi-account </v-icon>User details</h4>
              <v-divider></v-divider>
              <br>
              <div class="update-profile-inputs">
              <p>First name</p><input  class="form-control" v-model="displayName" placeholder="your name"><br>
              <p>Photo url</p>
              <input class="form-control" v-model="photoURL" placeholder="your photo url">
              <v-btn type="submit" depressed small color="primary" @keyup.enter="updateProfile" class="update right-btn"><v-icon> mdi-pencil </v-icon> </v-btn>
              </div>
              </form>

            <form  @submit.prevent="updateEmail">
              <h4><v-icon> mdi-email </v-icon>Update email</h4>
              <v-divider></v-divider>
              <br>
              <center>
              <p>Contact email</p>
              </center>
              <input type="email" class="form-control" v-model="email" placeholder="enter new email">
              <v-btn type="submit" depressed small color="primary" @keyup.enter="updateEmail" class="update"> <v-icon> mdi-pencil </v-icon></v-btn>
            </form>

            <form  @submit.prevent="updatePassword">
              <h4><v-icon> mdi-lock </v-icon>Update password</h4>
              <v-divider></v-divider>
              <br><p>Go ahead change it</p>
              <input type="password" class="form-control" v-model="newPassword" placeholder="enter new password">
              <v-btn type="submit" depressed small color="primary" @keyup.enter="updatePassword" class="update"><v-icon> mdi-pencil </v-icon></v-btn>
            </form>

            <form  @submit.prevent="updateCustomDetails">
              <h4><v-icon> mdi-account-cowboy-hat </v-icon>Update extra details  </h4>
              <v-divider></v-divider>
              <br>
              <p>Write anything you love</p>
              <input type="text" v-model="favoriteFood" label="Fav food" placeholder="enter favorite food" class="form-control">
              <v-btn type="submit" depressed small color="primary" @keyup.enter="updateCustomDetails" class="update"> <v-icon> mdi-pencil </v-icon> </v-btn>
            </form>


              <h4 class="center mt-10">Company profile</h4>
              <v-divider class="m-tb-20"></v-divider>

              <form style="width:50%;" @submit.prevent="updateCompanyDetails">
                <h4><center><v-icon> mdi-domain </v-icon>  Update company details </center> </h4>
                <v-divider></v-divider>
                <br>
                <p class="center">Company name</p><br>
                <input required type="text" v-model="companyName" label="Fav food" placeholder="enter your company name" class="form-control">
                <br>
                <v-divider vertical></v-divider>
                <p class="center">Company website</p><br>
                <input required type="text" v-model="companyWebsite" label="Fav food" placeholder="enter your company website" class="form-control"><br>
                <v-btn type="submit" depressed small color="primary" @keyup.enter="updateCompanyDetails" class="update"> <v-icon> mdi-pencil </v-icon> </v-btn>
              </form>
              <form  @submit.prevent="updateCompanyContactDetails">
                <h4><center><v-icon> mdi-phone  </v-icon>  Update company contact details </center> </h4>
                <v-divider></v-divider>
                <br>
                <p class="center">Company phone</p><br>
                <input :rules="titleRules" required type="number" v-model="companyPhone" label="Fav food"  placeholder="enter your company phone" class="form-control">
                <v-divider vertical></v-divider><br>
                <p class="center">Company email</p><br>
                <input required type="text" v-model="companyEmail" label="Fav food" placeholder="enter your company email" class="form-control"><br>
                <v-btn type="submit" depressed small color="primary" @keyup.enter="updateCompanyContactDetails" class="update"> <v-icon> mdi-pencil </v-icon> </v-btn>
              </form>
              <form  @submit.prevent="updateCompanyPhoto">
                <h4 class="center"><v-icon> mdi-camera </v-icon> Company Photo</h4>
                <v-divider></v-divider>
                <br>
                <div class="update-profile-inputs">
                <img class="center profile-pic" :src="authUser.companyPhotoURL" width="150">
                <p>Company photo url</p>
                <input class="form-control" v-model="companyPhotoURL" placeholder="company photo url">
                <v-btn type="submit" depressed small color="primary" @keyup.enter="updateCompanyPhoto" class="update right-btn"><v-icon> mdi-pencil </v-icon> </v-btn>
                </div>
                </form>

              <v-divider class="m-tb-20"></v-divider>

            <div class=" link-sm center" v-if="!linkedGoogle">
              <br>
             <h4 class="center">Link google </h4>
             <br>
             <v-btn class="center" @click="linkGoogle"><v-icon>mdi-google</v-icon></v-btn>
            </div>

            <div class=" link-smcenter" v-if="linkedGoogle">
             <br>
             <h4 class="center">unlink google </h4>
             <br>
             <v-btn class="center" @click="unlinkGoogle"><v-icon color=red>mdi-email-off</v-icon></v-btn>
            </div>

            <div class="link-sm center" v-if="!linkedGithub">
              <br>
             <h4 class="center">Link github </h4>
             <br>
             <v-btn class="center" @click="linkGithub"><v-icon>mdi-github</v-icon></v-btn>
            </div>

            <div  class="link-sm center" v-if="linkedGithub">
             <br>
             <h4 class="center">unlink github </h4>
             <br>
             <v-btn class="center" @click="unlinkGithub"><v-icon color=red>mdi-email-off</v-icon></v-btn>
            </div>

        </v-card>
    </v-container>
</div>

</template>

<script>
import firebase from '../plugins/firebase'
import toastr from 'toastr';
import vue from 'vue';

let db = firebase.database();
let messagesRef = db.ref('tutorials');
let usersRef = db.ref('users');
export default {
    name: 'profile',
    firebase: {
        tutorials: messagesRef
    },
    data() {
        return {
            email: '',
            displayName: '',
            uid: '',
            newPassword: '',
            providerData: '',
            authUser: '',
            companyPhone: null,
            comapnyEmail: null,
            companyName: null,
            companyWebsite: null,
            favoriteFood: null,
            userID: null,
        }
    },
    phoneRules: [
        v => !!v || 'you must type digits something',
        v => v.length <= 10 || 'hum.. this monk smelling somthing strange... must be less than 10 characters',
    ],
    computed:{
      linkedGithub () {
        return !!this.authUser.providerData.find(provider => provider.providerId === 'github.com')
      },
      linkedGoogle () {
        return !!this.authUser.providerData.find(provider => provider.providerId === 'google.com')
      },
      linkedPassword () {
        return !!this.authUser.providerData.find(provider => provider.providerId === 'password')
      }
    },
    methods: {
      updateProfile() {
        this.authUser.updateProfile({
          displayName: this.displayName ,
          photoURL: this.photoURL
        });
        toastr.success('Nice! profile updated')
      },
      updateCompanyPhoto() {
        firebase.database().ref('users').child(this.authUser.uid)
        .update({companyPhotoURL: this.companyPhotoURL})
        toastr.success('Nice! company profile updated')
      },
      updateEmail() {
        this.authUser.updateEmail(this.email)
        toastr.success('Cool! email updated')
      },
      updateCustomDetails() {
        firebase.database().ref('users').child(this.authUser.uid)
          .update({favoriteFood: this.favoriteFood})
          toastr.success('Cool! extra details updated')
      },
      updateCompanyDetails() {
        firebase.database().ref('users').child(this.authUser.uid)
          .update({
            companyName: this.companyName,
            companyWebsite: this.companyWebsite
          });
          toastr.success('Cool! company details updated')
      },
      updateCompanyContactDetails() {
        firebase.database().ref('users').child(this.authUser.uid)
          .update({
            companyPhone: this.companyPhone,
            companyEmail: this.companyEmail
          });
          this.nameRules = true;
          toastr.success('Cool! company contact details updated')
      },
      updatePassword() {
        this.authUser.updatePassword(this.newPassword)
        .then(() => {
          this.newPassword = null;
          toastr.success('nice! password updated') })
        .catch(err =>
          toastr.error('Yikes! '+ err.message))
      },
      linkGoogle: function(){
        const provider = new firebase.auth.GoogleAuthProvider()
        this.authUser.linkWithPopup(provider)
          toastr.success('nice! google account  linked')
          .catch(err =>
            toastr.error('Yikes! '+ err.message))
      },
      unlinkGoogle: function(){
        this.authUser.unlink('google.com')
      },
      linkGithub: function(){
        const provider = new firebase.auth.GithubAuthProvider()
        this.authUser.linkWithPopup(provider)
      },
      unlinkGithub: function(){
        this.authUser.unlink('github.com')
      },
    },
    created: function() {
        // functions
        var user = firebase.auth().currentUser;
        var uid;
        if (user != null) {
          uid = user.uid; // The user's ID, unique to the Firebase project. Do NOT use
                           // this value to authenticate with your backend server, if
                           // you have one. Use User.getToken() instead.
        }
          this.userID= uid;
        data => console.log(data.user, data.credential.accessToken)
        firebase.auth().onAuthStateChanged(user => {
            this.authUser = user
            if (user) {
                this.displayName = user.displayName
                this.photoURL = user.photoURL
                this.email = user.email
                this.uid = user.uid
                this.providerData = user.providerData
                usersRef.child(user.uid).once('value', snapshot => {
                  if (snapshot.val()) {
                  this.favoriteFood = snapshot.val().favoriteFood
                  this.companyPhotoURL = snapshot.val().companyPhotoURL
                  this.companyName = snapshot.val().companyName
                  this.companyWebsite = snapshot.val().companyWebsite
                  this.companyPhone = snapshot.val().companyPhone
                  this.companyEmail = snapshot.val().companyEmail
                  vue.set(this.authUser, 'favoriteFood', this.favoriteFood)
                  vue.set(this.authUser, 'companyPhotoURL', this.companyPhotoURL)
                  vue.set(this.authUser, 'companyName', this.companyName)
                  vue.set(this.authUser, 'companyWebsite', this.companyWebsite)
                  vue.set(this.authUser, 'companyPhone', this.companyPhone)
                  vue.set(this.authUser, 'companyEmail', this.companyEmail)
                   }
                })

            }
        })

    }
}

</script>
