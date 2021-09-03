<template>
  <div
    class="container my-5 cart flex-col item-center justify-center"
    style="text-align: center"
  >
    <img class="item-center" src="../assets/icono_carrito.png" width="200px" />
    <div class="mt-4">
      <h4 class="fw-600">El carrito está vacío</h4>
      <h5 class="fw-600">
        <a href="/">Compra alguno de nuestros productos</a>
      </h5>
    </div>
  </div>
</template>
<script>
export default {
  name: "Vacia_Productos_carrito",
};
</script>
