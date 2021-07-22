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
      <v-card-text class="text-justify p10s">
            <h5><b>About Vision:</b></h5><br>
            <v-divider class="mb-5"></v-divider>
            <p> MexDev is a web development agency providing coding solutions as a service for individuals, companies & contractors, upgrading into the online business model or updating their current app progress.</p>
            <br><br>
            <h5><b>About the project:</b></h5><br>
            <v-divider></v-divider><br>
            <p>MexDev.io Is a remote agency with founders in the USA and MX.
Our management team is bilingual, as is most of our staff. Our two founers have more than 15 years of combined software development experience.

Vision, Objectives and Services

Software development talent is expensive.
Hiring new developers for a project is risky too, as a developer's skills may not match their resume and because some engineers fail to keep current on the latest languages, platforms and best practices. As remote work expands, so do the number of applicants, creating even greater risk for hiring managers.

Our goal is to deliver high-quality nearshoring and software development at an affordable price, from developers whose skills and productivity are regularly evaluated. We use agile methodologies, secure information exchange, and productivity and skills assessment tools to eliminate the risks of hiring outside help.
</p>
<h5 class="mt-10"><b>Why are we different?</b></h5><br>
<v-divider></v-divider><br>
<v-list-item>
      <v-list-item-content>
        <v-list-item class="text-sm-left">● Mexdev provides an alternative to hiring new personnel for large and small projects.</v-list-item>
        <v-list-item>● Our teams are available for hire for projects of any length.</v-list-item>
        <v-list-item>● We offer simple, clear and affordable pricing on all of our work.</v-list-item>
        <v-list-item>● Mexdev provides transparency, value, trust and flexibility. We never take commissions, instead we serve as a trusted partner.</v-list-item>
        <v-list-item>● We help you achieve your goals without the need to make expensive new hires that can harm your bottom line, now and for years to come.</v-list-item>
       </v-list-item-content>
</v-list-item>
<h5 class="mt-10"><b>Team Leads:</b></h5><br>
<v-divider></v-divider><br>
      </v-card-text>
            <div>
              <div class="col-100">
                <div class="col-b">
                  <v-img
                  alt="Abraham Felix"
                  class="shrink mr-2 margin center"
                  contain src="https://fintechhorizonsmedia.com/assets/abraham-24b58f3ac4ffda9aadada5db47f0ab3c9259cad5ebf48e62f3c895d485e24532.png"
                  transition="scale-transition" width="100" /><br>
                  <p> Abraham Felix </p><br>
                  <p> Front-End </p>
                </div>

                  <v-divider vertical class="gray"></v-divider>

                <div class="col-b">
                  <v-img
                  alt="Abraham Felix"
                  class="shrink mr-2 margin center"
                  contain src="https://fintechhorizonsmedia.com/assets/kevin-884e174bc81a6e353c210086518783420addc3daab670ab41fb608ddcfd4f2c3.png"
                  transition="scale-transition" width="100" /><br>
                  <p> Kevin Nafziger </p>
                  <br>
                  <p> Back-End </p>
                </div>
              </div>
              <br><br>
            </div>
    </v-card>
</template>
