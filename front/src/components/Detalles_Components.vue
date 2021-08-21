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
              <a href="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/15a.jpg"
                data-size="710x823">
                <img src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/15a.jpg"
                  class="img-fluid z-depth-1">
              </a>
            </figure>
            <figure class="view overlay rounded z-depth-1" style="visibility: hidden;">
              <a href="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/12a.jpg"
                data-size="710x823">
                <img src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/12a.jpg"
                  class="img-fluid z-depth-1">
              </a>
            </figure>
            <figure class="view overlay rounded z-depth-1" style="visibility: hidden;">
              <a href="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/13a.jpg"
                data-size="710x823">
                <img src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/13a.jpg"
                  class="img-fluid z-depth-1">
              </a>
            </figure>
            <figure class="view overlay rounded z-depth-1" style="visibility: hidden;">
              <a href="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/14a.jpg"
                data-size="710x823">
                <img src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/14a.jpg"
                  class="img-fluid z-depth-1">
              </a>
            </figure>
          </div>
          <div class="col-12">
            <div class="row">
              <div class="col-3">
                <div class="view overlay rounded z-depth-1 gallery-item">
                  <img src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/12a.jpg"
                    class="img-fluid">
                  <div class="mask rgba-white-slight"></div>
                </div>
              </div>
              <div class="col-3">
                <div class="view overlay rounded z-depth-1 gallery-item">
                  <img src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/13a.jpg"
                    class="img-fluid">
                  <div class="mask rgba-white-slight"></div>
                </div>
              </div>
              <div class="col-3">
                <div class="view overlay rounded z-depth-1 gallery-item">
                  <img src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/14a.jpg"
                    class="img-fluid">
                  <div class="mask rgba-white-slight"></div>
                </div>
              </div>
              <div class="col-3">
                <div class="view overlay rounded z-depth-1 gallery-item">
                  <img src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/15a.jpg"
                    class="img-fluid">
                  <div class="mask rgba-white-slight"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

    </div>
    <div class="col-md-6">

      <h5>Fantasy T-shirt</h5>
      <p class="mb-2 text-muted text-uppercase small">Shirts</p>
      <p><span class="mr-1"><strong>$12.99</strong></span></p>
      <p class="pt-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, sapiente illo. Sit
        error voluptas repellat rerum quidem, soluta enim perferendis voluptates laboriosam. Distinctio,
        officia quis dolore quos sapiente tempore alias.</p>

      <hr>
      <b-button variant="primary" class="mr-1 mb-2 ">
        COMPRAR YA <b-icon icon="credit-card" aria-hidden="true"></b-icon>
      </b-button>
      <b-button v-on:click="addToCart" variant="outline-info" class="mr-1 mb-2 ">
        <b-icon icon="cart4" aria-hidden="true"></b-icon> ADD TO CART
      </b-button>
    </div>
  </div>

</section>
<!--Section: Block Content-->

</template>

<script>
export default {
name: "Detalles_Components",
methods: {
  addToCart() {
//    this.$store.commit("addToCart")
    this.$store.dispatch("addToCart", this.details);

},

removeItem() {
//    this.$store.commit("removeItem")
    this.$store.dispatch("removeItem", this.details);

}
}
}
</script>

<style>

</style>