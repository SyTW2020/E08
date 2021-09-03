<template>
  <ol class="relative flex justify-center items-center bg-black h-72">
    <li
      id="carousel_1"
      class="absolute carousel left-12 bg-gray-500 w-4/12 h-5/6"
    >
      Carrusel 1
    </li>
    <li id="carousel_2" class="absolute carousel bg-yellow-500 w-5/12 h-full">
      Carrusel 2
    </li>
    <li
      id="carousel_3"
      class="absolute carousel right-12 bg-red-500 w-4/12 h-5/6"
    >
      Carrusel 3
    </li>
  </ol>
</template>

<script>
export default {};
</script>

<style scoped>
.carousel {
}
</style>
