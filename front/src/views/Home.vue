<template>
  <div class="home">
    
    <div >
    <Product   />
    </div>

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
