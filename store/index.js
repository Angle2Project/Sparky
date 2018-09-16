import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = () => new Vuex.Store({

  state: {    
    appStart : false,    
    pageName : '',
    loaderLive : true
  },
  getters: {
    
  },
  mutations: {        
    appStart(state, status){
      state.appStart = status;
    },
    pageName(state, status){
      state.pageName = status;
    },
    loaderLive(state, status){
      state.loaderLive = status;
    }
  }
})

export default store