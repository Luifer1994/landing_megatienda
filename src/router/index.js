import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/terms-conditions",
    name: "TermsConditions",
    component: () => import("../views/TermsAndConditions.vue"),
  },
  {
    path: "/register-user",
    name: "RegisterUser",
    component: () => import("../views/RegisterUser.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
