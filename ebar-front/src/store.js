import Vue from 'vue'
import Vuex from 'vuex'
import ComandaAPI from '@/api/comanda-api'
import ItemAPI from '@/api/item-api'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    page:0,
    comandas: {},
    items: {},
    selectedComanda: 0,
    selectedItem: 0,
  },
  mutations: {
    SET_COMANDAS(state, comandas){
      state.comandas=comandas
    },
    SET_ITEMS(state, items){
      state.items=items
    },
    SET_SELECTEDCOMANDA (state, selectedComanda) {
      state.selectedComanda=selectedComanda;
    },
    SET_SELECTEDITEM (state, selectedItem) {
      state.selectedItem=selectedItem
    },
    SET_PAGE (state, page){
      state.page=page
    }
  },
  actions: {
    setComandas(){
      ComandaAPI.GetAll().then((res)=>this.commit('SET_COMANDAS', res.data))
    },
    setItems(){
      ItemAPI.GetAll().then((res)=>this.commit('SET_ITEMS', res.data))
    },
    setComanda(state, selectedComanda){
        state.commit('SET_SELECTEDCOMANDA', selectedComanda)
    },
    setItem(state, selectedItem){
      state.commit('SET_SELECTEDITEM', selectedItem)
    },
    setPage(state, page){
      state.commit('SET_PAGE', page)
      state.commit('SET_SELECTEDCOMANDA', 0)
      state.commit('SET_SELECTEDITEM', 0)
    }
  }
})