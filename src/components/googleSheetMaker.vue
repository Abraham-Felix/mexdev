<template>
  <main>
  </main>  
</template>
<script>
gapi.client.sheets.spreadsheets.create({
  properties: {
    title: title
  }
}).then((response) => {
});
</script>
