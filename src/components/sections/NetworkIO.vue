<template>
  <div display>
    <span>
      <svg
        t="1598163274974"
        class="icon"
        fill="azure"
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        p-id="1921"
        width="32"
        height="32"
      >
        <path
          d="M703.328 921.984l0-218.656 81.984 0 0-164-245.984 0 0 164 81.984 0 0 218.656-218.656 0 0-218.656 81.984 0 0-164-245.984 0 0 164 81.984 0 0 218.656-218.656 0 0-218.656 81.984 0 0-218.656 300.64 0 0-164-81.984 0 0-218.656 218.656 0 0 218.656-81.984 0 0 164 300.64 0 0 218.656 81.984 0 0 218.656-218.656 0zM156.704 757.984l0 109.312 109.312 0 0-109.312-109.312 0zM566.656 266.016l0-109.312-109.312 0 0 109.312 109.312 0zM457.344 757.984l0 109.312 109.312 0 0-109.312-109.312 0zM867.296 757.984l-109.312 0 0 109.312 109.312 0 0-109.312z"
          p-id="1922"
        ></path>
      </svg>
      &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;
      <p>接收：</p>
      <p id="rx">{{ rx + " " + "kb/s" }}</p>
    </span>
    <el-divider></el-divider>
    <span>
      <svg
        t="1598163274974"
        class="icon"
        fill="azure"
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        p-id="1921"
        width="32"
        height="32"
      >
        <path
          d="M703.328 921.984l0-218.656 81.984 0 0-164-245.984 0 0 164 81.984 0 0 218.656-218.656 0 0-218.656 81.984 0 0-164-245.984 0 0 164 81.984 0 0 218.656-218.656 0 0-218.656 81.984 0 0-218.656 300.64 0 0-164-81.984 0 0-218.656 218.656 0 0 218.656-81.984 0 0 164 300.64 0 0 218.656 81.984 0 0 218.656-218.656 0zM156.704 757.984l0 109.312 109.312 0 0-109.312-109.312 0zM566.656 266.016l0-109.312-109.312 0 0 109.312 109.312 0zM457.344 757.984l0 109.312 109.312 0 0-109.312-109.312 0zM867.296 757.984l-109.312 0 0 109.312 109.312 0 0-109.312z"
          p-id="1922"
        ></path>
      </svg>
      &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;
      <p>发送：</p>
      <p id="tx">{{ tx + " " + "kb/s" }}</p>
    </span>
    <p style="align-items: right;">Update Every Second.</p>
  </div>
</template>

<script>
import { getNetworkIO } from "../../monitoring-data";

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
    this.setInterval = setInterval(this.getData, 1000);
  },

  destroyed() {
    clearInterval(this.setInterval);
  }
};
</script>
<style scoped>
.my-icon {
  color: white;
  /* background-color: azure; */
  font-size: 32px;
}

span {
  display: flex;
  align-content: left;
  text-align: left;
  align-items: center;
  align-items: left;
  margin-left: 10px;
  /* float: right */
}
</style>
