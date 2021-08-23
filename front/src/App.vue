<template>
  <div id="app" class="relative">

    <Header/>
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/registro">Registro</router-link> |
      <router-link to="/login">Login</router-link> | 
      <router-link to="/profile">Perfil</router-link>
    </div>
    <router-view />
    <Footer/>
  </div>
</template>


<script>
import Footer from "@/components/Footer.vue";
import Header from "./components/Header.vue";

import {mapActions} from 'vuex'
export default {
  components: { Header, Footer, },
methods: {
  ...mapActions(['readToken','cerrarSesion'])
},
mounted(){
  this.readToken()
},
destroyed(){
  this.cerrarSesion()
}
};
</script>

<style>
  #app {
    margin: 0 !important;
    padding: 0 !important;
  }

  .login_bg {
    background-color: rgba(0, 0, 0, 0.76);
  }
</style>
