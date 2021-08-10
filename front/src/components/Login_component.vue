<template>
  <div class="flex items-center justify-center mt-10">
    <div class="w-full max-w-xs space-y-8">
      <div>
        <img class="mx-auto h-20" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" alt="Logo"/>
        <h2 class="mt-6 text-center text-3xl font-bold text-gray-900"> Iniciar sesión </h2>
        <!--<p class="mt-2 text-xl text-center">O {{''}}
          <a href="/registro" class="text-green-500 font-bold">Crea una cuenta</a>
        </p>-->
      </div>
        <form action="#" method="POST" class="mt-8 space-y-6">
          <div>
            <p class="block text-gray-700 text-base font-bold mb-2" for="username">Correo</p>
            <input type="hidden" name="remember" value="true"/>
            <div class="rounded shadow -space-y-px">
              <input type="email" name="email" id="email-address" autocomplete="on" required placeholder="ejemplo@ejemplo.com" class="shadow appearance-none border rounded py-2 px-3 w-full text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
            </div>
          </div>
          <div>
            <p class="block text-gray-700 text-base font-bold mb-2" for="username">Contraseña</p>
            <input type="hidden" name="remember" value="true"/>
            <div class="rounded shadow -space-y-px">
              <input type="password" name="password" id="password" autocomplete="current-password" required placeholder="***********" class="shadow appearance-none border rounded py-2 px-3 w-full text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
            </div>
          </div>

          <div class="flex">
            <a href="/" class="underline text-b">Olvidé mi contraseña</a>
          </div>

          <div class="relative flex justify-between">
            <button type="submit" class="w-full py-2 px-4 border text-base bg-green-600 group hover:bg-green-700 border-transparent font-medium rounded-md text-white  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-400 transition duration-300">
              <i class="absolute left-3 bottom-auto fa fa-lock opacity-60 group-hover:opacity-80 transition duration-300" style="font-size: 1.6em"/>
              Acceder
            </button>
          </div>
        </form>
      <div>
        <div class="flex relative justify-center mt-16 border-t-2 border-gray-300">
          <div class="flex justify-center absolute -top-3.5 w-3/5  bg-white">
            <span> ¿Aun no tienes cuenta? </span>
          </div>
        </div>
      </div>
      
      <div>
        <button type="submit" to="/registro" class="w-full py-2 px-4 border text-base bg-gray-100 group hover:bg-gray-200 border-transparent font-medium rounded-md text-black  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-400 transition duration-300">
          <router-link to="/registro">Crear cuenta</router-link>
          
        </button>
      </div>
    </div>
  </div>
</template>

<script>


export default {
  name: "Login_component",
};
</script>


<style></style>

