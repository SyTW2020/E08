import axios from "axios";

const url ='http://localhost:4000/products'

const state = {
    products: [],
    detalles : {}
}

const getters = {
    allProducts : state => state.products,
    detallesProductos : state => state.detalles
   
}

const actions = {
    async obtenerProductos({commit}){
        const res = await axios.get(url);
        commit('setProducts',res.data);
    },

    async obtenerDataProducto( { commit }, producto) {
        console.log(producto)
        const res = await axios.get(`${url}/${producto}`);
        console.log(res)
        commit('getProduct', res.data);
    },
    

}
const mutations = {

    setProducts : (state, products) => state.products = products,
    getProduct : (state, producto) => state.detalles = producto,
    
}

export default {  state, getters, actions, mutations}
