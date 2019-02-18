<template>
  <section class="container" id="app-intro">
    <div class="intro__text">
      <h1>
        <div class="l1">
          <span>fresh eyes</span>
        </div>  
        <span class="l2">fresh eyes</span>
        <span class="l3">fresh eyes</span>
        <span class="l4">fresh eyes</span>
        <span class="l5">fresh eyes</span>
      </h1>
      <h2>
        <span>FOR POWERFUL BRANDS</span>
      </h2>
    </div>
  </section>
</template>

<script>
export default {
  mounted : function(){
    var app = this;
    app.$store.commit('pageName', 'intro');
    app.$store.commit('navigation', 'intro');
    app.$store.commit('eyes', true);    
    TweenMax.to('.app', 0.4, {backgroundColor : '#f0f0d9'});
    if(window.innerWidth <= 480){           
      TweenMax.to('#app-logo .st2', 0.4, {opacity : 1});
    }    
    if(app.$route.hash == '#getintouch')document.querySelector('.start-project__button').click();    
  },
  data : function(){
    return {
      
    }
  },
  transition : {    
    mode : 'out-in',
    css : false,
    enter : function(el, done){
      var app = this;
      var eyes = ['.eye__01', '.eye__09', '.eye__06', '.eye__03', '.eye__05', '.eye__04', '.eye__08', '.eye__10', '.eye__02', '.eye__07', '.eye__11', '.eye__12'];
      new TimelineMax().staggerTo(eyes, 0.6, {y : '0%', opacity : 1, scaleY : 1, ease: Back.easeOut.config(1.7)}, 0.1, 'uno')
      .set('.intro__text', {visibility : 'visible'}, 'uno+=0.5')
      .fromTo('.l1 span', 1.2, {y:'130%'}, {y:'0%',ease: Back.easeOut.config(1.5), delay : 0}, 'uno+=0.5')
      .to('.l2', 0.3, {y:'15%',ease: Power1.easeOut, delay : 0}, 'uno+=0.5')
      .to('.l3', 0.4, {y:'30%',ease: Power1.easeOut, delay : 0}, 'uno+=0.5')
      .to('.l4', 0.5, {y:'45%',ease: Power1.easeOut, delay : 0}, 'uno+=0.5')
      .to('.l5', 0.6, {y:'60%',ease: Power1.easeOut, delay : 0}, 'uno+=0.5')
      .to('.l3', 0.6, {y:'0%',ease: Power1.easeIn}, 'uno+=1.1')
      .to('.l4', 0.5, {y:'0%',ease: Power1.easeIn}, 'uno+=1.1')
      .to('.l5', 0.4, {y:'0%',ease: Power1.easeIn}, 'uno+=1.1')
      .to('.scroll-down__text span, .start-project__text span', 0.5, {y : '0%'}, 'uno+=1.5')
      .to('.l2', 0.7, {y:'0%',ease: Power1.easeIn, onComplete : function(){
        TweenMax.to('.app.intro h2 span', 0.5, {y : 0, ease: Power1.easeOut, delay : 0.1});        
        app.$store.commit('scroll', true);
        app.$store.commit('pageTransition', false);
      }}, 'uno+=1.1');     

      
    },
    leave : function(el, done){
      var app = this;
      app.$store.commit('scroll', false);
      app.$store.commit('prevPage', 'index');
      var next = app.$route.name;
      var eyes;
      if(next == 'description'){
        eyes = document.querySelectorAll('.eye__01, .eye__03, .eye__04, .eye__05, .eye__06, .eye__08, .eye__09, .eye__10, .eye__11, .eye__12');
      }else if(next == 'contacts'){
        if(app.$store.state.mobile){
          eyes = document.querySelectorAll('.eye__01, .eye__03, .eye__02, .eye__05, .eye__06, .eye__08, .eye__07, .eye__10, .eye__09, .eye__04, .eye__12');
        }else{
          eyes = document.querySelectorAll('.eye__01, .eye__03, .eye__02, .eye__05, .eye__06, .eye__08, .eye__07, .eye__10, .eye__04, .eye__12');
        }        
      }else{
        eyes = document.querySelectorAll('#app-eyes section');
      }

      new TimelineMax().staggerTo(eyes, 0.3, {opacity : 0, scaleY : 0.5, ease: Power4.easeIn, force3D : true}, 0.1, 'uno',  done)
      .to('#app-intro h1 .l1 span', 0.7, {y : '100%', ease: Power4.easeIn}, 'uno+=0.3')
      .to('#app-intro h2 span', 0.7, {y : '100%', ease: Power4.easeIn}, 'uno+=0.3');
      
      
    }
  },
  computed : {    
    appStart : function(){
      return this.$store.state.appStart;
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

  },
  watch : {
    appStart : function(val){
      var app = this;             
      if(val){
        TweenMax.set(document.querySelectorAll('#app-eyes section'), {display : 'block'});
        TweenMax.fromTo('#app-eyes .eye__01', 0.9, {x : '100%', y : '-100%', scale: 0.5, rotation : -15}, {x : '0%', y : '0%', scale : 1, opacity : 1, rotation : 0, ease: Power3.easeInOut, force3D : true, delay : 1.1});
        TweenMax.fromTo('#app-eyes .eye__02', 0.7, {x : '100%', y : '-100%', scale: 0.5, rotation : 15}, {x : '0%', y : '0%', scale : 1, opacity : 1, rotation : 0, ease: Power3.easeInOut, force3D : true, delay : 1.05});
        TweenMax.fromTo('#app-eyes .eye__03', 0.8, {x : '100%', y : '-100%', scale: 0.5, rotation : -15}, {x : '0%', y : '0%', scale : 1, opacity : 1, rotation : (app.mobile ? 0 : 10), ease: Power3.easeInOut, force3D : true, delay : 1.15});
        TweenMax.fromTo('#app-eyes .eye__04', 0.9, {x : '100%', y : '-100%', scale: 0.5, rotation : -15}, {x : '0%', y : '0%', scale : 1, opacity : 1, rotation : (app.mobile ? -8 : -25), ease: Power3.easeInOut, force3D : true, delay : 1.2});
        TweenMax.fromTo('#app-eyes .eye__05', 0.9, {x : '100%', y : '-100%', scale: 0.5, rotation : 15}, {x : '0%', y : '0%', scale : 1, opacity : 1, rotation : -8, ease: Power3.easeInOut, force3D : true, delay : 1.2});
        TweenMax.fromTo('#app-eyes .eye__06', 0.9, {x : '100%', y : '-100%', scale: 0.5, rotation : 15}, {x : '0%', y : '0%', scale : 1, opacity : 1, rotation : 0, ease: Power3.easeInOut, force3D : true, delay : 1.3});
        TweenMax.fromTo('#app-eyes .eye__07', 0.9, {x : '100%', y : '-100%', scale: 0.5, rotation : -15}, {x : '0%', y : '0%', scale : 1, opacity : 1, rotation : 0, ease: Power3.easeInOut, force3D : true, delay : 1.17});
        TweenMax.fromTo('#app-eyes .eye__08', 0.9, {x : '100%', y : '-100%', scale: 0.5, rotation : 15}, {x : '0%', y : '0%', scale : 1, opacity : 1, rotation : 0, ease: Power3.easeInOut, force3D : true, delay : 1.09});
        TweenMax.fromTo('#app-eyes .eye__09', 0.9, {x : '100%', y : '-100%', scale: 0.5, rotation : -15}, {x : '0%', y : '0%', scale : 1, opacity : 1, rotation : -14, ease: Power3.easeInOut, force3D : true, delay : 1.15});
        TweenMax.fromTo('#app-eyes .eye__10', 0.8, {x : '100%', y : '-100%', scale: 0.5, rotation : 15}, {x : '0%', y : '0%', scale : 1, opacity : 1, rotation : 0, ease: Power3.easeInOut, force3D : true, delay : 1.2});
        TweenMax.fromTo('#app-eyes .eye__11', 0.7, {x : '100%', y : '-100%', scale: 0.5, rotation : 15}, {x : '0%', y : '0%', scale : 1, opacity : 1, rotation : -8, ease: Power3.easeInOut, force3D : true, delay : 1.15});
        TweenMax.fromTo('#app-eyes .eye__12', 0.7, {x : '100%', y : '-100%', scale: 0.5, rotation : 15}, {x : '0%', y : '0%', scale : 1, opacity : 1, rotation : -26, ease: Power3.easeInOut, force3D : true, delay : 1.15});
        


        
        TweenMax.set('.intro__text', {visibility : 'visible'});
        TweenMax.fromTo('.l1 span', 1.2, {y:'130%'}, {y:'0%',ease: Back.easeOut.config(1.5), delay : 1.2});
        TweenMax.to('.l2', 0.3, {y:'15%',ease: Power1.easeOut, delay : 1.2});
        TweenMax.to('.l3', 0.4, {y:'30%',ease: Power1.easeOut, delay : 1.2});
        TweenMax.to('.l4', 0.5, {y:'45%',ease: Power1.easeOut, delay : 1.2});
        TweenMax.to('.l5', 0.6, {y:'60%',ease: Power1.easeOut, delay : 1.2, onComplete : function(){
          app.$store.commit('loader', false);
          TweenMax.to('.l3', 0.6, {y:'0%',ease: Power1.easeIn});
          TweenMax.to('.l4', 0.5, {y:'0%',ease: Power1.easeIn});
          TweenMax.to('.l5', 0.4, {y:'0%',ease: Power1.easeIn});
          TweenMax.to('.l2', 0.7, {y:'0%',ease: Power1.easeIn, onComplete : function(){
            TweenMax.to('.app.intro h2 span', 0.5, {y : 0, ease: Power1.easeOut, delay : 0.1});
            
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
              TweenMax.to('.scroll-down__text span, .start-project__text span', 0.5, {y : 0});
              app.$store.commit('scroll', true);
              app.$store.commit('pageTransition', false);
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
          }});          
        }});        
      }      
    }
  }  
};
</script>

<style scoped>
#app-intro {

}
.intro__text {  
  position: absolute;
  left: 70px;
  top: 48%;
  visibility: hidden;
  z-index: 1;
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
}
h1 span {
  display: inline-block;  
  padding: 0px 10px 0 0;
  position: absolute;
  top: 10px;
  left: 0;
  color:#191919;
  white-space: nowrap;
  background-color: #f0f0d9;
}
.l1 {    
  overflow:hidden;
  z-index: 5;  
  position: relative;
  padding-top: 10px;
  overflow: hidden;
  background-color: #f0f0d9;
}
.l1 span {    
  position: static; 
  display: inline-block; 
  transform: translateY(100%);
}
.l2 {
  z-index: 4;
}
.l3 {
  z-index: 3;
}
.l4 {
  z-index: 2;
}
.l5 {
  z-index: 1;
}
h2 {
  font-family: "Futura";
  font-weight: 500;
  font-style: italic;
  font-size: 3.8vw;
  line-height: 1;
  overflow: hidden;  
  margin-top: 2vw;
}
h2 span {
  transform: translateY(100%);
  display: inline-block;
}

@media screen and (max-width: 768px) {
  #app-intro {
    position: fixed;
    bottom: 0;
  }
  .intro__text {
    top: auto;
    bottom: 25vh;
    transform: translateY(50%);    
  }
  h1 {    
    font-size: 15.6vw;
    line-height: 14.5vw;    
  }
  h1 span {
    padding-left: 0;
  }
  h2 {    
    font-size: 6.3vw;
    margin-top: 3vw;    
  }  
}

@media screen and (max-width: 480px) {
  #app-intro {    
    position: fixed;
    bottom: 0;
  }
  .intro__text {
    top: auto;
    left: 42px;
    bottom: 42px;    
    transform: translateY(0%);
  }
  h1 {
    font-size: 12.8vw;
    line-height: 11.7vw;
  }  
  h2 {    
    font-size: 6.3vw;
    margin-top: 3vw;    
    width: 50vw;
  }  
}
</style>

