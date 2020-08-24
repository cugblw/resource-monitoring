<template>
  <div id="dashboard">
    <!-- 第一列栅格布局 -->
    <el-row type="flex" class="row1">
      <el-col :span="8" class='col1'>
        <cpu-data></cpu-data>
      </el-col>
      <el-col :span="8" class='col2'>
        <process> </process>
      </el-col>
      <el-col :span="8" class='col3'>
        <memory> </memory>
      </el-col>
    </el-row>
    <!-- 第二列布局 -->
    <el-row type="flex" class="row2">
      <el-col :span="6" class='col1'>
        <network-io></network-io>
      </el-col>
      <el-col :span="6" class='col2'>
        <span>网络O：</span>

        <el-divider></el-divider>
      </el-col>
      <el-col :span="6" class='col3'>
        <span>网络I：</span>

        <!-- <network-io></network-io> -->
        <el-divider></el-divider>
      </el-col>
      <el-col :span="6" class='col4'>
        <system-info></system-info>
      </el-col>
    </el-row>
    <!-- 第三列布局 -->
    <el-row type="flex" class="row3">
      <el-col :span="7" class='col1'>
        <stack-bar></stack-bar>
      </el-col>
      <el-col :span="5" class='col2'>
        <disk-io>
        </disk-io>
      </el-col>
      <el-col :span="12" class='col3'>
        <request-data></request-data>
        <!-- <image-fade-in></image-fade-in> -->
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
  import RequestData from "./RequestData";
  import ImageEffect from "./sections/ImageEffect"
  import SystemInfo from "./sections/SystemInfo"

  export default {
    name: "dashboard",
    components: {
      "cpu-data": CPU,
      "process": Processes,
      "memory": Memory,
      "network-io": NetworkIO,
      "disk-io": DiskIO,
      'stack-bar': Stack,
      'request-data': RequestData,
      'image-fade-in': ImageEffect,
      'system-info': SystemInfo
    }
  }

</script>

<style scoped>
  .el-row {
    /* height: 100%; */
    display: flex;
  }

  .row1 {
    line-height: 100%;
  }

  .row2 {
    line-height: 100%;
  }

  .row3 {
    line-height: 100%;
  }

  .col1 {
    border-radius: 5px;
    margin: 10px;
    background-color: #212529;
    opacity: 0.8;
  }

  .col2 {
    border-radius: 5px;
    margin: 10px;
    background-color: #212529;
    opacity: 0.8;
  }

  .col3 {
    border-radius: 5px;
    margin: 10px;
    background-color: #212529;
    opacity: 0.8;
  }

  .col4 {
    border-radius: 5px;
    margin: 10px;
    background-color: #212529;
    opacity: 0.8;
  }

  .el-divider--horizontal {
    margin: 10px 0;
    background: 0;
    border-top: 2px dashed #e8eaec;
  }

  span {
    color: azure;
  }

</style>
