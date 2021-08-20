<template>
  <div class="row" style="width: 50%">
      <div class="col-md-4">
        <h6>Total: </h6>
        <h6>Shipping: </h6>
        <div class="my-3 line w-120"></div>
        <h6>Subtotal: </h6>
      </div>
      <div class="col-md-4">
          <h6>Rs {{totalPrice}}</h6>
      </div>



  </div>
</template>
<script>

export default {
  name: 'ListaProductos',
  props: ["totalPrice"]
}
</script>
