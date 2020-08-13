<template>
  <div>
    <!-- 第一列栅格布局 -->
    <el-row type="flex" class="row1">
      <el-col :span="8">
        <cpu-data></cpu-data>
      </el-col>
      <el-col :span="8">
        <process> </process>
      </el-col>
      <el-col :span="8">
        <memory> </memory>
      </el-col>
    </el-row>
    <!-- 第二列布局 -->
    <el-row type="flex" class="row2">
      <el-col :span="6">
        <network-io></network-io>
      </el-col>
      <el-col :span="6"></el-col>
      <el-col :span="6">
        <network-io></network-io>
      </el-col>
      <el-col :span="6"></el-col>
    </el-row>
    <!-- 第三列布局 -->
    <el-row type="flex" class="row3">
      <el-col :span="7">
        <stack-bar></stack-bar>
      </el-col>
      <el-col :span="5">
        <disk-io>
        </disk-io>
      </el-col>
      <el-col :span="12">

      </el-col>
    </el-row>
  </div>
</template>

<script>
  import CPU from "./sections/CPU";
  import NetworkIO from "./sections/NetworkIO";
  import DiskIO from "./sections/DiskIO";
  import Memory from "./sections/Memory";
  import Processes from "./sections/Processes";
  import Stack from "./sections/Stack-bar";

  export default {
    name: "dashboard",
    components: {
      "cpu-data": CPU,
      "process": Processes,
      "memory": Memory,
      "network-io": NetworkIO,
      "disk-io": DiskIO,
      'stack-bar': Stack
    }
  }
</script>

<style scoped>
  .el-row {
    /* height: 100%; */
    display: flex;
  }

  .row1 {
    line-height: 30vh;
  }

  .row2 {
    line-height: 20vh;
  }

  .row3 {
    line-height: 100%;
  }

  .el-col {
    border-radius: 5px;
    margin: 10px;
    background-color: #212529;
    opacity: 0.8;
  }
</style>