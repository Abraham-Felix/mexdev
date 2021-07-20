
<style>
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
  .Amodule p {
    color: #474747;
  }
  .Amodule {
      background: white;
      display: inline-table;
      align-items: center;
      justify-content: center;
      min-height: 500px;
      padding: 15px;
      border-radius: 10px;
      -webkit-box-shadow: 0px 0px 25px -16px rgba(161,161,161,1);
      -moz-box-shadow: 0px 0px 25px -16px rgba(161,161,161,1);
      box-shadow: 0px 0px 25px -16px rgba(161,161,161,1);
      text-align: center;
      text-decoration: none;
      margin-left: 5px;
      margin-right: 5px;
      flex: 1 1 300px;
      margin: 0;
      color:#4f81bd !important;
  }
  .Amodule:hover {
      background: #fbfbfb;
      -webkit-box-shadow: 0px 0px 35px -16px rgba(161,161,161,1);
      -moz-box-shadow: 0px 0px 35px -16px rgba(161,161,161,1);
      box-shadow: 0px 0px 35px -16px rgba(161,161,161,1);
  }
  .Agrid {
      display: flex;
      flex-wrap: wrap;
      grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
      grid-auto-rows: minmax(150px, auto);
      grid-gap: 1em;
      max-width: 1200px !important;
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
  }

  .col-50 {
    width: 50%;
    display: inline-grid;
  }

  .des-over {
    overflow:auto;
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
</style>
<template>
  <div>
    <div>
      <h1 color="primary" class="mb-10 mt-5"> Front end & Back end Jobs </h1>
    <div
    class="jobs-card ">
    <div v-if="errored">
      <p>Lo sentimos, no es posible obtener la información en este momento, por favor intente nuevamente mas tarde</p>
    </div>
    <div v-else class="Agrid ">
           <v-progress-circular
           :size="50"
           color="blue"
           indeterminate
           v-if="loading"
           class="center my-10"
         ></v-progress-circular>
      <div
        v-else
        v-for="job in jobs"
        v-bind:key="job.id"
        class="Amodule  back"
      >
      <div>
        <v-container>
        <h3 class="j-title" v-bind:href="job.url" >{{ job.title }}</h3>
         <img class="job-pic" :src="job.company.avatar" width="150">
        <div class="my-1 job-detail ">
          <p class="col-tres mdi mdi-clock"> {{ job.type }} </p>
          <p class="col-tres mdi mdi-earth"> {{ job.location }} </p>
          <p class="col-tres mdi mdi-calendar">   {{job.published_at.date}} </p>
        </div>
        <v-divider class="mx-4"></v-divider>
      <p class="des-over ">  {{ job.description }} </p>
    </v-container>
  </div>
  <div class="t-row">
  <v-btn
   depressed
   elevation="2"
   color="primary"
   v-bind:href="job.url"><span class="mdi mdi-open-in-new"></span> Apply </v-btn>
 </div>
  </div>
  </div>
  </div>
</div>
</div>
</template>

<script>
import axios from "axios";


export default {
  name: 'Jobs',
  data () {
      return {
        jobs: null,
        loading: true,
        errored: false
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
