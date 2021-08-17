<template>
  <div class="Carrito">
      <Productos_carrito />
  </div>
</template>

<script>
import Productos_carrito from "@/components/Productos_carrito.vue"

export default {
    name: 'Carrito',
    components: {
        Productos_carrito
    }

}
</script>