
import Vue from "vue";
import Jsplumbchart from "./index.vue";

const Components = {
  Jsplumbchart
};

Object.keys(Components).forEach(name => {
  Vue.component(name, Components[name]);
});

// console.log("Vue", Vue);
// console.log('Vue.component', Vue.component);
export default Components;

// export default {
//   install(Vue, options) {
//     // Let's register our component globally
//     // https://vuejs.org/v2/guide/components-registration.html
//     Vue.component("Jsplumbchart", Jsplumbchart);
//   }
// };
