<template>
  <div id="requestData">
    <h1>CPU使用率</h1>
    <div>
      <p>{{ data }}</p>
      <h3>User: {{ user }}</h3>
      <h1>System: {{ system }}</h1>
    </div>
    <div>
      <!-- <p>{{ cpudata }}</p> -->
      <GetData v-bind:cpu="total"></GetData>
    </div>
  </div>
</template>
<script>
// const GetMonitoringData = require('../GetMonitoringData');
import { getCpuData } from "../monitoring-data";
import GetData from "./GetData";

export default {
  name: "RequestData",
  components: {
    GetData
  },
  data() {
    return {
      data: null,
      user: 0,
      system: 0,
      total: 0
    };
  },
  async mounted() {
    this.data = await getCpuData();
    this.user = this.data.user;
    this.total = this.data.total;
    this.system = this.data.system;
  }
};
</script>

<style>
div {
  color: azure;
}
</style>
