<template>
  <section id="app-services">   
  <section class="bg__top"></section> 
    <h1>
      <div class="l1">
        <span>our services</span>
      </div>  
      <span class="l2">our services</span>
      <span class="l3">our services</span>
      <span class="l4">our services</span>
      <span class="l5">our services</span>
    </h1>
    <h2 class="mm" @mouseenter="serviceHover($event, 'mm')" @mouseleave="serviceHover($event, 'mm')" @click="serviceDetails($event, 'mm')">
        <div class="stroke">
          <span>MAXIMIZE</span>
          <span>MOMENTS</span>
        </div>        
        <div class="fill">
          <div class="l1">
            <div class="bg"></div>
            <div class="show-more">
              <span>show more</span>
            </div>
            <div class="start">M</div>
            <div class="end">
              <div>AXIMIZE</div>
            </div>
            <div class="start">M</div>
            <div class="end">
              <div>OMENTS</div>
            </div>          
          </div>
        </div>        
        <div class="l2">
            <span>M</span>
          </div>
          <div class="l3">
            <span>M</span>
          </div>
          <div class="l4">
            <span>M</span>
          </div>
          <div class="l5">
            <span>M</span>
          </div>
      </h2>

      <h2 class="ee" @mouseenter="serviceHover($event, 'ee')" @mouseleave="serviceHover($event, 'ee')" @click="serviceDetails($event, 'ee')">
        <div class="stroke">
          <span>ELEVATE</span>
          <span>EXPERIENCES</span>
        </div>        
        <div class="fill">
          <div class="l1">
            <div class="bg"></div>
            <div class="show-more">
              <span>show more</span>
            </div>
            <div class="start">E</div>
            <div class="end">
              <div>LEVATE</div>
            </div>
            <div class="start">E</div>
            <div class="end">
              <div>XPERIENCES</div>
            </div>          
          </div>
        </div>        
        <div class="l2">
            <span>E</span>
          </div>
          <div class="l3">
            <span>E</span>
          </div>
          <div class="l4">
            <span>E</span>
          </div>
          <div class="l5">
            <span>E</span>
          </div>
      </h2>

      <h2 class="ii" @mouseenter="serviceHover($event, 'ii')" @mouseleave="serviceHover($event, 'ii')" @click="serviceDetails($event, 'ii')">
        <div class="stroke">
          <span>Ignite</span>
          <span>Innovation</span>
        </div>        
        <div class="fill">
          <div class="l1">
            <div class="bg"></div>
            <div class="show-more">
              <span>show more</span>
            </div>
            <div class="start">I</div>
            <div class="end">
              <div>gnite</div>
            </div>
            <div class="start">I</div>
            <div class="end">
              <div>nnovation</div>
            </div>          
          </div>
        </div>        
        <div class="l2">
          <span>I</span>
        </div>
        <div class="l3">
          <span>I</span>
        </div>
        <div class="l4">
          <span>I</span>
        </div>
        <div class="l5">
          <span>I</span>
        </div>
      </h2>

      <section class="slider">

      </section>    
    
    <section class="bg__right"></section>
    <section class="bg__bottom"></section>
  </section>
</template>

<script>
export default {
  mounted : function(){
    var app = this;
    app.$store.commit('pageName', 'services');
    app.$store.commit('navigation', 'expertise');
    //var split = new SplitText("#app-services h2 .l1", {type:"words, chars"});
  },
  data : function(){
    return {
      slider : false,
      prev : {

      },
      next : {

      }
    }
  },
  transition : {    
    mode : 'out-in',
    css : false,
    enter : function(el, done){
      
    },
    leave : function(el, done){
      
    }
  },
  computed : {    
    appStart : function(){
      return this.$store.state.appStart;
    },
    loader : function(){
      return this.$store.state.loader;
    },
    appStartAnimation : function(){
      return this.$store.state.appStartAnimation;
    },
    navigation : function(){
      return this.$store.state.navigation;
    }
  },
  methods : {
    serviceHover : function(e, name){
      if(this.appStartAnimation)return false;            
      if(e.type == 'mouseenter'){
        TweenMax.to(e.target.querySelector('.show-more span'), 0.7, {opacity : 0, force3D: false});
        if(name == 'mm')TweenMax.to(e.target, 0.7, {paddingLeft : '1vw', ease: Power2.easeInOut});
        if(name == 'ee')TweenMax.to(e.target, 0.7, {paddingRight : (70 - (window.innerWidth / 100))+'px', ease: Power2.easeInOut});
        

        e.target.querySelectorAll('.end').forEach( function(el, i) {
          var w = 100 / (window.window.innerWidth / el.querySelector('div').clientWidth);          
          TweenMax.to(el, 0.7, {width : w+'vw', ease: Power4.easeInOut, force3D: false});
        });
      }else{
        TweenMax.to(e.target.querySelector('.show-more span'), 0.5, {opacity : 1, force3D: false});
        if(name == 'mm')TweenMax.to(e.target, 0.7, {paddingLeft : '11vw', ease: Power2.easeInOut});
        if(name == 'ee')TweenMax.to(e.target, 0.7, {paddingRight : (170 - (window.innerWidth / 100))+'px', ease: Power2.easeInOut});
        e.target.querySelectorAll('.end').forEach( function(el, i) {          
          TweenMax.to(el, 0.7, {width : '0vw', ease: Power4.easeInOut, force3D: false});
        });
      }
    },
    serviceDetails : function(e, name){
      var app = this;

      // Slider Init //
      TweenMax.set('.bg__top, h1', {zIndex : 0})
      TweenMax.fromTo(e.currentTarget.querySelector('.stroke'), 0.3, {opacity : 0}, {visibility : 'visible', opacity : 0.2});      
      TweenMax.to(document.querySelectorAll('h2 .fill'), 0.7, {height: '0vw', ease: Power4.easeIn});
      TweenMax.to(document.querySelectorAll('#app-logo .st2'), 0.2, {fill : '#f0f0d9', delay : 0.5});
      TweenMax.to('.bg__bottom', 0.7, {height : '100%', ease: Power4.easeIn});
      var tl = new TimelineMax({onComplete : function(){
        // Sider render //
        app.$store.commit('navigationType', {state : 'slider', current : name});
          // MM Logic
        if(name == 'mm'){

        }
      }});
      tl.staggerTo(document.querySelectorAll('#app-navigation li i'), 0.1, {width : 83}, 0.05)
      .staggerTo(document.querySelectorAll('#app-navigation li i'), 0.1, {x : 83}, 0.05, '-=0.23')

      
      
    }    
  },
  watch : {
    appStart : function(val){
      var app = this;
      var h2Delay = 0.7;
      if(val){
        app.$store.commit('eyes', false);
        TweenMax.set('.app', {backgroundColor : '#f8f8eb'});
        TweenMax.set(document.querySelectorAll('.app-social .st0'), {fill : '#f8f8eb'});
        TweenMax.set(document.querySelectorAll('#app-navigation li i, .scroll-down .scroll-down__line i'), {backgroundColor : '#f8f8eb'});
        TweenMax.set(document.querySelectorAll('#app-navigation li .item__name'), {color : '#f8f8eb'});
        TweenMax.set('.cursor', {x : (window.innerWidth / 2) - 25, y : (window.innerHeight / 2) -25});
        // Background animation //
        TweenMax.to('.bg__right', 0.7, {width : '160px', ease: Power4.easeOut, delay : 1.5});
        TweenMax.to('.bg__bottom', 0.7, {height : '63%', ease: Power4.easeOut, delay : 1.5, onComplete : function(){
          // H1 Animation //
          TweenMax.fromTo('h1 .l1 span', 1.2, {y:'-130%'}, {y:'0%',ease: Back.easeOut.config(1.5), delay : 0});
          TweenMax.to('h1 .l2', 0.3, {y:'-15%',ease: Power1.easeOut, delay : 0});
          TweenMax.to('h1 .l3', 0.4, {y:'-30%',ease: Power1.easeOut, delay : 0});
          TweenMax.to('h1 .l4', 0.5, {y:'-45%',ease: Power1.easeOut, delay : 0});
          TweenMax.to('h1 .l5', 0.6, {y:'-60%',ease: Power1.easeOut, delay : 0, onComplete : function(){
            app.$store.commit('loader', false);
            TweenMax.to('h1 .l3', 0.6, {y:'0%',ease: Power1.easeIn});
            TweenMax.to('h1 .l4', 0.5, {y:'0%',ease: Power1.easeIn});
            TweenMax.to('h1 .l5', 0.4, {y:'0%',ease: Power1.easeIn});
            TweenMax.to('h1 .l2', 0.7, {y:'0%',ease: Power1.easeIn, onComplete : function(){
              
            }});
          }});
          //==//

          TweenMax.set(document.querySelectorAll('h2'), {visibility : 'visible'});          
          // H2 Animation //    

          //MM
          TweenMax.to(document.querySelectorAll('h2.mm .start'), 1.2, {x : 0,ease: Back.easeOut.config(1), delay : h2Delay, force3D: false});
          TweenMax.to('h2.mm .l2', 0.3, {x:'145%',ease: Power1.easeOut, delay : h2Delay,  force3D: false});
          TweenMax.to('h2.mm .l3', 0.4, {x:'185%',ease: Power1.easeOut, delay : h2Delay,  force3D: false});
          TweenMax.to('h2.mm .l4', 0.5, {x:'220%',ease: Power1.easeOut, delay : h2Delay,  force3D: false});
          TweenMax.to('h2.mm .l5', 0.6, {x:'253%',ease: Power1.easeOut, delay : h2Delay,  force3D: false, onComplete : function(){            
            TweenMax.to('h2.mm .l3', 0.6, {x:'0%',ease: Power1.easeIn,  force3D: false});
            TweenMax.to('h2.mm .l4', 0.5, {x:'0%',ease: Power1.easeIn,  force3D: false});
            TweenMax.to('h2.mm .l5', 0.4, {x:'0%',ease: Power1.easeIn,  force3D: false});
            TweenMax.to('h2.mm .l2', 0.7, {x:'0%',ease: Power1.easeIn,  force3D: false, onComplete : function(){
              TweenMax.set('h2.mm .l1', {overflow : 'visible'});
              TweenMax.to('h2.mm .show-more span', 0.5, {y : '0%', delay : 0.1,  force3D: false});
              document.querySelectorAll('h2.mm .l2, h2.mm .l3, h2.mm .l4, h2.mm .l5, h2.mm .bg').forEach( function(el, i) {
                el.remove();
              });
            }});
          }});
          //==//
          //EE
          TweenMax.to(document.querySelectorAll('h2.ee .start'), 1.2, {x : 0,ease: Back.easeOut.config(1), delay : h2Delay, force3D: false});
          TweenMax.to('h2.ee .l2', 0.3, {x:'-170%',ease: Power1.easeOut, delay : h2Delay, force3D: false});
          TweenMax.to('h2.ee .l3', 0.4, {x:'-230%',ease: Power1.easeOut, delay : h2Delay, force3D: false});
          TweenMax.to('h2.ee .l4', 0.5, {x:'-285%',ease: Power1.easeOut, delay : h2Delay, force3D: false});
          TweenMax.to('h2.ee .l5', 0.6, {x:'-335%',ease: Power1.easeOut, delay : h2Delay, force3D: false, onComplete : function(){                                    
            TweenMax.to('h2.ee .l3', 0.6, {x:'0%',ease: Power1.easeIn, force3D: false});
            TweenMax.to('h2.ee .l4', 0.5, {x:'0%',ease: Power1.easeIn, force3D: false});
            TweenMax.to('h2.ee .l5', 0.4, {x:'0%',ease: Power1.easeIn, force3D: false});
            TweenMax.to('h2.ee .l2', 0.7, {x:'0%',ease: Power1.easeIn, force3D: false, onComplete : function(){              
              TweenMax.set('h2.ee .l1', {overflow : 'visible'});
              TweenMax.to('h2.ee .show-more span', 0.5, {y : '0%', delay : 0.1, force3D: false});
              document.querySelectorAll('h2.ee .l2, h2.ee .l3, h2.ee .l4, h2.ee .l5, h2.ee .bg').forEach( function(el, i) {
                el.remove();
              });
            }});
          }});
          //==//
          //II
          TweenMax.to(document.querySelectorAll('h2.ii .start'), 1.2, {x : 0,ease: Back.easeOut.config(1), delay : h2Delay, force3D: false});
          TweenMax.to('h2.ii .l2', 0.3, {x:'90%',ease: Power1.easeOut, delay : h2Delay, force3D: false});
          TweenMax.to('h2.ii .l3', 0.4, {x:'158%',ease: Power1.easeOut, delay : h2Delay, force3D: false});
          TweenMax.to('h2.ii .l4', 0.5, {x:'220%',ease: Power1.easeOut, delay : h2Delay, force3D: false});
          TweenMax.to('h2.ii .l5', 0.6, {x:'270%',ease: Power1.easeOut, delay : h2Delay, force3D: false, onComplete : function(){            
            TweenMax.to('h2.ii .l3', 0.6, {x:'0%',ease: Power1.easeIn, force3D: false});
            TweenMax.to('h2.ii .l4', 0.5, {x:'0%',ease: Power1.easeIn, force3D: false});
            TweenMax.to('h2.ii .l5', 0.4, {x:'0%',ease: Power1.easeIn, force3D: false});
            TweenMax.to('h2.ii .l2', 0.7, {x:'0%',ease: Power1.easeIn, force3D: false, onComplete : function(){              
              TweenMax.set('h2.ii .l1', {overflow : 'visible'});
              TweenMax.to('h2.ii .show-more span', 0.5, {y : '0%', delay : 0.1, force3D: false});
              document.querySelectorAll('h2.ii .l2, h2.ii .l3, h2.ii .l4, h2.ii .l5, h2.ii .bg').forEach( function(el, i) {
                el.remove();
              });              
              scrollDownTL = new TimelineMax({repeat : -1}).fromTo('.scroll-down .scroll-down__line i' , 0.8, {x : '100%'}, {x : '0%', ease: Power4.easeIn})              
              .to('.scroll-down .scroll-down__line i' , 0.8, {x : '-100%', ease: Power4.easeIn})
              .addCallback(function(){                
                if(app.$store.state.scrollDownHover)scrollDownTL.pause();
              });


              TweenMax.to(document.querySelectorAll('.app-social a'), 0.5, {y : 0, delay : 0.1});
              TweenMax.to('.app-logo img', 0.5, {y : 0, delay : 0.1});
              TweenMax.to('.start-project__button', 0.5, {scale : 1, delay : 0.1, onComplete : function(){
              TweenMax.to('.scroll-down__text span, .start-project__text span', 0.5, {y : 0});
              TweenMax.to(document.querySelectorAll('.cursor i'), 0.3, {scale : 1})
              var w;
              var tl = new TimelineMax({onComplete : function(){
                app.$store.commit('appStartAnimation', false);
              }});
              tl.staggerFromTo(document.querySelectorAll('#app-navigation li i'), 0.2, {x : 83}, {x : 0}, 0.09)
              .staggerFromTo(document.querySelectorAll('#app-navigation li i'), 0.2, {width : 83}, {cycle:{
                width : function(i, el){                  
                  return el.parentNode.parentNode.classList.contains('current') ? 83 : 1;
                }
              }}, 0.09, '-=0.47');              
            }});
            }});
          }});
          //==//
        }});
        //==//
      }
    },
    navigation : {
      handler: function (val, oldVal) {
        var tl2 = new TimelineMax({onComplete : function(){
          TweenMax.to('.cursor', 0.5, {rotation : 45});
        }});
        tl2.staggerFromTo(document.querySelectorAll('#app-navigation li i'), 0.2, {x : 83}, {x : 0}, 0.09)
        .staggerFromTo(document.querySelectorAll('#app-navigation li i'), 0.2, {width : 83}, {cycle:{
          width : function(i, el){            
            return el.parentNode.parentNode.classList.contains('current') ? 83 : 1;
          }
        }}, 0.09, '-=0.47');
      },
      deep: true
    }
  }  
};
</script>

<style scoped>
.app.services {
  background-color: #f8f8eb;
}
#app-services {
    width: 100vw;
    height: 100vh;
}
#app-services .bg__top {
  position: fixed;
  width: calc(100% - 160px);
  height: 20px;
  background-color: #f8f8eb;
  bottom: 63%;
  left: 0;
  z-index: 2;  
}
#app-services .bg__right {
  position: fixed;
  height: 100vh;
  width: 0px;
  background-color: #191919;
  top: 0;
  right: 0;  
}
#app-services .bg__bottom {
  position: fixed;
  width: 100%;
  height: 0%;
  background-color: #191919;
  bottom: 0;
  left: 0;
}

h1 {
  margin: 0;
  padding: 0;
  font: 9.4vw/ 7.5vw "Futura Condensed Extra Italic";
  text-transform: uppercase;   
  position: fixed;
  right: 160px;
  bottom: 63%; 
  letter-spacing: -0.5vw;
  z-index: 2;
}
h1 span {
  display: inline-block;  
  padding: 0px 10px;
  position: absolute;
  top: 0;
  left: 0;
  color:#191919;
  white-space: nowrap;
  background-color: #f8f8eb;
  overflow: hidden;
}
h1 .l1 {
  overflow:hidden;
  z-index: 5;  
  position: relative;
  padding-bottom: 0;
  overflow: hidden;
  background-color: #f8f8eb;
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

h2 {
  margin: 0;
  padding: 0;
  font: 9.4vw/ 7.8vw "Futura Condensed Extra";
  text-transform: uppercase;
  color: #f8f8eb;
  white-space: nowrap;    
  display: flex;
  width: 100vw;  
  visibility: hidden;
  cursor: pointer;  
  z-index: 1;
}
h2 .stroke {
  position: absolute;
  bottom: 0;
  transform: skew(-9deg);
  color: #191919;
  text-shadow:-1px -1px 0 #f8f8eb, 1px -1px 0 #f8f8eb, -1px 1px 0 #f8f8eb, 1px 1px 0 #f8f8eb;
  opacity: 0.1;
  visibility: hidden;
}
h2 .stroke span:first-child {
  margin-right: 2vw;
}
h2 .show-more {
  color: #f6c930;
  font: 500 14px/1 "Futura";
  position: absolute;
  text-transform: lowercase;
  overflow: hidden;
}
h2 .show-more span {
  display: inline-block;
  transform: translateY(100%);
}
h2 .fill {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 7.8vw;
  overflow: hidden;  
  z-index: 5;
}
h2 .l1 {
  display: inline-flex;
  margin-top: 0;  
  position: relative;
  overflow: hidden;
  transform: skew(-9deg);
}
h2 .l1 .bg {  
  display: block;
  width: 100%;
  height: 100%;
  position: absolute;  
  left: 0;
  background-color: #191919;
  z-index: 5;
}
h2 .l1 .start {
  z-index: 5;
  position: relative;
}
h2 .l1 .end {
  overflow: hidden;    
  width: 0vw;
}
h2 .l1 .end > div {
  display: inline-block;
  padding-right: 2vw;
}

h2 .l2,
h2 .l3,
h2 .l4,
h2 .l5 {  
  position: absolute;  
  color:#f8f8eb;
  white-space: nowrap;
  background-color: #191919; 
  overflow: hidden;
  transform: skew(-9deg);
}
h2 span {
  margin-top: -0.48vw;
}
h2 .l2 {
  z-index: 4;
}
h2 .l3 {
  z-index: 3;
}
h2 .l4 {
  z-index: 2;
}
h2 .l5 {
  z-index: 1;
}

h2.mm {
  position: fixed;
  justify-content: flex-start;  
  bottom: calc(63% - 7.3vw);
  padding-left: 11vw;
}
h2.mm .stroke {
  left: 1vw;  
}
h2.mm .show-more {
  right: -90px;
  bottom: 3.1vw;
}
h2.mm .fill {
  padding-left: 1vw;
  margin-left: -1vw;
}
h2.mm .l1 {
  position: absolute;
  bottom: 0;
}
h2.mm .start {
  transform: translateX(calc(200% + 2vw));
}
h2.mm .bg {
  bottom: -0.4vw;
}
h2.mm .l2,
h2.mm .l3,
h2.mm .l4,
h2.mm .l5 {  
  bottom: 0.35vw;
  left: 11vw;
  line-height: 7vw;
}
h2.ee {  
  justify-content: flex-end;
  padding-right: calc(170px - 1vw);
  position: fixed;
  bottom: calc(63% - 14.4vw);
}
h2.ee .stroke {
  right: calc(70px + 2vw);
}
h2.ee .show-more {
  left: -90px;
  bottom: 3.5vw;
}
h2.ee .fill {
  text-align: right;
  padding-left: 1vw;
  margin-left: -1vw;
  /*right: calc(170px - 1vw);*/

}
h2.ee .start {
  transform: translateX(calc(-200% - 1vw));
}
h2.ee .bg {
  bottom: 0;
}
h2.ee .l1 {
  position: absolute;
  bottom: 0;
  right: 0;
}
h2.ee .l2,
h2.ee .l3,
h2.ee .l4,
h2.ee .l5 {  
  bottom: 0;
  right: 170px;  
}
h2.ii {
  position: fixed;
  justify-content: center;
  bottom: calc(63% - 21.5vw);
}
h2.ii .stroke {
  transform: translateX(-1vw) skew(-9deg);
}
h2.ii .show-more {
  right: -90px;
  bottom: 3.3vw;
}
h2.ii .bg {
  bottom: 0;
}
h2.ii .start {
  transform: translateX(calc(200% + 2vw));
}
h2.ii .l1 {
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%) skew(-9deg);
}
h2.ii .l2,
h2.ii .l3,
h2.ii .l4,
h2.ii .l5 {  
  bottom: 0;
  left: 50%;  
  transform: translateX(-50%) skew(-9deg);
}




</style>

