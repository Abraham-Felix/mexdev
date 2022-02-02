<style>
  .s-div {
    box-shadow: 0px 0px 5px -3px gray;
  }
  .v-application--wrap {
    min-height: 0;
  }
</style>
<template>
<div>

  <!-- Fintech Social container layout -->

    <v-container fluid>
    <div>
      <v-card class="d-flex align-self-start flex-column"  cols="auto">
        <v-row no-gutters>
          <v-col  class="s-div" tile outline cols="2">
          avatar image of user
          </v-col>
          <v-col class="s-div" cols="8">
          this would be the post area
          </v-col>
          <v-col class="s-div" cols="2">
          post button to send
          </v-col>
        </v-row>
      </v-card>
      
<!-- feed wall -->
      <v-card class="d-flex mt-5" height="fill">
          <v-col>
            <h1> Feed Walls </h1>
          </v-col>
      </v-card>
    </div>

      <!-- View/edit profile -->
        <v-dialog
          class="mb-16"
          v-model="dialog"
          max-width="650px"
          >
        <div class=" top-r">
            <v-btn
            class="form-close-btn"
            width="10px"
            @click="dialog = false"
            >
                <v-icon> mdi-close </v-icon>
            </v-btn>
          </div>
          <FintechSocialProfile/>
            <v-card-actions>
                <v-spacer></v-spacer>
            </v-card-actions>
        </v-dialog>
    </v-container>

    <v-navigation-drawer class="fill" v-model="drawer" :mini-variant.sync="mini" permanent absolute>
        <!-- user avatar -->
        <v-list-item class="px-2">
            <v-list-item-avatar>
                <v-img :src="authUser.photoURL"></v-img>
            </v-list-item-avatar>

            <v-list-item-title>
                {{displayName}}
            </v-list-item-title>

            <v-btn icon @click.stop="mini = !mini">
                <v-icon>mdi-chevron-left</v-icon>
            </v-btn>
        </v-list-item>
        <v-list nav dense>
            <v-list-item-group v-model="group" style="text-align:left" active-class="text--accent-4">
      <!-- add gigs side nav button -->
                <v-list-item>
                    <v-list-item-title @click.stop="dialog = true">
                    <v-list-item-icon>
                        <v-icon title="Profile"> mdi-account </v-icon>
                    </v-list-item-icon>
                     Profile
                    </v-list-item-title>
                </v-list-item>

            </v-list-item-group>
        </v-list>
    </v-navigation-drawer>
</div>

</template>

<script>
import firebase from '../plugins/firebase'
import FintechSocialProfile from '@/components/fintechsocial/FintechSocialProfile.vue'
export default {
    name: 'FintechSocial',
    components: {
      FintechSocialProfile
    },
    data: () => ({
        menu: false,
        drawer: true,
        mini: true,
        dialog: false,
        viewgigdialog: false,
        tutorialdialog: false,
        authUser: '',
        displayName: '',
      }),
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
          //data => console.log(data.user, data.credential.accessToken)
          firebase.auth().onAuthStateChanged(user => {
              this.authUser = user
              if (user) {
                  this.displayName = user.displayName
                  this.photoURL = user.photoURL
                  }
                })
          }

      }
</script>
<style>
.top-r {
 text-align: -webkit-right;
}
main {
      position: initial !important;
}
.v-navigation-drawer--absolute {
    position: fixed;
    margin-top: 65px;
}
</style>
