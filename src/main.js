// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import router from "./router";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import echarts from "echarts";
import axios from "axios";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
// import "./assets/css/fontawesome.css";

Vue.use(ElementUI);
Vue.prototype.$http = axios;
Vue.prototype.$echarts = echarts;
library.add(fab, fas, far);

Vue.config.productionTip = false;

// axios.defaults.baseURL = "http://10.190.44.49:61208";
// axios.defaults.headers.post["Content-Type"] = "application/json";

Vue.component("font-awesome-icon", FontAwesomeIcon);
// Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  components: {
    App
  },
  template: "<App/>"
});
