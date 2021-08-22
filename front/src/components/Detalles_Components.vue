<template>
  <!--Section: Block Content-->
<section class="mb-5">

  <div class="row">
    <div class="col-md-6 mb-4 mb-md-0">

      <div id="mdb-lightbox-ui"></div>

      <div class="mdb-lightbox">

        <div class="row product-gallery mx-1">

          <div class="col-12 mb-0">
            <figure class="view overlay rounded z-depth-1 main-img">
                <img :src="detallesProductos.imgUrl"
                  class="img-fluid z-depth-1">
            </figure>
          </div>
          
         
        </div>

      </div>

    </div>
    <div class="col-md-6">
      <h5>{{detallesProductos.name}}</h5>
      <p class="mb-2 text-muted text-uppercase small">{{detallesProductos.categoria}}</p>
      <p><span class="mr-1"><strong>{{detallesProductos.precio}}</strong></span></p>
      <p class="pt-1">{{detallesProductos.descripcion}}</p>

      <hr>
      <b-button v-on:click="addToCart" variant="outline-info" class="mr-1 mb-2 ">
        <b-icon icon="cart4" aria-hidden="true"></b-icon> ADD TO CART
      </b-button>
    </div>
  </div>

</section>
<!--Section: Block Content-->

</template>

<script>
import {mapActions,mapGetters} from 'vuex'
export default {
name: "Detalles_Components",

computed: {
  ...mapGetters(['detallesProductos'])
},
methods: {
  addToCart() {
//    this.$store.commit("addToCart")
    this.$store.dispatch("addToCart", this.details);

},

removeItem() {
//    this.$store.commit("removeItem")
    this.$store.dispatch("removeItem", this.details);

},
...mapActions(['obtenerDataProducto'])

},
mounted(){
  this.obtenerDataProducto(this.$route.params.id)
}
}
</script>

<style>

</style>