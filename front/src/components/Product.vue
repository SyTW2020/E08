<template>
  <!--<div class="product" v-on:mouseover="mouseOn" v-on:mouseleave="mouseLeave">-->
 <div class="productos flex" >
    <div :key = "product.id" v-for="product in allProducts">
      
  <div class="card shadow-sm">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <img class="img" :src="product.imgUrl">
    <span class="name"> {{product.name}} </span>
    <span class="price"> {{product.precio}} </span>
    <div class="hover flex flex-col space-y-6 justify-center items-center w-full">
      <button v-on:click="addToCart(product)" class="button w-7/12 text-base bg-green-600 rounded border-black text-white hover:bg-green-700 " ><i class="fa fa-cart-plus"></i> Comprar </button>
      <button class="button w-7/12 text-base bg-gray-100 rounded  text-black hover:bg-gray-300"><i class="fa fa-info-circle"></i><router-link :to = '`/detalles/${product._id}`'> Detalles</router-link> </button>
    </div>
  </div>
    </div>
 </div>
 

</template>

<script>
import { mapGetters, mapActions } from 'vuex';

  export default {
    name: 'Product',
    prop: ["producto"],
    methods: {
      ...mapActions (['obtenerProductos']),
      mouseOn(event) {
        /*alert('Opening ... Its a joke');*/
        event.target.style.transform = "scale(2)";
      },
      mouseLeave(event) {
        event.target.style.transform = "scale(1)";
      },

      addToCart(product) {
//    this.$store.commit("addToCart")
        this.$store.dispatch("addToCart", product);
      
}
    },
    computed: mapGetters(['allProducts']),
  created(){
    this.obtenerProductos()
  }
  };
</script>

<style>
  .img {
    max-width: 100%;
  }

  .card {
    margin: auto;
    margin-bottom: 1vh;
    height: 14rem;
    width:  11rem;
    background-color: #FFFFFF;

    text-align: center;
    overflow: hidden;
  }
  
  .card:hover {
    border-bottom-width: 0px;
    border-bottom: 0px;
  }
  
  .name {
    font-size: 1.2rem;
    color: #5e5d5d;
  }

  .price {
    font-size: 1.6rem;
    font-weight: bold;
  }

  .hover {
    z-index: -1;
    height: 100%;
    width: 100%;
    top:100%;
    margin: auto;
    background:#1d1c1c70;
    position: absolute;
    transition: all .3s ease-out;

  }

  .card:hover > .hover {
    border: 1px solid rgb(173, 171, 171);
    border-top-width: 0px;
    z-index: 2;
    top: 0%;
  }
  


  .button {
    font-size: 1.4vw;
  }

</style>