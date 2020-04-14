<template>
  <section class="container" id="app-description">
    <h1>We provide a fresh set of eyes for powerful brands looking to <nuxt-link to="/services">maximize moments, elevate experiences, and ignite innovation.</nuxt-link></h1>
  </section>
</template>

<script>
//import SplitText from 'SplitText'
export default {
  mounted : function(){
    var app = this;
    app.$store.commit('pageName', 'description');
    app.$store.commit('navigation', 'description');
    app.$store.commit('eyes', true);
    TweenMax.to(document.querySelectorAll('.app-social .st0'), 0.4, {fill : '#191919'});
    TweenMax.to('#eye__07 .st2', 0.4, {fill : '#f8f8eb'});
    TweenMax.to(document.querySelectorAll('#app-navigation li i, .scroll-down .scroll-down__line i'), 0.4, {backgroundColor : '#191919'});
    TweenMax.to(document.querySelectorAll('#app-navigation li .item__name'), 0.4, {color : '#191919'});
    TweenMax.to('.app', 0.4, {backgroundColor : '#f8f8eb'})
    var split = new SplitText("#app-description h1", {type:"words"});
    if(window.innerWidth <= 480){           
      TweenMax.to('#app-logo .st2', 0.4, {opacity : 1});
    }
    
    
  },
  data : function(){
    return {
      title: 'Hello World!'
    }
  },  
  transition : {    
    mode : 'out-in',
    css : false,
    enter : function(el, done){
      var app = this;      
      var tl = new TimelineMax({delay : 0.4, onComplete : function(){
        TweenMax.set('#app-description h1 a', {clearProps : 'all'})
        TweenMax.set(document.querySelectorAll('#app-description h1 i'), {clearProps : 'all'});
        app.$store.commit('scroll', true);
        app.$store.commit('pageTransition', false);
      }});        
      document.querySelectorAll('#app-description h1 a > div').forEach( function(el, i) {
        var h = document.createElement('i');
        el.append(h)
      });
      TweenMax.set('#app-description h1', {visibility: 'visible'});
      TweenMax.set('#app-description h1', {visibility: 'visible'});
      TweenMax.set('#app-description h1 a', {color : '#191919'});
      TweenMax.set('#app-description h1 i', {height : 0});
      tl.staggerTo(document.querySelectorAll('.eye__02, .eye__07'), 0.6, {y : '0%', opacity : 1, scaleY : 1, ease: Back.easeOut.config(1.7)}, 0.1, 'uno')
      .staggerFrom(document.querySelectorAll('#app-description h1 > div, #app-description a > div'), 0.7, {opacity:0, rotationX:-80, force3D:true, transformOrigin:"top center -50", ease: Power4.easeOut}, 0.02, 'uno+=0.2')
      .to(document.querySelectorAll('#app-description h1 i'), 0.5, {height : '96%'}, '-=0.1')
      .to(document.querySelectorAll('#app-description h1 a'), 0.5, {color : '#f8f8eb'}, '-=0.6')
      .to('.scroll-down__text span, .start-project__text span', 0.5, {y : '0%'}, 'uno+=0.6')
    },
    leave : function(el, done){
      var app = this;
      app.$store.commit('scroll', false);
      app.$store.commit('prevPage', 'description');
      var next = app.$route.name;
      if(next == 'index'){
        new TimelineMax().staggerTo(document.querySelectorAll('#app-description h1 > div, #app-description a > div'), 0.6, {opacity:0, scaleY:0, force3D:true, ease: Power4.easeOut}, 0.02, 'uno');        
        setTimeout(function(){
          TweenMax.to('#eye__07 .st2', 0.4, {fill : '#f0f0d9'});
          done();
        }, 700);
      }else{
        new TimelineMax().staggerTo(document.querySelectorAll('.eye__02, .eye__07'), 0.3, {opacity : 0, scaleY : 0.5, ease: Power4.easeIn, force3D : true}, 0.1, 'uno')
        .staggerTo(document.querySelectorAll('#app-description h1 > div, #app-description a > div'), 0.6, {opacity:0, scaleY:0, force3D:true, ease: Power4.easeOut}, 0.02, 'uno');
        setTimeout(function(){
          TweenMax.to('#eye__07 .st2', 0.4, {fill : '#f0f0d9'});
          done();
        }, 700);
      }      
    }
  },
  computed : {    
    appStart : function(){
      return this.$store.state.appStart;
    },
    loader : function(){
      return this.$store.state.loader;
    },
    mobile : function(){
      return this.$store.state.mobile;
    },
    servicesSlider : function(){
      return this.$store.state.servicesSlider;
    }
  },
  methods : {
    
  },
  watch : {
    appStart : function(val){
      var app = this;
      if(val){
        TweenMax.set(document.querySelectorAll('#app-eyes .eye__02, #app-eyes .eye__07'), {display : 'block'});        
        TweenMax.fromTo('#app-eyes .eye__02', 0.7, {x : '100%', y : '-100%', scale: 0, rotation : 15}, {x : '0%', y : '0%', scale : 1, opacity : 1, rotation : 0, ease: Power3.easeInOut, delay : 1.05});
        TweenMax.fromTo('#app-eyes .eye__07', 0.9, {x : '100%', y : '-100', scale: 0, rotation : -15}, {x : '0%', y : '0%', scale : 1, opacity : 1, rotation : 0, ease: Power3.easeInOut, delay : 1.17});



        
        var tl = new TimelineMax({onComplete : function(){
          app.$store.commit('loader', false);  
          app.$store.commit('scroll', true);     
          app.$store.commit('pageTransition', false);     
          scrollDownTL = new TimelineMax({repeat : -1}).fromTo('.scroll-down .scroll-down__line i' , 0.8, {x : '100%'}, {x : '0%', ease: Power4.easeIn})
          .to('.scroll-down .scroll-down__line i' , 0.8, {x : '-100%', ease: Power4.easeIn})
          .addCallback(function(){
            if(app.$store.state.scrollDownHover || (app.$store.state.servicesSlider && app.$store.state.mobile))scrollDownTL.pause();
          });

          TweenMax.to(document.querySelectorAll('.app-social a'), 0.5, {y : 0, delay : 0.5});
          TweenMax.to('.app-logo svg', 0.5, {y : 0, delay : 0.5});
          new TimelineMax().to('.app-blog span', 0.3, {y: '0%'})
          .to('.app-blog i', 0.3, {height: '7px'}, '-=0.1');
          TweenMax.to('.start-project__button', 0.5, {scale : 1, delay : 0.5, onComplete : function(){
            TweenMax.to('.scroll-down__text span, .start-project__text span', 0.5, {y : 0});
            var w;
            var tl = new TimelineMax({onComplete : function(){
              app.$store.commit('appStartAnimation', false);
            }});
            TweenMax.set('#app-navigation li.current .item__name span', {y : '100%'});
            TweenMax.set('#app-navigation li.current .item__name', {width : 'auto', x : function(i, el){
              return el.querySelector('span').clientWidth + 16;
            }});
            tl.staggerFromTo(document.querySelectorAll('#app-navigation li i'), 0.2, {x : 83}, {x : 0}, 0.09)
            .staggerFromTo(document.querySelectorAll('#app-navigation li i'), 0.2, {width : 83}, {cycle:{
              width : function(i, el){                  
                return el.parentNode.classList.contains('current') ? 83 : 1;
              }
            }}, 0.09, '-=0.47')
            .to('#app-navigation li.current .item__name span', 0.2, {y : '0%'})
            .to('.cursor', 0.3, {opacity : 1}, 'cursor')
            .to('#cursor-svg .state-0', 0.4, {morphSVG: '#cursor-svg .state-1', ease: Power4.easeIn}, 'cursor+=0.1');
          }});
          TweenMax.set('#app-description h1 a', {clearProps : 'all'})
          TweenMax.set(document.querySelectorAll('#app-description h1 i'), {clearProps : 'all'});
        }});        
        document.querySelectorAll('#app-description h1 a > div').forEach( function(el, i) {
          var h = document.createElement('i');
          el.append(h)
        });
        TweenMax.set('#app-description h1', {visibility: 'visible'});
        TweenMax.set('#app-description h1', {visibility: 'visible'});
        TweenMax.set('#app-description h1 a', {color : '#191919'});
        TweenMax.set('#app-description h1 i', {height : 0});
        tl.staggerFrom(document.querySelectorAll('#app-description h1 > div, #app-description a > div'), 0.7, {opacity:0, rotationX:-80, force3D:true, transformOrigin:"top center -50", delay : 2, ease: Power4.easeOut}, 0.02)
        .to(document.querySelectorAll('#app-description h1 i'), 0.4, {height : '96%', ease: Power4.easeInOut}, '-=0.6')
        .to(document.querySelectorAll('#app-description h1 a'), 0.4, {color : '#f8f8eb', ease: Power4.easeInOut}, '-=0.6');
      }
    }    
  }  
};
</script>

<style>
.app.description {
  /*background-color: #f8f8eb;*/
}
#app-description {
    
}
#app-description h1 {
  margin: 0;
  padding: 0;
  font-family: 'Futura Bold';
  font-weight: bold;
  font-size: 2.81vw;
  line-height: 3.8vw;
  width: 58vw;
  visibility: hidden;
  color: #191919;
  position: absolute;
  left: 75px;
  top: 49%;
}
#app-description h1 a {
  text-decoration: none;  
  position: relative;
  color: #f8f8eb;
  padding-bottom: 3px;
  transition: all 400ms cubic-bezier(0.77, 0, 0.175, 1);
}
#app-description h1 a > div i {  
  position: absolute;
  bottom: 0;
  left: 0;
  width: calc(100% + 1vw);
  height: 96%;
  z-index: -2;
  background-color: #191919;
  transition: all 400ms cubic-bezier(0.77, 0, 0.175, 1);
}
#app-description h1 a:hover {
  color: #191919;
}
#app-description h1 a:hover div i {
  height: 1px;
}

@media screen and (max-width: 768px) {
  #app-description h1 {
    font-size: 4.7vw;
    line-height: 5.7vw;
    width: 65vw;    
    left: 80px;
    top: auto;
    bottom:  calc(25vh + 80px);
    transform: translateY(50%);
  }
  #app-description h1 a > div i {        
    left: -1vw;
    width: calc(100% + 2vw);    
  }
}
@media screen and (max-width: 480px) {
  #app-description h1 {
    font-size: 6.4vw;
    line-height: 7.8vw;
    width: 65vw;
    left: 42px;
    top: auto;
    bottom: 42px;    
    transform: translateY(0);
  }
}
</style>

