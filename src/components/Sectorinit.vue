//i am a child component that is taking a prop as an argument.
<template>
  <h1> {{stitle}} </h1>
</template>

  <script>
  export default {
    name:  'Sectorinit',
    props: ['stitle']
  }
  </script>
