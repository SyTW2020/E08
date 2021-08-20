import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Registro from "../views/Registro.vue";
import Login from "../views/Login.vue";
import Carrito from "../views/Carrito.vue";
<<<<<<< HEAD
import Profile from "../views/Profile.vue";
=======
import Detalles from "../views/Detalles.vue";
>>>>>>> detalles
import store from "../store/index"


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
    meta: {rutaProtegida: true}
   
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
    path: "/detalles",
    name: "Detalles",
    component: Detalles,
  },
  {
    path: "/profile",
    name:"profile",
    component: Profile,
    meta: {rutaProtegida: true}
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

/* eslint-disable */
router.beforeEach((to, from, next) => {

  const checkRuta = to.matched.some(item => item.meta.rutaProtegida)
  
  if( checkRuta && store.state.token === null ) {
    next('/')
  } else{
    next()
  }
  
  })
  /* eslint-enable */

export default router;
