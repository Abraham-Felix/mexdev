<style>
.form-group {
    padding: 0px;
}
</style>

<template>

<v-card>
  <v-img
    alt="mexdev logo"
    class="shrink mr-2 margin center"
    contain
    src="https://firebasestorage.googleapis.com/v0/b/mexdev-40fff.appspot.com/o/logos%2Ffavicon%20-%20Copy.png?alt=media&token=83158426-51b5-40c2-9423-9756710c79f0"
    transition="scale-transition"
    width="100"
  />
  <v-text>
  <p> send us a request, one our agents will get back to you as soon as posible,
    our stimate response time is 4hr, sincerly, <a href="mailto:mexdevservice@gmail.com"><b>mexdev support</b>.</a></p>
  </v-text>
    <div>
        <form id="form" class="form-inline" v-on:submit.prevent="addMessage">
          <div class="d-flex justify-space-between">
            <div class="form-group">
                <v-text-field
                :rules="nameRules"
                required label="First"
                type="text"
                name="name"
                id="messageFirst"
                class="form-control"
                v-model="newMessage.first">
                </v-text-field>
            </div>
            <div class="form-group">
                <v-text-field
                :rules="nameRules"
                required label="Last"
                type="text" id="messageLast"
                class="form-control"
                v-model="newMessage.last">
                </v-text-field>
            </div>
          </div>
            <div class="form-group">
                <v-text-field
                :rules="emailRules"
                required label="Email"
                name="email"
                type="text"
                id="messageEmail"
                class="form-control"
                v-model="newMessage.email">
                </v-text-field>
            </div>
            <div class="form-group">
                <v-text-field
                :rules="phoneRules"
                required label="Phone"
                name="phone"
                id="clientPhone"
                class="form-control"
                v-model="newMessage.phone">
                </v-text-field>
            </div>
            <div class="form-group">
                <v-textarea
                :rules="contentRules"
                required label="Message"
                type="text" id="messageContent"
                class="form-control"
                name="message"
                v-model="newMessage.content">
                </v-textarea>
            </div>
            <v-btn
            @click="markcompleted"
            type="submit"
            value="send"
            small color="primary" dark>
                {{ displayText }}
            </v-btn>
        </form>
    </div>
</v-card>

</template>

<script>

import firebase from '../plugins/firebase'

import toastr from 'toastr';
import emailjs from 'emailjs-com';


let db = firebase.database();

let messagesRef = db.ref('contact-messages');

export default {
    name: 'contactform',

    firebase: {
        messages: messagesRef
    },

    data() {
        return {
            displayText: 'Send Message',
            newMessage: {
                first: '',
                last: '',
                content: '',
                email: '',
                phone: '',
            },
            nameRules: [
                v => !!v || 'you must type something',
                v => v.length <= 15 || 'hum.. this monk smelling somthing strange... must be less than 15 characters',
            ],
            phoneRules: [
                v => !!v || 'type your phone number',
                v => v.length <= 12 || 'hum.. this monk smelling somthing strange... must be less than 12 numbers',
            ],
            emailRules: [
                v => !!v || 'E-mail is required',
                v => /.+@.+/.test(v) || 'Please enter a valid email containing @ ',
            ],
            contentRules: [
                v => !!v || 'Content is required amigo!',
                v => v.length >= 20 || 'hum.. this monk smelling somthing strange... must be at least more than 30 characters',
            ],
        }
    },
    methods: {
        addMessage: function(e) {
            messagesRef.push(this.newMessage);
            this.newMessage.first = '';
            this.newMessage.last = '';
            this.newMessage.email = '';
            this.newMessage.phone = '';
            this.newMessage.content = '';
            toastr.success('Horray! message sent successfully');
            this.displayText = 'Nice job!';
            this.nameRules = true;
            this.namePhone = true;
            this.emailRules = true;
            this.contentRules = true;
            emailjs.sendForm('service_qe62coj','template_2oa9x3s', e.target,'user_1hqcYgrszmW6XZSBq6v5n', {
            name: this.newMessage.first,
            email: this.newMessage.email,
            phone: this.newMessage.phone,
            message: this.newMessage.content,
          })
        },
        markcompleted: function() {
            this.displayText = 'hum.. somthing still missing';
        }
    },

}

</script>
