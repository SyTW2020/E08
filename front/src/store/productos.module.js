import axios from "axios";

const url ='http://localhost:4000/products'

const state = {
    products: [],
    carrito_numero : 0,
    carrito_products : []
}

const getters = {
    allProducts : state => state.products,
    getcarritoProduct : state => {
        return state.added.map (({id,quantity}) => {
            const product = state.products.find(p.id === id)
        
            return {
                name: product.name,
                precio: product.precio,
                quantity
              }
        })
    }
}

const actions = {
    async obtenerProductos({commit}){
        const res = await axios.get(url);
        commit('setProducts',res.data);
    },

    async obtenerDataProducto( { commit }, producto) {
        await axios.get(`${url}${producto.id}`);
        commit('get', producto);
    },
    addToCart({ commit }, product){
        commit(types.ADD_TO_CART, {
          id: product.id
        })
      }

}
const mutations = {

    setProducts : (state, products) => state.products = products 
}

export default {  state, getters, actions, mutations}
