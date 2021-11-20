import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";
import AuthRoutes from "@/resources/auth/router";
import UserRoutes from "@/resources/user/router";
import AdminRoutes from "@/resources/admin/router";
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  ...AuthRoutes,
  ...UserRoutes,
  ...AdminRoutes,
  // {
  //   path: "/about",
  //   name: "About",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/About.vue"),
  // },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  const privateAdminPages = ["/admdash"];
  const privatePartnerPages = ["/dashboard"];

  const authAdminRequired = privateAdminPages.includes(to.path);
  const authUserRequired = privatePartnerPages.includes(to.path);
  const ADMIN = 2;
  const USER = 1;

  const loggedIn = JSON.parse(localStorage.getItem("user"));
  console.log("logado route", loggedIn);

  if ((authAdminRequired && !loggedIn) || (authUserRequired && !loggedIn)) {
    next("/auth");
  }
  if (loggedIn) {
    if (
      (authAdminRequired && !(loggedIn.role == ADMIN)) ||
      (authUserRequired && !(loggedIn.role == USER))
    ) {
      console.log("Nao logado")
      next("/auth");
    }
    console.log(to);
    next();
  } else {
    next();
  }
});

export default router;
