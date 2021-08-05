<template>
  <div class="footer">
    <b-navbar toggleable="md" variant="dark" type="dark">
      <b-container align="center">
        <b-nav-text>Contacto: {{ movil }}</b-nav-text>
        <b-nav-text> Correo: {{ email }}</b-nav-text>
      </b-container>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {
      movil: "XXX-XXX-XXX",
      email: "ull.e08@etsi.com",
    };
  },
};
</script>

<style></style>
