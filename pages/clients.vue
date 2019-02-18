<template>
  <section class="container" id="app-clients">
    <!-- Slider main container -->
    <div class="swiper-container clients-slider">        
        <div class="swiper-wrapper">
            <!-- Slides -->
            <div class="swiper-slide">              
              <img src="~assets/converse.svg">
              <i></i>
            </div>
            <div class="swiper-slide">              
              <img src="~assets/footjoy.svg">
              <i></i>
            </div>
            <div class="swiper-slide">              
              <img src="~assets/talbots.svg">
              <i></i>
            </div>            
        </div>        
    </div>
    <div class="swiper-navigation">
      <div class="prev" @mouseenter="hoverPrev" @mouseleave="hoverPrev">
        <div>
          <span>prev</span>
        </div>        
        <i></i>
      </div>
      <div class="next" @mouseenter="hoverNext" @mouseleave="hoverNext">
        <div>
          <span>next</span>
        </div>        
        <i></i>
      </div>
    </div>          
    <h1>
      <div class="l1">
        <span>
          <i>powerful </i>
          <i>brands</i>
         </span>
      </div>  
      <span class="l2">
        <i>powerful </i>
        <i>brands</i>
      </span>
      <span class="l3">
        <i>powerful </i>
        <i>brands</i>
      </span>
      <span class="l4">
        <i>powerful </i>
        <i>brands</i>
      </span>
      <span class="l5">
        <i>powerful </i>
        <i>brands</i>
      </span>
    </h1>    
  </section>
</template>

<script>
//import SplitText from 'SplitText'
import Swiper from 'swiper';
export default {
  mounted : function(){
    var app = this;    
    var dobbleTitle;
    if(window.innerWidth <= 768 && window.innerWidth > 480){
      dobbleTitle = '33.3%';
      app.screen = 'tablet';
    }else if(window.innerWidth <= 480){
      dobbleTitle = '23.4%';
      app.screen = 'mobile';
      if(window.innerWidth <= 480){           
        TweenMax.to('#app-logo .st2', 0.4, {opacity : 0});
      }
    }else{
      dobbleTitle = '37%';
      app.screen = 'descktop';
    }
    app.$store.commit('pageName', 'clients');
    app.$store.commit('navigation', 'clients');
    app.$store.commit('eyes', false);
    TweenMax.set(document.querySelectorAll('.clients-slider.swiper-container, h1'), {visibility : 'hidden'});
    TweenMax.set('.swiper-navigation i', {width : '0'});
    TweenMax.set('.bg__bottom', {width : '100%', x : app.mobile ? '-84px' : '-160px'});
    TweenMax.to('.app', 0.4, {backgroundColor : '#f8f8eb', onComplete : function(){
      TweenMax.set('.clients-slider.swiper-container', {visibility : 'visible'});
    }});    
    app.mySwiper = new Swiper('.clients-slider.swiper-container', {
      navigation: {
        nextEl: '.swiper-navigation .next',
        prevEl: '.swiper-navigation .prev',
      },
      direction: dobbleTitle == '37%' ? 'horizontal' : 'vertical',
      slidesPerView: 3,
      speed: 700,
      watchOverflow : true
      //spaceBetween: 1
    });
  },
  data : function(){
    return {
      mySwiper : null,
      prevAnimation : false,
      nextAnimation : false,
      screen : null
    }
  },
  head : function(){
    return {
      title : 'Our Clients | Sparky',
      meta: [        
        { hid: 'description', name: 'description', content: 'Learn more about the powerful brands our team has worked with, and what Sparky can do for your brand!' }
      ]
    }
  },
  transition : {    
    mode : 'out-in',
    css : false,
    enter : function(el, done){
      var app = this;
      var prev = (app.$store.state.prevPage == 'services');
      var dobbleTitle = window.innerWidth <= 768;
      var bgBottomHeigth;
      if(window.innerWidth <= 768 && window.innerWidth > 480){
        bgBottomHeigth = '33.3%';
      }else if(window.innerWidth <= 480){
        bgBottomHeigth = '23.4%';
      }else{
        bgBottomHeigth = '37%';
      }
      TweenMax.to(document.querySelectorAll('.app-social .st0'), 0.4, {fill : '#f8f8eb'});
      TweenMax.to('.bg__bottom', 0.7, {height : bgBottomHeigth, ease: Power4.easeInOut, onComplete : function(){

        // H1 Animation //
        TweenMax.set('h1', {visibility : 'visible'});
        TweenMax.fromTo('h1 .l1 span', 1.2, {y:'130%'}, {y:'0%',ease: Back.easeOut.config(1.5), delay : 0, force3D : false});
          TweenMax.to('h1 .l2', 0.3, {y:'15%',ease: Power1.easeOut, delay : 0});
          TweenMax.to('h1 .l3', 0.4, {y:'30%',ease: Power1.easeOut, delay : 0});
          TweenMax.to('h1 .l4', 0.5, {y:'45%',ease: Power1.easeOut, delay : 0});
          TweenMax.to('h1 .l5', 0.6, {y:'60%',ease: Power1.easeOut, delay : 0, onComplete : function(){
            TweenMax.to('.scroll-down__text span, .start-project__text span', 0.5, {y : '100%'});
            app.$store.commit('loader', false);
            new TimelineMax().staggerTo(document.querySelectorAll('.clients-slider.swiper-container .swiper-slide'), 0.5, {opacity : 1, y : '0', ease: Back.easeOut.config(1.5), force3D : true}, 0.1, 'uno')
            .to(document.querySelectorAll('.clients-slider.swiper-container .swiper-slide'), 0.5, {borderColor : dobbleTitle ? 'transparent' : '#191919'}, 'uno+=0.7');            
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
      var slides = document.querySelectorAll('.clients-slider .swiper-slide-active, .clients-slider .swiper-slide-active+.swiper-slide, .clients-slider .swiper-slide-active+.swiper-slide+.swiper-slide');
      tl.to('h1 .l1 span', 0.7, {y : '100%', ease: Power4.easeInOut}, 'uno')
      .to(document.querySelectorAll('.clients-slider .swiper-slide'), 0.7, {borderColor : 'transparent'}, 'uno')
      .to(document.querySelectorAll('.swiper-navigation .prev, .swiper-navigation .next'), 0.7, {opacity : 0}, 'uno')
      .staggerTo(slides, 0.15, {scaleY : 0.5, opacity : 0}, 0.15, 'dos')
      .to('.bg__bottom', 0.7, {height : '0%', ease: Power4.easeInOut, onComplete : function(){        
        TweenMax.set('.bg__bottom', {x : '0%'});
        done();
      }}, 'dos')
      .to(document.querySelectorAll('.app-social .st0'), 0.4, {fill : '#191919', ease: Power4.easeInOut}, 'dos');
      
      
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
    resize : function(){
      return this.$store.state.resize;
    },
    servicesSlider : function(){
      return this.$store.state.servicesSlider;
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
      var dobbleTitle = window.innerWidth <= 768;
      var bgBottomHeigth;
      if(window.innerWidth <= 768 && window.innerWidth > 480){
        bgBottomHeigth = '33.3%';
      }else if(window.innerWidth <= 480){
        bgBottomHeigth = '23.4%';
      }else{
        bgBottomHeigth = '37%';
      }
      TweenMax.to(document.querySelectorAll('.app-social .st0'), 0.4, {fill : '#f8f8eb'});      
      TweenMax.to('.bg__bottom', 0.7, {height : bgBottomHeigth, ease: Power4.easeInOut, delay : 1.5, onComplete : function(){
        // H1 Animation //
        TweenMax.set('h1', {visibility : 'visible'});
        TweenMax.fromTo('h1 .l1 span', 1.2, {y:'130%'}, {y:'0%',ease: Back.easeOut.config(1.5), delay : 0, force3D : false});
          TweenMax.to('h1 .l2', 0.3, {y:dobbleTitle ? '15%' : '15%',ease: Power1.easeOut, delay : 0});
          TweenMax.to('h1 .l3', 0.4, {y:dobbleTitle ? '27%' : '30%',ease: Power1.easeOut, delay : 0});
          TweenMax.to('h1 .l4', 0.5, {y:dobbleTitle ? '38%' : '45%',ease: Power1.easeOut, delay : 0});
          TweenMax.to('h1 .l5', 0.6, {y:dobbleTitle ? '46%' : '60%',ease: Power1.easeOut, delay : 0, onComplete : function(){            
            app.$store.commit('loader', false);
            new TimelineMax().staggerTo(document.querySelectorAll('.clients-slider.swiper-container .swiper-slide'), 0.5, {opacity : 1, y : '0', ease: Back.easeOut.config(1.5), force3D : true}, 0.1, 'uno')            
            .to(document.querySelectorAll('.clients-slider.swiper-container .swiper-slide'), 0.5, {borderColor : dobbleTitle ? 'transparent' : '#191919'}, 'uno+=0.7');
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
                if(app.$store.state.scrollDownHover || (app.$store.state.servicesSlider && app.$store.state.mobile))scrollDownTL.pause();
              });

              TweenMax.to(document.querySelectorAll('.app-social a'), 0.5, {y : 0, delay : 0.1});
              TweenMax.to('.app-logo svg', 0.5, {y : 0, delay : 0.1});
              new TimelineMax({delay : 0.1}).to('.app-blog span', 0.3, {y: '0%'})
              .to('.app-blog i', 0.3, {height: '7px'}, '-=0.1');
              TweenMax.to('.start-project__button', 0.5, {scale : 1, delay : 0.1, onComplete : function(){
                var w;
                var tl = new TimelineMax({onComplete : function(){
                  app.$store.commit('appStartAnimation', false);
                  app.$store.commit('scroll', true);
                  app.$store.commit('pageTransition', false);
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

            }});
          }});
        //==//
      }})
    },
    resize : function(e){
      var app = this;
      setTimeout(function(){
        var w = e.target.innerWidth;
        var h = e.target.innerHeight;
        if(w > 768){
          app.screen = 'descktop';
        }else if(w <= 768 && w > 480){
          app.screen = 'tablet';
        }else if(w <= 480){
          app.screen = 'mobile';        
        }
      }, 100);
    },
    screen : function(screen, prev){
      if(prev === null)return false;
      var app = this;
      switch (screen) {
        case 'descktop':
          TweenMax.to('#app-logo .st2', 0.4, {opacity : 1});
          TweenMax.set('.bg__bottom', {height : '37%', x : -160});
          app.mySwiper.destroy(false);
          app.mySwiper = new Swiper('.clients-slider.swiper-container', {
            navigation: {
              nextEl: '.swiper-navigation .next',
              prevEl: '.swiper-navigation .prev',
            },
            direction: 'horizontal',
            slidesPerView: 3,
            speed: 700,
            watchOverflow : true
            //spaceBetween: 1
          });
          new TimelineMax().staggerTo(document.querySelectorAll('.clients-slider.swiper-container .swiper-slide'), 0.5, {opacity : 1, y : '0', ease: Back.easeOut.config(1.5), force3D : true}, 0.1, 'uno')
          .to(document.querySelectorAll('.clients-slider.swiper-container .swiper-slide'), 0.5, {borderColor : '#191919'}, 'uno+=0.1');
          TweenMax.set('.swiper-navigation .prev i', {left : 'auto', right : 'calc(100% - 30px)'})
          TweenMax.set('.swiper-navigation .next i', {right : 'auto', left : 'calc(100% - 30px)'})
          TweenMax.to(document.querySelectorAll('.swiper-navigation span'), 0.5, {y : '0', onComplete : function(){
            TweenMax.to('.swiper-navigation i', 0.6, {width : '30px', ease: Power4.easeIn, onComplete : function(){
              TweenMax.set('.swiper-navigation .prev i', {left : '0', right : 'auto'})
              TweenMax.set('.swiper-navigation .next i', {right : '0', left : 'auto'})
              TweenMax.set(document.querySelectorAll('.swiper-navigation i', {clearProps : 'all'}));
            }});
          }})
          break;
        case 'tablet':
          TweenMax.to('#app-logo .st2', 0.4, {opacity : 1});
          TweenMax.set('.bg__bottom', {height : '33.3%', x : -160});
          app.mySwiper.destroy(false);
          app.mySwiper = new Swiper('.clients-slider.swiper-container', {
            navigation: {
              nextEl: '.swiper-navigation .next',
              prevEl: '.swiper-navigation .prev',
            },
            direction: 'vertical',
            slidesPerView: 3,
            speed: 700,
            watchOverflow : true
            //spaceBetween: 1
          });
          new TimelineMax().staggerTo(document.querySelectorAll('.clients-slider.swiper-container .swiper-slide'), 0.5, {opacity : 1, y : '0', ease: Back.easeOut.config(1.5), force3D : true}, 0.1, 'uno')
          .to(document.querySelectorAll('.clients-slider.swiper-container .swiper-slide'), 0.5, {borderColor : 'transparent'}, 'uno+=0.7');
          TweenMax.set('.swiper-navigation .prev i', {left : 'auto', right : 'calc(100% - 30px)'})
          TweenMax.set('.swiper-navigation .next i', {right : 'auto', left : 'calc(100% - 30px)'})
          TweenMax.to(document.querySelectorAll('.swiper-navigation span'), 0.5, {y : '0', onComplete : function(){
            TweenMax.to('.swiper-navigation i', 0.6, {width : '30px', ease: Power4.easeIn, onComplete : function(){
              TweenMax.set('.swiper-navigation .prev i', {left : '0', right : 'auto'})
              TweenMax.set('.swiper-navigation .next i', {right : '0', left : 'auto'})
              TweenMax.set(document.querySelectorAll('.swiper-navigation i', {clearProps : 'all'}));
            }});
          }})
          break;
        case 'mobile':
          TweenMax.to('#app-logo .st2', 0.4, {opacity : 0});
          TweenMax.set('.bg__bottom', {height : '23.4%', x : -84});
          app.mySwiper.destroy(false);
          app.mySwiper = new Swiper('.clients-slider.swiper-container', {
            navigation: {
              nextEl: '.swiper-navigation .next',
              prevEl: '.swiper-navigation .prev',
            },
            direction: 'vertical',
            slidesPerView: 3,
            speed: 700,
            watchOverflow : true
            //spaceBetween: 1
          });
          new TimelineMax().staggerTo(document.querySelectorAll('.clients-slider.swiper-container .swiper-slide'), 0.5, {opacity : 1, y : '0', ease: Back.easeOut.config(1.5), force3D : true}, 0.1, 'uno')
          .to(document.querySelectorAll('.clients-slider.swiper-container .swiper-slide'), 0.5, {borderColor : 'transparent'}, 'uno+=0.7');
          TweenMax.set('.swiper-navigation .prev i', {left : 'auto', right : 'calc(100% - 30px)'})
          TweenMax.set('.swiper-navigation .next i', {right : 'auto', left : 'calc(100% - 30px)'})
          TweenMax.to(document.querySelectorAll('.swiper-navigation span'), 0.5, {y : '0', onComplete : function(){
            TweenMax.to('.swiper-navigation i', 0.6, {width : '30px', ease: Power4.easeIn, onComplete : function(){
              TweenMax.set('.swiper-navigation .prev i', {left : '0', right : 'auto'})
              TweenMax.set('.swiper-navigation .next i', {right : '0', left : 'auto'})
              TweenMax.set(document.querySelectorAll('.swiper-navigation i', {clearProps : 'all'}));
            }});
          }})
          break;        
        default:
          // statements_def
          break;
      }
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
    font-family: "Futura Condensed Extra Italic";
    font-size: 9.4vw;
    line-height: 8.5vw;
    font-weight: 100;
    font-style: italic;
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
    position: fixed;
    right: calc(160px - 5.5vw);
    left: calc(160px - 5.5vw);
    bottom: 57%;    
}
.swiper-container::before {
  content: "";
  width: 4vw;
  height: 100%;
  background-color: #f8f8eb;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
}
.swiper-container::after {
  content: "";
  width: 4vw;
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
.swiper-slide i {
  display: none;
}
.swiper-wrapper .swiper-slide:last-child {
  border-right: none;
}
.swiper-slide img {
  width: 60%;
}
.swiper-navigation {
  position: fixed;
  right: 160px;
  left: 160px;
  bottom: 45.5%;
  display: flex;
  justify-content: center;
  overflow: hidden;
  height: 40px;
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
.swiper-navigation .prev > div,
.swiper-navigation .next > div {
  overflow: hidden;
}
.swiper-button-disabled span {
  opacity: 0.5;
}
.swiper-container .swiper-wrapper {
  transition-timing-function: cubic-bezier(0.77, 0, 0.175, 1);
  z-index: 0;
}

@media screen and (max-width: 768px) {
  h1 .l1 span {
    display: inline-flex;
    flex-direction: column;
    align-items: flex-end;
  }
  h1  span {
    display: inline-flex;
    flex-direction: column;
    align-items: flex-end;
    padding-right: 1vw;
    padding-bottom: 1.3vw;
  }
  h1 {
    font-size: 15.6vw;
    line-height: 12vw;
    top: calc(66.7% - 0.85vw);
  }
  .swiper-container-vertical {
    left: 160px;
    right: 160px;
    top: calc(160px - 5.5vh);
    bottom: calc(50% - 5.5vh);
  }
  .swiper-container-vertical .swiper-slide {
    height: auto;
  }
  .swiper-navigation {    
    bottom: calc(33.3% + ((50% - 33.3%) / 2) - 20px);    
  }
  .swiper-container::before {    
    width: 100%;
    height: 4vw;
  }
  .swiper-container[data-v-2af04cc2]::after {    
    width: 100%;
    height: 4vw;        
    bottom: 0;
    top: auto;    
  }
  .swiper-slide {
    height: auto;
    border-bottom: 1px solid transparent;
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 0;
    transform: translateY(50%);  
  }
  .swiper-slide-active {
    position: relative;
  }
  .swiper-slide i {
    display: block;    
    height: 1px;
    width: 10.4vw;
    background-color: #191919;
    position: absolute;
    bottom: 1px;
    left: calc(50% - (10.4vw / 2));    
  }
  .swiper-slide:last-child i {
    display: none;
  }
}

@media screen and (max-width: 480px) {
  h1 {
    right: 84px;
    font-size: 12.8vw;
    line-height: 10.0vw;
    top: calc(76.6% - 0.85vw);
  }
  h1 span {
    padding-right: 1vw;
  }
  .swiper-container-vertical {
    left: 84px;
    right: 84px;
    top: 84px;
    bottom: 33%;
  }
  .swiper-slide img {
    width: 100%;
  }
  .swiper-navigation {
    display: none;
  }
  .swiper-container .swiper-wrapper {
    transition-timing-function: ease;
    z-index: 0;
  }
}
</style>