<style scoped>

h1 {
    margin-bottom: 1vw;
}

.bold {
    -webkit-text-stroke-width: medium;
}

.v-card {
    display: inline-block;
}

.margin {
    margin: 10px !important;
}

.mx-auto {
    margin-top: 10vw;
    margin-bottom: 10vw;
}
.v-image {
  z-index:0;
}

</style>

<template>
    <v-card class="mx-auto">
      <h1> about us </h1>
        <v-img
        alt="Apesyntax logo"
        class="shrink mr-2 margin center"
        contain src="https://firebasestorage.googleapis.com/v0/b/mexdev-40fff.appspot.com/o/logos%2Fmxdv%20-%20logo%20500px.png?alt=media&token=dc7d1c88-4580-4333-b07d-aeeb9f1295d2"
        transition="scale-transition" width="100" /><br>
        <v-card-title class="center">
        </v-card-title>
        <h5> Coding solutions </h5><br>
        <v-divider></v-divider>
        <v-card-text>
            <h5><b>About Vision:</b></h5>
            <br>
            <p> MexDev is a web development agency dedicated to providing coding solutions for big and small companies merging into the online business or updating their current app progress.</p>
            <h5><b>About the project:</b></h5>
            <br>
            <p> CEO: Kevin Naf  </p>
            <br>
            <p> Dev: Abraham Felix </p>

        </v-card-text>
    </v-card>
</template>
