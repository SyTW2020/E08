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
            v-model="form.user"
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
            v-model="form.email"
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
            v-model="form.pass"
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
            v-model="form.nombre"
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
            v-model="form.apellidos"
          ></b-form-input>
        </b-col>
      </b-row>
      <b-row class="my-3">
        <b-col sm="1">
          <label for="input-numero">Numero</label>
        </b-col>
        <b-col sm="3">
          <b-form-input type="tel" v-model="form.numero">
          </b-form-input>
        </b-col>
      </b-row>
      <b-row class="my-3">
        <b-col sm="1">
          <label for="input-address">Direccion</label>
        </b-col>
        <b-col sm="3">
          <b-form-input type="text" v-model="form.address" >
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
            v-model="form.poblacion"
            
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
            v-model="form.cumple"
          >
          </b-form-datepicker>
        </b-col>
      </b-row>
      <b-col  sm="2" class="pb-4" ><b-button v-on:click="registrar()">Registrarse</b-button></b-col>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "Register",
  data() {
    return {
      form:{
      user: "",
      email: "",
      pass: "",
      nombre: "",
      apellidos:"",
      numero:"",
      address: "",
      poblacion: "",
      codigo: "",
      cumple: "",
      }
    };
  },
  methods: {
    registrar(){
      console.log(this.form)
    }
  }
};
</script>
