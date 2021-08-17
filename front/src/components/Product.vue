<template>
  <div class="card shadow-sm">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <img class="img" src="https://www.asrock.com/mb/photo/Z490%20Pro4(M1).png">
    <span class="name"> Z490-A Pro </span>
    <span class="price"> 120€ </span>
    <div class="hover flex flex-col space-y-6 justify-center items-center w-full">
      <button class="button w-7/12 text-base bg-green-600 rounded border-black text-white hover:bg-green-700 " ><i class="fa fa-cart-plus"></i> Comprar </button>
      <button class="button w-7/12 text-base bg-gray-100 rounded  text-black hover:bg-gray-300"><i class="fa fa-info-circle"></i> Detalles </button>
    </div>
  </div>

</template>

<script>
  export default {
    name: 'Product',
    prop: {
      name: {
        type: String,
        default:'No name',
        required: true,
      },
      price: {
        type: String, 
        default: 'NaN',
        required: true,
      },
      url: {
        type: String,
        default: '',
        required: true,
      }
    },
    data() {
      return {
        /* prod_img: this.prod_img,*/
        /* prod_name: this.name, */
        /* prod_price: this.price, */
      }
    },
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