<style >
  .zindex {
    z-index: 99;
    color: #ffffff !important;
  }
  .v-image {
    display: absolute;
}
.mar-neg {
  margin-top: -80px !important;
}
li {
  font-size: 1.2vw;
}
.t-cat {
  width: 100% !important;
}
</style>

<template>
<div>
    <!-- body Taskit layout -->
  <v-container>
    <h1> Welcome to Taskit </h1>
    <img src="https://firebasestorage.googleapis.com/v0/b/mexdev-40fff.appspot.com/o/Ape%2Fhello-ape.png?alt=media&token=6403bb19-09e2-44a8-8756-e6bbf8ef8f59"/>
    <v-col cols="auto">
         <v-dialog
           transition="dialog-bottom-transition"
           max-width="600"
         >
           <template v-slot:activator="{ on, attrs }">
             <v-btn
               color="primary"
               v-bind="attrs"
               v-on="on"
             >Taskit Tips</v-btn>
           </template>
           <template v-slot:default="dialog">
             <v-card>
               <h1> Tip Tricks </h1>
              <v-card-text>
                 <div class="text-h2 pa-12">
                  <ol>
                     <h5> create a new task: </h5>
                     <li>
                      <p> To create a new task click on the left top i con to expand the Side Bar,
                          once open click on the + icon to create a new tasks!
                      </p>
                    </li>
                  </ol>
                 </div>
               </v-card-text>
               <v-card-actions class="justify-end">
                 <v-btn
                   text
                   @click="dialog.value = false"
                 >Close</v-btn>
               </v-card-actions>
             </v-card>
           </template>
         </v-dialog>
       </v-col>
       <!-- -->
       <v-dialog
        v-model="dialog"
        max-width="90%"
      >
      <v-btn
        color="primary darken-1"
        text
        @click="dialog = false"
      >
      <v-icon> mdi-close </v-icon>
      </v-btn>

          <v-card-title class=" center text-h5">
           Task Category 2 cotnainer
          </v-card-title>
          <v-divider class="my-5"></v-divider>
          <v-form v-model="valid">
      <v-container>
        <v-row>
          <v-col
          cols="12"
          md="2"
       >
         <v-select
           :items="status"
           label="Status"
           dense
           class="py-4"
           min-width="100px"
         ></v-select>
       </v-col>
          <v-col
            cols="12"
            md="2"
          >
            <v-text-field
              v-model="tasktitle"
              :rules="taskTitleRules"
              :counter="10"
              label="Task title"
              required
            ></v-text-field>
          </v-col>

          <v-col
            cols="12"
            md="3"
          >
            <v-text-field
              v-model="taskdes"
              :rules="taskdesRules"
              :counter="10"
              label="Task Description"
              required
            ></v-text-field>
          </v-col>

          <v-col
          cols="12"
          md="1"
       >
         <v-select
           :items="colors"
           label="Priority"
           dense
           class="py-4"
           min-width="100px"
         ></v-select>
       </v-col>

       <v-col
      cols="12"
      lg="2"
    >
      <v-menu
        v-model="menu"
        :close-on-content-click="false"
        max-width="290"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-text-field
            :value="computedDateFormattedMomentjs"
            clearable
            label="Formatted with Moment.js"
            readonly
            v-bind="attrs"
            v-on="on"
            @click:clear="date = null"
          ></v-text-field>
        </template>
        <v-date-picker
          v-model="date"
          @change="menu1 = false"
        ></v-date-picker>
      </v-menu>
    </v-col>

        </v-row>
      </v-container>
    </v-form>

          <v-card-actions>
            <v-spacer></v-spacer>

          </v-card-actions>

      </v-dialog>
  </v-container>

  <!-- The drawer nav -->

  <v-navigation-drawer
      v-model="drawer"
      :mini-variant.sync="mini"
      permanent
      absolute
    >
    <v-list-item class="px-2">
        <v-list-item-avatar>
          <v-img src="https://randomuser.me/api/portraits/men/85.jpg"></v-img>
        </v-list-item-avatar>

        <v-list-item-title>User name</v-list-item-title>

        <v-btn
          icon
          @click.stop="mini = !mini"
        >
          <v-icon>mdi-chevron-left</v-icon>
        </v-btn>
      </v-list-item>
      <v-list
        nav
        dense
      >
        <v-list-item-group
          v-model="group"
          active-class=" text--accent-4"
        >
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-text-box-plus-outline</v-icon>
            </v-list-item-icon>
            <v-list-item-title> Add Task </v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-note-multiple-outline</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Task category 1</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-note-multiple-outline</v-icon>
            </v-list-item-icon>
            <v-list-item-title
             @click.stop="dialog = true"
            >Task category 2</v-list-item-title>
          </v-list-item>

        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>


</div>
</template>

<script>
import moment from 'moment'
export default {
  name: "Taskit",
  data: () => ({
    menu: false,
    drawer: true,
    dialog: false,
    colors: ['1st','2nd','3rd'],
    status: ['Done','Pending','Working'],
    items: [
          { title: 'Home', icon: 'mdi-home-city' },
          { title: 'My Account', icon: 'mdi-account' },
          { title: 'Users', icon: 'mdi-account-group-outline' },
        ],
    mini: true,
  }),
  computed: {
     computedDateFormattedMomentjs () {
       return this.date ? moment(this.date).format('dddd, MMMM Do YYYY') : ''
     },
   }
}
</script>
