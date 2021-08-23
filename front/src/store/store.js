const state = {
    topRated: [{id: 1, name: 'Tele', price: 500, url:'https://m.media-amazon.com/images/I/81tn5ZRtx7L._AC_SX425_.jpg', desc: "Buena tele", rate: 4.3, quantity: 1}, 
    {id: 2, name: 'Cascos', price: 50, url:'aqui va el enlace a la foto', desc: "Buen casco", rate: 4.0 },
    {id: 3, name: 'PC', price: 900, url:'aqui va el enlace a la foto', desc: "Buena pc", rate: 3.9 }],

    contador_productos: 0,
    products: [],
    carrito: {}

    
}

const mutations = {
    
    addToCart(state, payload){
    let item = payload;
    item = { ...item, quantity: 1 }

    if(state.products.length > 0){
        var z = 0
        for (var j = 0; j < state.products.length; j++){
            let bool = (state.products[j]._id === item._id)
            if (bool){
                let itemIndex = state.products.findIndex(el => el._id === item._id)
                state.products[itemIndex]["quantity"] +=1;
                z = 1;
            }
        }
        if (z == 0) {
            state.products.push(item)
        }

    } else{
//        state.products.push(state.topRated[0])
        state.products.push(item)
    }
    
    state.contador_productos++
    //console.log(state.products)
},

    removeItem(state, payload){


        if(state.products.length > 0){
        for (var j = 0; j < state.products.length; j++){
            let bool = (state.products[j]._id === payload._id)
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
}


/*

    addToCart(state, payload){
    let item = payload;
    item = { ...item, quantity: 1 }
    if(state.products > 0){
        let bool = state.products.some(i => i.id == item.id)
        if (bool){
            let itemIndex = state.products.findIndex(el => el.id === item.id)
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
            let bool = state.carrito_productos.some (i => i.id === payload.id)
            
            if (bool) {
                let index = state.carrito_productos.findIndex(el => el.id === payload.id)
                if (state.carrito_productos[index]["quantity"] !== 0){
                    state.carrito_productos[index]["quantity"] -= 1
                    state.contador_productos--
                }
                if (state.carrito_productos[index]["quantity"] === 0){
                    state.carrito_productos.splice(index, 1)
                }
            }
        }
    }

*/



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
    contador: state => state.contador_productos,
    array_productos: state => state.products

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