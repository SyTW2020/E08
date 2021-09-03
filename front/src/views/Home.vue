<template>
  <div class="home">
    <div class="flex justify-center">
      <Product/>
    </div>  

  </div>
</template>

<script>
// @ is an alias to /src

import Product from "@/components/Product.vue";


export default {
  name: "Home",
  components: {
    Product,
  },
   
};
</script>
