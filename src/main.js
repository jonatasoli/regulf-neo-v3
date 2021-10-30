import { createApp } from "vue";
import InstantSearch from "vue-instantsearch/vue3/es";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "./router";
import "./assets/tailwind.css";

const app = createApp(App);
app.use(InstantSearch);
app.use(router);
app.use(createPinia());

app.mount("#app");
