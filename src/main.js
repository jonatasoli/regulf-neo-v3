import { createApp } from "vue";
import InstantSearch from "vue-instantsearch/vue3/es";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./assets/tailwind.css";

const app = createApp(App);
app.use(InstantSearch);
app.use(store);
app.use(router);

app.mount("#app");
