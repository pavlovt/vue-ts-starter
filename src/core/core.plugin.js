import conf from "./conf";
import core from "./core";
import * as form from "@/parts/form";

export default {
  install(Vue, options) {
    // register methods and hooks in all app components
    Vue.mixin({
      created() {
        this.core = core;
        this.conf = conf;
      },
      methods: {}
    });

    // register all form components
    _(form).forIn((val, key) => {
      // console.log(val, key);
      Vue.component(key, val);
    });

    // register filter
    Vue.filter("cap", function(value) {
      if (!value) return "";
      value = value.toString();
      return value.charAt(0).toUpperCase() + value.slice(1);
    });
  }
};
