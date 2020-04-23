import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/home/Home.vue";
import Mini from "../views/home/Mini";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/mini",
    name: "mini",
    component: Mini
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
