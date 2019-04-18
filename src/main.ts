// import './global.d.ts';
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import corePlugin from "./core/core.plugin";
import "./registerServiceWorker";
import VeeValidate from "vee-validate";

Vue.config.productionTip = false;
Vue.use(corePlugin);
Vue.use(VeeValidate);

// import styles
import "./styles/main.scss";
import "alertifyjs/build/css/alertify.min.css";
import "alertifyjs/build/css/themes/default.min.css";

(window as any).vm = new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
