import Vue from "vue";

// import base layout
import App from "./view-layer/layout/App";

// import router
import router from "./business-layer/router";

// import Vuex store
import store from "./data-layer/store";

// mount Vue
// eslint-disable-next-line
new Vue({
  el: "#app",
  router,
  store,
  render: h => h(App)
});
