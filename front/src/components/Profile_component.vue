<template>
  <div class="flex flex-col justify-center items-center ">
    <h1 class="text-center border-b-2 w-full text-5xl mt-11 max-w-screen-lg">Mi cuenta Elective</h1> 
    <div class="flex w-7/12 justify-center  my-10 space-x-20 max-w-screen-lg">
      <!-- Imagen perfil -->
      <div class="flex flex-col space-y-4">
        <div class="h-60 w-60">
          <img src="../assets/perfil_defecto2.jpg" alt="Imagen de perfil" class="h-full w-full object-cover rounded-full">
        </div>
        <button class="bg-white shadow-sm h-10 mx-4 rounded border">Cambiar foto</button>
      </div>
      <!-- Datos personales -->
      <div class="w-full">
        <div class="border-b-2 space-y-8">
          <h2 class="text-3xl text-center font-semibold mb-4"> Datos personales </h2>
          <div class="flex space-x-10">
            <div class="w-6/12">
              <label for="user" class=" text-gray-700 text-base font-bold mb-2"> Nombre de usuario </label>
              <span class="block shadow-sm appearance-none bg-gray-100 border rounded py-2 px-3 w-full text-gray-00 leading-tight"> {{ allData.username }} </span>
            </div>
            <div class="w-6/12">
              <label for="number" class=" text-gray-700 text-base font-bold mb-2"> Número de teléfono </label>
              <span class="block shadow-sm appearance-none bg-gray-100 border rounded py-2 px-3 w-full text-gray-00 leading-tight"> {{ allData.numero }} </span>
            </div>
          </div>
          <div class="flex space-x-10">
            <div class="w-6/12">
              <label for="nombre" class=" text-gray-700 text-base font-bold mb-2"> Nombre </label>
              <span class="block shadow-sm appearance-none bg-gray-100 border rounded py-2 px-3 w-full text-gray-00 leading-tight"> {{allData.nombre}} </span>
            </div>
            <div class="w-6/12">
              <label for="apellidos" class=" text-gray-700 text-base font-bold mb-2"> Apellidos </label>
              <span class="block shadow-sm appearance-none bg-gray-100 border rounded py-2 px-3 w-full text-gray-00 leading-tight"> {{ allData.apellido }} </span>
            </div>
          </div>
          <div class="flex space-x-10 mb-5">
            <div class="w-6/12">
              <label for="email" class=" text-gray-700 text-base font-bold mb-2"> Correo </label>
              <span class="block shadow-sm appearance-none bg-gray-100 border rounded py-2 px-3 w-full text-gray-00 leading-tight"> {{ allData.email }} </span>
            </div>
            <div class="w-6/12">
              <label for="pass" class=" text-gray-700 text-base font-bold mb-2"> Contraseña </label>
              <span class="block shadow-sm appearance-none bg-gray-100 border rounded py-2 px-3 w-full text-gray-00 leading-tight"> ************* </span>
            </div>
          </div>
        </div>
        <div class="w-full space-y-8 mt-10">
          <h2 class="text-3xl text-center font-semibold mb-4"> Datos de facturación </h2>
          <div class="w-12/12">
              <label for="address" class=" text-gray-700 text-base font-bold mb-2"> Dirección </label>
              <span class="block shadow-sm appearance-none bg-gray-100 border rounded py-2 px-3 w-full text-gray-00 leading-tight"> {{ allData.address }} </span>
          </div>
          <div class="flex space-x-10 mb-10">
            <div class="w-6/12">
              <label for="poblacion" class=" text-gray-700 text-base font-bold mb-2"> Población </label>
              <span class="block shadow-sm appearance-none bg-gray-100 border rounded py-2 px-3 w-full text-gray-00 leading-tight"> {{ allData.poblacion }} </span>
            </div>
            <div class="w-6/12">
              <label for="codigo" class=" text-gray-700 text-base font-bold mb-2"> Código postal </label>
              <span class="block shadow-sm appearance-none bg-gray-100 border rounded py-2 px-3 w-full text-gray-00 leading-tight"> {{ allData.codigo }} </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
 computed: {
  ...mapGetters(['allData'])
},

  

}


</script>

<style>

</style>