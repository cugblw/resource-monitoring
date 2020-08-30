<template>
  <div id="app">
    <!-- 顶栏 -->
    <el-header height="50px">
      <h2>系统资源监控</h2>
    </el-header>
    <!-- 嵌套容器 -->
    <el-container>
      <!-- 侧边导航菜单 -->
      <el-aside :width="leftMenu.isCollapse ? '64px' : '230px'">
        <el-menu
          v-for="(item, index) in leftMenu.navList"
          :key="index"
          unique-opened
          router
          :default-active="$route.path"
          :collapse="leftMenu.isCollapse"
          :collapse-transition="false"
        >
          <component
            class="menu-item"
            :is="
              item.children && item.children.length > 0
                ? 'el-submenu'
                : 'el-menu-item'
            "
            :index="item.url"
          >
            <template slot="title">
              <i :class="[item.icon]"></i>
              <span>{{ item.title }}</span>
            </template>
            <template v-if="item.children && item.children.length > 0">
              <el-menu-item
                class="menu-item"
                v-for="(v, i) in item.children"
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
          <div class="toggle-button">
            <i
              :class="
                leftMenu.isCollapse ? 'el-icon-s-unfold' : 'el-icon-s-fold'
              "
              @click="toggleCollapse"
            ></i>
          </div>
          <div>
            <router-view> </router-view>
          </div>
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
  },
  methods: {
    toggleCollapse() {
      return (this.leftMenu.isCollapse = !this.leftMenu.isCollapse);
      console.log(this.leftMenu.isCollapse);
    }
  }
  // components: { Hamburger },
  // methods: {
  //   toggleSideBar() {
  //     this.$store.dispatch("app/toggleSideBar");
  //   }
  // }
};
</script>

<style>
/* div{
  color: azure;
} */

.el-menu {
  border-right: 0;
  color: azure;
  background-color: #252525;
}

.el-menu-item {
  font-size: medium;
  /* border: 5px; */
  color: azure;
  background-color: #252525;
}

.el-submenu__title {
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
  color: azure;
  /* border: #252525; */
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

.toggle-button {
  background: rgb(236, 9, 115);
  line-height: 24px;
  color: azure;
  cursor: pointer;
}

/*隐藏文字*/
.el-menu--collapse.el-menu-item {
  display: none;
}

/*隐藏 > */
.el-menu--collapse .el-submenu__title .el-submenu__icon-arrow {
  display: none;
}

html,
body,
#app,
.el-container {
  height: 100%;
}
</style>
