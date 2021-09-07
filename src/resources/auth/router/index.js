const Auth = () => import("./../views/Auth.vue");

export default [
  {
    path: "/auth",
    component: Auth,
    name: "Auth",
  },
];
