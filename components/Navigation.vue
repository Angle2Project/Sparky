<template>
  <ul id="app-navigation">
    <li v-if="state == 'app'" v-for="(item, index) in list" :data-url="item.url" :data-name="item.name" :key="index" :class="item.current ? 'current' : ''" @mouseenter="hover" @mouseleave="hover" @click="app">      
      <div class="item__name">
        <span>{{item.name}}</span>
      </div>
      <i></i>      
    </li>
    <li v-if="state == 'slider'" v-for="(item, index) in list" :data-name="item.sn" :key="index" :class="item.current ? 'current' : ''" @mouseenter="hover" @mouseleave="hover" @click="slider($event, item.sn)">
      <div class="item__name">
        <span>{{item.name}}</span>
      </div>      
      <i></i>      
    </li>
  </ul>
</template>

<script>
  export default {
    mounted : function(){
      var app = this;
      
    },
    data : function() {
      return {
        
      }
    },
    computed : {
      list : function(){
        return this.$store.state.navigation.list;
      },
      appStartAnimation : function(){
        return this.$store.state.appStartAnimation;
      },
      state : function(){
        return this.$store.state.navigation.state;
      },
      pageTransition : function(){
        return this.$store.state.pageTransition;
      }      
    },
    methods : {
      hover : function(e){
        var app = this; 
        if(this.appStartAnimation || (app.state == 'slider' && app.$store.state.services.sliderTransition))return false;
        if(e.currentTarget.classList.contains('current'))return false;        
        var s = e.currentTarget.querySelector('span')
        var i = e.currentTarget.querySelector('i');
        var t = e.currentTarget.querySelector('.item__name');
        if(e.type == 'mouseenter'){
          if(app.$store.state.pageName == 'services' && app.$store.state.services.slider)TweenMax.to('.cursor', 0.7, {rotation : 0, ease: Power4.easeInOut});
          var w = s.clientWidth;          
          TweenMax.to(i, 0.2, {width : '7px'});
          TweenMax.to(t, 0.2, {width : w});
        }else{          
          if(app.$store.state.pageName == 'services' && app.$store.state.services.slider)TweenMax.to('.cursor', 0.7, {rotation : 45, ease: Power4.easeInOut});
          TweenMax.to(i, 0.2, {width : '1px'});
          TweenMax.to(t, 0.2, {width : 0});
        }
      },
      slider : function(e, name){
        var app = this;        
        if(app.$store.state.services.sliderTransition)return false;
        app.$store.state.services.serviceDetails(e, name, true);
      },
      app : function(e){
        var app = this;
        if(app.$store.state.pageTransition)return false;
        app.$store.commit('pageTransition', true);        
        var url = e.currentTarget.getAttribute('data-url');        
        console.log(url);        
        app.$router.push({path : url});
        // e.currentTarget.classList.add('current')
        // TweenMax.to('#app-navigation li.current i', 0.7, {width : 1, ease: Power4.easeInOut});
        // TweenMax.to(e.currentTarget.querySelector('.item__name'), 0.7, {width : 0, ease: Power4.easeInOut});
        // TweenMax.to(e.currentTarget.querySelector('i'), 0.7, {width : 83, ease: Power4.easeInOut, onComplete : function(){
        //   app.$store.commit('navigation', name);
        // }});
      }      
    },
    watch : {
      $route : function(rout){
        var app = this;
        var name;
        //app.$store.commit('navigation', name);
        if(rout.name == 'index'){
          name = 'intro'; 
        }else if(rout.name == 'services'){
          name = 'expertise';
        }else{
          name = rout.name
        }        
        var cuurent = document.querySelector('#app-navigation li[data-name="'+name+'"]');
        document.querySelector('#app-navigation li.current').classList.remove('current');
        document.querySelector('#app-navigation li[data-name="'+name+'"]').classList.add('current');
        TweenMax.to(document.querySelectorAll('#app-navigation li:not([data-name="'+name+'"]) i'), 0.7, {width : 1, ease: Power4.easeInOut});
        TweenMax.to(cuurent.querySelector('.item__name'), 0.7, {width : 0, ease: Power4.easeInOut});
        TweenMax.to(cuurent.querySelector('i'), 0.7, {width : 83, ease: Power4.easeInOut, onComplete : function(){
          
        }});
        console.log(name);
        console.log(document.querySelector('#app-navigation li:not([data-name="'+name+'"]) i'));
      }
    }
  };
</script>

<style>
#app-navigation {
  width: 83px;
  position: fixed;
  right: 0;
  top: 50%;
  transform: translateY(-50%);  
  margin: 0;
  padding: 0;
  list-style: none;
  z-index: 5;
}
#app-navigation li {
  margin-bottom: 6px;
  height: 30px;
  cursor: pointer;
}
#app-navigation li .item__name {
  display: flex;
  align-items: center;
  position: absolute;
  right: calc(100% + 8px);
  height: 30px;
  font: 500 14px/1 'Futura';
  color: #191919;
  white-space: nowrap;
  overflow: hidden;  
  width: 0%;
  justify-content: flex-end;
  text-transform: lowercase;
}
#app-navigation li .item__name span {
  display: inline-block;  
  
}
#app-navigation li:last-child {
  margin-bottom: 0;
}
#app-navigation li i {
  display: block;
  background-color: #191919;
  width: 83px;
  height: 100%;
  top: 0;
  left: 0;
  transform: translateX(100%);
}
</style>

