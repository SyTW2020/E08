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
                <div class="row" style="width: 50%">
                    <div class="col-md-12" style="max-width: 70%">
                        <ul style="padding: 0">
                            <li v-for="(item, id) in carrito_productos" :key="id" style="list-style: none;">
                                <div class="cart-item">
                                    <img :src='item.imgUrl' width="100px" height="100px" style="border-radius: 50%" />
                                    <h6 class="mt-15">{{item.name}}</h6>
                                    <div class="d-flex mt-10">
                                        <button v-on:click="addToCart(item)" class="add" type="button">+</button>
                                        <span class="cart-quantity">{{item.quantity}}</span>
                                        <button v-on:click="removeItem(item)" class="remove" type="button">-</button>
                                    </div>
                                    <h6 class="mt-15">{{item.precio}}</h6>
                                </div>
                                <div class="line"></div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="d-flex justify-content-end" style="width: 80%; margin-top: 2%">
                <button v-on:click="Checkout" class="btn btn-primary" type="button">Checkout</button>
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

import swal from "sweetalert";
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
            let precio = 0;
            this.array_productos.map (el => {
                precio += el["quantity"] * el["precio"]
            })
            return precio;
        }
    },

    methods: {

  addToCart(item) {
//    this.$store.commit("addToCart")
    this.$store.dispatch("addToCart", item);

},

removeItem(item) {
    console.log(item)
//    this.$store.commit("removeItem")
    this.$store.dispatch("removeItem", item);

},

Checkout(){

    swal ("Enhorabuena", "Su pedido se ha realizado con éxito", "Muchas gracias por su compra").then(
            window.location.href = "/carrito"        
    );

},



    }
/*



*/




}
</script>


<style>

.cart-outer-div{
    flex-direction: column;
    height: 100vh;
}

.cart-body {
    background: whitesmoke;
    flex: 1;
    overflow-y: auto;
}

.cart-quantity {
    display: inline-block;
    padding: 3px 6px;
    width: 50px;
    height: 30px;
    border-radius: 2px;
    background-color: #fff;
    margin: 0 5px;
    text-align: center;
}

.cart-item {
    display: flex;
    justify-content: space-between;
    padding: 10px;
    background: white;
}

.my-cart{
    color: cornflowerblue;
    font-weight: 600;
}

.input[type="text"] {
    border: none;
    width: 100%;
    font-size: 15px;
    font-weight: 500;
    vertical-align: middle;
    text-align: center;
    outline: none;
}

.fw-600{
    font-weight: 600;
}

.line{
    height: 120%;
    border-bottom: 2px solid black ;
}

.w-120{
    width: 120%;
}

.w-60{
    width: 60%;
}

.add{
    width: 30px;
    height: 30px;
    background: linear-gradient(white, gray);
    border: 2px solid black;
    cursor: pointer;
    font-size: 15px;
    border-radius: 7px;
    padding-top: 1px;
    outline: none;
}

.remove{
    width: 30px;
    height: 30px;
    background: linear-gradient(white, gray);
    border: 2px solid black;
    cursor: pointer;
    font-size: 15px;
    border-radius: 7px;
    padding-top: 1px;
    outline: none;
}

.mt-10 {
    margin-top: 10px;
}

.mt-15 {
    margin-top: 15px;
}

</style>