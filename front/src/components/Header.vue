<template >
  <nav>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <div class="px-8 py-3 mx-auto border-1 bg-gray-200 shadow-sm">
      <div class="flex justify-between items-center">
        <!-- LOGO -->
        <router-link to="/" class="mr-20">
          <img src="@/assets/logo2.png" class="w-5/12">
        </router-link>

        <!-- Search -->
        <div class="absolute inset-x-0 m-auto w-3/12">
          <div class="bg-white flex items-center rounded-full shadow-xl ">
            <input  id="search" type="search" placeholder="Search" class="ml-4 rounded-l-full w-full py-3 px-full text-gray-700 leading-tight focus:outline-none">
            
            <div>
              <button class="bg-green-700 text-white rounded-full px-2.5 py-2.5 mr-2 hover:bg-green-500 focus:outline-none  flex items-center justify-center">
                <i class="fa fa-search"></i>
              </button>
            </div>
          </div>
        </div>

        <!-- Botones -->
        <div class="flex space-x-3 items-center mr-12">
          <router-link  to="/carrito" class="mx-6 w-9 text-4xl hover:text-gray-600">
            <span class="relative inline-block">
              <i class="fa fa-shopping-cart cart-icon"></i>
              <span class="absolute top-2 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 transform translate-x-1/2 -translate-y-1/2 bg-blue-400 rounded-full">{{ contador }}</span>
            </span>
          </router-link>
          <!--<button v-if="logged" class="gradient font-bold text-white py-2 px-3 rounded">INICIADO!</button>-->
          <div v-if="logged" @mouseover="dropdownOpen = true" @mouseleave="dropdownOpen = false">
            <button class="flex justify-center items-center rounded-lg hover:bg-gray-300 w-36 h-14">
              <div class="flex items-center space-x-3">
                <div class="flex h-10 w-10 object-cover rounded-full items-center justify-center" v-once :style="{backgroundColor: randomColor()}">
                  <span class="text-black text-xl font-bold"> {{ allData.nombre.substring(0,1) }} </span>
                </div>
                <span class="font-semibold"> {{ allData.username }} </span>
              </div>
            </button>

            <div v-show="dropdownOpen" class="absolute py-2 w-48 bg-white rounded-md shadow-xl z-20">
              <a href="/profile" class="block px-4 py-2 text-sm capitalize text-gray-700 hover:bg-gray-500 hover:text-white">
                Mi cuenta
              </a>
              
              <a href="#" class="block px-4 py-2 text-sm capitalize text-gray-700 hover:bg-red-500 hover:text-white">
                Cerrar sesión
              </a>
            </div>
          </div>
          <div v-else class="flex">
            <router-link to="/Login" class="gradient font-bold text-white py-2 px-3 rounded">Iniciar sesión</router-link>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>


<script>
import {mapGetters, mapActions} from "vuex"
export default {
  computed: {
    ...mapGetters(['contador', 'allData'])
  },

  prop: {
/*       logged: {
        type: Boolean,
        default: false,
        required: true,
      }, */
  },
  methods: {
    ...mapActions(['datosUser']),
 
    randomColor() {
      var h = Math.floor(Math.random()*360);
      var s = Math.floor(Math.random()*100);
      var l = Math.floor(Math.random()*100);
      if (l <= 50)
        l = 60;
      var mycolor = `hsl(${h}deg, ${s}%, ${l}%)`;
      console.log(mycolor);
      return mycolor;
    },
  },
  mounted(){
    this.datosUser()
    this.randomColor()
  },
  data() {
    return {
      logged: true,
      dropdownOpen: false,
    };
  }, 
};
</script>

<style scoped>
  .gradient {
    position: relative;
    background-image: linear-gradient(to right,hsl(177, 47%, 39%),hsl(279, 38%, 40%));
    z-index: 1;
  }

  .logo {
    size: 20%;
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

  .dropdown:focus-within .dropdown-menu {
  opacity:1;
  transform: translate(0) scale(1);
  visibility: visible;
  }

</style>

         
