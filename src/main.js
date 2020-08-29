import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import "./assets/fonts.css";
import Vuelidate from "vuelidate";
import VueTheMask from "vue-the-mask";

Vue.use(Vuelidate, VueTheMask);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount("#app");
