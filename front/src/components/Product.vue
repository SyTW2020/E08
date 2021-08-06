<template>
  <div class="product" @mouseover="ontheproduct">
    <img src="https://www.asrock.com/mb/photo/Z490%20Pro4(M1).png">
    <span class="nombre_producto"> Z490-A Pro </span>
    <span class="precio_producto"> 120€ </span>
  </div>
</template>

<script>
</script>

  <style>
  .product {
    box-shadow: 0 0.5vh 1vh #BABABA;
    margin: auto;
    height: 25vh;
    width:  20vh;
    background-color: #FFFFFF;
    text-align: center;
  }

  img {
    display: block;
    margin-left: auto;
    margin-right: auto;
    max-width: 100%;
  }

  .nombre_producto {
    font-size: 3vh;
  }

  .precio_producto {
    font-size: 3vh;
    color: #A6C151;
  }

  h1 {
    font-size: 4vh;
    font-weight: normal;
  }
</style>