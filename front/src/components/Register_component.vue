<template>
  <div class="flex items-center justify-center mt-2">
    <div class="w-11/12 max-w-max space-y-8">
      <div class="flex justify-center space-x-6 shadow border rounded">
        <div class="w-full bg-gray-400 hidden lg:block lg:w-1/2 bg-cover rounded-l-lg">
          <img class="w-full h-full hidden lg:block bg-cover rounded-l-lg" src="@/assets/register_wallpaper.jpg" alt="Register wallpaper">
        </div>

        <div class="w-full lg:w-1/2 bg-white p-4 rounded-lg lg:rounded-l-none">
          <img class="mx-auto h-20" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" alt="Logo"/>
          <h2 class="mt-3 text-center text-3xl font-bold text-gray-900"> Registro </h2>
          <form @submit.prevent="registro(registro_datos)" method="POST" class="mt-8 space-y-6">
            <div>
              <p class="text-gray-400 italic mb-3">
                <i class="fa fa-info-circle" style="font-size: 1em"/>
                Informacion del usuario
              </p>

              <label class="block text-gray-700 text-base font-bold mb-2" for="username">Usuario</label>
              <!--<div class="rounded shadow -space-y-px">-->
              <input type="text" name="user" id="user" required placeholder="ej: JohnDoe"  v-model="registro_datos.username" class="shadow appearance-none border rounded py-2 px-3 w-full text-gray-700 leading-tight focus:outline-none">
              <!--</div>-->
            </div>

            <div class="flex space-x-2">
              <div class="w-1/2">
                <label class="block text-gray-700 text-base font-bold mb-2" for="nombre">Nombre</label>
                <!--<div class="rounded shadow -space-y-px">-->
                <input type="text" name="nombre" id="nombre" required placeholder="ej: John" v-model="registro_datos.nombre" class="shadow appearance-none border rounded py-2 px-3 w-full text-gray-700 leading-tight focus:outline-none">
                <!--</div>-->
              </div>

              <div class="w-1/2">
                <label class="block text-gray-700 text-base font-bold mb-2" for="apellidos">Apellidos</label>
                <!--<div class="rounded shadow -space-y-px">-->
                <input type="text" name="apellidos" id="apellidos" required placeholder="ej: Doe" v-model="registro_datos.apellido" class="shadow appearance-none border rounded py-2 px-3 w-full text-gray-700 leading-tight focus:outline-none">
                <!--</div>-->
              </div>
            </div>

              <div>
                <label class="block text-gray-700 text-base font-bold mb-2" for="apellidos">Número telefónico</label>
                <!--<div class="rounded shadow -space-y-px">-->
                <input type="number" name="number" id="number" required placeholder="ej: 672098618 " v-model="registro_datos.numero" class="shadow appearance-none border rounded py-2 px-3 w-full text-gray-700 leading-tight focus:outline-none">
                <!--</div>-->
              </div>

            <div>
              <label class="block text-gray-700 text-base font-bold mb-2" for="email">Correo</label>
              <!--<div class="rounded shadow -space-y-px">-->
              <input type="email" name="email" id="email" required placeholder="ej: johndoe@example.com" v-model="registro_datos.email" class="shadow appearance-none border rounded py-2 px-3 w-full text-gray-700 leading-tight focus:outline-none">
              <!--</div>-->
            </div>

            <div>
              <labek class="block text-gray-700 text-base font-bold mb-2" for="password">Contraseña</labek>
              <!--<div class="rounded shadow -space-y-px">-->
                <input type="password" name="password" id="password" required placeholder="***********" v-model="registro_datos.password" class="shadow appearance-none border rounded py-2 px-3 w-full text-gray-700 leading-tight focus:outline-none">
              <!--</div>-->
            </div>
            
            <div>
              <p class="text-gray-400 italic mb-3 mt-10">
                <i class="fa fa-info-circle" style="font-size: 1em"/>
                Informacion de facturación
              </p>
              <label class="block text-gray-700 text-base font-bold mb-2" for="address">Dirección</label>
              <!--<div class="rounded shadow -space-y-px">-->
              <input type="text" name="address" id="address" required placeholder="ej: Urbanización Chancleta, Calle Topacio" v-model="registro_datos.address" class="shadow appearance-none border rounded py-2 px-3 w-full text-gray-700 leading-tight focus:outline-none">
            </div>

            <div class="flex space-x-2">
              <div class="w-1/2">
                <label class="block text-gray-700 text-base font-bold mb-2" for="poblacion">Población</label>
                <!--<div class="rounded shadow -space-y-px">-->
                <input type="text" name="poblacion" id="poblacion" required placeholder="ej: Santa Cruz de Tenerife" v-model="registro_datos.poblacio" class="shadow appearance-none border rounded py-2 px-3 w-full text-gray-700 leading-tight focus:outline-none">
              </div>

              <div class="w-1/2">
                <label class="block text-gray-700 text-base font-bold mb-2" for="codigo">Código postal</label>
                <!--<div class="rounded shadow -space-y-px">-->
                <input type="number" name="codigo" id="codigo" required placeholder="ej: 38400" v-model="registro_datos.codigo" class="shadow appearance-none border rounded py-2 px-3 w-full text-gray-700 leading-tight focus:outline-none">
              </div>
            </div>

          <div class="relative flex justify-between">
            <button type="submit" class="w-full py-2 px-4 border text-base bg-green-600 group hover:bg-green-700 border-transparent font-medium rounded-md text-white  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-400 transition duration-300">
              Crear cuenta
            </button>
          </div>
          </form>
        </div>

      </div>
    </div>
  </div>
</template>  

<script>
import {mapActions} from 'vuex'
export default {
  name: "Register",
  data() {
    return {
      registro_datos : {
      username : "",
      nombre :"",
      apellido :"",
      email :"",
      password :"",
      address:"",
      numero : null,
      poblacio : "",
      codigo : null
      }
    };
  },
  methods: {
    ...mapActions(['registro']),
  }
}
</script>
}
<style>

input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}


input[type=number] {
  -moz-appearance: textfield;
}

</style>