<style scoped>

h1 {
    margin-bottom: 1vw;
}
.office-img{
  margin:50px;
}
.bold {
    -webkit-text-stroke-width: medium;
}

.about-card {
  max-width:900px;
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
    z-index: 0;
}
.pleads {
  width: 50%;
}

.col-b {
    width: 33%;
    display: -webkit-inline-box;
    -webkit-box-pack: center;
}

.col-100 {
    width: 100%;
}

p {
    display: inline;
    text-align: left !important;
}

h4 {
    text-align: left;
    color: #313233;
}

.text-center {
    text-align: center;
}

.gray {
    color: gray;
}
.fav {
  height: 50px;
  width: 50px;
}
</style>

<template>

<v-card class="mt-5 mb-5 about-card">
    <h1> About </h1>
    <v-img class="center fav" src="../assets/mxdv-fav.png" />
    <v-card-text class="text-justify font-weight-medium  text-body-1 p10s">
        <h4><b>Vision:</b></h4>
        <br>
        <v-divider class="mb-5"></v-divider>
        <v-img class="mb-5 office-img" src="../assets/graphics/mxdv-home-office.jpg" />
        <div class="pt-10">
            <b class="text-h4">Hello!</b>, my name is <a target="_blank" href="https://www.github.com/abraham-felix">Abraham Felix</a>,
            a human being that would love to introduce you to <b>MexDev!</b>, a web app development support team, we provide coding solutions
            as a service creating digital products for individuals, companies & contractors, upgrading into the online business model or updating
            their current app progress, we are home office individuals with great energy.
          <br><br>
            I love working hard, I have been though to do my <b>loving God</b>, which has taught me to, & this means I study high-end concepts and constantly improve by learning new technologies, don't like the obsolete hard to use that can be to maintain & very expensive. Sounds painful, right?... but many companies are suffering today by this means. But do not worry, because the more sophisticated technology is here, providing simple, easy to maintain, modular & effectively fast-paced development! & instead of using 100 hands, we design a better system that helps to optimize digital emerging companies!"
        <h4 class="mt-10"><b>The project Big vision:</b></h4>
        <br>
        <v-divider></v-divider>
        <br>
           <b>Mexdev</b> vision is fresh & cool!. We provide a service that is 100% remote, with project founders in the USA and MX. We got more than 15 years of combined software development experience. Mexdev is currently looking for funds, but we provide our support service regardless, all with our fingers skills programming & developing products.
        <br>
        <h4 class="mt-10"><b>Project services & objectives:</b> </h4>

            <br>
            <br> <b>Software development</b> talent is expensive. Hiring new developers for a project is risky too, as a developer's skills may not match their resume and because some engineers fail to keep current on the latest languages, platforms and best practices.
            As remote work expands, so do the number of applicants, creating even greater risk for hiring managers. so why not hire a team like Mexdev?


            <br>
            <br> Our goal is to deliver high-quality ideas and software development at an affordable price, from developers whose skills and productivity are regularly evaluated. We use agile methodologies, secure information exchange, and productivity and
            skills assessment tools to eliminate the risks of hiring outside help.

        <h4 class="mt-10"><b>Why are we different?</b></h4>
        <br>
      </div>
        <v-divider></v-divider>
        <br>
        <v-list-item>
            <v-list-item-content>
                <v-list-item class="text-sm-left">● Mexdev provides an alternative to hiring new personnel for large and small projects.</v-list-item>
                <v-list-item>● Our team is available for hire for projects of any length, by streching our learning curve or adding new members.</v-list-item>
                <v-list-item>● We offer simple, clear and affordable pricing on all of our work.</v-list-item>
                <v-list-item>● Mexdev provides transparency, value, trust and flexibility in the developtment proccess.</v-list-item>
                <v-list-item>● We help you achieve your goals without the need to make expensive new hires that can harm your bottom line, now and for years to come.</v-list-item>
            </v-list-item-content>
        </v-list-item>
        <h4 class="mt-10"><b>Project Leads:</b></h4>
        <br>
        <v-divider></v-divider>
        <br>
    </v-card-text>
    <v-row>
          <v-col cols="6" >
              <div>
                  <v-img
                  alt="Abraham Felix"
                  class="pleads center rounded-lg"
                  src="@/assets/ab-felix.png"
                   />
              </div>
              <div>
               <p><b> <a target="_blank" href="https:/www.github.com/abraham-felix"> Abraham Felix</a> </b></p>
               <br>
               <p> FullStack </p>
               <br>
               <p><b>Mexico</b></p>
              </div>
          </v-col>
          <v-col cols="6">
              <div >
                  <v-img
                  alt="Abraham Felix"
                  class="pleads center rounded-lg"
                  src="@/assets/kevin-naf.jpg"
                    />
              </div>
              <div>
              <p> <b> <a target="_blank" href="https:/www.github.com/kevinnafziger"> Kevin Nafziger </a> </b></p>
              <br>
              <p> FullStack </p>
              <br>
              <p><b>USA</b></p>
             </div>
           </v-col>
          <br>
          <br>
      </v-row>
</v-card>

</template>
