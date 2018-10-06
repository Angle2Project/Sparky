<template>
  <section class="container" id="app-clients">
    <!-- Slider main container -->
    <div class="swiper-container">        
        <div class="swiper-wrapper">
            <!-- Slides -->
            <div class="swiper-slide"><img src="~assets/converse.svg"></div>
            <div class="swiper-slide"><img src="~assets/footjoy.svg"></div>
            <div class="swiper-slide"><img src="~assets/talbots.svg"></div>
            <div class="swiper-slide"><img src="~assets/converse.svg"></div>
            <div class="swiper-slide"><img src="~assets/footjoy.svg"></div>
            <div class="swiper-slide"><img src="~assets/talbots.svg"></div>
        </div>        
    </div>
    <div class="swiper-navigation">
      <div class="prev" @mouseenter="hoverPrev" @mouseleave="hoverPrev">
        <span>prev</span>
        <i></i>
      </div>
      <div class="next" @mouseenter="hoverNext" @mouseleave="hoverNext">
        <span>next</span>
        <i></i>
      </div>
    </div>          
    <h1>
      <div class="l1">
        <span>powerful brands</span>
      </div>  
      <span class="l2">powerful brands</span>
      <span class="l3">powerful brands</span>
      <span class="l4">powerful brands</span>
      <span class="l5">powerful brands</span>
    </h1>    
  </section>
</template>

<script>
//import SplitText from 'SplitText'
import Swiper from 'swiper';
export default {
  mounted : function(){
    var app = this;
    app.$store.commit('pageName', 'clients');
    app.$store.commit('navigation', 'clients');
    app.$store.commit('eyes', false);
    TweenMax.set(document.querySelectorAll('.swiper-container, h1'), {visibility : 'hidden'});
    TweenMax.set('.swiper-navigation i', {width : '0'});
    TweenMax.set('.bg__bottom', {width : '100%', x : '-160px'});
    TweenMax.to('.app', 0.4, {backgroundColor : '#f8f8eb', onComplete : function(){
      TweenMax.set('.swiper-container', {visibility : 'visible'});
    }});
    var mySwiper = new Swiper('.swiper-container', {
      navigation: {
        nextEl: '.swiper-navigation .next',
        prevEl: '.swiper-navigation .prev',
      },
        slidesPerView: 3,
        speed: 700,
        watchOverflow : true
        //spaceBetween: 1
    });
  },
  data : function(){
    return {
      prevAnimation : false,
      nextAnimation : false
    }
  },
  transition : {    
    mode : 'out-in',
    css : false,
    enter : function(el, done){
      var app = this;
      var prev = (app.$store.state.prevPage == 'services')
      console.log(prev);      
      TweenMax.to(document.querySelectorAll('.app-social .st0'), 0.4, {fill : '#f8f8eb'});      
      TweenMax.to('.bg__bottom', (prev ? 0 : 0.7), {height : '37%', ease: Power4.easeOut, onComplete : function(){

        // H1 Animation //
        TweenMax.set('h1', {visibility : 'visible'});
        TweenMax.fromTo('h1 .l1 span', 1.2, {y:'130%'}, {y:'0%',ease: Back.easeOut.config(1.5), delay : 0});
          TweenMax.to('h1 .l2', 0.3, {y:'15%',ease: Power1.easeOut, delay : 0});
          TweenMax.to('h1 .l3', 0.4, {y:'30%',ease: Power1.easeOut, delay : 0});
          TweenMax.to('h1 .l4', 0.5, {y:'45%',ease: Power1.easeOut, delay : 0});
          TweenMax.to('h1 .l5', 0.6, {y:'60%',ease: Power1.easeOut, delay : 0, onComplete : function(){
            app.$store.commit('loader', false);
            new TimelineMax().staggerTo(document.querySelectorAll('.swiper-container .swiper-slide'), 0.5, {opacity : 1, y : '0', ease: Back.easeOut.config(1.5), force3D : true}, 0.1, 'uno')
            .to(document.querySelectorAll('.swiper-container .swiper-slide'), 0.5, {borderColor : '#191919'}, 'uno+=0.7');            
            TweenMax.to('h1 .l3', 0.6, {y:'0%',ease: Power1.easeIn});
            TweenMax.to('h1 .l4', 0.5, {y:'0%',ease: Power1.easeIn});
            TweenMax.to('h1 .l5', 0.4, {y:'0%',ease: Power1.easeIn});
            TweenMax.to('h1 .l2', 0.7, {y:'0%',ease: Power1.easeIn, onComplete : function(){
              TweenMax.set('.swiper-navigation .prev i', {left : 'auto', right : 'calc(100% - 30px)'})
              TweenMax.set('.swiper-navigation .next i', {right : 'auto', left : 'calc(100% - 30px)'})
              TweenMax.to(document.querySelectorAll('.swiper-navigation span'), 0.5, {y : '0', onComplete : function(){
                TweenMax.to('.swiper-navigation i', 0.6, {width : '30px', ease: Power4.easeIn, onComplete : function(){
                  TweenMax.set('.swiper-navigation .prev i', {left : '0', right : 'auto'})
                  TweenMax.set('.swiper-navigation .next i', {right : '0', left : 'auto'})
                  TweenMax.set(document.querySelectorAll('.swiper-navigation i', {clearProps : 'all'}));
                  app.$store.commit('scroll', true);
                  app.$store.commit('pageTransition', false);
                }});
              }})              

            }});
          }});
        //==//
      }})
      done();
    },
    leave : function(el, done){
      var app = this;
      app.$store.commit('scroll', false);
      app.$store.commit('prevPage', 'clients');
      TweenMax.set(document.querySelectorAll('h1 .l2, h1 .l3, h1 .l4, h1 .l5'), {visibility : 'hidden'});
      TweenMax.set(document.querySelectorAll('h1 .l1, h1 span'), {backgroundColor : 'transparent'})
      var next = app.$route.name;
      var tl = new TimelineMax();
      if(next == 'index' || next == 'description'){
        tl.to('.bg__bottom', 0.7, {height : '0%', ease: Power4.easeInOut}, 'uno')
        .to(document.querySelectorAll('.swiper-navigation .prev, .swiper-navigation .next'), 0.7, {opacity : 0, scaleY : 0, ease: Power4.easeOut}, 'uno+=0.3')
        .to('.swiper-container', 0.7, {scaleY : 0.5, opacity : 0, ease: Power4.easeOut, onComplete : function(){
          done();  
        }}, 'uno+=0.6')
      }      
    }
  },
  computed : {    
    appStart : function(){
      return this.$store.state.appStart;
    },
    loader : function(){
      return this.$store.state.loader;
    }
  },
  methods : {
    hoverPrev : function(e){
      var app = this;
      if(e.type == 'mouseenter'){
        if(!app.prevAnimation){
          app.prevAnimation = true;
          new TimelineMax().to('.swiper-navigation .prev:not(.swiper-button-disabled) i', 0.6, {width : '0px', ease: Power4.easeIn})
          .set('.swiper-navigation .prev:not(.swiper-button-disabled) i', {left : 'auto', right : 'calc(100% - 30px)'})
          .to('.swiper-navigation .prev:not(.swiper-button-disabled) i', 0.6, {width : '30px', ease: Power4.easeIn, onComplete : function(){
            app.prevAnimation = false;
          }})
          .set('.swiper-navigation .prev:not(.swiper-button-disabled) i', {clearProps : 'all'})
        }        
      }
    },
    hoverNext : function(e){
      var app = this;
      if(e.type == 'mouseenter'){
        if(!app.nextAnimation){
          app.nextAnimation = true;
          new TimelineMax().to('.swiper-navigation .next:not(.swiper-button-disabled) i', 0.6, {width : '0px', ease: Power4.easeIn})
          .set('.swiper-navigation .next:not(.swiper-button-disabled) i', {right : 'auto', left : 'calc(100% - 30px)'})
          .to('.swiper-navigation .next:not(.swiper-button-disabled) i', 0.6, {width : '30px', ease: Power4.easeIn, onComplete : function(){
            app.nextAnimation = false;
          }})
          .set('.swiper-navigation .next:not(.swiper-button-disabled) i', {clearProps : 'all'})
        }        
      }
    }
  },
  watch : {
    appStart : function(val){
      var app = this;      
      TweenMax.to(document.querySelectorAll('.app-social .st0'), 0.4, {fill : '#f8f8eb'});      
      TweenMax.to('.bg__bottom', 0.7, {height : '37%', ease: Power4.easeOut, delay : 1.5, onComplete : function(){
        // H1 Animation //
        TweenMax.set('h1', {visibility : 'visible'});
        TweenMax.fromTo('h1 .l1 span', 1.2, {y:'130%'}, {y:'0%',ease: Back.easeOut.config(1.5), delay : 0});
          TweenMax.to('h1 .l2', 0.3, {y:'15%',ease: Power1.easeOut, delay : 0});
          TweenMax.to('h1 .l3', 0.4, {y:'30%',ease: Power1.easeOut, delay : 0});
          TweenMax.to('h1 .l4', 0.5, {y:'45%',ease: Power1.easeOut, delay : 0});
          TweenMax.to('h1 .l5', 0.6, {y:'60%',ease: Power1.easeOut, delay : 0, onComplete : function(){
            app.$store.commit('loader', false);
            new TimelineMax().staggerTo(document.querySelectorAll('.swiper-container .swiper-slide'), 0.5, {opacity : 1, y : '0', ease: Back.easeOut.config(1.5), force3D : true}, 0.1, 'uno')
            .to(document.querySelectorAll('.swiper-container .swiper-slide'), 0.5, {borderColor : '#191919'}, 'uno+=0.7');            
            TweenMax.to('h1 .l3', 0.6, {y:'0%',ease: Power1.easeIn});
            TweenMax.to('h1 .l4', 0.5, {y:'0%',ease: Power1.easeIn});
            TweenMax.to('h1 .l5', 0.4, {y:'0%',ease: Power1.easeIn});
            TweenMax.to('h1 .l2', 0.7, {y:'0%',ease: Power1.easeIn, onComplete : function(){
              TweenMax.set('.swiper-navigation .prev i', {left : 'auto', right : 'calc(100% - 30px)'})
              TweenMax.set('.swiper-navigation .next i', {right : 'auto', left : 'calc(100% - 30px)'})
              TweenMax.to(document.querySelectorAll('.swiper-navigation span'), 0.5, {y : '0', onComplete : function(){
                TweenMax.to('.swiper-navigation i', 0.6, {width : '30px', ease: Power4.easeIn, onComplete : function(){
                  TweenMax.set('.swiper-navigation .prev i', {left : '0', right : 'auto'})
                  TweenMax.set('.swiper-navigation .next i', {right : '0', left : 'auto'})
                  TweenMax.set(document.querySelectorAll('.swiper-navigation i', {clearProps : 'all'}));
                }});
              }})

              scrollDownTL = new TimelineMax({repeat : -1}).fromTo('.scroll-down .scroll-down__line i' , 0.8, {x : '100%'}, {x : '0%', ease: Power4.easeIn})
              .to('.scroll-down .scroll-down__line i' , 0.8, {x : '-100%', ease: Power4.easeIn})
              .addCallback(function(){                
                if(app.$store.state.scrollDownHover)scrollDownTL.pause();
              });

              TweenMax.to(document.querySelectorAll('.app-social a'), 0.5, {y : 0, delay : 0.1});
              TweenMax.to('.app-logo svg', 0.5, {y : 0, delay : 0.1});
              TweenMax.to('.start-project__button', 0.5, {scale : 1, delay : 0.1, onComplete : function(){
                var w;
                var tl = new TimelineMax({onComplete : function(){
                  app.$store.commit('appStartAnimation', false);
                  app.$store.commit('scroll', true);
                  app.$store.commit('pageTransition', false);
                }});
                tl.staggerFromTo(document.querySelectorAll('#app-navigation li i'), 0.2, {x : 83}, {x : 0}, 0.09)
                .staggerFromTo(document.querySelectorAll('#app-navigation li i'), 0.2, {width : 83}, {cycle:{
                  width : function(i, el){                  
                    return el.parentNode.classList.contains('current') ? 83 : 1;
                  }
                }}, 0.09, '-=0.47');              
              }});

            }});
          }});
        //==//
      }})
    }    
  }  
};
</script>

<style scoped>
.app.description {
  /*background-color: #f8f8eb;*/
}
#app-clients {
  width: 100vw;
  height: 100vh;
}
#app-clients .bg__bottom {
  position: fixed;
  width: calc(100% - 160px);
  /*height: 37%;*/
  height: 0%;
  background-color: #191919;
  bottom: 0;
  left: 0;
}
#app-clients .bg__bottom::before {
  content: "";
  display: block;
  width: 110%;
  height: 1vw;
  background-color: #f8f8eb;
  position: absolute;
  left: 0;
  top: -1vw;
  z-index: 2;
}
h1 {
  margin: 0;
    padding: 0;
    font: 9.4vw/ 8.5vw "Futura Condensed Extra Italic";
    text-transform: uppercase;
    position: absolute;
    right: 160px;
    top: calc(63% - 0.85vw);
    letter-spacing: -0.5vw;
    z-index: 1;
}
h1::before {
  content: "";
  display: block;
  width: 110%;
  height: 1vw;
  background-color: #f8f8eb;
  position: absolute;
  left: 0;
  top: -0.15vw;
  z-index: 10;
}
h1 span {
  display: inline-block;  
  padding: 0px 10px;
  position: absolute;
  top: 0;
  left: 0;
  color: #f8f8eb;
  white-space: nowrap;
  background-color: #191919;
  overflow: visible;
}
h1 .l1 {
  overflow:hidden;
  z-index: 5;  
  position: relative;
  padding-bottom: 0;
  overflow: hidden;
  background-color: #191919;
}
h1 .l1 span {    
  position: static; 
  display: inline-block; 
  transform: translateY(-102%);
}
h1 .l2 {
  z-index: 4;
}
h1 .l3 {
  z-index: 3;
}
h1 .l4 {
  z-index: 2;
}
h1 .l5 {
  z-index: 1;
}
.swiper-container {
    width: 84vw;
    position: fixed;
    right: calc(160px - 5.5vw);
    bottom: 57%;
}
.swiper-container::before {
  content: "";
  width: 5.5vw;
  height: 100%;
  background-color: #f8f8eb;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
}
.swiper-container::after {
  content: "";
  width: 5.5vw;
  height: 100%;
  background-color: #f8f8eb;
  position: absolute;
  top: 0;
  right: 0;
  z-index: 1;
}
.swiper-slide {  
  height: 11.7vh;
  border-right: 1px solid transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transform: translateY(50%);
}
.swiper-wrapper .swiper-slide:last-child {
  border-right: none;
}
.swiper-slide img {
  width: 60%;
}
.swiper-navigation {
  position: fixed;
  width: 100%;
  bottom: 45.5%;
  display: flex;
  justify-content: center;
  overflow: hidden;
}
.swiper-navigation span {
  font: 500 14px/1 'Futura';
  color: #191919;
  display: inline-block;  
  transition: opacity 700ms ease;
  transform: translateY(100%);
}
.swiper-navigation i {
  display: block;
  width: 30px;  
  height: 7px;
  position: absolute;
  top: 55%;
  transform: translateY(-50%);  
  overflow: hidden;  
  transition: opacity 700ms ease;
  background-color: #191919;
}
.swiper-navigation .prev {
  position: relative;
  padding-left: 44px;
  display: flex;
  align-items: center;
  margin-right: 30px;
  cursor: pointer;
  outline: none;
}
.swiper-navigation .prev i {
  left: 0;
}
.swiper-navigation .next {
  position: relative;
  padding-right: 44px;
  display: flex;
  align-items: center;
  margin-left: 30px;
  cursor: pointer;
  outline: none;
}
.swiper-navigation .next i {
  right: 0;
}
.swiper-navigation .swiper-button-disabled {
  cursor: default;
}
.swiper-navigation .swiper-button-lock {
  display: none;
}
.swiper-button-disabled i {
  opacity: 0.1;
}
.swiper-button-disabled span {
  opacity: 0.5;
}
.swiper-container .swiper-wrapper {
  transition-timing-function: cubic-bezier(0.77, 0, 0.175, 1);
  z-index: 0;
}
</style>

