import Vue from "vue";
import App from "./App.vue";
import router from "./router";

Vue.config.productionTip = false;

Vue.component("Product", {
  template: "<p>Hey there I am here</p>"
});

new Vue({
  el: "#Product"
});

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
