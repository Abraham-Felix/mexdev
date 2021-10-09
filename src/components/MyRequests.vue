<style scoped>
.my-req-t{
  margin-right:180px;
}
.mr-btn {
  margin-top:100px;
}
img.preview {
  width:200px;
}
.content {
  text-align: justify;
padding: 20px;
}
.v-card{
  padding:10px;
  width: 100%;
}
.top-r {
 text-align: -webkit-right;
}
.v-btn {
    height: 50px !important;
    min-width: 50px !important;
}
.date {
  text-align:right;
}
</style>
<template>
    <v-dialog v-model="dialog" width="500">
        <template  v-slot:activator="{ on, attrs }">
            <v-btn
            top class="mr-btn"
            style="z-index:9;"
            color="primary"
             rounded
            v-bind="attrs"
            v-on="on"
            fixed right>
              <v-tooltip left  class="my-req-t" >
                  <template   v-slot:activator="{ on, attrs }">
              <v-icon fab dark v-bind="attrs" v-on="on">
                  mdi-eye
              </v-icon>
            </template>
             <div >
              <img class="monk-ico" src="https://celfonica.s3-us-west-1.amazonaws.com/logos/monk-circle+50px.png">
              <span  style="display:inline;">
                view entries
              </span>
            </div>
            </v-tooltip>
            </v-btn>
            </template>
            <v-card class="mt-0 z-master">
      <div class="top-r">
          <v-btn class="form-close-btn"  @click="dialog = false" width="5px">
              <v-icon>
                  mdi-close
              </v-icon>
          </v-btn>
      </div>
      <div class="mt-n10">
        <h1>My requests</h1>
        <p class="center">View your requests</p>
      </div>
      <!-- loop over the tutorials -->
      <div v-for="(tutorial, key) in authUser.myTutorial" :key="key">
        <v-divider/>
        <div class="mb-15">
          <div class="data-rw dt-corner">
            <p class="date">
               <v-icon> mdi-calendar </v-icon>
               {{ tutorial.date  }}
             </p>
          </div>
          <br>
          <h4 >{{ tutorial.title}}</h4>
          <p class="content" v-html="tutorial.content"> {{ tutorial.content}}</p>
          <br>
          <img class="preview" :src="tutorial.picture"><br>
          <div class="data-rw requested-card" >
            <h5  > requested by:
            {{ tutorial.first + ' ' + tutorial.last}}
          </h5>
          </div>
          <br><br>
           <div class="data-rw"><v-icon>mdi-web</v-icon>
             <a  v-bind:href="tutorial.code"> {{ tutorial.code }} </a>
           </div><br>
           <v-text><h5 class="tech-requested"> Tech Requested:</h5> {{ tutorial.language  }} </v-text>
       </div>
      </div>
    </v-card>
</v-dialog>
</template>

<script>

import firebase from '../plugins/firebase'
import vue from 'vue'

let db = firebase.database();
//let usersRef = db.ref('users');
let tutRef = db.ref('tutorials');

export default {
  name: 'TutShowMyTuts',
  data() {
      return {
          authUser: {},
          favoriteFood: null,
          myTutorial: null,
          dialog: false,
      }
  },
  methods: {
  },
  created: function() {
    data => console.log(data.user, data.credential.accessToken)
    firebase.auth().onAuthStateChanged(user => {
        this.authUser = user
        if (user) {
          //usersRef.child(user.uid).once('value', snapshot => {
          //  if (snapshot.val()) {
          //  this.favoriteFood = snapshot.val().favoriteFood
        //    vue.set(this.authUser, 'favoriteFood', this.favoriteFood)
        //     }
        //  })
          tutRef.child(user.uid).once('value', snapshot => {
            if (snapshot.val()) {
            this.myTutorial = snapshot.val()
            vue.set(this.authUser, 'myTutorial', this.myTutorial )
             }
          });
        }

     })
   }
}
</script>
