<template>
  <div class="register">
    <b-container>
      <b-row class="my-3">
        <b-col sm="1">
          <label for="input-user">Usuario</label>
        </b-col>
        <b-col sm="3">
          <b-form-input
            type="text"
            v-model="user"
            :state="valida"
          ></b-form-input>
        </b-col>
      </b-row>
      <b-row class="my-3">
        <b-col sm="1">
          <label for="input-email">Correo</label>
        </b-col>
        <b-col sm="3">
          <b-form-input
            type="email"
            v-model="email"
            :state="valida"
          ></b-form-input>
        </b-col>
      </b-row>
      <b-row class="my-3">
        <b-col sm="1">
          <label for="input-pass">Contraseña</label>
        </b-col>
        <b-col sm="3">
          <b-form-input
            type="password"
            v-model="pass"
            :state="valida"
          ></b-form-input>
        </b-col>
      </b-row>
      <b-row class="my-3">
        <b-col sm="1">
          <label for="input-nombre">Nombre</label>
        </b-col>
        <b-col sm="3">
          <b-form-input
            type="text"
            v-model="nombre"
            :state="valida"
          ></b-form-input>
        </b-col>
      </b-row>
      <b-row class="my-3">
        <b-col sm="1">
          <label for="input-apellidos">Apellidos</label>
        </b-col>
        <b-col sm="3">
          <b-form-input
            type="text"
            v-model="apellidos"
            :state="valida"
          ></b-form-input>
        </b-col>
      </b-row>
      <b-row class="my-3">
        <b-col sm="1">
          <label for="input-numero">Numero</label>
        </b-col>
        <b-col sm="3">
          <b-form-input type="tel" v-model="numero" :state="valida">
          </b-form-input>
        </b-col>
      </b-row>
      <b-row class="my-3">
        <b-col sm="1">
          <label for="input-address">Direccion</label>
        </b-col>
        <b-col sm="3">
          <b-form-input type="text" v-model="address" :state="valida">
          </b-form-input>
        </b-col>
      </b-row>
      <b-row class="my-3">
        <b-col sm="1">
          <label for="input-poblacion">Población</label>
        </b-col>
        <b-col sm="3">
          <b-form-input
            type="text"
            v-model="poblacion"
            :state="valida"
          ></b-form-input>
        </b-col>
      </b-row>
      <b-row class="my-3">
        <b-col sm="2">
          <label for="input-fehca-nacimiento">Fecha de Nacimiento</label>
        </b-col>
        <b-col sm="2">
          <b-form-datepicker
            id="datepicker-dateformat2"
            :date-format-options="{
              year: 'numeric',
              month: 'numeric',
              day: 'numeric',
            }"
            locale="es"
            v-model="cumple"
          >
          </b-form-datepicker>
        </b-col>
      </b-row>
      <b-col  sm="2" class="pb-4" ><b-button>Registrarse</b-button></b-col>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "Register",
  data() {
    return {
      user: "",
      email: "",
      pass: "",
      nombre: "",
      addess: "",
      poblacion: "",
      codigo: "",
      cumple: "",
    };
  },
  computed: {
    valida_user() {
      return this.user.length > 3 ? true : false;
    },
    valida_nombre() {
      return this.nombr.length > 3 ? true : false;
    },
    valida_postal() {
      return this.codigo.length === 5 ? true : false;
    },
  },
};
</script>
