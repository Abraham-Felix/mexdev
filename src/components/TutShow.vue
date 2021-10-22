<style scoped>

.preview {
    height: auto;
    width: 80%;
    transition: 1.5s;
    border-radius: 5px;
}

.data-rw {
    display: inline-flex;
}

.dt-corner {
    z-index: 1;
    display: flex;
    right: 0;
    position: absolute;
}

p {
    margin-bottom: 0px !important;
}

.v-card {
    margin-top: 10px;
    margin-bottom: 10px;
    width:100%;
    height: 700px;
    transition: 0.2s;
}
.v-card:hover {
  box-shadow: 0px 20px 20px -7px gray;
}

.v-icon {
    margin-left: 10px;
    margin-right: 10px;
}

.content {
    text-align: left;
    height:150px;
    overflow: auto;
}

.tech-requested {
    display: inline;
}
.yt-vids {
   max-width:420px;
   width: 100%;
   height:315px;
   border-radius:3px;
   transition:1s;
}
.yt-vids:hover {
  border-radius: 50px 0px 50px 0px;
}
.t-title {
  height: 80px;
}
.date {
  color: #ffffff;
}
</style>

<template>

<v-container id="tutorials">
    <!-- loop over the tutorials -->
      <h1> Introducción al HTML </h1>
        <v-row >
          <v-col
          v-for="tutorial in allTutorials"
          :key="tutorial._key"
          cols="12"
          md="4"
          class=" d-flex justify-space-between"
          >
            <v-card >
                <br>
                <div class="data-rw dt-corner mt-n5 blue rounded pr-3">
                    <v-icon color="white" >  mdi-calendar </v-icon>
                    <p class="date mt-0"> {{ tutorial.date }} </p>
                </div>
                <div class="t-title">
                  <h3>{{ tutorial.title}}</h3>
                </div>
                <br>
                <iframe
                class="yt-vids"
                :src="tutorial.video"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
                >
                  {{ tutorial.video}}
                </iframe>
                <br>
                <!-- <v-btn class="my-10"> view article </v-btn> -->
                <br>
                <div class=" px-5 content">

                    <h5 class="tech-requested  left">  Descripcion: </h5>

                  <v-text>
                    <br>
                      <p>
                        {{ tutorial.descripcion }}
                      </p>
                  </v-text>
                </div>
                <!-- <p class="content" v-html="tutorial.content"> {{ tutorial.content}}</p> -->
                <hr>
                <v-row dense>
                  <v-col cols="4">
                        <a v-bind:href="tutorial.code" target="_blank">
                          <h5 class="tech-requested">
                            <v-icon class="m-0 p-0">
                              mdi-youtube
                            </v-icon>
                            Youtube
                          </h5>
                        </a>
                  </v-col>
                  <v-col cols="4">
                    <h5 class="tech-requested">
                      <v-icon class="m-0 p-0">
                        mdi-code-braces
                      </v-icon>
                      {{ tutorial.language[0] }}
                    </h5>
                  </v-col>
                  <v-col cols="4">
                    <h5 class="tech-requested">
                      <v-icon class="m-0 p-0">
                        mdi-account-tie
                      </v-icon>
                      {{ tutorial.first + ' ' + tutorial.last}}
                    </h5>
                  </v-col>

              </v-row>
                <!-- and so on -->
            </v-card>

        </v-col>
      </v-row>
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
    methods: {},
    created: function() {
        data => console.log(data.user, data.credential.accessToken)
        firebase.auth().onAuthStateChanged(user => {
            if (user) {
                tutRef.once('value', snapshot => {
                    const val = snapshot.val()
                    if (val) {
                        this.allTutorials = Object.values(val).flatMap(tutes =>
                            Object.entries(tutes).map(([_key, tutorial]) => ({
                                _key, ...tutorial
                            })))
                    }
                    console.log(snapshot.val())

                });
            }

        })
    }
}

</script>
