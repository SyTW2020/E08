<template>
  <div id="app" class="relative">
    <Header />
    
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Footer from "@/components/Footer.vue";
import Header from "./components/Header.vue";

export default {
  components: { Header, Footer },
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
