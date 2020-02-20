import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import JQuery from "jquery";
window.$ = JQuery;

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
