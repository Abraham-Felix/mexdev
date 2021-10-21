
<style>
.v-application ul, .v-application ol {
    padding-left: 0px;
}
.inner-effect {
  border-radius: 10px;
  box-shadow: inset 0px 0px 25px -16px rgb(161 161 161);
}
  .jobs-card .col-tres {
    width:33%;
    display:inline-grid;
    text-align: center;
    font-size: small !important;
  }
  .job-pic {
    border-radius: 100% 100% !important;
    box-shadow: 5px 3px 15px -10px grey;
    height: 80px;
    width: 80px;
  }
  .jobmodule p {
    color: #474747;
  }
  .jobmodule {
    background: white;
    display: inline-grid;
    align-items: center;
    justify-content: center;
    min-height: 500px;
    padding: 15px;
    margin-left:0px !important;
    margin-right:0px !important;
    text-align: center;
    text-decoration: none;
    margin-bottom: 10px !important;
    flex: 1 1 300px;
    width: 33%;
    color: #4f81bd !important;
    transition: all 0.3s ease-in;
  }
  .inner-effect:hover {
      background: #fbfbfb;
      -webkit-box-shadow:inset 0px 0px 35px -16px rgba(161,161,161,1);
      -moz-box-shadow:inset 0px 0px 35px -16px rgba(161,161,161,1);
      box-shadow: inset 0px 0px 35px -16px rgba(161,161,161,1);
  }
  .Agrid {
      display: flex;
      flex-wrap: wrap;
      grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
      grid-auto-rows: minmax(150px, auto);
      grid-gap: 1em;
      max-width: 1600px !important;
      width: 100%;
      margin-left:auto;
      margin-right:auto;
      margin-bottom: 50px;

  }
  .exespotbody{
    margin-top:100px;
    max-wdth: 1000px;
  }
  @media screen and (max-width:1400px) {
    .Fgrid {
      max-width: 600px;
    }
  }
  @media screen and (max-width:1000px) {
    .job-detail {
      height:125px ;
    }
    .j-title {
      font-size: 1.5vw ;
    }
    .job-des-over {
      overflow:auto;
      height: 200px !important;
    }
    .job-detail {
    height: 170px !important;
    transition: 1s;
    }
    .jobmodule {
      min-height: 750px;
    }
  }
  /* surface DUO*/
  @media (max-width:540px) {
    .jobmodule {
      width: 100% !important;
    }
    .j-title {
      font-size: 4vw ;
    }
    .v-application ul, .v-application ol {
    padding-left: 0px;
    }
  }
  /* iphone 6/7/8+ display*/
  @media (max-width:414px) {
    li.number {
        width: 20px !important;
        height: 20px !important;
        padding: 0px !important;
    }
    .jobmodule {
      width: 100% !important;
      margin: 0px;
    }
    .j-title {
      font-size: 4vw ;
    }
    .v-application ul, .v-application ol {
    padding-left: 0px;
    }
  }
  /* iphone x display*/
  @media (max-width:375px) {
    .jobmodule {
      width: 100% !important;
    }
    .j-title {
      font-size: 4vw ;
    }
    .v-application ul, .v-application ol {
    padding-left: 0px;
    }
  }

  .col-50 {
    width: 50%;
    display: inline-grid;
  }

  .job-des-over {
    overflow:auto;
    height: 100px;
    padding: 0px 10px;
  }
  .v-progress-circular {
  margin: 1rem;
}
.t-row {
  display: table-footer-group;
}
.j-title {
  height:100px;
}
.job-detail {
  height:115px;
  transition: 1s;
}
/* Paginated */
ul.paginate-links.languages {
    display: inline-flex;
    margin: auto;
    align-self: center;
}
li.number {
    align-content: space-between;
    margin-left: 3px;
    margin-right: 3px;
    box-shadow: 0px 0px 4px -2px #313233;
    padding: 3px;
    width: 35px;
    background: #313233;
    border-radius:3px;
}
li.number:visited, li.number:hover, li.number:target, li.number:active, li.number:focus {
  box-shadow: 0px 0px 3px -2px #313233 !important;
}
li.number a {
    color: #ffffff !important;
}
</style>
<template>
  <div>
    <div><br>
      <h1 color="primary" class="mb-10 mt-5"> Empleos remotos de Front-end & Back-end </h1>
    <div
    class="jobs-card ">
    <div v-if="errored">
      <p> Woops! i must of done something wrong... don't worry i will fix it soon! :P </p>
    </div>
    <div v-else class="Agrid d-grid">
        <v-col
          md="6"
          offset-md="3"
          v-if="loading"
          justify="center"
          class=" ">
            <v-progress-circular
             :size="50"
             color="blue"
             indeterminate
            >
            </v-progress-circular>
        </v-col>
      <paginate
         v-else
         name="languages"
         :list="jobs"
         :per="6"
         >
      <div
        v-for="job in paginated('languages')"
        v-bind:key="job.id"
        class="jobmodule  back"
      >
        <div class="inner-effect pt-3">
         <h3 class="j-title" v-bind:href="job.url" >{{ job.title.substring(0,40)+".." }}</h3>
         <img class="job-pic" :src="job.company.avatar" width="150">
         <br>
        <div class="my-1 job-detail ">
          <p class="col-tres mdi mdi-clock text--secondary"> {{ job.type }} </p>
          <p class="col-tres mdi mdi-earth text--secondary"> {{ job.location }} </p>
          <p class="col-tres mdi mdi-calendar text--secondary">   {{job.published_at.date}} </p>
        </div>
        <v-divider class="mx-4"></v-divider>
      <p class="job-des-over text--secondary">  {{ job.description }} </p>
      <div class="t-row center mb-3">
      <v-btn
       depressed
       elevation="2"
       color="primary"
       target="_blank"
       v-bind:href="job.url">
       <span class="mdi mdi-open-in-new"></span> Apply </v-btn>
     </div>
   </div>

  </div>
    </paginate>
    <paginate-links for="languages"></paginate-links>
  </div>
  </div>
</div>
<p class="center">Api sponsored by <a href="www.vuejobs.com">Vuejobs!</a></p>
</div>
</template>

<script>
import Vue from "vue";
import VuePaginate from 'vue-paginate'
import axios from "axios";

Vue.use(VuePaginate)
export default {
  name: 'Jobs',
  data () {
      return {
        jobs: null,
        loading: true,
        errored: false,
        paginate: ['languages']
      }
    },
    filters: {
      currencydecimal (value) {
        return value.toFixed(2)
      }
    },
    mounted () {
      axios.get('https://vuejobs.com/api/jobs')
        .then(response => {
          this.jobs = response.data
        })
        .catch(error => {
          console.log(error)
          this.errored = true
        })
        .finally(() => this.loading = false)
    }
}
</script>
