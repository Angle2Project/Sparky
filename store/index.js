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
    mobile : null,
    scrollDownHover : false,
    scrollDownTL : null,
    scroll : false,
    mouseMove : null,
    cursorServiseHover : false,
    resize : null,
    touchevent : null,
    services : null,    
    servicesSlider : false,
    prevPage : '',
    pageTransition : false,
    teamSlider : true,
    teamSliderPosition : 'top',
    startProject : false,
    navigation : {
      state : 'app',
      list : [
        {
          text : 'Home',
          name : 'intro',
          current : false,
          url : '/'
        },
        {
          text : 'About',
          name : 'description',
          current : false,
          url : '/description'
        },
        {
          text : 'Services',
          name : 'expertise',
          current : false,
          url : '/services'
        },
        {
          text : 'Clients',
          name : 'clients',
          current : false,
          url : '/clients'
        },
        {
          text : 'Team',
          name : 'team',
          current : false,
          url : '/team'
        },
        {
          text : 'Contact',
          name : 'contacts',
          current : false,
          url : '/contacts'
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
            name : 'mm',
            current : false,
            url : '/',
            sn : 'mm'
          },
          {
            name : 'ee',
            current : false,
            url : '/description/',
            sn : 'ee'
          },
          {
            name : 'ii',
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
            text : 'Home',
            name : 'intro',
            current : false,
            url : '/'
          },
          {
            text : 'About',
            name : 'description',
            current : false,
            url : '/description'
          },
          {
            text : 'Services',
            name : 'expertise',
            current : false,
            url : '/services'
          },
          {
            text : 'Clients',
            name : 'clients',
            current : false,
            url : '/clients'
          },
          {
            text : 'Team',
            name : 'team',
            current : false,
            url : '/team'
          },
          {
            text : 'Contact',
            name : 'contacts',
            current : false,
            url : '/contacts'
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
    },
    mouseMove(state, e){
      state.mouseMove = e;
    },
    touchevent(state, e){
      state.touchevent = e;
    },
    resize(state, e){
      state.resize = e;
    },
    teamSlider(state, status){
      state.teamSlider = status;
    },
    startProject(state, status){
      state.startProject = status;
    },
    mobile(state, status){
      state.mobile = status;
    },
    cursorServiseHover(state, status){
      state.cursorServiseHover = status;
    },
    teamSliderPosition(state, status){
      state.teamSliderPosition = status;
    }    
  }
})

export default store