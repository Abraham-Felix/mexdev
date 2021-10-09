<template>
  <v-container id="tutorials">
      <h1>Gigs Available!</h1>
           <!-- loop over the tutorials -->
           <div  class="Agrid d-grid">
           <div
           class="Amodule  back"
           v-for="(gig, key) in authUser.allGigs"
           :key="key">
           <div class="fill-height">
             <v-container >
              <a @click.prevent="deleteGigs(gig)" class="card-link">
                 <v-icon color=red>mdi-delete</v-icon>
               </a>
             <br>
             <div class="d-flex align-start">
               <h3 class="j-title center mb-00">{{ gig.gigtitle}}</h3>
             </div>
             <h6 class="">{{gig.companyname}}</h6>
             <v-row class="d-flex ">
               <p class="col-tres mdi mdi-clock text--secondary"> {{ gig.vacanttype }} </p>
               <p class="col-tres mdi mdi-earth text--secondary"> {{ gig.giglocation }} </p>
               <p class="col-tres mdi mdi-calendar text--secondary">{{gig.gigdate}} </p>
             </v-row>
             <v-divider class="mx-4"></v-divider>
             <h5 class="left text-body-2">Company description</h5><br>
             <p class="content"> {{ gig.companydescription}}</p><br>
             <h5 class="left text-body-2">Gig description</h5><br>
             <p class="content"> {{ gig.gigdescription}}</p><br>
             <h5 class="left text-body-2">Gig benefits</h5><br>
             <p class="content"> {{ gig.gigbenefits}}</p><br>
             <h5 class="left text-body-2">Skills</h5><br>
             <p class="content"> {{ gig.gigskills}}</p><br>
           </v-container>
         </div>
     </div>
   </div>
     <br>

  </v-container>
</template>
<script>
import firebase from '@/plugins/firebase'
let db = firebase.database();
//let usersRef = db.ref('users');
let gigRef = db.ref('gigs');
import vue from 'vue'
export default {
  name: 'EditGigs',
  data: () => ({
  authUser: {},
  allGigs: null, // initialise an array
}),
  methods: {
       deleteGigs(key) {
       gigRef.child(key+'value').remove()
        console.log(key)
    }
  },
  created: function() {
    //data => console.log(data.user, data.credential.accessToken)
    firebase.auth().onAuthStateChanged(user => {
        if (user) {
          gigRef.child(user.uid).once('value', snapshot => {
            if (snapshot.val()) {
            this.allGigs = snapshot.val()
            vue.set(this.authUser, 'allGigs' , this.allGigs , snapshot.key )
             }
             const key = snapshot.key
             console.log(key)
          })
        }
     })
}
}
</script>


<style>
  .jobs-card .col-tres {
    width:33%;
    display:inline-grid;
    text-align: center;
    font-size: small !important;
  }
  .job-pic {
    border-radius: 100% 100% !important;
    box-shadow: 5px 3px 15px -10px grey;
    height: 80px;
    width: 80px;
  }
  .Amodule p {
    color: #474747;
  }
  .Amodule {
    background: white;
    display: inline-grid;
    align-items: center;
    justify-content: center;
    min-height: 500px;
    padding: 15px;
    border-radius: 10px;
    box-shadow: inset 0px 0px 25px -16px rgb(161 161 161);
    text-align: center;
    text-decoration: none;
    margin-left: 5px;
    margin-right: 5px;
    flex: 1 1 300px;
    margin: 10px;
    width: 31%;
    color: #4f81bd !important;
    transition: all 0.3s ease-in;
  }
  .Amodule:hover {
      background: #fbfbfb;
      -webkit-box-shadow:inset 0px 0px 35px -16px rgba(161,161,161,1);
      -moz-box-shadow:inset 0px 0px 35px -16px rgba(161,161,161,1);
      box-shadow: inset 0px 0px 35px -16px rgba(161,161,161,1);
  }
  .Agrid {
      display: flex;
      flex-wrap: wrap;
      grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
      grid-auto-rows: minmax(150px, auto);
      grid-gap: 1em;
      max-width: 1200px !important;
      width: 100%;
      margin-left:auto;
      margin-right:auto;
      margin-bottom: 50px;

  }
  .exespotbody{
    margin-top:100px;
    max-wdth: 1000px;
  }
  @media screen and (max-width:1400px) {
    .Fgrid {
      max-width: 600px;
    }
  }
  @media screen and (max-width:1000px) {
    .job-detail {
      height:125px ;
    }
    .j-title {
      font-size: 3.5vw ;
    }
    .des-over {
      overflow:auto;
      height: 200px !important;
    }
    .job-detail {
    height: 170px !important;
    transition: 1s;
    }
    .Amodule {
      min-height: 700px;
    }
  }
  /* surface DUO*/
  @media (max-width:540px) {
    .Amodule {
      width: 100% !important;
      margin: 0px;
    }
    .j-title {
      font-size: 4vw ;
    }
    .v-application ul, .v-application ol {
    padding-left: 0px;
    }
  }
  /* iphone 6/7/8+ display*/
  @media (max-width:414px) {
    li.number {
        width: 20px !important;
        height: 20px !important;
        padding: 0px !important;
    }
    .Amodule {
      width: 100% !important;
      margin: 0px;
    }
    .j-title {
      font-size: 4vw ;
    }
    .v-application ul, .v-application ol {
    padding-left: 0px;
    }
  }
  /* iphone x display*/
  @media (max-width:375px) {
    .Amodule {
      width: 100% !important;
      margin: 0px;
    }
    .j-title {
      font-size: 4vw ;
    }
    .v-application ul, .v-application ol {
    padding-left: 0px;
    }
  }

  .col-50 {
    width: 50%;
    display: inline-grid;
  }

  .des-over {
    overflow:auto;
    height: 80px;
  }
  .v-progress-circular {
  margin: 1rem;
}
.t-row {
  display: table-footer-group;
}

/* Paginated */
ul.paginate-links.languages {
    display: inline-flex;
    margin: auto;
    align-self: center;
}
li.number {
    align-content: space-between;
    margin-left: 3px;
    margin-right: 3px;
    box-shadow: 0px 0px 4px -2px #313233;
    padding: 3px;
    width: 35px;
    background: #313233;
    border-radius:3px;
}
li.number:visited, li.number:hover, li.number:target, li.number:active, li.number:focus {
  box-shadow: 0px 0px 3px -2px #313233 !important;
}
li.number a {
    color: #ffffff !important;
}
</style>
