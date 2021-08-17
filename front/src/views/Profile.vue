<template>
  <div class="login">
    <Profile_component></Profile_component>
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
