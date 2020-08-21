<template>
  <div display>
    <font-awesome-icon :icon="['fas', 'user-plus']" spin />

    <span>
      <p>接收：</p>
      <p id="rx">{{ rx + " " + "kb/s" }}</p>
    </span>

    <el-divider></el-divider>
    <span>
      <p>发送：</p>
      <p id="tx">{{ tx + " " + "kb/s" }}</p>
    </span>

    <h2 id="tx">{{ tx + " " + "kb/s" }}</h2>
  </div>
</template>

<script>
  import {
    getNetworkIO
  } from "../../monitoring-data";

  export default {
    data() {
      return {
        rx: 0,
        tx: 0
      };
    },

    methods: {
      async getData() {
        let data = await getNetworkIO();
        // this.rx = (data[0].rx / 1024).toFixed(2)
        // this.tx = (data[0].tx / 1024).toFixed(2)
        this.tx = (data.find(item => item.tx > 0).tx / 1024).toFixed(1);
        this.rx = (data.find(item => item.rx > 0).rx / 1024).toFixed(1);
        // document.getElementById('rx').innerHTML = this.rx + " " + "kb/s";
        // document.getElementById('tx').innerHTML = this.tx + " " + "kb/s";
      }
    },

    mounted() {
      this.getData();

      setInterval(this.getData, 1000);
    },

    destroyed() {
      clearInterval(this.setInterval);
    }
  };

</script>
<style>
  .my-icon {
    color: white;
    /* background-color: azure; */
    font-size: 32px;
  }

</style>
