import axios from "axios";

const url ='http://localhost:4000/products'

const state = {
    products: [],
    carrito_products : []
}

const getters = {
    allProducts : state => state.products,
   
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
    

}
const mutations = {

    setProducts : (state, products) => state.products = products 
}

export default {  state, getters, actions, mutations}
