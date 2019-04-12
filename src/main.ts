// import './global.d.ts';
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./registerServiceWorker";

Vue.config.productionTip = false;

// import styles
import "alertifyjs/build/css/alertify.min.css";
import "alertifyjs/build/css/themes/default.min.css";

window.vm = new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
