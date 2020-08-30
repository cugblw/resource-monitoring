import Vue from "vue";
import Router from "vue-router";
// import Dashboard from '@/components/Dashboard'
import Dashboard from "../components/menus/Dashboard.vue";
import Other from "../components/menus/Other.vue";
import NavItem1 from "../components/menus/NavItem1.vue";
import NavItem2 from "../components/menus/NavItem2.vue";
import NavItem3 from "../components/menus/NavItem3.vue";
import ImageEffect from "../components/menus/ImageEffect.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/src/components/menus/Dashboard.vue",
      name: "Dashboard",
      component: Dashboard
    },
    {
      path: "/src/components/menus/NavItem1.vue",
      name: "NavItem1",
      component: NavItem1
    },
    {
      path: "/src/components/menus/NavItem2.vue",
      name: "NavItem2",
      component: NavItem2
    },
    {
      path: "/src/components/menus/NavItem3.vue",
      name: "NavItem3",
      component: NavItem3
    },
    {
      path: "/src/components/menus/Other.vue",
      name: "Other",
      component: Other
    },
    {
      path: "/src/components/menus/ImageEffect.vue",
      name: "ImageEffect",
      component: ImageEffect
    }
  ]
});
