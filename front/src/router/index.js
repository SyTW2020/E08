import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Registro from "../views/Registro.vue";
import Login from "../views/Login.vue";
import Carrito from "../views/Carrito.vue";
import Profile from "../views/Profile.vue";
import Detalles from "../views/Detalles.vue";
import store from '@/store/index.js'



Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => 
    import(/* webpackChunkName: "about" */ "../views/About.vue"),
    meta: {requiresAuth: true}
   
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
    name:"profile",
    component: Profile,
    meta: {requiresAuth: true}
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});



/* eslint-disable */
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (store.state.auth) {
      next();
    } else {
      next('/login');
    }
  } else {
    next();
  }
});
  /* eslint-enable */

export default router;
