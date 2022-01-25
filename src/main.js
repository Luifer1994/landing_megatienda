import { createApp } from "vue";
import App from "./App.vue";
import VCalendar from "v-calendar";
import router from "./router";
import Notifications from "@kyvg/vue3-notification";

createApp(App).use(router).use(VCalendar, {}).use(Notifications).mount("#app");
