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

ul {
display: inline-flex;
white-space: pre-wrap;
font-family: monospace;
}

.col-b {
  width: 33%;
  display: -webkit-inline-box;
  -webkit-box-pack: center;
}

.col-100 {
  width:100%;
}
p {
  display: inline;
  text-align: left !important;
}
h4 {
  text-align: center;
}
.gray {
  color:gray;
}
</style>

<template>
    <v-card class="mx-auto">
      <h1> About us </h1>
      <h4> Mexdev Coding solutions </h4>
      <v-card-text>
            <h5><b>About Vision:</b></h5><br>
            <v-divider></v-divider>
            <p> MexDev is a web development agency providing coding solutions as a service for individuals, companies & contractors, upgrading into the online business model or updating their current app progress.</p>
            <br><br>
            <h5><b>About the project:</b></h5><br>
            <v-divider></v-divider><br>
            <h4>principles</h4>
            <br>
      </v-card-text>
            <div>
              <div class="col-100">
                <div class="col-b">
                  <v-img
                  alt="Abraham Felix"
                  class="shrink mr-2 margin center"
                  contain src="https://fintechhorizonsmedia.com/assets/abraham-24b58f3ac4ffda9aadada5db47f0ab3c9259cad5ebf48e62f3c895d485e24532.png"
                  transition="scale-transition" width="100" /><br>
                  <p> Abraham Felix </p>
                </div>

                  <v-divider vertical class="gray"></v-divider>

                <div class="col-b">
                  <v-img
                  alt="Abraham Felix"
                  class="shrink mr-2 margin center"
                  contain src="https://fintechhorizonsmedia.com/assets/kevin-884e174bc81a6e353c210086518783420addc3daab670ab41fb608ddcfd4f2c3.png"
                  transition="scale-transition" width="100" /><br>
                  <p> Kevin Nafziger </p>
                </div>
              </div>
              <br><br>
            </div>
    </v-card>
</template>
