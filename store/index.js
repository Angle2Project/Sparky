import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = () => new Vuex.Store({

  state: {    
    appStart : false,
    appStartAnimation : true,
    pageName : '',
    loaderLive : true,
    navigation : {
      list : [
        {
          name : 'intro',
          current : true
        },
        {
          name : 'description',
          current : false
        },
        {
          name : 'expertise',
          current : false
        },
        {
          name : 'clients',
          current : false
        },
        {
          name : 'team',
          current : false
        },
        {
          name : 'contact',
          current : false
        }
      ]
    }
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
    },
    appStartAnimation(state, status){
      state.appStartAnimation = status;
    }
  }
})

export default store