const state = {
    topRated: [{id: 1, name: 'Tele', price: 500, url:'aqui va el enlace a la foto', desc: "Buena tele", rate: 4.3 }, 
    {id: 2, name: 'Cascos', price: 50, url:'aqui va el enlace a la foto', desc: "Buen casco", rate: 4.0 },
    {id: 3, name: 'PC', price: 900, url:'aqui va el enlace a la foto', desc: "Buena pc", rate: 3.9 }],

    carrito_productos_contador: 0,
    carrito_products: []
    
}

const mutations = {
    
    addToCart(state, payload){
    let item = payload;
    item = { ...item, quantity: 1 }
    if(state.carrito_products > 0){
        let bool = state.carrito_products.some(i => i.id == item.id)
        if (bool){
            let itemIndex = state.carrito_products.findIndex(el => el.id === item.id)
            state.carrito_products[itemIndex]["quantity"] +=1;
        } else {
            state.carrito_products.push(item)
        }
    } else{
        state.carrito_products.push(item)
    }
    state.carrito_productos_contador++
    console.log(state.carrito_productos_contador)
},

    removeItem(state, payload){
        if(state.carrito_products.length > 0){
            let bool = state.carrito_productos.some (i => i.id === payload.id)
            
            if (bool) {
                let index = state.carrito_productos.findIndex(el => el.id === payload.id)
                if (state.carrito_productos[index]["quantity"] !== 0){
                    state.carrito_productos[index]["quantity"] -= 1
                    state.carrito_productos_contador--
                }
                if (state.carrito_productos[index]["quantity"] === 0){
                    state.carrito_productos.splice(index, 1)
                }
            }
        }
    }

}

const actions = {

    addToCart: (context, payload) => {
        context.commit("addToCart", payload)
    },
    removeItem: (context, payload) => {
        context.commit("removeItem", payload)
    }

}





const getters = {
    contador: state => state.carrito_productos_contador,
    array_productos: state => state.carrito_products

}



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


export default {state, getters, actions, mutations}
