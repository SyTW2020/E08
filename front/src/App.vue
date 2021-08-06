<template>
  <div id="app">
    <Header></Header>
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/registro">Registro</router-link> |
      <router-link to="/login">Login</router-link>
    </div>
    <!--<router-view />-->
    <div id="items">
      <Product></Product>
    </div>
    <Footer></Footer>
  </div>
</template>
<script>
import Footer from "@/components/Footer.vue";
import Product from "./components/Product.vue";
import Header from "./components/Header.vue";
export default {
  components: { Header, Product, Footer },
};
</script>
