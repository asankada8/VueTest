import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import ITechnologies from "../views/ImmersiveTechnoligies.vue";
import Robotics from "../views/Robotics.vue";
import AI from "../views/ArtificalInteligence.vue";
import Gaming from "../views/Gaming.vue";
import Studio from "../views/Studio.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/itechnologies",
    name: "ITechnologies",
    component: ITechnologies
  },
  {
    path: "/robotics",
    name: "Robotics",
    component: Robotics
  },
  {
    path: "/ai",
    name: "AI",
    component: AI
  },
  {
    path: "/gaming",
    name: "Gaming",
    component: Gaming
  },
  {
    path: "/studio",
    name: "Studio",
    component: Studio
  },
  // {
  //   path: "/about",
  //   name: "About",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/About.vue")
  // }
];

const router = new VueRouter({
  routes
});

export default router;
