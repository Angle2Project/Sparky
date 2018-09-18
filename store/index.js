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
          current : true,
          url : '/'
        },
        {
          name : 'description',
          current : false,
          url : '/description'
        },
        {
          name : 'expertise',
          current : false,
          url : '/expertise'
        },
        {
          name : 'clients',
          current : false,
          url : '/clients'
        },
        {
          name : 'team',
          current : false,
          url : '/team'
        },
        {
          name : 'contact',
          current : false,
          url : '/contact'
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