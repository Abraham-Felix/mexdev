<template>
<div class="fill">
    <!-- body Taskit layout -->
    <v-container >
        <h1> Admin pannel </h1>
        <v-col cols="auto">
        </v-col>
        <!-- modal -->
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
<!-- form -->
            <v-form
            v-model="valid"
            v-on:submit.prevent="addGig"
            >

            <h4 class="center mt-2">
                Gig form
            </h4>
                <v-container>
                    <v-row>
                        <v-col cols="12" md="3">
  <!-- position type -->
                            <v-select
                              :items="vacanttype"
                              :rules="vacanttypeRules"
                              v-model="newGig.vacanttype"
                              label="Vacant type"
                              required dense
                              class="py-4"
                              min-width="100px">
                            </v-select>
                        </v-col>
  <!-- gig title -->
                        <v-col cols="12" md="9">
                            <v-text-field
                            v-model="newGig.gigtitle"
                            :rules="gigtitleRules"
                            :counter="35"
                            label="Gig title"
                            required>
                          </v-text-field>
                        </v-col>

  <!-- company name -->
                        <v-col cols="12" md="6">
                            <v-text-field
                            v-model="newGig.companyname"
                            :rules="companynameRules"
                            :counter="200"
                            label="Company name"
                            required>
                          </v-text-field>
                        </v-col>
  <!-- gig priority-->
                        <v-col cols="12" md="6">
                            <v-select
                            :items="priority"
                            label="Priority"
                            dense class="py-4"
                            min-width="100px">
                          </v-select>
                        </v-col>
  <!-- company description -->
                        <v-col cols="12" md="12">
                            <v-textarea
                            v-model="newGig.companydescription"
                            :rules="companydescriptionRules"
                            :counter="400"
                            label="Company Description"
                            required>
                          </v-textarea>
                        </v-col>
  <!-- gig description -->
                        <v-col cols="12" md="12">
                            <v-textarea
                            v-model="newGig.gigdescription"
                            :rules="gigdescriptionRules"
                            :counter="700"
                            label="Gig Description"
                            required>
                          </v-textarea>
                        </v-col>
  <!-- gig location-->
                        <v-col cols="12" md="6">
                            <v-text-field
                            v-model="newGig.giglocation"
                            :rules="giglocationRules"
                            :counter="15"
                            label="Gig location"
                            required>
                          </v-text-field>
                        </v-col>
  <!-- gig benefits-->
                        <v-col cols="12" md="6">
                            <v-text-field
                            v-model="newGig.gigbenefits"
                            :rules="gigbenefitsRules"
                            :counter="500"
                            label="Gig benefits"
                            required>
                          </v-text-field>
                        </v-col>
  <!-- gig date-->
                        <v-col cols="12" md="6">
                          <v-text-field
                          required
                          label="Gig date"
                          type='date'
                          v-model='newGig.gigdate'>
                          </v-text-field>
                        </v-col>
  <!-- gig skills-->
                        <v-col cols="12" md="6">
                            <v-text-field
                            v-model="newGig.gigskills"
                            :rules="gigskillsRules"
                            :counter="200"
                            label="Gig skills"
                            required>
                          </v-text-field>
                        </v-col>
    <!-- Form push btn -->
                        <v-btn
                        class="m-tb-20 center"
                        @click="markcompleted();"
                        type="submit"
                        small color="primary" dark>
                            {{ displayText }}
                        </v-btn>
                    </v-row>
                </v-container>
            </v-form>
<!-- form end -->
            <v-card-actions>
                <v-spacer></v-spacer>
            </v-card-actions>

        </v-dialog>
    </v-container>
    <v-navigation-drawer class="fill" v-model="drawer" :mini-variant.sync="mini" permanent absolute>
        <!-- user avatar -->
        <v-list-item class="px-2">
            <v-list-item-avatar>
                <v-img src="https://randomuser.me/api/portraits/men/85.jpg"></v-img>
            </v-list-item-avatar>

            <v-list-item-title>
                user name
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
                    <v-list-item-title @click.stop="dialog = true">add new gig
                    </v-list-item-title>
                </v-list-item>
      <!-- view gigs side nav button -->
                <v-list-item>
                    <v-list-item-icon>
                        <v-icon>mdi-briefcase-check</v-icon>
                    </v-list-item-icon>
                    <v-list-item-title >
                      <router-link to="gigsavailable">
                        view gigs
                      </router-link>
                    </v-list-item-title>
                </v-list-item>

            </v-list-item-group>
        </v-list>
    </v-navigation-drawer>
</div>

</template>

<script>

import firebase from '../plugins/firebase'
import toastr from 'toastr';

let db = firebase.database();
let messagesRef = db.ref('gigs');

export default {
    name: 'Admin',
    firebase: {
        tutorials: messagesRef
    },
    data: () => ({
        menu: false,
        drawer: true,
        mini: true,
        dialog: false,
        displayText: 'send request',
        newGig: {
            vacanttype: [],
            priority: [],
            gigtitle: '',
            gigdescription: '',
            companyname: '',
            companydescription: '',
            giglocation: '',
            gigbenefits: '',
            gigdate: '',
            gigskills: '',
        },
        priority: ['urgent', 'not-urgent'],
        vacanttype: ['Permanent', 'Contract', 'Part-time', 'Full-time'],
        items: [{
            title: 'Home',
            icon: 'mdi-home-city'
        }, {
            title: 'My Account',
            icon: 'mdi-account'
        }, {
            title: 'Users',
            icon: 'mdi-account-group-outline'
        }, ],
        vacanttypeRules: [
            v => !!v || 'Content is required amigo!'
        ],
        gigtitleRules: [
            v => !!v || 'Content is required amigo!'
        ],
        gigdescriptionRules: [
            v => !!v || 'Content is required amigo!'
        ],
        companynameRules: [
          v => !!v || 'Content is required amigo!'
        ],
        companydescriptionRules: [
            v => !!v || 'Content is required amigo!'
        ],
        giglocationRules: [
            v => !!v || 'Content is required amigo!'
        ],
        gigskillsRules: [
            v => !!v || 'Content is required amigo!'
        ],
        gigbenefitsRules: [
            v => !!v || 'Content is required amigo!'
        ],
        priorityRules: [
            v => !!v || 'Content is required amigo!'
        ],
    }),
    methods: {
        addGig: function() {
            messagesRef.child(this.newGig.userID).push(this.newGig);
            this.newGig.vacanttype = '';
            this.newGig.gigtitle = '';
            this.newGig.gigdescription = '';
            this.newGig.companyname = '';
            this.newGig.companydescription = '';
            this.newGig.giglocation = '';
            this.newGig.gigdate = '';
            this.newGig.gigbenefits = '';
            this.newGig.gigskills = '';
            this.newGig.priority = '';
            toastr.success('Horray! message sent successfully');
            this.displayText = 'Nice job!';
            this.vacanttypeRules = true;
            this.gigtitleRules = true;
            this.gigdescriptionRules = true;
            this.companynameRules = true;
            this.companydescriptionRules = true;
            this.gigskillsRules = true;
            this.gigbenefitsRules = true;
            this.giglocationRules = true;
            this.priorityRules = true;
        },
        markcompleted: function() {
            this.displayText = 'hum.. somthing still missing';
        }
    },
    created: function() {
        var user = firebase.auth().currentUser;
        var uid;
        if (user != null) {
            uid = user.uid; // The user's ID, unique to the Firebase project. Do NOT use
            // this value to authenticate with your backend server, if
            // you have one. Use User.getToken() instead.
        }
        this.newGig.userID = uid;
    },
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
