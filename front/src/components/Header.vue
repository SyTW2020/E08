<template>
  <nav>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <div class="px-8 py-3 mx-auto border-1 bg-gray-200 shadow-sm">
      <div class="flex justify-between items-center">
        <!-- LOGO -->
        <div class="mr-20">Logo</div>

        <!-- Search -->
        <div class="absolute inset-x-0 m-auto w-3/12">
          <div class="bg-white flex items-center rounded-full shadow-xl ">
            <input class="ml-4 rounded-l-full w-full py-3 px-full text-gray-700 leading-tight focus:outline-none" id="search" type="text" placeholder="Search">
            
            <div>
              <button class="bg-blue-500 text-white rounded-full px-2.5 py-2.5 mr-2 hover:bg-blue-400 focus:outline-none  flex items-center justify-center">
                <i class="fa fa-search"></i>
              </button>
            </div>
          </div>
        </div>

        <!-- Botones -->
        <div class="flex space-x-3">
          <button class="bg-white py-2 px-3 rounded"><i class="fa fa-shopping-cart mr-2" style="font-size: 1.2em"></i>Carrito</button>
          <button v-if="logged" class="gradient font-bold text-white py-2 px-3 rounded">INICIADO!</button>
          <button v-else class="gradient font-bold text-white py-2 px-3 rounded">Iniciar sesión</button>
        </div>

      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Header",
  prop: {
      logged: {
        type: Boolean,
        default:false,
        required: true,
      }
  },
  data() {
    return {
      logged: false
    };
  }
}
</script>

<style scoped>
  .gradient {
    position: relative;
    background-image: linear-gradient(to right,hsl(177, 47%, 39%),hsl(279, 38%, 40%));
    z-index: 1;
  }

  .gradient::before {
    position: absolute;
    content: "";
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-image: linear-gradient(to left,hsl(177, 47%, 39%),hsl(279, 38%, 40%));
    z-index: -1;
    transition: opacity 0.5s linear;
    opacity: 0;
  }

  .gradient:hover::before {
    opacity: 1;
  }
</style>

         