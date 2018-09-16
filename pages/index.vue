<template>
  <section class="container" id="app-intro">    
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
  </section>
</template>

<script>
export default {
  mounted : function(){
    var app = this;
    app.$store.commit('pageName', 'intro');
  },
  data : function(){
    return {
      
    }
  },
  transition : {
    name : 'intro',
    mode : 'out-in',
    css : false,
    enter : function(el, done){

      TweenMax.fromTo('.l1 span', 1, {y:'130%'}, {y:'0%',ease: Back.easeOut.config(1.5)});
      TweenMax.to('.l2', 0.2, {y:'15%',ease: Power1.easeOut});
      TweenMax.to('.l3', 0.3, {y:'30%',ease: Power1.easeOut});
      TweenMax.to('.l4', 0.4, {y:'45%',ease: Power1.easeOut});
      TweenMax.to('.l5', 0.5, {y:'60%',ease: Power1.easeOu, onComplete : function(){
        TweenMax.to('.l2', 0.6, {y:'0%',ease: Power1.easeIn});
        TweenMax.to('.l3', 0.5, {y:'0%',ease: Power1.easeIn});
        TweenMax.to('.l4', 0.4, {y:'0%',ease: Power1.easeIn});
        TweenMax.to('.l5', 0.3, {y:'0%',ease: Power1.easeIn});
      }});


    },
    leave : function(el, done){
      console.log(this.$route);
      TweenMax.fromTo(el, 1, {y : '0%', opacity : 1}, {y : '100%', opacity : 0, onComplete : function(){
        done();
      }})
    }
  },
  computed : {
    appstart : function(){
      return this.$store.state.appstart;
    },
    appStart : function(){
      return this.$store.state.appStart;
    },
    loaderLive : function(){
        return this.$store.state.loaderLive;
      }
  },
  watch : {
    appStart : function(val){
      var app = this;
      if(val){

        TweenMax.fromTo('#app-eyes .eye__01', 0.87, {x : '15vw', y : '-15vw', opacity : 0}, {x : '0vw', y : '0vw', opacity : 1, ease: Power3.easeOut, delay : 1});
        TweenMax.fromTo('#app-eyes .eye__02', 0.6, {x : '15vw', y : '-5vw', opacity : 0}, {x : '0vw', y : '0vw', opacity : 1, ease: Power3.easeOut, delay : 1.2});
        TweenMax.fromTo('#app-eyes .eye__03', 0.87, {x : '15vw', y : '0vw', opacity : 0}, {x : '0vw', y : '0vw', opacity : 1, ease: Power3.easeOut, delay : 1.07});
        TweenMax.fromTo('#app-eyes .eye__04', 0.5, {x : '15vw', y : '2vw', opacity : 0}, {x : '0vw', y : '0vw', opacity : 1, ease: Power3.easeOut, delay : 1.3});
        TweenMax.fromTo('#app-eyes .eye__05', 0.4, {x : '5vw', y : '-9vw', opacity : 0}, {x : '0vw', y : '0vw', opacity : 1, ease: Power3.easeOut, delay : 1.2});
        TweenMax.fromTo('#app-eyes .eye__06', 0.87, {x : '5vw', y : '-10vw', opacity : 0}, {x : '0vw', y : '0vw', opacity : 1, ease: Power3.easeOut, delay : 1.1});
        TweenMax.fromTo('#app-eyes .eye__07', 0.6, {x : '10vw', y : '-20vw', opacity : 0}, {x : '0vw', y : '0vw', opacity : 1, ease: Power3.easeOut, delay : 1.11});
        TweenMax.fromTo('#app-eyes .eye__08', 0.7, {x : '10vw', y : '-20vw', opacity : 0}, {x : '0vw', y : '0vw', opacity : 1, ease: Power3.easeOut, delay : 1.2});
        TweenMax.fromTo('#app-eyes .eye__09', 0.5, {x : '0vw', y : '-30vw', opacity : 0}, {x : '0vw', y : '0vw', opacity : 1, ease: Power3.easeOut, delay : 1.13});
        TweenMax.fromTo('#app-eyes .eye__10', 0.8, {x : '25vw', y : '0vw', opacity : 0}, {x : '0vw', y : '0vw', opacity : 1, ease: Power3.easeOut, delay : 1.125});
        
        TweenMax.fromTo('.l1 span', 1.2, {y:'130%'}, {y:'0%',ease: Back.easeOut.config(1.5), delay : 1.2});
        TweenMax.to('.l2', 0.3, {y:'15%',ease: Power1.easeOut, delay : 1.2});
        TweenMax.to('.l3', 0.4, {y:'30%',ease: Power1.easeOut, delay : 1.2});
        TweenMax.to('.l4', 0.5, {y:'45%',ease: Power1.easeOut, delay : 1.2});
        TweenMax.to('.l5', 0.6, {y:'60%',ease: Power1.easeOut, delay : 1.2, onComplete : function(){
          app.$store.commit('loaderLive', false);          
          TweenMax.to('.l3', 0.6, {y:'0%',ease: Power1.easeIn});
          TweenMax.to('.l4', 0.5, {y:'0%',ease: Power1.easeIn});
          TweenMax.to('.l5', 0.4, {y:'0%',ease: Power1.easeIn});
          TweenMax.to('.l2', 0.7, {y:'0%',ease: Power1.easeIn, onComplete : function(){
            TweenMax.to('.app.intro h2 span', 0.5, {y : 0, ease: Power1.easeOut, delay : 0.2})
            TweenMax.to('.scroll-down i', 0.5, {width : '30px', delay : 0.2})
            TweenMax.to(document.querySelectorAll('.app-social a'), 0.5, {y : 0, delay : 0.2});
            TweenMax.to('.app-logo img', 0.5, {y : 0, delay : 0.2});            
            TweenMax.to('.start-project__button', 0.5, {scale : 1, delay : 0.2, onComplete : function(){
              TweenMax.to('.scroll-down__text span, .start-project__text span', 0.5, {y : 0});
            }});
          }});
          
        }});
        function titleStart(){
          
          // H1 Start //
          

          // H2 Start //

        }
      }
      
      
    }    
  }  
};
</script>

<style>
#app-intro {
  
}
h1 {
  margin: 0;
  padding: 0;
  font: 9.4vw/ 8.5vw "Futura Condensed Extra Italic";  
  text-transform: uppercase;  
  position: absolute;
  left: 70px;
  bottom: 32%;
}
h1 span {
  display: inline-block;  
  padding: 0px 10px;
  position: absolute;
  top: 20px;
  left: 0;
  color:#191919;
  white-space: nowrap;
  background-color: #f0f0d9;
}
.l1 {    
  overflow:hidden;
  z-index: 5;  
  position: relative;
  padding-top: 20px;
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
  font: 500 italic 3.8vw/1 "Futura";  
  position: absolute;
  left: 80px;
  bottom: 22%;
  overflow: hidden;
}
h2 span {
  transform: translateY(100%);
  display: inline-block;
}
</style>

