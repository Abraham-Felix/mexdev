<style scoped>

.preview{
  height:auto;
  width:200px;
  transition:1.5s;
  border-radius:5px;
}
.preview:hover{
  height:auto;
  width:400px;
}
.data-rw{
  display:inline-flex;
}
.dt-corner {
    position: absolute;
    display: -webkit-box;
    z-index: 1;
    margin-top: -74px;
}
p{
  margin-bottom: 0px !important;
}
.v-card{
  margin-top:10px;
  margin-bottom:10px;
}
.v-icon{
  margin-left:10px;
  margin-right:10px;
}
.content {
  text-align: justify;
padding: 20px;
}
.tech-requested {
  display: inline;
}
.requested-card {
  box-shadow: 0px 0px 10px -5px cadetblue;
    padding: 3px !important;
    border-radius: 5px;
}
</style>
<template>
  <v-container id="tutorials">
    <v-card>
      <h1>Work Requests</h1>
      </v-card>
           <!-- loop over the tutorials -->
           <div v-for="tutorial in allTutorials" :key="tutorial._key">
           <v-card>
             <br>
             <h3>{{ tutorial.title}}</h3><br>
             <div class="data-rw dt-corner">
               <v-icon> mdi-calendar </v-icon>
               <p> {{ tutorial.date  }} </p>
             </div>
             <p class="content" v-html="tutorial.content"> {{ tutorial.content}}</p><br>
             <br>
             <img class="preview" :src="tutorial.picture"><br>
             <div class="data-rw requested-card" ><v-icon style="font-size:44px;">mdi-account-tie</v-icon>
               <h5 style="padding-right:20px;" > requested by: <h3>{{ tutorial.first + ' ' + tutorial.last}} </h3></h5>
             </div>
             <br><br>
              <div class="data-rw"><v-icon>mdi-web</v-icon>
                <a  v-bind:href="tutorial.code"> {{ tutorial.code }} </a>
              </div><br><br>
              <v-text><h5 class="tech-requested"> Tech Requested:</h5> {{ tutorial.language  }} </v-text><br>
            <!-- and so on -->
           </v-card>
     </div>
     <br>

  </v-container>
</template>
<script>
import firebase from '../plugins/firebase'

let db = firebase.database();
//let usersRef = db.ref('users');
let tutRef = db.ref('tutorials');

export default {
  name: 'TutShow',
  data: () => ({
  authUser: null,
  allTutorials: [] // initialise an array
}),
  methods: {
  },
  created: function() {
    data => console.log(data.user, data.credential.accessToken)
    firebase.auth().onAuthStateChanged(user => {
        if (user) {
          tutRef.once('value', snapshot => {
            const val = snapshot.val()
            if (val) {
              this.allTutorials = Object.values(val).flatMap(tutes =>
              Object.entries(tutes).map(([ _key, tutorial ]) => ({ _key, ...tutorial})))
            }
            console.log(snapshot.val())

          });
        }

     })
   }
}
</script>
