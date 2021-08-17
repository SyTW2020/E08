<template>
  <div class="home">
    <Product></Product>
    <Product></Product>

  </div>
</template>

<script>
// @ is an alias to /src

import Product from "@/components/Product.vue";

export default {
  name: "Home",
  components: {
    Product
  },
};
</script>
