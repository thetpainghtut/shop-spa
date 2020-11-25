import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    cart: []
  },
  mutations: {
    saveToCart(state,payload){
      let item = state.cart.find(item => item.id == payload.id);
      if (item) {
        item.qty += Number(payload.qty);
      } else {
        state.cart.push(payload);
      }
    },
    storeCart(state){
      localStorage.setItem('cart', JSON.stringify(state.cart));
    },
    setCartState(state){
      if(localStorage.getItem('cart')){
        state.cart = JSON.parse(localStorage.getItem('cart'));
      }else{
        state.cart = [];
      }
    }
  },
  actions:{
    addToCart({commit}, payload){
      commit('saveToCart',payload)
      commit('storeCart')
    },
    setState({commit}){
      commit('setCartState')
    }
  },
  getters:{

  }
})

export default store