import Vue from "vue";
import VueMaterial from "vue-material";
import "vue-material/dist/vue-material.css";

// import base layout
import AppStage from "./view-layer/layout/AppStage/AppStage";

// import router
import router from "./business-layer/router";

// import Vuex store
import store from "./data-layer/store";

Vue.use(VueMaterial);

Vue.material.registerTheme("default", {
  primary: "blue",
  accent: "red",
  warn: "red",
  background: "grey"
});

// mount Vue
// eslint-disable-next-line
new Vue({
  el: "#appStage",
  router,
  store,
  render: h => h(AppStage)
});
