import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import InstantSearch from "vue-instantsearch/vue3/es";
import "./assets/tailwind.css";

const app = createApp(App);
app.use(InstantSearch);
app.use(store);
app.use(router);

app.mount("#app");
