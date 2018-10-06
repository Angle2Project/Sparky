import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = () => new Vuex.Store({

  state: {    
    appStart : false,
    appStartAnimation : true,
    pageName : '',
    loader : true,
    eyes : true,
    scrollDownHover : false,
    scrollDownTL : null,
    scroll : false,
    services : null,
    servicesSlider : false,
    prevPage : '',
    pageTransition : false,
    navigation : {
      state : 'app',
      list : [
        {
          name : 'intro',
          current : false,
          url : '/'
        },
        {
          name : 'description',
          current : false,
          url : 'description'
        },
        {
          name : 'expertise',
          current : false,
          url : 'services'
        },
        {
          name : 'clients',
          current : false,
          url : 'clients'
        },
        {
          name : 'team',
          current : false,
          url : 'team'
        },
        {
          name : 'contact',
          current : false,
          url : 'contact'
        }
      ]
    }
  },
  getters: {
    
  },
  actions : {
    
  },
  mutations: {        
    appStart(state, status){
      state.appStart = status;
    },
    pageName(state, status){
      state.pageName = status;
    },
    loader(state, status){
      state.loader = status;
    },
    eyes(state, status){
      state.eyes = status;
    },
    appStartAnimation(state, status){
      state.appStartAnimation = status;
    },
    scrollDownHover(state, status){
      state.scrollDownHover = status;
    },
    navigationType(state, data){
      state.navigation.state = data.state;
      if(data.state == 'slider'){
        state.navigation.list = [
          {
            name : 'MAXIMIZE MOMENTS',
            current : false,
            url : '/',
            sn : 'mm'
          },
          {
            name : 'ELEVATE EXPERIENCES',
            current : false,
            url : '/description/',
            sn : 'ee'
          },
          {
            name : 'Ignite Innovation',
            current : false,
            url : '/services',
            sn : 'ii'
          },
        ];
        for(var i in state.navigation.list){
          if(data.current == state.navigation.list[i].sn)state.navigation.list[i].current = true;
        }
      }
      if(data.state == 'app'){
        state.navigation.list = [
          {
            name : 'intro',
            current : false,
            url : '/'
          },
          {
            name : 'description',
            current : false,
            url : '/description/'
          },
          {
            name : 'expertise',
            current : false,
            url : '/services'
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
        for(var i in state.navigation.list){
          console.log(state.navigation.list[i].name, data.current)
          if(state.navigation.list[i].name == data.current){
            state.navigation.list[i].current = true;
          }else{
            state.navigation.list[i].current = false;
          }        
        }
      }
    },
    navigation(state, status){
      for(var i in state.navigation.list){
        if(state.navigation.list[i].name == status){
          state.navigation.list[i].current = true;
        }else{
          state.navigation.list[i].current = false;
        }        
      }
    },
    services(state, status){
      state.services = status;
    },    
    servicesSlider(state, status){
      state.servicesSlider = status;
    },
    scroll(state, status){
      state.scroll = status;
    },
    prevPage(state, status){
      state.prevPage = status;
    },
    pageTransition(state, status){
      state.pageTransition = status;
    }
  }
})

export default store