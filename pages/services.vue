<template>
  <section id="app-services">
    <section class="bg__right"></section>
    <section class="bg__bottom">
      <h2 class="mm">
        <div class="l1" @mouseenter="serviceHover" @mouseleave="serviceHover">
          <div class="start">M</div>
          <div class="end">
            <div>AXIMIZE</div>
          </div>
          <div class="start">M</div>
          <div class="end">
            <div>OMENTS</div>
          </div>
          <div class="l2">
            <span>MM</span>
          </div>
          <div class="l3">
            <span>MM</span>
          </div>
          <div class="l4">
            <span>MM</span>
          </div>
          <div class="l5">
            <span>MM</span>
          </div>
        </div>                
      </h2>

      <h2 class="ee">
        <div class="l1" @mouseenter="serviceHover" @mouseleave="serviceHover">
          <div class="start">E</div>
          <div class="end">
            <div>LEVATE</div>
          </div>
          <div class="start">E</div>
          <div class="end">
            <div>XPERIENCES</div>
          </div>
          <div class="l2">
            <span>EE</span>
          </div>
          <div class="l3">
            <span>EE</span>
          </div>
          <div class="l4">
            <span>EE</span>
          </div>
          <div class="l5">
            <span>EE</span>
          </div>
        </div>        
      </h2>

      <h2 class="ii">
        <div class="l1" @mouseenter="serviceHover" @mouseleave="serviceHover">
          <div class="start">I</div>
          <div class="end">
            <div>gnite</div>
          </div>
          <div class="start">I</div>
          <div class="end">
            <div>nnovation</div>
          </div>
          <div class="l2">
            <span>II</span>
          </div>
          <div class="l3">
            <span>II</span>
          </div>
          <div class="l4">
            <span>II</span>
          </div>
          <div class="l5">
            <span>II</span>
          </div>
        </div>        
      </h2>
    </section>
    <h1>
      <div class="l1">
        <span>our services</span>
      </div>  
      <span class="l2">our services</span>
      <span class="l3">our services</span>
      <span class="l4">our services</span>
      <span class="l5">our services</span>
    </h1>

    
    
  </section>
</template>

<script>
export default {
  mounted : function(){
    var app = this;
    app.$store.commit('pageName', 'services');
    //var split = new SplitText("#app-services h2 .l1", {type:"words, chars"});
  },
  data : function(){
    return {
      
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
    }
  },
  methods : {
    serviceHover : function(e){
      if(e.type == 'mouseenter'){
        e.target.querySelectorAll('.end').forEach( function(el, i) {
          var w = 100 / (window.window.innerWidth / el.querySelector('div').clientWidth);
          TweenMax.to(el, 0.7, {width : w+'vw', ease: Power4.easeInOut});
        });
      }else{
        e.target.querySelectorAll('.end').forEach( function(el, i) {          
          TweenMax.to(el, 0.7, {width : '0vw', ease: Power4.easeInOut});
        });
      }
    }
  },
  watch : {
    appStart : function(val){
      var app = this;
      if(val){
        TweenMax.set(document.querySelectorAll('.app-social .st0'), {fill : '#f8f8eb'});
        TweenMax.to('.bg__right', 0.7, {width : '160px', ease: Power4.easeOut, delay : 1.5});
        TweenMax.to('.bg__bottom', 0.7, {height : '63%', ease: Power4.easeOut, delay : 1.5, onComlete : function(){
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
        }});
      }
    }    
  }  
};
</script>

<style>
.app.services {
  background-color: #f8f8eb;
}
#app-services {
    width: 100vw;
    height: 100vh;
}
#app-services .bg__right {
  position: fixed;
  height: 100vh;
  width: 0px;
  background-color: #191919;
  top: 0;
  right: 0;
  z-index: 0;
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
  transform: translateY(-100%);
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
  font: 9.4vw/ 7.5vw "Futura Condensed Extra Italic";
  text-transform: uppercase;
  color: #f8f8eb;
  white-space: nowrap;    
  display: flex;
  width: 100vw;
}
h2 .l1 {
  display: flex;
  margin-top: -0.3vw;
  cursor: pointer;  
  position: relative;
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
  padding-right: 2vw;  
  display: inline-block;
}

h2 .l2,
h2 .l3,
h2 .l4,
h2 .l5 {
  display: flex;  
  position: absolute;  
  color:#f8f8eb;
  white-space: nowrap;
  background-color: #191919;
}
h2 span {
  margin-top: -0.3vw;
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
  position: relative;  
  justify-content: flex-start;
}
h2.mm .l2,
h2.mm .l3,
h2.mm .l4,
h2.mm .l5 {  
  top: 0.3vw;
  left: 0;  
}
h2.ee {
  position: relative;
  justify-content: flex-end;
}
h2.ee .l2,
h2.ee .l3,
h2.ee .l4,
h2.ee .l5 {  
  top: 0.3vw;
  right: 0;  
}
h2.ii {
  position: relative;
  justify-content: center;
}
h2.ii .l2,
h2.ii .l3,
h2.ii .l4,
h2.ii .l5 {  
  top: 0.3vw;
  right: 0;  
}
</style>

