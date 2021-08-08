<template>
  <!--<div class="product" v-on:mouseover="mouseOn" v-on:mouseleave="mouseLeave">-->
  <div class="card">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <img src="https://www.asrock.com/mb/photo/Z490%20Pro4(M1).png">
    <span class="name"> Z490-A Pro </span>
    <span class="price"> 120€ </span>
    <div class="hover flex">
      <button class="button"><i class="fa fa-shopping-cart"></i></button>
      <button class="button"> Al carrito </button>
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
    methods: {
      mouseOn(event) {
        /*alert('Opening ... Its a joke');*/
        event.target.style.transform = "scale(2)";
      },
      mouseLeave(event) {
        event.target.style.transform = "scale(1)";
      },
    }
  };
</script>

<style>
  .card {
    box-shadow: 0 0.5vh 1vh #BABABA;
    margin: auto;
    margin-bottom: 1vh;
    height: 20vw;
    width:  15vw;
    background-color: #FFFFFF;
    text-align: center;
    overflow: hidden;
  }
  img {
    max-width: 100%;
  }
  
  .name {
    font-size: 1.4vw;
    color: #5e5d5d;
    /* display: block; */
  }

  .price {
    font-size: 1.7vw;
    /* display: block; */
    color: #000000;
    font-weight: bold;
  }
/*
  .flex {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
*/
  .hover {
    height: 100%;
    width: 100%;
    top:100%;
    margin: auto;
    background:#00000036;
    position: relative;
    transition: all .3s ease-out;
  }

  .card:hover > .hover {
    top: 0;
  }

  .button {
    font-size: 1.4vw;
  }

/*
.button {
  border: 0 solid;
  box-shadow: inset 0 0 20px rgba(255, 255, 255, 0);
  outline: 1px solid;
  outline-color: rgba(255, 255, 255, .5);
  outline-offset: 0px;
  text-shadow: none;
  transition: all 1250ms cubic-bezier(0.19, 1, 0.22, 1);
} 

.button:hover {
  border: 1px solid;
  box-shadow: inset 0 0 20px rgba(255, 255, 255, .5), 0 0 20px rgba(255, 255, 255, .2);
  outline-color: rgba(255, 255, 255, 0);
  outline-offset: 15px;
  text-shadow: 1px 1px 2px #427388; 
}
*/
/*  .card {
    box-shadow: 0 0.5vh 1vh #BABABA;
    margin: auto;
    height: 30vh;
    width:  20vh;
    background-color: #FFFFFF;
    text-align: center;
    position: relative;
    overflow: hidden;
  }

  .hover {
      width: 250px;
      height: 300px;
      background: white;
      position: absolute;
      bottom: 0;
      transform: translateY(-100%);
  }

  .flex {
      display: flex;
      justify-content: center;
      align-items: center;
  }

  img {
    display: block;
    margin-left: auto;
    margin-right: auto;
    max-width: 100%;
  }


  .prod_name {
    font-size: 3vh;
    display: block;
  }

  .precio_producto {
    font-size: 3vh;
    color: #A6C151;
    display: block;
  }
*/

</style>