<template>
  <div id="app">{{data}}</div>
</template>
<script>
  const axios = require("axios");
  export default {
    name: "App",
    data() {
      return {
        data: {}
      };
    },
    beforeMount() {
      this.getName();
    },
    methods: {
      async getName() {
        const { data } = await axios.get("http://localhost:61208/api/3/all");
        this.data = data;
      }
    }
  };
</script>

<style>
  div {
    color: azure;
  }
</style>