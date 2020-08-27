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
          unique-opened
          router
          :default-active="$route.path"
          class="left-menu"
          :collapse="leftMenu.isCollapse"
        >
          <component
            class="menu-item"
            v-for="value in leftMenu.navList"
            :key="value.title + value.url"
            :index="value.url"
            :is="
              value.children && value.children.length > 0
                ? 'el-submenu'
                : 'el-menu-item'
            "
          >
            <template slot="title">
              <i :class="[value.icon]"></i>
              <span>{{ value.title }}</span>
            </template>
            <template v-if="value.children && value.children.length > 0">
              <el-menu-item
                class="menu-item"
                v-for="(v, i) in value.children"
                :key="v.url + i"
                :index="v.url"
              >
                <i :class="[v.icon]"></i>
                <span slot="title">{{ v.title }}</span>
              </el-menu-item>
            </template>
          </component>
        </el-menu>
      </el-aside>
      <!-- 内容 -->

      <el-main>
        <div class="topbar-container">
          <div class="toggle-btn" @click="toggleSidebar">
            <i class="fa fa-navicon"></i>
          </div>
          <router-view> </router-view>
        </div>
      </el-main>
    </el-container>
    <!-- 底栏 -->
    <el-footer height="30px"
      >Copyright &copy; 2020 @ Weil Lee. All rights reserved.</el-footer
    >
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      leftMenu: {
        isCollapse: false,
        navList: [
          {
            icon: "el-icon-s-grid",
            title: "Dashboard",
            url: "/src/components/menus/Dashboard.vue"
          },
          {
            icon: "el-icon-s-order",
            title: "导航一",
            url: "/src/components/menus/NavItem1.vue"
          },
          {
            icon: "el-icon-s-opportunity",
            title: "导航二",
            url: "/src/components/menus/NavItem2.vue"
          },
          {
            icon: "el-icon-s-help",
            title: "导航三",
            // url: "/src/components/menus/NavItem3.vue",
            children: [
              {
                icon: "el-icon-s-data",
                title: "子菜单一",
                url: "/src/components/menus/ImageEffect.vue"
              },
              {
                icon: "el-icon-s-data",
                title: "子菜单二",
                url: "/"
              },
              {
                icon: "el-icon-loading",
                title: "子菜单三",
                url: "/"
              }
            ]
          },
          {
            icon: "el-icon-info",
            title: "其他信息",
            url: "/src/components/menus/Other.vue"
          }
        ]
      }
    };
  }
};
</script>

<style>
/* div{
  color: azure;
} */

.el-menu {
  border-right: 0;
}

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

:focus {
  outline: 0;
}

html,
body,
#app,
.el-container {
  height: 100%;
}
</style>
