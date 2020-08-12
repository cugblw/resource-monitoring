<template>
  <div id="app">
    <!-- 顶栏 -->
    <el-header height="50px">
      <h2>系统资源监控</h2>
    </el-header>
    <!-- 嵌套容器 -->
    <el-container>
      <!-- 侧边导航菜单 -->
      <el-aside width="200px">
        <el-menu default-active="$route.path" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose">
          <el-menu-item index="1">
            <i class="el-icon-s-grid"></i>
            <span slot="title">仪表盘</span>
          </el-menu-item>
          <el-menu-item index="2">
            <i class="el-icon-info"></i>
            <span slot="title">其它</span>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <!-- 内容 -->
      <el-main>
        <router-view>
        </router-view>
      </el-main>
    </el-container>
    <!-- 底栏 -->
    <el-footer height="30px">&copy;系统资源监控 @Weil Lee 2020</el-footer>
  </div>
</template>

<script>
  import Dashboard from "./components/Dashboard"
  export default {
    name: 'App'
  }
</script>

<style>
  .el-menu-item {
    background-color: #252525;
    font-size: large;
    border: 5px;
    color: azure;
  }

  .el-menu {
    border: 0px;
  }


  .el-header {
    background-color: #323232;
    color: azure;
    text-align: left;
    line-height: 60px;
    display: flex;
    justify-content: left;
    align-items: center;
  }

  .el-footer {
    background-color: #007ACC;
    color: azure;
    flex: 1;
    display: flex;
    text-align: right;
    align-items: center;
    justify-content: center;

  }

  .el-aside {
    background-color: #252525;
    margin: 0;
  }

  .el-main {
    background-color: #1e1e1e;
    display: flex;
    flex-direction: column;
    text-align: center;
    height: 100%;
  }

  /* .el-main {
      background-color: #1e1e1e;
      color: #333;
      line-height: 30vh
    } */

  html,
  body,
  #app,
  .el-container {
    padding: 0px;
    margin: 0px;
    height: 100%;
  }
</style>