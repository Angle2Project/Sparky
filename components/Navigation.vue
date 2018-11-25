<template>
  <ul id="app-navigation">
    <li v-if="state == 'app'" v-for="(item, index) in list" :data-url="item.url" :data-name="item.name" :key="index" :class="item.current ? 'current' : ''" @mouseenter="hover" @mouseleave="hover" @click="app">      
      <div class="item__name">
        <span>{{item.text}}</span>
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
      },
      servicesSlider : function(){
        return this.$store.state.servicesSlider;
      },
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
          if(app.$store.state.pageName == 'services' && app.$store.state.servicesSlider){            
            TweenMax.to('#cursor-svg', 0.7, {rotation : 0, ease: Power4.easeInOut});
            TweenMax.to('.cursor__close', 0.7, {width : 0, ease: Power4.easeInOut});
            TweenMax.to(t, 0.2, {x : 0});
          }else{
            var w = s.clientWidth;  
            TweenMax.to(t, 0.2, {width : w});
          }          
          TweenMax.to(i, 0.2, {width : '7px'});
          
        }else{          
          if(app.$store.state.pageName == 'services' && app.$store.state.servicesSlider){
            TweenMax.to('#cursor-svg', 0.6, {rotation : 45, ease: Power4.easeInOut});
            TweenMax.to('.cursor__close', 0.6, {width : function(i, el){
              var w = el.querySelector('span').clientWidth;
              return w;
            }, ease: Power4.easeInOut});
            TweenMax.to(t, 0.2, {x : function(i, el){
              return el.querySelector('span').clientWidth + 16;
            }});
          }else{
            TweenMax.to(t, 0.2, {width : 0});
          }
          TweenMax.to(i, 0.2, {width : '1px'});          
        }
      },
      slider : function(e, name){
        var app = this;        
        if(app.$store.state.services.sliderTransition)return false;        
        TweenMax.to('#cursor-svg', 0.6, {rotation : 45, ease: Power4.easeInOut});
            TweenMax.to('.cursor__close', 0.6, {width : function(i, el){
              var w = el.querySelector('span').clientWidth;
              return w;
            }, ease: Power4.easeInOut});
        app.$store.state.services.serviceDetails(e, name, true);
      },
      app : function(e){
        var app = this;        
        if(app.$store.state.pageTransition || e.currentTarget.classList.contains('current'))return false;        
        app.$store.commit('pageTransition', true);
        var url = e.currentTarget.getAttribute('data-url');
        app.$router.push({path : url});        
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
        if(app.servicesSlider){
          var tl = new TimelineMax({onComplete : function(){
            setTimeout(function(){              
              TweenMax.set(document.querySelectorAll('#app-navigation li .item__name'), {clearProps : 'all'});
              var tl2 = new TimelineMax({onComplete : function(){
                app.$store.commit('servicesSlider', false);
              }});
              TweenMax.set('#app-navigation li.current .item__name span', {y : '100%'});
              TweenMax.set('#app-navigation li.current .item__name', {width : 'auto', x : function(i, el){
                return el.querySelector('span').clientWidth + 16;
              }});
              tl2.staggerFromTo(document.querySelectorAll('#app-navigation li i'), 0.2, {x : 83}, {x : 0}, 0.09)
              .staggerFromTo(document.querySelectorAll('#app-navigation li i'), 0.2, {width : 83}, {cycle:{
                width : function(i, el){
                  return el.parentNode.classList.contains('current') ? 83 : 1;
                }
              }}, 0.09, '-=0.47')
              .to('#app-navigation li .item__name span', 0.2, {y : '0%'})
            }, 100);
            // Sider render //
            app.$store.commit('navigationType', {state : 'app', current : name});            
          }});
          tl.staggerTo(document.querySelectorAll('#app-navigation li i'), 0.2, {width : 83}, 0.09, 'uno')
          tl.staggerTo(document.querySelectorAll('#app-navigation li .item__name span'), 0.2, {y : '100%'}, 0.09, 'uno')
          .staggerTo(document.querySelectorAll('#app-navigation li i'), 0.2, {x : 83}, 0.09, '-=0.2');
        }else{
          var cuurent = document.querySelector('#app-navigation li[data-name="'+name+'"]');
          document.querySelector('#app-navigation li.current').classList.remove('current');
          document.querySelector('#app-navigation li[data-name="'+name+'"]').classList.add('current');
          TweenMax.to(document.querySelectorAll('#app-navigation li:not(.current) .item__name'), 0.55, {opacity : 0, ease: Power4.easeInOut, onComplete : function(){
            TweenMax.set(document.querySelectorAll('#app-navigation li:not(.current) .item__name'), {clearProps : 'all'});
          }});
          TweenMax.to(document.querySelectorAll('#app-navigation li.current .item__name'), 0.7, {width : function(i, el){
            return el.querySelector('span').clientWidth; 
          }, ease: Power4.easeInOut});
          TweenMax.to(document.querySelectorAll('#app-navigation li:not([data-name="'+name+'"]) i'), 0.7, {width : 1, ease: Power4.easeInOut});
          TweenMax.to(cuurent.querySelector('.item__name'), 0.7, {x : function(i, el){
            var w = el.parentNode.classList.contains('current') ? (el.querySelector('span').clientWidth + 16) :  (el.clientWidth + 16);          
            return w;          
          }, ease: Power4.easeInOut});
          TweenMax.to(cuurent.querySelector('i'), 0.7, {width : 83, ease: Power4.easeInOut});
        }        
      }
    }
  };
</script>

<style>
#app-navigation {
  width: 166px;
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
  position: relative;
}
#app-navigation li .item__name {
  display: flex;
  align-items: center;
  position: absolute;
  right: calc(50% + 8px);  
  top: calc(50% - 7px);
  font: 500 14px/1 'Futura';
  color: #191919;
  white-space: nowrap;
  overflow: hidden;  
  width: 0%;
  justify-content: flex-end;
  text-transform: lowercase;
  transition: color 700ms ease;
  z-index: 1;
}
#app-navigation li.current .item__name {  
  color: #fff!important;
}
.services #app-navigation li.current .item__name,
.team #app-navigation li.current .item__name {
  color: #191919!important;
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
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(100%);
}
@media screen and (max-width: 480px) {
  #app-navigation {
    visibility: hidden;
    z-index: -10;
  }
}
</style>

