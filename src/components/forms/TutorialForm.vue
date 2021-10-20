<style scoped>


img.preview {
    width: 200px;
}

.v-btn {
    height: 50px !important;
    min-width: 50px !important;
}

.txt-e-btn {
    padding: 0px !important;
    margin: 0px 2px;
    min-width: 20px !important;
    height: 20px !important;
}

.top-r {
    text-align: -webkit-right;
}

.v-card {
    padding: 10px;
}


/* upload img css */

.up-pic {
    isplay: flex;
    flex-direction: row;
    align-items: center;
}

.choose-img {
    text-align-last: center;
    border: none !important;
    max-inline-size: 100%;
    padding: 0px !important;
}

.wr-btn {
    margin-top: 100px;
}
.left {
  text-align: left !important;
}
</style>

<template>

<form id="form" class="form-inline mb-10" v-on:submit.prevent="addTutorial">
    <h1> Crea tu nuevo tutorial!</h1>
    <p class="center">Hazlo entretenido y divertido! :)</p>
    <v-divider class="m-tb-20"></v-divider>
    <h4 class="left">Detalles de autor</h4>
    <br>
    <!-- first name -->
    <div class="form-group">
        <v-text-field :rules="nameRules" required label="First Name" type="text" id="tutorialFirst" class="form-control" v-model="newTutorial.first">
        </v-text-field>
    </div>
    <div class="form-group">
        <v-text-field :rules="nameRules" required label="Last Name" type="text" id="tutorialLast" class="form-control" v-model="newTutorial.last">
        </v-text-field>
    </div>
    <!-- email -->
    <div class="form-group">
        <v-text-field :rules="emailRules" required label="Email" type="text" id="tutorialEmail" class="form-control" v-model="newTutorial.email">
        </v-text-field>
    </div>
    <div class="form-goup">
        <!-- Img upload input field-->
        <h4 class="m-tb-20 left">Select an image, then click upload up arrow</h4>
        <br>
        <div class="up-pic ">
            <input color="secondary" class="form-control tertiary choose-img" type="file" @change="previewImage" accept="image/+">
            <v-btn title="upload" color="primary" class="m-tb-20 center" @click=" onUpload();">
                <v-icon>mdi-upload</v-icon>
            </v-btn>
        </div>
        <div>
            <p class="center"> Progress: {{uploadValue.toFixed()+"%"}}
                <progress :value="uploadValue" max="100"></progress>
            </p>
        </div>
    </div>

    <v-divider class="m-tb-20"></v-divider>
    <h4 class="left">Detalles de tutorial </h4>
    <br>
    <div class="form-group">
        <!-- languages -->
        <v-select required label="Technology resquested" id="tutorialLanguage" v-model="newTutorial.language" multiple type="text" autocomplete tags :items="languages" class="form-control">
            <template slot="selection" slot-scope="data">
                <v-btn>
                    {{ data.item }}
                </v-btn>
            </template>
        </v-select>
    </div>
    <div class="form-group">
        <v-text-field :rules="titleRules" required label="Work Request Title" type="text" id="tutorialTitle" class="form-control" v-model="newTutorial.title">
        </v-text-field>
    </div>
    <div class="form-group">
        <v-text-field :rules="descriptionRules" required label="Descripcion de tutorial" type="text" id="descripcion" class="form-control" v-model="newTutorial.descripcion">
        </v-text-field>
    </div>
<!-- video embemed de YT -->
    <div class="form-group">
        <v-text-field required label="Video de youtube" type="url" id="video" class="form-control" v-model="newTutorial.video">
        </v-text-field>
    </div>

    <div>

        <editor-menu-bar v-on:submit.prevent="addTutorial" :editor="editor" v-slot="{ commands, isActive }">
            <div>
                <v-btn :class="{ 'is-active': isActive.bold() }" class="txt-e-btn" @click="commands.bold">
                    <v-icon class="mdi mdi-format-bold mdi-24px"> </v-icon>
                </v-btn>
                <v-btn :class="{ 'is-active': isActive.strike() }" class="txt-e-btn" @click="commands.strike">
                    <v-icon class=" mdi mdi-format-strikethrough mdi-24px " />
                </v-btn>
                <v-btn :class="{ 'is-active': isActive.italic() }" class="txt-e-btn" @click="commands.italic">
                    <v-icon class=" mdi mdi-format-italic mdi-24px "> </v-icon>
                </v-btn>
                <v-btn :class="{ 'is-active': isActive.underline() }" class="txt-e-btn" @click="commands.underline">
                    <v-icon class=" mdi mdi-format-underline mdi-24px "> </v-icon>
                </v-btn>
                <v-btn :class="{ 'is-active': isActive.code() }" class="txt-e-btn" @click="commands.code">
                    <v-icon class=" mdi mdi-code-tags mdi-24px "> </v-icon>
                </v-btn>
                <v-btn :class="{ 'is-active': isActive.paragraph() }" class="txt-e-btn" @click="commands.paragraph">
                    <v-icon class=" mdi mdi-format-paragraph mdi-24px "> </v-icon>
                </v-btn>
                <v-btn :class="{ 'is-active': isActive.bullet_list() }" class="txt-e-btn" @click="commands.bullet_list">
                    <v-icon class=" mdi mdi-format-list-bulleted mdi-24px "> </v-icon>
                </v-btn>
                <v-btn :class="{ 'is-active': isActive.ordered_list() }" class="txt-e-btn" @click="commands.ordered_list">
                    <v-icon class=" mdi mdi-format-list-numbered mdi-24px "> </v-icon>
                </v-btn>
                <v-btn :class="{ 'is-active': isActive.blockquote() }" class="txt-e-btn" @click="commands.blockquote">
                    <v-icon class=" mdi mdi-code-not-equal-variant mdi-24px "> </v-icon>
                </v-btn>
                <v-btn class="txt-e-btn" :class="{ 'is-active': isActive.heading({ level: 1 }) }" @click="commands.heading({ leve: 1 })">
                    <v-icon> H1 </v-icon>
                </v-btn>
                <v-btn class="txt-e-btn" :class="{ 'is-active': isActive.heading({ level: 2 }) }" @click="commands.heading({ leve: 2 })">
                    <v-icon> H2 </v-icon>
                </v-btn>
                <v-btn class="txt-e-btn" :class="{ 'is-active': isActive.heading({ level: 3 }) }" @click="commands.heading({ leve: 3 })">
                    <v-icon> H3 </v-icon>
                </v-btn>
                <v-btn @click="commands.horizontal_rule" class="txt-e-btn">
                    <v-icon class=" mdi mdi-minus mdi-24px"></v-icon>
                </v-btn>
                <v-btn @click="commands.undo" class="txt-e-btn">
                    <v-icon class=" mdi mdi-undo mdi-24px"></v-icon>
                </v-btn>
                <v-btn @click="commands.redo" class="txt-e-btn">
                    <v-icon class=" mdi mdi-redo mdi-24px"></v-icon>
                </v-btn>
            </div>
        </editor-menu-bar>

        <editor-content label="Tutorial content" :editor="editor" v-model="newTutorial.content" />
    </div>
    <v-divider class="m-tb-20"></v-divider>
    <h4 class="left"> Fecha de tutorial </h4>
    <div class="form-group">
        <v-text-field required label="Date" class="form-control" type='date' v-model='newTutorial.date'>
        </v-text-field>
    </div>
    <div class="form-group">
        <v-text-field required label="Reference link" type="url" id="tutorialCode" class="form-control" v-model="newTutorial.code">
        </v-text-field>
    </div>

    <v-card class="m-tb-20" v-model="newTutorial">
        <h4> Vista previa </h4>
        <img class="preview " :src="picture">
        <br>
        <v-card-title class="center">{{ newTutorial.title }} </v-card-title>
        <v-card-subtitle> {{ newTutorial.first }} {{ newTutorial.last }} </v-card-subtitle>
        <v-divider class="m-tb-20"></v-divider>
        <v-card-text>
          {{ newTutorial.descripcion }}
        </v-card-text>
        <v-card-text
          v-html="newTutorial.content"
        >
          {{ newTutorial.content }}
        </v-card-text>
        <v-card-text>
            <h5>{{ newTutorial.language }}</h5>
            <h5>{{ newTutorial.email }}</h5>
            <h5>{{ newTutorial.date }}</h5>
        </v-card-text>
    </v-card>
    <!-- Form push btn -->
    <v-btn class="m-tb-20 " @click="markcompleted();" type="submit" small color="primary" dark>
        {{ displayText }}
    </v-btn>
</form>

</template>

<script>

import firebase from '@/plugins/firebase'
import EditorContent from "@/components/EditorContent";
import toastr from 'toastr';
// to debug multiple Fire apps
//if (!firebase.apps.length) {
//    firebase.initializeApp(config);
//    this.newTutorial.userID= uid;
//}
import {
    Editor, EditorMenuBar
}
from 'tiptap'
import {
    Blockquote,
    CodeBlock,
    HardBreak,
    Heading,
    OrderedList,
    BulletList,
    ListItem,
    TodoItem,
    TodoList,
    Bold,
    Code,
    Italic,
    Link,
    Strike,
    Underline,
    History,
}
from 'tiptap-extensions'

let db = firebase.database();

let messagesRef = db.ref('tutorials');
export default {
    name: 'TutorialForm',
    firebase: {
        tutorials: messagesRef
    },
    components: {
        EditorMenuBar,
        EditorContent,
    },
    data() {
        return {
            editor: new Editor({
                extensions: [
                    new Blockquote(),
                    new CodeBlock(),
                    new HardBreak(),
                    new Heading({
                        levels: [1, 2, 3]
                    }),
                    new BulletList(),
                    new OrderedList(),
                    new ListItem(),
                    new TodoItem(),
                    new TodoList(),
                    new Bold(),
                    new Code(),
                    new Italic(),
                    new Link(),
                    new Strike(),
                    new Underline(),
                    new History(),
                ],
                content: '',
            }),
            imageData: null,
            picture: null,
            uploadValue: 0,
            dialog: false,
            displayText: 'send request',
            newTutorial: {
                first: '',
                email: '',
                last: '',
                language: [],
                title: '',
                descripcion: '',
                video: '',
                content: '<br>Enter content here, to create space use double tap :) ps: working on it<br>👏',
                date: '',
                picture: '',
                code: '',
            },
            languages: [
                'Html', 'CSS', 'VUE', 'RoR', 'UX/UI', 'Front-end', "Web Design", "Other"
            ],
            nameRules: [
                v => !!v || 'you must type something',
                v => v.length <= 10 || 'hum.. this monk smelling somthing strange... must be less than 10 characters',
            ],
            emailRules: [
                v => !!v || 'E-mail is required',
                v => /.+@.+/.test(v) || 'Please enter a valid email containing @ ',
            ],
            contentRules: [
                v => !!v || 'Content is required amigo!'
            ],
            titleRules: [
                v => !!v || 'Tittle is required buddy!',
                v => v.length <= 50 || 'Woots!, Lets try making this one shorter'
            ],
            descriptionRules: [
                v => !!v || 'Description is required buddy!',
                v => v.length <= 300 || 'Woots!, Lets try making this one shorter'
            ]
        }
    },

    methods: {
        previewImage(event) {
                this.uploadValue = 0;
                this.picture = null;
                this.imageData = event.target.files[0];
            },
            onUpload() {
                this.picture = null;
                const storageRef = firebase.storage().ref(`tutorials/images/${this.imageData.name}`).put(this.imageData);
                storageRef.on(`state_changed`, snapshot => {
                    this.uploadValue = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                }, error => {
                    console.log(error.message)
                }, () => {
                    this.uploadValue = 100;
                    storageRef.snapshot.ref.getDownloadURL().then((url) => {
                        this.picture = url;
                        this.newTutorial.picture = url;
                        console.log(this.picture);
                        toastr.success('Image Uploaded successfully');
                    })
                })
            },
            addTutorial: function() {
                messagesRef.child(this.newTutorial.userID).push(this.newTutorial);
                this.newTutorial.first = '';
                this.newTutorial.last = '';
                this.newTutorial.content = '';
                this.newTutorial.email = '';
                this.newTutorial.language = '';
                this.newTutorial.title = '';
                this.newTutorial.descripcion = '';
                this.newTutorial.video = '';
                this.newTutorial.date = '',
                    this.newTutorial.picture = '',
                    this.newTutorial.code = '',
                    toastr.success('Horray! message sent successfully');
                this.displayText = 'Nice job!';
                this.nameRules = true;
                this.emailRules = true;
                this.contentRules = true;
                this.titleRules = true;
                this.descriptionRules = true;
            },
            markcompleted: function() {
                this.displayText = 'hum.. somthing still missing';
            }
    },
    // this functions trow in uid from user in data valu to {uid}
    created: function() {
        var user = firebase.auth().currentUser;
        var uid;
        if (user != null) {
            uid = user.uid; // The user's ID, unique to the Firebase project. Do NOT use
            // this value to authenticate with your backend server, if
            // you have one. Use User.getToken() instead.
        }
        this.newTutorial.userID = uid;
    },
    beforeDestroy() {
        this.editor.destroy()
    }
}

</script>
