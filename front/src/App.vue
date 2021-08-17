<template>
  <div id="app" class="relative">
    <div v-show="showModal" class="login_bg flex absolute items-center justify-center w-full h-screen z-10">
      <Login_component class="w-full"/>
    </div>
    <Header @clicked="visibleModal" />
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/registro">Registro</router-link> |
      <router-link to="/login">Login</router-link> | 
      <router-link to="/Profile">Perfil</router-link>
    </div>
    <router-view />
    <Footer/>
  </div>
</template>
<script>
import Footer from "@/components/Footer.vue";
import Header from "./components/Header.vue";
import Login_component from "@/components/Login_component.vue";

export default {
  components: { Header, Footer, Login_component, },
  prop: {
    showModal: {
      type: Boolean,
      default: false,
    }
  },
  methods: {
    visibleModal() {
      this.modal = true; 
      console.log("AAAAAAAAAAAAAASIPLASIA");
    }
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