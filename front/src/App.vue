<template>
  <div id="app">
    <Header></Header>
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>|
      <router-link to="/registro">Registro</router-link>
    </div>
    <router-view />
    <Footer></Footer>
  </div>
</template>
<script>
import Footer from "@/components/Footer.vue";
import Header from "./components/Header.vue";
export default {
  components: { Header, Footer },
};
</script>
