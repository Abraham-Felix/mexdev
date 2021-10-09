<template>

<v-app>
<!-- it might need more height in body as content so it works properly -->
<head>
<meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
     <!-- nav -->
     <Nav />
     <!-- body -->
      <div id="body">
        <main>
          <router-view/>
        </main>
     </div>
       <Footer/>

  </v-app>
</template>
<script>
import Footer from './components/navigation/Footer.vue'
import Nav from './components/navigation/Nav.vue'

export default {
  name: 'App',
  components: {
    Footer,
    Nav,
  }
}
</script>


<style lang="scss">
@media screen and (min-width:900px) {
  .mobile-icons {
    display: none;
    font-size:1.3rem;
  }
}
@media screen and (max-width:900px) {
  .web-nav-btns {
    display: none;
    font-size:1.3rem;
  }
  .nav-btns {
    width:20px !important;
  }
}
.nav-btns {
  width: 100px;
}
#body {
  width: 100%;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

#nav {
      height: fit-content;
      z-index: 10;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
.nav-col-mid {
    width: 100%;
    display: -webkit-inline-box;
    -webkit-box-pack: center;
}

// iphone6/7/8/9/x/+/S
@media only screen and (max-width: 400px){
    .v-parallax__content {
       padding:0px !important;
       transition: 1s;
       }
}
@media only screen and (max-width: 497px){
  .nav-col-mid {
      width: 100%;
      display: flex !important;
      -webkit-box-pack: center;
  }
}
#drop-d {
  z-index:99;
}
</style>
