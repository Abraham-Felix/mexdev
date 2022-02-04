<style scoped>
  .s-div{
    box-shadow: 0px 0px 4px -1px gray;
    padding:7px !important;
  }
  form.v-form.mb-10.px-10 {
  padding: 0 !important;
  }
  .main-content {
  margin:auto;
  }
  .post-image {
  max-width:100px;
  }

  .feed-wall {
  overflow-y: auto;
  height:520px;
  }

</style>
<!-- full scoped style to be revised -->
<style>
.v-application--wrap {
  min-height: 0;
}
</style>
<template>
<div class="ml-12" >

  <!-- Fintech Social container layout -->

    <v-container  fluid>
    <div class="main-content">
    <v-form
    class="mb-10 px-10"
    v-model="valid"
    v-on:submit.prevent="addPost"
    >
      <v-card class=" d-flex align-self-start flex-column"  cols="auto">
        <v-row no-gutters>
          <v-col  class="s-div "  cols="1">
            <v-img
            class="align-center post-image"
            :src="authUser.photoURL">
            </v-img>
          </v-col>
          <v-col  class="s-div d-flex" cols="11">
          <v-textarea
          v-model="newPost.postText"
          :rules="postRules"
          :counter="155"
          rows="2"
          class="pt-5"
          label="Share your thoughts! 😎"
          required>
        </v-textarea>
        <v-btn
        class="ml-3 m-tb-20 align-self-end"
        @click="markcompleted();"
        type="submit"
        small color="primary"
        dark
        >
          {{ displayText }}
        </v-btn>
          </v-col>
        </v-row>
      </v-card>
      </v-form>

<!-- feed wall -->
<v-divider/>
          <div class="feed-wall">
            <FintechSocialFeed/>
          </div>
    </div>

      <!-- View/edit profile -->
        <v-dialog
          class="mb-16"
          v-model="dialog"
          max-width="1250px"
          >
        <div class=" top-r">
            <v-btn
            class="form-close-btn mr-3 mt-3"
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
// import firebase from '@/plugins/firebase'
import toastr from 'toastr';
let db = firebase.database();
let messagesRef = db.ref('posts');

import firebase from '../plugins/firebase'
import FintechSocialProfile from '@/components/fintechsocial/FintechSocialProfile.vue'
import FintechSocialFeed from '@/components/fintechsocial/FintechSocialFeed.vue'

export default {
    name: 'FintechSocial',
    components: {
      FintechSocialProfile,
      FintechSocialFeed
    },
    data: () => ({
        displayText: 'send',
        menu: false,
        drawer: true,
        mini: true,
        dialog: false,
        viewgigdialog: false,
        tutorialdialog: false,
        authUser: '',
        displayName: '',
        newPost: {
            postText: '',
        },
        postRules: [
            v => !!v || 'Content is required amigo!'
        ],
      }),
      methods: {
          addPost: function() {
              messagesRef.child(this.authUser.uid).push(this.newPost);
              this.newPost.postText = '';
              toastr.success('Horray! message sent successfully');
              this.displayText = 'Nice job!'
              this.postRules = true;
          },
          markcompleted: function() {
              this.displayText = 'something is strange';
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
