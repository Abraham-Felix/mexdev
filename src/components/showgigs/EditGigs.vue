<template>
  <v-container id="tutorials">
      <h1>Gigs Available!</h1>
      <!-- loop over the tutorials -->
      <div
        v-for="gig in allGigs"
        :key="gig._key"
      >
        <a @click.prevent="deleteGigs(gig._key)">
            <v-icon>mdi-delete</v-icon>
        </a>
        <h5>{{ gig.gigtitle}}</h5>
     </div>
  </v-container>
</template>
<script>

import firebase from '@/plugins/firebase'
let db = firebase.database();
//let usersRef = db.ref('users');
let gigRef = db.ref('gigs');

export default {
  name: 'EditGigs',
  data: () => ({
  authUser: {},
  allGigs: null, // initialise an array
}),
   methods: {
       async deleteGigs(gig) { 
       await gigRef.child(gig).remove()
         console.log(gig)
       //I get the key on console when i click the button of the object I want to delete
    }
  },
  created: function() {
    //data => console.log(data.user, data.credential.accessToken)
    firebase.auth().onAuthStateChanged(user => {
        if (user) {
          gigRef.on('value', snapshot => {
            const val = snapshot.val()
            if (val) {
              this.allGigs = Object.values(val).flatMap(gigs =>
              Object.entries(gigs).map(([ _key, gig ]) => ({ _key, ...gig})))
            }
            //console.log(snapshot.val())
          });
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
