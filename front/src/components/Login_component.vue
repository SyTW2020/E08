<template>
<div class="login_component">
  <h1>Login</h1>
  <p>Prueba componente Login_component</p>
    <form @submit.prevent="login(usuario)">
      <input type="email" placeholder="E-mail" v-model="usuario.email">
      <input type="password" placeholder="Password" v-model="usuario.password">
      <button type="submit">Acceder</button>
    </form>
    {{usuario}}
</div>

</template>

<script>
import {mapActions} from 'vuex'
export default {
  name: "Login_component",
  data(){
  return{
    usuario: {
        email: 'prueba9@gmail.com',
        password: 'prueba9'
      }
    }
  },
   methods: {
    ...mapActions(['login']),
  }
};
</script>
