<template>
  <footer class="container mx-auto w-full mb-3 mt-10">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <div class="border-t-2 border-gray-300">
      <!--<p class="text-sm text-center text-green-600  font-bold mb-2"> {{ Telefono }} </p>-->
      <!--<p class="text-sm text-center text-green-600  font-bold mb-2"> {{ Correo }} </p>-->
      <div class="flex justify-between mt-3">
        <div>
          <p class="text-sm text-green-800 italic mb-2"> © 2021 Santa Cruz de Tenerife, España. All rights reserved</p>
        </div>
        <div class="space-x-9 sm:space-x-5">
          <a href="https://github.com/SyTW2020/E08">
            <i class="fa fa-github" style="font-size: 1.8em"></i>
          </a>
          <a href="https://twitter.com/yisucrist">
            <i class="fa fa-twitter" style="font-size: 1.8em"></i>
          </a>
          <a href="https://es-es.facebook.com">
            <i class="fa fa-facebook" style="font-size: 1.8em"></i>
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>


<script>
  export default {
    name: "Footer",
    data() {
      return {
        Telefono: "XXX-XXX-XXX",
        Correo: "ull.e08@etsi.com",
      };
    },
  };
</script>


<style></style>