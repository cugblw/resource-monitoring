<template>
  <div id="app">
    <!-- 顶栏 -->
    <el-header height="50px">
      <h2>系统资源监控</h2>
    </el-header>
    <!-- 嵌套容器 -->
    <el-container>
      <!-- 侧边导航菜单 -->
      <el-aside width="230px">
        <el-radio-group v-model="isCollapse" style="margin-bottom: 20px">
          <el-radio-button :label="false">展开</el-radio-button>
          <el-radio-button :label="true">收起</el-radio-button>
        </el-radio-group>
        <el-menu
          :default-active="this.$route.path"
          router
          mode="horizontal"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          background-color="#252525"
          active-text-color="#ffd04b"
          :collapse="isCollapse"
        >
          <el-menu-item
            v-for="(item, i) in navList"
            :key="i"
            :index="item.name"
          >
            <template slot="title">
              <i class="el-icon-s-platform"></i>
              <span> {{ item.navItem }}</span>
            </template>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <!-- 内容 -->
      <el-main>
        <router-view> </router-view>
      </el-main>
    </el-container>
    <!-- 底栏 -->
    <el-footer height="30px"
      >Copyright &copy; 2020 @ Weil Lee. All rights reserved.</el-footer
    >
  </div>
</template>

<script>
// import Dashboard from "./components/menus/Dashboard";
export default {
  name: "App",
  data() {
    return {
      navList: [
        { name: "/src/components/menus/Dashboard.vue", navItem: "Dashboard" },
        { name: "/src/components/menus/NavItem1.vue", navItem: "导航一" },
        { name: "/src/components/menus/NavItem2.vue", navItem: "导航二" },
        { name: "/src/components/menus/Other.vue", navItem: "其他信息" },
      ],
      isCollapse: true,
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>

<style>
/* div{
  color: azure;
} */

.el-menu-item {
  background-color: #252525;
  font-size: medium;
  /* border: 5px; */
  color: azure;
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

.el-aside {
  background-color: #252525;
  margin: 0;
  border: #252525;
  /* height: 100%; */
}

.el-main {
  background-color: #1e1e1e;
  display: flex;
  flex-direction: column;
  /* text-align: center; */
  height: auto;
}

.el-footer {
  background-color: #324759;
  color: azure;
  /* flex: 1; */
  display: flex;
  text-align: right;
  align-items: center;
  justify-content: center;
  /* font-size: 5; */
}

html,
body,
#app,
.el-container {
  height: 100%;
}
</style>
