<!--
<template>
  <div class="header">
    <b-navbar toggleable="md" type="dark" variant="dark">
      <b-container>
        <b-navbar-brand :to="{ name: 'home' }">Elective</b-navbar-brand>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-collapse is-nav id="nav-collapse">
          <b-navbar-nav>
            <b-nav-item :to="{ name: 'home' }" exatly>Home</b-nav-item>
            <b-nav-item :to="{ name: 'about' }">About</b-nav-item>
            <b-nav-item :to="{ name: 'about' }">Registro</b-nav-item>
            <b-nav-item :to="{ name: 'about' }">Login</b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-container>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: "Header",
  prop: {
      name: {
        type: Boolean,
        default:false,
        required: true,
      }
  },
  data() {
    return {
      /* Logged ?? */
    };
  }
};
</script>
-->

<template>
  <nav>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <div class="px-8 py-3 mx-auto border-1 bg-gray-200 shadow-sm">
      <div class="flex justify-between items-center">
        <!-- LOGO -->
        <div class="mr-20">Logo</div>

        <!-- Search -->
        <div class="ml-10 w-3/12">
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
          <button>Carrito</button>
          <button class="gradient font-bold text-white py-2 px-3 rounded">Mi cuenta</button>
        </div>

      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Header",
  prop: {
      name: {
        type: Boolean,
        default:false,
        required: true,
      }
  },
  data() {
    return {
      /* Logged ?? */
    };
  }
}
</script>

<style>
  .gradient {
    position: relative;
    background-image: linear-gradient(
      to right,
      hsl(177, 47%, 39%),
      hsl(279, 38%, 40%)
    );
    z-index: 1;
  }

  .gradient::before {
    position: absolute;
    content: "";
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-image: linear-gradient(
      to left,
      hsl(177, 47%, 39%),
      hsl(279, 38%, 40%)
    );
    z-index: -1;
    transition: opacity 0.5s linear;
    opacity: 0;
  }

  .gradient:hover::before {
    opacity: 1;
  }
</style>

         