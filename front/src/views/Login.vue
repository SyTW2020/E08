<template>
  <div class="login">
    <Login_component></Login_component>
  </div>
</template>

<script>
import Login_component from "@/components/Login_component.vue";

export default {
  name: "Login",
  components: {
    Login_component,
  },
};
</script>
