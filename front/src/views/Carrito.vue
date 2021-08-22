<template>
  <div class="Carrito">
      <div class="cart-body">
        
        <div v-if="totalPrice !== 0" class="container mb-5">
            <h4 class="my-4 my-cart"> Mi Carrito</h4>
                <div class ="d-flex my-3" style="justify-content: space-between;">
                    <h4 class="fw-600"> Lista de Productos</h4>
                    <h4 class="fw-600" style="margin-right: 49%;"> Carrito</h4>
                </div>
            <div class="d-flex">
                <ListaProductos v-bind:totalPrice="totalPrice" />
            </div>
      </div>
      <div v-else>
          <Vacia_Productos_carrito />
      </div>
    </div>
  </div>
</template>

<script>
import ListaProductos from "@/components/ListaProductos.vue"
import Vacia_Productos_carrito from "@/components/Vacia_Productos_carrito.vue"
//import Productos_carrito from "@/components/Productos_carrito.vue"
import {mapGetters} from "vuex"
export default {
    name: 'Carrito',
    components: {
        ListaProductos,
        Vacia_Productos_carrito
    },
    computed: {

        ...mapGetters(["array_productos"]),

        carrito_productos() {
            return this.array_productos;
        },
        totalPrice(){
            let price = 0;
            this.array_productos.map (el => {
                price += el["quantity"] * el["price"]
            })
            return price;
        }
    }
/*



*/




}
</script>


