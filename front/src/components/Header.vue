<template>
  <div class="header">
  <b-navbar toggleable="md" type="dark" variant="dark">
    <b-container>
    <b-navbar-brand :to="{name: 'home'}">Elective</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
    <b-collapse is-nav id="nav-collapse">
      <b-navbar-nav>
        <b-nav-item :to="{name: 'home'}" exatly >Home</b-nav-item>
        <b-nav-item :to="{name: 'about'}">About</b-nav-item>
        <b-nav-item :to="{name: 'about'}">Registro</b-nav-item>
        <b-nav-item :to="{name: 'about'}">Login</b-nav-item>
      </b-navbar-nav>
 
    </b-collapse>

</b-container>
 
  </b-navbar>

  </div>
</template>

<script>
export default {
    name: "Header",
}
</script>

