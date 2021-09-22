<template>
<v-card class="contact-form">

  <h1>Contact</h1>
  <div>
    <a href="/landing">
    <v-img
      alt="mexdev logo"
      class="shrink center"
      contain
      src="https://firebasestorage.googleapis.com/v0/b/mexdev-40fff.appspot.com/o/logos%2Ffavicon%20-%20Copy.png?alt=media&token=83158426-51b5-40c2-9423-9756710c79f0"
      transition="scale-transition"
      width="100"
    />
    </a>
      <br>
    <v-text>
      <p class="px-md-15 pt-md-5 text-md-body-2 center"> Send me a request, I will get back to you as soon as posible,<br>
        will do my best to find a solution, sincerly, <a href="mailto:mexdevservice@gmail.com"><b>mexdev</b>.</a>
      </p>
    </v-text >
    <br>
  </div>
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
            <div>
              <v-select
               name="product"
               :rules="productRules"
               :items="newMessage.product"
               v-model="newMessage.product"
               required label="Product"
               class="mx-2"
        ></v-select>
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
            <container>


              <v-divider/>
            <p class="center text-body-2 "> <b> Home office hours: </b> </p>
              <v-row>
                <v-col cols="12" class="text-body-2">
                    10:00am - 01:00pm | 2:00pm - 6:00pm (PST)
                </v-col>
              </v-row>
           </container>
        </form>
    </div>
</v-card>

</template>

<script>

import firebase from '@/plugins/firebase'

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
            displayText: 'send message',
            newMessage: {
                first: '',
                last: '',
                email: '',
                phone: '',
                product: ['Mxdv Support', 'NuStack', 'NuDream'],
                content: ''
            },
            nameRules: [
                v => !!v || 'you must type something',
                v => v.length <= 15 || 'hum.. this monk smelling somthing strange... must be less than 15 characters',
            ],
            emailRules: [
                v => !!v || 'E-mail is required',
                v => /.+@.+/.test(v) || 'Please enter a valid email containing @ ',
            ],
            phoneRules: [
                v => !!v || 'type your phone number',
                v => v.length <= 13 || 'hum.. this monk smelling somthing strange... must be less than 12 numbers',
            ],
            productRules: [
                v => !!v || 'Content is required amigo!',
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
            this.newMessage.product = '';
            this.newMessage.content = '';
            toastr.success('Horray! message sent successfully');
            this.displayText = 'Nice job!';
            this.nameRules = true;
            this.emailRules = true;
            this.namePhone = true;
            this.productRules = true;
            this.contentRules = true;
            // Swap this credentials to your service credential from emailjs.com this is Important! so you get email to your business email account
            emailjs.sendForm('service_qe62coj','template_bin13y4', e.target,'user_1hqcYgrszmW6XZSBq6v5n', {
            name: this.newMessage.first,
            email: this.newMessage.email,
            phone: this.newMessage.phone,
            product: this.newMessage.products,
            message: this.newMessage.content,
          })
        },
        markcompleted: function() {
            this.displayText = 'hum.. somthing still missing';
        }
    },

}

</script>
<style>
.contact-form {
  max-width: max-content;
  margin: 10px auto;
  padding-top:10px;
}
.form-group {
    padding: 0px !important;
}
.form-inline {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-flow: row wrap;
    flex-flow: row wrap;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: stretch;
    align-content: space-around;
    flex-direction: column;
}

</style>
