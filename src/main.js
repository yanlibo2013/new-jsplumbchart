import Vue from "vue";
// import App from "./App.vue";
import Jusplumpchart from "./view/chart.vue";

Vue.config.productionTip = false;

new Vue({
  render: h => h(Jusplumpchart)
}).$mount("#app");
