import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Registro from "../views/Registro.vue";
import Login from "../views/Login.vue";
import Carrito from "../views/Carrito.vue";
import Profile from "../views/Profile.vue";
import Detalles from "../views/Detalles.vue";
import store from "@/store/index.js";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/registro",
    name: "Registro",
    component: Registro,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/carrito",
    name: "Carrito",
    component: Carrito,
  },
  {
    path: "/detalles/:id",
    name: "Detalles",
    component: Detalles,
  },
  {
    path: "/profile",
    name: "profile",
    component: Profile,
  },
];

const router = new VueRouter({
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (store.state.token) {
      next();
    } else {
      next("/login");
    }
  } else {
    next();
  }
});

export default router;
