import _objectSpread from "C:/Users/david/Desktop/Pagina VUE/SyTW/front/node_modules/@babel/runtime/helpers/esm/objectSpread2";
import "core-js/modules/es.array.find-index.js";
import "core-js/modules/es.array.splice.js";
var state = {
  topRated: [{
    id: 1,
    name: 'Tele',
    price: 500,
    url: 'https://m.media-amazon.com/images/I/81tn5ZRtx7L._AC_SX425_.jpg',
    desc: "Buena tele",
    rate: 4.3,
    quantity: 1
  }, {
    id: 2,
    name: 'Cascos',
    price: 50,
    url: 'aqui va el enlace a la foto',
    desc: "Buen casco",
    rate: 4.0
  }, {
    id: 3,
    name: 'PC',
    price: 900,
    url: 'aqui va el enlace a la foto',
    desc: "Buena pc",
    rate: 3.9
  }],
  contador_productos: 0,
  products: []
};
var mutations = {
  addToCart: function addToCart(state, payload) {
    var item = payload;
    item = _objectSpread(_objectSpread({}, item), {}, {
      quantity: 1
    });

    if (state.products.length > 0) {
      var z = 0;

      for (var j = 0; j < state.products.length; j++) {
        var bool = state.products[j]._id === item._id;

        if (bool) {
          var itemIndex = state.products.findIndex(function (el) {
            return el._id === item._id;
          });
          state.products[itemIndex]["quantity"] += 1;
          z = 1;
        }
      }

      if (z == 0) {
        state.products.push(item);
      }
    } else {
      //        state.products.push(state.topRated[0])
      state.products.push(item);
    }

    state.contador_productos++; //console.log(state.products)
  },
  removeItem: function removeItem(state, payload) {
    if (state.products.length > 0) {
      for (var j = 0; j < state.products.length; j++) {
        var bool = state.products[j]._id === payload._id;

        if (bool) {
          var index = state.products.findIndex(function (el) {
            return el._id === payload._id;
          });

          if (state.products[index]["quantity"] !== 0) {
            state.products[index]["quantity"] -= 1;
            state.contador_productos--;
          }

          if (state.products[index]["quantity"] === 0) {
            state.products.splice(index, 1);
          }
        }
      }
    }
  }
  /*
      addToCart(state, payload){
      let item = payload;
      item = { ...item, quantity: 1 }
      if(state.products > 0){
          let bool = state.products.some(i => i._id === item._id)
          if (bool){
              let itemIndex = state.products.findIndex(el => el._id === item._id)
              state.products[itemIndex]["quantity"] +=1;
          } else {
              state.products.push(item)
          }
      } else{
          state.products.push(item)
      }
      state.contador_productos++
      console.log(state.contador_productos)
  },
  
      removeItem(state, payload){
          if(state.products.length > 0){
              let bool = state.products.some (i => i._id === payload._id)
              
              if (bool) {
                  let index = state.products.findIndex(el => el._id === payload._id)
                  if (state.products[index]["quantity"] !== 0){
                      state.products[index]["quantity"] -= 1
                      state.contador_productos--
                  }
                  if (state.products[index]["quantity"] === 0){
                      state.products.splice(index, 1)
                  }
              }
          }
      }
  */

};
var actions = {
  addToCart: function addToCart(context, payload) {
    context.commit("addToCart", payload);
  },
  removeItem: function removeItem(context, payload) {
    context.commit("removeItem", payload);
  }
};
var getters = {
  contador: function contador(state) {
    return state.contador_productos;
  },
  array_productos: function array_productos(state) {
    return state.products;
  }
};
/* Esto hay que añadirlo al los methods de Detalles productos

addToCart() {
//    this.$store.commit("addToCart")
    this.$store.dispatch("addToCart", this.details);

}

removeItem() {
//    this.$store.commit("removeItem")
    this.$store.dispatch("removeItem", this.details);

}
*/

export default {
  state: state,
  getters: getters,
  actions: actions,
  mutations: mutations
};
/*


    addToCart(state, payload){
    let item = payload;
    item = { ...item, quantity: 1 }
    console.log('tetonsito si soy uy')
    console.log(item)
    console.log('el state products')
    console.log(state.products)
    if(state.products.length > 0){
        var j = 0
        while  (j < state.products.length || state.products[j]._id === item._id){
            let bool = (state.products[j]._id === item._id)
            if (bool){
                console.log('TETONER FUNCIONA')
                let itemIndex = state.products.findIndex(el => el._id === item._id)
                state.products[itemIndex]["quantity"] +=1;
            }
        j++
        }

        if (j == state.products.length){
            state.products.push(item)
            console.log('tetoncito')
        }
    } else{
//        state.products.push(state.topRated[0])
        state.products.push(item)
    }
    
    state.contador_productos++
    //console.log(state.products)
},


*/