<template>
<div class="fill">
    <!-- body Taskit layout -->
    <v-container >
        <h1> Admin pannel </h1>
        <v-col cols="auto">
        </v-col>
        <!-- add gig modal -->
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
          <GigForm/>
            <v-card-actions>
                <v-spacer></v-spacer>
            </v-card-actions>

        </v-dialog>
        <!-- view/delete gigs modal -->
        <v-dialog
        class="mb-16"
        v-model="viewgigdialog"
        max-width="650px"
        >
        <div class=" top-r">
            <v-btn
            class="form-close-btn"
            width="10px"
            @click="viewgigdialog = false"
            >
                <v-icon> mdi-close </v-icon>
            </v-btn>
          </div>
          <EditGigs/>
            <v-card-actions>
                <v-spacer></v-spacer>
            </v-card-actions>

        </v-dialog>

        <!-- add tutorial modal -->
        <v-dialog
        class="mb-16"
        v-model="tutorialdialog"
        max-width="650px"
        >
        <div class=" top-r">
            <v-btn
            class="form-close-btn"
            width="10px"
            @click="tutorialdialog = false"
            >
                <v-icon> mdi-close </v-icon>
            </v-btn>
          </div>
          <TutorialForm/>
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
            <v-list-item-group v-model="group" active-class=" text--accent-4">
      <!-- add gigs side nav button -->
                <v-list-item>
                    <v-list-item-icon>
                        <v-icon>mdi-briefcase-plus</v-icon>
                    </v-list-item-icon>
                    <v-list-item-title @click.stop="dialog = true">New gig
                    </v-list-item-title>
                </v-list-item>
      <!-- view gigs side nav button -->
                <v-list-item>
                    <v-list-item-icon>
                        <v-icon>mdi-briefcase-check</v-icon>
                    </v-list-item-icon>
                    <v-list-item-title @click.stop="viewgigdialog = true">
                      View gigs
                    </v-list-item-title>
                </v-list-item>
      <!-- add gigs side nav button -->
                <v-list-item>
                    <v-list-item-icon>
                      <v-icon>mdi-text-box-plus</v-icon>
                    </v-list-item-icon>
                    <v-list-item-title @click.stop="tutorialdialog = true">New tutorial
                    </v-list-item-title>
                </v-list-item>

            </v-list-item-group>
        </v-list>
    </v-navigation-drawer>
</div>

</template>

<script>
import firebase from '../plugins/firebase'
import GigForm from '@/components/forms/GigForm.vue'
import TutorialForm from '@/components/forms/TutorialForm.vue'
import EditGigs from '@/components/showgigs/EditGigs.vue'
export default {
    name: 'Admin',
    components: {
      GigForm,
      EditGigs,
      TutorialForm,
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
