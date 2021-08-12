<template>
  <div id="app" class="relative">
    <Header/>
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/registro">Registro</router-link> |
      <router-link to="/login">Login</router-link>
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
methods :{
  ...mapActions("readToken")
},
created(){
this.readToken()
}
};
</script>

<style>
  #app {
    margin: 0 !important;
    padding: 0 !important;
  }
</style>
