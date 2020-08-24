<template>
  <div class="systeminfo">
    <h3>系统信息：{{ this.hr_name }}</h3>
    <h5>主机名称：{{ this.hostname }}</h5>
    <h5>系统名称：{{ this.os_name }}</h5>
    <h5>系统版本：{{ this.os_version }}</h5>
    <h5>系统架构：{{ this.platform }}</h5>
  </div>
</template>

<script>
import { getSystemInfo } from "../../monitoring-data.js";

export default {
  name: "systeminfo",
  data() {
    return {
      os_name: null,
      hostname: null,
      os_version: null,
      platform: null,
      hr_name: null
    };
  },
  // methods: {
  //   async getData() {
  //     let data = await getSystemInfo();
  //     this.os_name = data.os_name;
  //     this.hostname = data.hostname;
  //     this.os_version = data.os_version;
  //     this.platform = data.platform;
  //   }
  // },
  async mounted() {
    let data = await getSystemInfo();
    this.os_name = data.os_name;
    this.hostname = data.hostname;
    this.os_version = data.os_version;
    this.platform = data.platform;
    this.hr_name =
      this.os_name +
      "  " +
      this.os_version.replace("SP0", "专业版") +
      "  " +
      this.platform.replace("bit", "位");
  }
};
</script>
<style scoped>
div {
  margin: 10px;
}
</style>
