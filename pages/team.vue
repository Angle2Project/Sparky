<template>
  <section class="container" id="app-team">
    <h1>
      <div class="l1">
        <span>
          <i>Sparky </i>
          <i>Squad</i>
        </span>
      </div>  
      <span class="l2">
        <i>Sparky </i>
        <i>Squad</i>
      </span>
      <span class="l3">
        <i>Sparky </i>
        <i>Squad</i>
      </span>
      <span class="l4">
        <i>Sparky </i>
        <i>Squad</i>
      </span>
      <span class="l5">
        <i>Sparky </i>
        <i>Squad</i>
      </span>
    </h1>   
  </section>
</template>

<script>
export default {
  mounted : function(){
    var app = this;
    app.$store.commit('pageName', 'team');
    app.$store.commit('navigation', 'team');
    app.$store.commit('eyes', false);
    TweenMax.to('.app', 0.4, {backgroundColor : '#f8f8eb'});
    if(window.innerWidth <= 480){           
      TweenMax.to('#app-logo .st2', 0.4, {opacity : 0});
    }
  },
  data : function(){
    return {
      ease : 0.1, 
      pointer : {
        y : 0
      }
    }
  },
  head : function(){
    return {
      title : 'Our Squad | Sparky',
      meta: [        
        { hid: 'description', name: 'description', content: 'Meet the Sparky team! Our squad is made up of metrics-driven, experienced digital marketing and design experts. Learn more about Sparky today.'}
      ]
    }
  },
  transition : {    
    mode : 'out-in',
    css : false,
    enter : function(el, done){
        var app = this;
        var mobile = app.$store.state.mobile;
        var prev = (app.$store.state.prevPage == 'clients')
        app.$store.commit('teamSliderPosition', 'top');
        TweenMax.set('.team__list', {clearProps : 'all'});
        TweenMax.to(document.querySelectorAll('.app-social .st0'), 0.4, {fill : '#f8f8eb'});
        TweenMax.to(document.querySelectorAll('#app-logo .st2'), 0.7, {fill : '#f8f8eb'});
        TweenMax.to('.app-blog a', 0.4, {color: '#f8f8eb'});
        TweenMax.to('.app-blog i', 0.4, {backgroundColor: '#f8f8eb'});
        TweenMax.to(document.querySelectorAll('#app-navigation li i, .scroll-down .scroll-down__line i'), 0.4, {backgroundColor : '#f8f8eb'});
        TweenMax.to(document.querySelectorAll('#app-navigation li .item__name, .start-project__text, .scroll-down__text'), 0.4, {color : '#f8f8eb'});
        TweenMax.to('.bg__right', 0.7, {width : '100%', ease: Power3.easeInOut});
        TweenMax.to('.bg__bottom', 0.7, {height : '100%', ease: Power3.easeInOut});        
        // H1 Animation //
          TweenMax.set('h1', {visibility : 'visible', delay : 0.4});
          TweenMax.fromTo('h1 .l1 span', 1.2, {y:'130%'}, {y:'0%',ease: Back.easeOut.config(1.5), delay : 0.4});
          TweenMax.to('h1 .l2', 0.3, {y:'15%',ease: Power1.easeOut, delay : 0.4});
          TweenMax.to('h1 .l3', 0.4, {y:'30%',ease: Power1.easeOut, delay : 0.4});
          TweenMax.to('h1 .l4', 0.5, {y:'45%',ease: Power1.easeOut, delay : 0.4});
          TweenMax.to('h1 .l5', 0.6, {y:'60%',ease: Power1.easeOut, delay : 0.4, onComplete : function(){
            TweenMax.to('.scroll-down__text span, .start-project__text span', 0.5, {y : '100%'});
            app.$store.commit('loader', false);
            TweenMax.to('h1 .l3', 0.6, {y:'0%',ease: Power1.easeIn});
            TweenMax.to('h1 .l4', 0.5, {y:'0%',ease: Power1.easeIn});
            TweenMax.to('h1 .l5', 0.4, {y:'0%',ease: Power1.easeIn});
            TweenMax.to('h1 .l2', 0.7, {y:'0%',ease: Power1.easeIn, onComplete : function(){
              app.$store.commit('scroll', true);
              app.$store.commit('pageTransition', false);
              done();
            }});
          }});
        //==//   
            app.$store.commit('teamSlider', true);
            var list;
            if(window.innerWidth <= 768 && window.innerWidth > 480){                    
              //list = [document.querySelectorAll('.team__list .uno .top, .team__list .uno .bottom'), document.querySelectorAll('.team__list .dos .top, .team__list .dos .bottom'), document.querySelectorAll('.team__list .tres .top, .team__list .tres .bottom')];
              list = [document.querySelectorAll('.team__list .uno .top, .team__list .uno .bottom'), document.querySelectorAll('.team__list .dos .top, .team__list .dos .bottom'), document.querySelectorAll('.team__list .tres .top')];
            }else if(window.innerWidth <= 480){      
              //list = document.querySelectorAll('.team__list .uno .top, .team__list .uno .bottom, .team__list .dos .top, .team__list .dos .bottom, .team__list .tres .top, .team__list .tres .bottom');
              list = document.querySelectorAll('.team__list .uno .top, .team__list .uno .bottom, .team__list .dos .top, .team__list .dos .bottom, .team__list .tres .top');
            }else{
              //list = document.querySelectorAll('.team__list .uno .top, .team__list .dos .top, .team__list .tres .top, .team__list .uno .bottom, .team__list .dos .bottom, .team__list .tres .bottom');
              list = document.querySelectorAll('.team__list .uno .top, .team__list .dos .top, .team__list .tres .top, .team__list .uno .bottom, .team__list .dos .bottom');
            }

            
            TweenMax.staggerTo(list, 0.9, {height : mobile ? '100%' : '27.8vw', delay : 1.2, ease: Power4.easeOut}, 0.14);   
        
    },
    leave : function(el, done){
      var app = this;
      var mobile = app.$store.state.mobile;
      app.$store.commit('scroll', false);
      app.$store.commit('prevPage', 'team');
      var next = app.$route.name;
      TweenMax.set('h1 .l1, h1 .l1 span', {backgroundColor : 'transparent'})
      TweenMax.set('h1 .l2, h1 .l3, h1 .l4, h1 .l5', {visibility : 'hidden'});
      var list;
      if(mobile){
        list = document.querySelectorAll('.team__list .uno .top, .team__list .uno .bottom, .team__list .dos .top, .team__list .dos .bottom, .team__list .tres .top, .team__list .tres .bottom');
      }else{
        list = [document.querySelectorAll('.team__list .uno .top, .team__list .uno .bottom'), document.querySelectorAll('.team__list .dos .top, .team__list .dos .bottom'), document.querySelectorAll('.team__list .tres .top, .team__list .tres .bottom')];              
      }
      var tl = new TimelineMax({onComplete : function(){
        app.$store.commit('teamSlider', false);
        TweenMax.set(document.querySelectorAll('.team__list .item'), {clearProps : 'all'});
      }}).to(list, 0.6, {height : '0vw', ease: Power3.easeIn}, 'uno')
      .to('h1 .l1 span', 0.7, {y : '100%', ease: Power4.easeInOut}, 'uno+=0.5')      
      if(next == 'index' || next == 'description' || next == 'contacts' || next == 'clients'){
        tl.to('.bg__right', 0.7, {width : '0%', ease: Power3.easeInOut}, 'uno+=0.7')
        .to('.bg__bottom', 0.7, {height : '0%', ease: Power3.easeInOut, onComplete : done}, 'uno+=0.7')
        .to(document.querySelectorAll('.app-social .st0'), 0.4, {fill : '#191919'}, 'uno+=0.9')
        .to(document.querySelectorAll('#app-logo .st2'), 0.7, {fill : '#191919'}, 'uno+=0.9')
        .to(document.querySelectorAll('#app-navigation li i, .scroll-down .scroll-down__line i'), 0.4, {backgroundColor : '#191919'}, 'uno+=0.9')
        .to(document.querySelectorAll('#app-navigation li .item__name, .start-project__text, .scroll-down__text'), 0.4, {color : '#191919'}, 'uno+=0.9')
        .to('.app-blog a', 0.4, {color: '#191919'}, 'uno+=0.9')
        .to('.app-blog i', 0.4, {backgroundColor: '#191919'}, 'uno+=0.9');
        setTimeout(function(){
          app.$store.commit('pageName', next);
        }, 900)
      }
      if(next == 'services'){        
        tl.to('.bg__bottom', 0.7, {height : '-=0', ease: Power3.easeInOut, onComplete : done}, 'uno+=0.4')
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
    resize : function(){
      return this.$store.state.resize;
    },
    teamSliderPosition  : function(){
      return this.$store.state.teamSliderPosition;
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
        TweenMax.set('.bg__right, .bg__bottom', {width : '100%', height : '100%'});
        TweenMax.to(document.querySelectorAll('.app-social .st0'), 0.4, {fill : '#f8f8eb'});
        TweenMax.to(document.querySelectorAll('#app-logo .st2'), 0.7, {fill : '#f8f8eb'});
        TweenMax.to(document.querySelectorAll('#app-navigation li i, .scroll-down .scroll-down__line i'), 0.4, {backgroundColor : '#f8f8eb'});
        TweenMax.to(document.querySelectorAll('#app-navigation li .item__name, .start-project__text, .scroll-down__text'), 0.4, {color : '#f8f8eb'});
        TweenMax.to('.app-blog a', 0.4, {color: '#f8f8eb'});
        TweenMax.to('.app-blog i', 0.4, {backgroundColor: '#f8f8eb'});
        TweenMax.set('h1', {visibility : 'visible'});
        TweenMax.fromTo('h1 .l1 span', 1.2, {y:'130%'}, {y:'0%',ease: Back.easeOut.config(1.5), delay : 1.5});
          TweenMax.to('h1 .l2', 0.3, {y:'15%',ease: Power1.easeOut, delay : 1.5});
          TweenMax.to('h1 .l3', 0.4, {y:'30%',ease: Power1.easeOut, delay : 1.5});
          TweenMax.to('h1 .l4', 0.5, {y:'45%',ease: Power1.easeOut, delay : 1.5});
          TweenMax.to('h1 .l5', 0.6, {y:'60%',ease: Power1.easeOut, delay : 1.5, onComplete : function(){            
            app.$store.commit('teamSlider', true);
            app.$store.commit('loader', false);
            var list;
            if(window.innerWidth <= 768 && window.innerWidth > 480){                    
              //list = [document.querySelectorAll('.team__list .uno .top, .team__list .uno .bottom'), document.querySelectorAll('.team__list .dos .top, .team__list .dos .bottom'), document.querySelectorAll('.team__list .tres .top, .team__list .tres .bottom')];
              list = [document.querySelectorAll('.team__list .uno .top, .team__list .uno .bottom'), document.querySelectorAll('.team__list .dos .top, .team__list .dos .bottom'), document.querySelectorAll('.team__list .tres .top')];
            }else if(window.innerWidth <= 480){      
              //list = document.querySelectorAll('.team__list .uno .top, .team__list .uno .bottom, .team__list .dos .top, .team__list .dos .bottom, .team__list .tres .top, .team__list .tres .bottom');
              list = document.querySelectorAll('.team__list .uno .top, .team__list .uno .bottom, .team__list .dos .top, .team__list .dos .bottom, .team__list .tres .top');
            }else{
              //list = [document.querySelector('.team__list .uno .top'), document.querySelector('.team__list .dos .top'), document.querySelector('.team__list .tres .top'), document.querySelector('.team__list .uno .bottom'), document.querySelector('.team__list .dos .bottom'), document.querySelector('.team__list .tres .bottom')];
              list = [document.querySelector('.team__list .uno .top'), document.querySelector('.team__list .dos .top'), document.querySelector('.team__list .tres .top'), document.querySelector('.team__list .uno .bottom'), document.querySelector('.team__list .dos .bottom')];
            }
            TweenMax.staggerTo(list, 0.8, {height : app.mobile ? '100%' : '27.8vw', delay : 0.35, ease: Power4.easeOut}, 0.14);
            TweenMax.to('h1 .l3', 0.6, {y:'0%',ease: Power1.easeIn});
            TweenMax.to('h1 .l4', 0.5, {y:'0%',ease: Power1.easeIn});
            TweenMax.to('h1 .l5', 0.4, {y:'0%',ease: Power1.easeIn});
            TweenMax.to('h1 .l2', 0.7, {y:'0%',ease: Power1.easeIn, onComplete : function(){              
              //TweenMax.set([document.querySelectorAll('.team__list .uno .top, .team__list .uno .bottom'), document.querySelectorAll('.team__list .dos .top, .team__list .dos .bottom'), document.querySelectorAll('.team__list .tres .top, .team__list .tres .bottom')], {height : '0vw'});
              //TweenMax.staggerTo([document.querySelectorAll('.team__list .uno .top, .team__list .uno .bottom'), document.querySelectorAll('.team__list .dos .top, .team__list .dos .bottom'), document.querySelectorAll('.team__list .tres .top, .team__list .tres .bottom')], 0.7, {height : '27.8vw', ease: Power4.easeOut}, 0.15);

              scrollDownTL = new TimelineMax({repeat : -1}).fromTo('.scroll-down .scroll-down__line i' , 0.8, {x : '100%'}, {x : '0%', ease: Power4.easeIn})
              .to('.scroll-down .scroll-down__line i' , 0.8, {x : '-100%', ease: Power4.easeIn})              
              .addCallback(function(){                
                if(app.$store.state.scrollDownHover || (app.$store.state.servicesSlider && app.$store.state.mobile))scrollDownTL.pause();
              });
              TweenMax.to(document.querySelectorAll('.app-social a'), 0.5, {y : 0, delay : 0.4});
              TweenMax.to('.app-logo svg', 0.5, {y : 0, delay : 0.4});
              new TimelineMax({delay : 0.4}).to('.app-blog span', 0.3, {y: '0%'})
              .to('.app-blog i', 0.3, {height: '7px'}, '-=0.1');
              TweenMax.to('.start-project__button', 0.5, {scale : 1, delay : 0.4, onComplete : function(){
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
      }
    },
    teamSliderPosition : function(pos){
      var app = this;
      if(window.innerWidth > 768){
        if(pos == 'top'){
          TweenMax.to('.team__list', 0.9, {marginTop  : '-13.9vw', ease: Power3.easeInOut, onComplete : function(){
             app.$store.commit('scroll', true);
          }});
        }
        if(pos == 'bottom'){
          TweenMax.to('.team__list', 0.9, {marginTop  : '-47.7vw', ease: Power3.easeInOut, onComplete : function(){
             app.$store.commit('scroll', true);
          }});
        }
      }      
    }
  }  
};
</script>

<style scoped>
.app.contacts {
  /*background-color: #f8f8eb;*/
}
#app-team {
    width: 100%;
    height: 100%;
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
  left: 60px;
  top: 50%;
  transform: translateY(-50%);
  letter-spacing: -0.2vw;
  z-index: 1;
  visibility: hidden;
}
h1 span {
  display: inline-block;  
  padding: 0px 1vw;
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
  padding-top: 1vw;
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

@media screen and (max-width: 768px) {
  h1 i {
    display: block;
  }
  h1 {
    font-size: 15.6vw;
    line-height: 11.9vw;
  }
  h1 .l1 {
    padding: 2vw 1vw 1vw 0;
  }
  h1 span {
    padding: 1vw 1vw 1vw 0;
  }  
}

@media screen and (max-width: 480px) {
  h1 {
    font-size: 12.8vw;
    line-height: 9.9vw;
    top: calc(84px - 2vw);
    left: 42px;
    transform: translateY(0);
  }
}
</style>
