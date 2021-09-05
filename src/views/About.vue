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
    z-index: 0;
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

<v-card class="mx-auto">
    <h1> About us </h1>
    <v-img class="center fav" src="../assets/mxdv-fav.png" />
    <v-card-text class="text-justify p10s">
        <h4><b>Vision:</b></h4>
        <br>
        <v-divider class="mb-5"></v-divider>
        <v-img class="mb-5" src="../assets/home-office.png" />
        <p>
            Hello, it's <a target="_blank" href="https://www.github.com/abraham-felix">Abraham Felix</a>, I would love to introduce you to <b>MexDev</b> is a web development team providing coding solutions as a service for individuals, companies & contractors, upgrading into the online business model or updating their current app progress, we are home office individuals with great energy.
        </p>
        <h4 class="mt-10"><b>The project:</b></h4>
        <br>
        <v-divider></v-divider>
        <br>
        <p>MexDev.io Is a brand new fresh remote project with project founders in the USA and MX. we are bilingual. we got more than 15 years of combined software development experience.
           we currently have to funds but we povide all with our fingers skills programing and developing our own products :D, all you see in this side has been coded to maximize the UX. </p>
        <br>
        <h4 class="mt-10"><b>Project services & objectives:</b> </h4>
        <p>
            <br>
            <br> Software development talent is expensive. Hiring new developers for a project is risky too, as a developer's skills may not match their resume and because some engineers fail to keep current on the latest languages, platforms and best practices.
            As remote work expands, so do the number of applicants, creating even greater risk for hiring managers. so why not hire a team like Mexdev?
        </p>
        <p>
            <br>
            <br> Our goal is to deliver high-quality ideas and software development at an affordable price, from developers whose skills and productivity are regularly evaluated. We use agile methodologies, secure information exchange, and productivity and
            skills assessment tools to eliminate the risks of hiring outside help.
        </p>
        <h4 class="mt-10"><b>Why are we different?</b></h4>
        <br>
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
    <div>
        <div class="col-100">
            <div class="col-b">
                <v-img alt="Abraham Felix" class="shrink mr-2 margin center" contain src="../assets/abraham-felix.png" transition="scale-transition" width="100" />
                <br>
                <p> Abraham Felix </p>
                <br>
                <p> Front-End </p>
            </div>

            <v-divider vertical class="gray"></v-divider>

            <div class="col-b">
                <v-img alt="Abraham Felix" class="shrink mr-2 margin center" contain src="../assets/KevinNaf.png" transition="scale-transition" width="100" />
                <br>
                <p> Kevin Nafziger </p>
                <br>
                <p> Back-End </p>
            </div>
        </div>
        <br>
        <br>
    </div>
</v-card>

</template>
