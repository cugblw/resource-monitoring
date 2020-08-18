<template>
  <div id="requestData">
    <h1>{{dec}}</h1>
    <div>
      <p>{{ data }}</p>
      <h3>{{ dec }}</h3>
      <h1>{{ abc }}</h1>
    </div>
    <div>
      <p>{{ data }}</p>

      <GetData v-bind:cpu="dec"></GetData>
    </div>
  </div>
</template>
<script>
  import GetData from './GetData';
  export default {
    name: "RequestData",
    components: {
      GetData
    },
    data() {
      return {
        data: {},
        dec: null,
        abc: null
      };
    },
    async mounted() {
      await this.$https.get("http://localhost:61208/api/3/all")
        .then(response => (this.data = response.data.cpu))
        .catch(error => console.log(error))
        .finally(() => this.loading = false);
      // this.data = acdata;
      // this.data = acdata.data.cpu;
      this.dec = this.data.total;
      cpurate = this.data.total;
      this.abc = "DEF";
      console.log(typeof acdata.data["cpu"]);
      console.log(typeof this.data);
      console.log(acdata.data["cpu"].total);
      console.log(acdata.data["cpu"]);
    }
  };
</script>

<style>
  div {
    color: azure;
  }
</style>