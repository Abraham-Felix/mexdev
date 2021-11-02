<style scoped>

input.form-control {
    width: 100%;
}

img.preview {
    width: 200px;
}

button {
    box-shadow: 0px 0px 3px -2px #b6bbc0;
    color: #ffffff;
    padding: .5vh;
    border-radius: 10px;
    margin: 2vh;
}

.v-btn {
    height: 50px !important;
    min-width: 50px !important;
}

.v-container {
    padding: 0px !important;
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

@media only screen and (min-width:1000px) {
    .v-card {
        width: 100% !important;
        max-width: 1000px !important;
    }
    form {
        width: 100%;
        /* height: 117px; */
        box-shadow: 0px 0px 6px -5px #e6e8ec;
        border-radius: 10px;
        padding: 10px;
    }
}

@media only screen and (max-width:601) {}

@media only screen and (max-width:1000px) {
    .right-btn {
        float: right;
        position: relative;
        top: -10px;
        left: -125px;
    }
    form {
        padding: 10px;
        box-shadow: 0px 0px 6px -5px #e6e8ec;
        margin-top: 20px;
        border-radius: 5px;
        gap: 0em;
    }
}

.authicons {
    margin-left: 10px;
    marginright: 10px;
}

.block {
    display: block!important;
}

.uid {
    font-size: 12px;
}

.update {
    height: 30px !important;
    width: 30px;
    bottom: 0px;
    text-align: center;
    margin: 20px auto auto auto;
}

.profile-pic {
    border-radius: 10% 10% !important;
    box-shadow: 0px 0px 7px -6px #e6e8ec;
}

.p-pad {
    padding: 15px;
}

.mdi-barcode {
    padding-left: -1;
    display: inline-flex;
    max-width: 94px;
}

.comp-pic {
    height: 55px;
    width: 55px;
}

.ep-icon {
    border-radius: 0px 5px 5px 0px !important;
    height: 34px !important;
    margin-top: 15px;
}

form.mt-10.center {
    -webkit-box-pack: center;
}

</style>

<template>

<div id="app">
    <v-container class="v-container">
        <v-card v-if="authUser" class="center p-pad block">
            <h1> Tu Perfil </h1>
            <v-card>
                <v-row>
                    <v-col class="col-12 col-md-6">
                        <img class="profile-pic center " :src="authUser.photoURL" width="150">
                    </v-col>
                    <v-col class="col-12 col-md-6">
                        <v-container>
                            <v-icon class="authicons" color=green v-if="linkedGoogle">mdi-google</v-icon>
                            <!-- GIT CONFIG AUTH UNLINK | LEFT OVER -->
                            <!--   <v-icon class="authicons" color=green v-if="linkedGithub" >mdi-github</v-icon> -->
                            <v-icon class="authicons" color=green v-if="linkedPassword"> mdi-email-check</v-icon>
                            <br>
                            <p class="center">Que onda {{authUser.displayName || 'my friend'}} ?
                                <br> sabemos que te gusta {{authUser.favoriteFood || 'Programing'}} </p>
                            <br>
                            <v-text-field class="mdi mdi-barcode" readonly v-model="uid">
                            </v-text-field>
                        </v-container>
                    </v-col>
                </v-row>
            </v-card>
            <v-divider class="m-tb-20"></v-divider>
            <h4 class="center mt-5">Perfil de usuario</h4>
            <br>
            <br>
            <v-card>
                <h4 class="left"><v-icon> mdi-account </v-icon>Detalles</h4>
                <br>
                <v-divider class="mb-5"></v-divider>
                <v-row>
                    <v-col class="col-12 col-md-4">
                        <v-form @submit.prevent="updateProfile">
                            <div class="update-inputs">
                                <v-text-field background-color="tertiary" class="form-control mb-10" v-model="displayName" :counter="10" label="Name (press enter)" required>
                                </v-text-field>
                                <v-text-field background-color="tertiary" class="form-control" v-model="photoURL" placeholder="your photo url" label="Photo url (press enter)">
                                </v-text-field>
                                <v-btn type="submit" depressed small color="primary" @keyup.enter="updateProfile" class="update center ">
                                    <v-icon> mdi-pencil </v-icon>
                                </v-btn>
                            </div>
                        </v-form>
                    </v-col>
                    <v-col class="col-12 col-md-8">
                        <v-form @submit.prevent="updateAboutYou">
                            <div class="update-inputs">
                                <v-textarea label="About you" placeholder="tell us about yourself" v-model="aboutYou" background-color="tertiary" counter>
                                </v-textarea>
                                <v-btn :fullscreen="$vuetify.breakpoint.mobile" type="submit" depressed small color="primary" @keyup.enter="updateAboutYou" class="update center  ">
                                    <v-icon> mdi-pencil </v-icon>
                                </v-btn>
                            </div>
                        </v-form>
                    </v-col>
                </v-row>
            </v-card>
            <v-card>
                <h4 class="left"><v-icon> mdi-email mdi-lock </v-icon>Correo & contraseña</h4>
                <br>
                <v-divider></v-divider>
                <v-row>
                    <v-col class="col-12 col-md-6">
                        <form class="mt-10 center" @submit.prevent="updateEmail">
                            <v-text-field type="email" background-color="tertiary" class="form-control mx-md-n7" v-model="email" placeholder="enter new email" label="Email (press enter)"> </v-text-field>
                            <v-btn type="submit" depressed small color="primary" @keyup.enter="updateEmail" class="update ep-icon">
                                <v-icon> mdi-pencil </v-icon>
                            </v-btn>
                            <v-divider class="mt-3">
                            </v-divider>
                        </form>
                    </v-col>
                    <v-col class="col-12 col-md-6">
                        <form class="mt-10 center" @submit.prevent="updatePassword">
                            <v-text-field type="password" class="form-control mx-md-n7" background-color="tertiary" v-model="newPassword" placeholder="enter new password" label="Password (press enter)">
                            </v-text-field>
                            <v-btn type="submit" depressed small color="primary" @keyup.enter="updatePassword" class="update ep-icon">
                                <v-icon> mdi-pencil </v-icon>
                            </v-btn>
                        </form>
                    </v-col>
                    <v-col class="col-12">
                        <div class=" link-sm center" v-if="!linkedGoogle">
                            <br>
                            <h4 class="center">Link google </h4>
                            <br>
                            <v-btn class="center" @click="linkGoogle">
                                <v-icon>mdi-google</v-icon>
                            </v-btn>
                        </div>
                        <div class=" link-smcenter" v-if="linkedGoogle">
                            <br>
                            <h4 class="center">unlink google </h4>
                            <br>
                            <v-btn class="center" @click="unlinkGoogle">
                                <v-icon color=red>mdi-email-off</v-icon>
                            </v-btn>
                        </div>
                    </v-col>
                </v-row>
            </v-card>
            <form @submit.prevent="updateCustomDetails">
                <v-card>
                    <h4 class="left"><v-icon> mdi-account-cowboy-hat </v-icon>Extra details  </h4>
                    <br>
                    <v-divider></v-divider>
                    <!--          <v-toolbar
                  flat
                  height="75"
                  class="center my-10 py-2 rounded"
                  >
                    <v-switch
                      v-model="$vuetify.theme.dark"
                      inset
                      label="dark ape theme"
                      persistent-hint
                    ></v-switch>
              </v-toolbar>
              -->
                    <v-text-field type="text" v-model="favoriteFood" label="Fav food" placeholder="enter favorite food" background-color="tertiary" class="form-control">
                    </v-text-field>
                    <v-btn type="submit" depressed small color="primary" @keyup.enter="updateCustomDetails" class="update">
                        <v-icon> mdi-pencil </v-icon>
                    </v-btn>
                </v-card>
            </form>
            <!-- company profile -->

            <v-card>
                <h4 class="left mt-5">Perfil de tu trabajo</h4>
                <br>
                <br>

                <v-divider class="m-tb-20"></v-divider>
                <v-row center no-gutters>
                    <v-col class="col-6 col-md-4">
                        <form @submit.prevent="updateCompanyDetails">
                            <h4><center><v-icon> mdi-domain </v-icon> Detalles de empresa </center> </h4>
                            <v-divider class="mb-5"></v-divider>
                            <v-text-field required type="text" v-model="companyName" label="Fav food" placeholder="enter your company name" background-color="tertiary" class="form-control">
                            </v-text-field>
                            <v-text-field required type="text" v-model="companyWebsite" label="Company website" placeholder="enter your company website" background-color="tertiary" class="form-control">
                            </v-text-field>
                            <v-btn type="submit" depressed small color="primary" @keyup.enter="updateCompanyDetails" class="update">
                                <v-icon> mdi-pencil </v-icon>
                            </v-btn>

                        </form>
                    </v-col>

                    <v-col class="col-6 col-md-4">
                        <form @submit.prevent="updateCompanyContactDetails">
                            <h4><center><v-icon> mdi-phone  </v-icon>  Contacto de empresa </center> </h4>
                            <v-divider class="mb-5"></v-divider>
                            <v-text-field class="form-control" required type="number" v-model="companyPhone" label="Company phone" background-color="tertiary" placeholder="enter your company phone">
                            </v-text-field>
                            <v-text-field class="form-control" background-color="tertiary" required type="text" v-model="companyEmail" label="Company email" placeholder="enter your company email">
                            </v-text-field>
                            <v-btn type="submit" depressed small color="primary" @keyup.enter="updateCompanyContactDetails" class="update">
                                <v-icon> mdi-pencil </v-icon>
                            </v-btn>
                        </form>
                    </v-col>

                    <v-col class="col-12 col-md-4">
                        <form @submit.prevent="updateCompanyPhoto">
                            <h4 class="center"><v-icon> mdi-camera </v-icon> Imaegen de empresa</h4>
                            <v-divider></v-divider>
                            <br>
                            <div class="update-profile-inputs">
                                <img class="comp-pic center profile-pic" :src="authUser.companyPhotoURL" width="150">

                                <v-text-field label="Company photo url" class="form-control" background-color="tertiary" v-model="companyPhotoURL" placeholder="company photo url">
                                </v-text-field>
                                <v-btn type="submit" depressed small color="primary" @keyup.enter="updateCompanyPhoto" class="center update">
                                    <v-icon> mdi-pencil </v-icon>
                                </v-btn>
                            </div>
                        </form>
                    </v-col>
                  </v-row>
                  </v-card>

                    <!-- <Header /> -->
                    <v-card>
                    <v-divider class="m-tb-20"></v-divider>
                    <v-row center no-gutters>
                    <v-col class="col-12 ">
                      <h4 class="center"><v-icon> mdi-credit-card </v-icon> Subscripciones</h4>
                      <v-divider></v-divider>
                      <br>
                      <v-btn @click="drawer=true"><v-icon color=blue> mdi-credit-card </v-icon></v-btn>
                        <div class="content">
                            <v-navigation-drawer app v-model="drawer">
                              <v-btn @click="drawer=false"> <v-icon color=blue> mdi-close </v-icon> </v-btn>
                                <v-card-text class="text-center">
                                    <Cancel class="mb-2" />
                                    <Suspend class="mb-2" />
                                    <Activate class="mb-2" />
                                    <h3>Proximamente</h3>
                                    <v-btn color="green" dark block tile @click="upgradesubscription" class="center">
                                        <span style="text-transform: capitalize">Upgrade</span>
                                    </v-btn>
                                    <p>Servicio de subscripciones esta en proceso de desarrollo, sabemos que estas interesado :), Saludos!</p>
                                </v-card-text>
                            </v-navigation-drawer>
                        </div>
                    </v-col>

                </v-row>
            </v-card>
        </v-card>
    </v-container>
</div>

</template>

<script>

import firebase from '../plugins/firebase'
import toastr from 'toastr';
import vue from 'vue';

import Cancel from "@/components/payments/Cancel";
import Suspend from "@/components/payments/Suspend";
import Activate from "@/components/payments/Activate";


let db = firebase.database();
let messagesRef = db.ref('tutorials');
let usersRef = db.ref('users');
export default {
    name: 'profile',
    components: {
        Suspend,
        Cancel,
        Activate
    },
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
            aboutYou: '',
            authUser: '',
            companyPhone: null,
            comapnyEmail: null,
            companyName: null,
            companyWebsite: null,
            favoriteFood: null,
            userID: null,
            drawer: false,
            saving: false,
        }
    },
    phoneRules: [
        v => !!v || 'you must type digits or something...',
        v => v.length <= 10 || 'hum.. this monk smelling somthing strange... must be less than 10 characters',
    ],
    computed: {
        linkedGoogle() {
                return !!this.authUser.providerData.find(provider => provider.providerId === 'google.com')
            },
            linkedPassword() {
                return !!this.authUser.providerData.find(provider => provider.providerId === 'password')
            }
    },
    methods: {
        // upgrade subscrption
        upgradesubscription() {
                // 1. Let's save an upgrade request and subscription id
                let subscription_id = "" // user subscription id
                localStorage.setItem("@upgradesubscrption", true);
                localStorage.setItem("@subscriptionid", JSON.stringify(subscription_id));
                        // 2. Send back to select a new package
                        this.$router.push("/subscriptions")
                        // end
                    },
                    updateAboutYou() {
                        firebase.database().ref('users').child(this.authUser.uid)
                            .update({
                                aboutYou: this.aboutYou
                            })
                        toastr.success('awesome!, your about me seciton has been updated')
                    },
                    updateProfile() {
                        this.authUser.updateProfile({
                            displayName: this.displayName,
                            photoURL: this.photoURL
                        });
                        toastr.success('Nice! profile updated')
                    },
                    updateCompanyPhoto() {
                        firebase.database().ref('users').child(this.authUser.uid)
                            .update({
                                companyPhotoURL: this.companyPhotoURL
                            })
                        toastr.success('Nice! company profile updated')
                    },
                    updateEmail() {
                        this.authUser.updateEmail(this.email)
                        toastr.success('Cool! email updated')
                    },
                    updateCustomDetails() {
                        firebase.database().ref('users').child(this.authUser.uid)
                            .update({
                                favoriteFood: this.favoriteFood
                            })
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
                                toastr.success('nice! password updated')
                            })
                            .catch(err =>
                                toastr.error('Yikes! ' + err.message))
                    },
                    linkGoogle: function() {
                        const provider = new firebase.auth.GoogleAuthProvider()
                        this.authUser.linkWithPopup(provider)
                        toastr.success('nice! google account  linked')
                            .catch(err =>
                                toastr.error('Yikes! ' + err.message))
                    },
                    unlinkGoogle: function() {
                        this.authUser.unlink('google.com')
                    }
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
                this.userID = uid;
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
                                this.aboutYou = snapshot.val().aboutYou
                                this.favoriteFood = snapshot.val().favoriteFood
                                this.companyPhotoURL = snapshot.val().companyPhotoURL
                                this.companyName = snapshot.val().companyName
                                this.companyWebsite = snapshot.val().companyWebsite
                                this.companyPhone = snapshot.val().companyPhone
                                this.companyEmail = snapshot.val().companyEmail
                                vue.set(this.authUser, 'aboutYou', this.favoriteFood)
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
