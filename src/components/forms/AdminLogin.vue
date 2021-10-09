<template>
 <v-container class="fill-height" fluid>
    <v-card class="mt-n15 pa-5 center ">
       <v-form class="center ">
      <div class="login">
        <h2>Login</h2>
        <v-text-field class="form-control"  type="text" name="username" v-model="input.username" placeholder="Username" />
        <v-text-field class="form-control"  type="password" name="password" v-model="input.password" placeholder="Password" />
        <v-btn class="primary ma-3" type="button" v-on:click="login()">Login</v-btn>
      </div>
    </v-form>
    </v-card>
</v-container>
</template>

<script>
    export default {
        name: "AdminLogin",
        data() {
            return {
                input: {
                    username: "",
                    password: ""
                }
            }
        },
        methods: {
            login() {
                if(this.input.username == "admin" && this.input.password == "pass") {
                    // Additional logic here...
                    this.$store.commit("setAuthentication", true);
                    this.$router.replace({ name: "Admin" });
                } else {
                    console.log("The username and / or password is incorrect");
                }
            }
        }
    }
</script>
<style scoped>
.login {
  max-width: 200px;
  margin: auto;
}
.v-card {
    height: auto;
    width: min-content;
    width: auto;
    -webkit-box-pack: center;
}
#body {
    position: inherit !important;
}
</style>
