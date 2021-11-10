<template>
<v-card class="contact-form">

  <h1>Contacto</h1>
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
      <p class="px-md-15 pt-md-5 text-md-body-2 center"> Envíame una solicitud, te responderé lo antes posible, <br>
        haré todo lo posible para encontrar una solución,<br>sinceramente, <a href="mailto:mexdevservice@gmail.com"><b>mexdev</b>.</a>
      </p>
    </v-text >
    <br>
  </div>
    <div>
        <form ref="form" id="form" class="form-inline" v-on:submit.prevent="addMessage">
          <div class="d-flex justify-space-between">
            <div class="form-group">
                <v-text-field
                :rules="nameRules"
                required label="Nombre"
                type="text"
                name="from_name"
                id="messageFirst"
                class="form-control"
                v-model="newMessage.first">
                </v-text-field>
            </div>
            <div class="form-group">
                <v-text-field
                :rules="nameRules"
                required label="Apellido"
                name="from_last"
                type="text" id="messageLast"
                class="form-control"
                v-model="newMessage.last">
                </v-text-field>
            </div>
          </div>
            <div class="form-group">
                <v-text-field
                :rules="emailRules"
                required label="Correo"
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
                required label="Telefono"
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
               required label="Producto"
               class="mx-2"
        ></v-select>
            </div>
            <div class="form-group">
                <v-textarea
                :rules="contentRules"
                required label="Mensaje"
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
            <p class="center text-body-2 "> <b> Horario de oficina en casa: </b> </p>
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
            displayText: 'enviar mensaje',
            newMessage: {
                first: '',
                last: '',
                email: '',
                phone: '',
                product: ['Mxdv Support', 'NuStack', 'NuDream'],
                content: ''
            },
            nameRules: [
                v => !!v || 'Este campo es obligatorio!',
                v => v.length >= 3 || 'hum.. algo huele raro... este campo debe contener almenos 3 caracteres',
            ],
            emailRules: [
                v => !!v || 'Este campo es obligatorio!',
                v => /.+@.+/.test(v) || 'hum.. algo huele raro... porfavor escribe tu email en un formato legible con @ ',
            ],
            phoneRules: [
                v => !!v || 'Este campo es obligatorio!',
                v => v.length <= 13 || 'hum.. algo huele raro... tienes que escribir menos de 12 digitos',
            ],
            productRules: [
                v => !!v || 'Este campo es obligatorio!',
            ],
            contentRules: [
                v => !!v || 'Este campo es obligatorio!',
                v => v.length >= 20 || 'hum.. algo huele raro... tienes que escribir almenos 30 caracteres!',
            ],
        }
    },
    methods: {
        addMessage() {
          // Swap this credentials to your service credential from emailjs.com this is Important! so you get email to your business email account
          emailjs.sendForm('service_qe62coj','template_cuh12ka', this.$refs.form,'user_njL9HtVxRG3Lr78oXNGLS', {
            name: this.newMessage.first,
            email: this.newMessage.email,
            phone: this.newMessage.phone,
            product: this.newMessage.products,
            message: this.newMessage.content,
        })
        .then((result) => {
          messagesRef.push(this.newMessage);
          this.newMessage.first = '';
          this.newMessage.last = '';
          this.newMessage.email = '';
          this.newMessage.phone = '';
          this.newMessage.product = '';
          this.newMessage.content = '';
          toastr.success('Tu mensaje fue enviado correctamente');
          this.displayText = 'Nice job!';
          this.nameRules = true;
          this.emailRules = true;
          this.namePhone = true;
          this.productRules = true;
          this.contentRules = true;
            console.log('SUCCESS!', result.text);
        }, (error) => {
            console.log('FAILED...', error.text);
        });

        },
        markcompleted: function() {
            this.displayText = 'hum.. creo que algo hace falta';
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
