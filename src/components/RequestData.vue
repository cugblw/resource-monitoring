<template>
  <div id="app">
    <!-- <h2>{{dec}}</h2> -->
    <h1>{{dec}}</h1>
    <h3>{{dec}}</h3>
    <!-- <i>{{data}}</i> -->
    <article>{{data}}</article>
  </div>
</template>
<script>
  const axios = require("axios");
  export default {
    name: "App",
    data() {
      return {
        data: {},
        dec
      };
    },
    beforeMount() {
      this.getName();
    },
    methods: {
      async getName() {
        const acdata = await axios.get("http://localhost:61208/api/3/all");
        // this.data = acdata;
        this.data = acdata.data["cpu"];
        this.dec = acdata.data["cpu"].user
        console.log(typeof acdata.data["cpu"])
        console.log(typeof this.data)
        console.log(acdata.data["cpu"].user)
        console.log(acdata.data["cpu"])
      },
      mounted() {
        getName()
      },
    }

  };
</script>

<style>
  div {
    color: azure;
  }
</style>