<template>
  <section class="container" id="app-contacts">
    <h1>
      <div class="l1">
        <span>get in touch</span>
      </div>  
      <span class="l2">get in touch</span>
      <span class="l3">get in touch</span>
      <span class="l4">get in touch</span>
      <span class="l5">get in touch</span>
    </h1>  
    <div class="contacts__information">
      <div class="contacts__information_address">
        <div>80 Franklin Street, Suite 1</div>
        <div>New York, NY 10013, USA</div>
        <div>Phone: +1 212 941 5222</div>        
      </div>
      <div class="contacts__information_map">
        <a href="">view on google map</a>
      </div>
      <div class="contacts__information_mail">
        <a href="" @mouseenter="mailHover" @mouseleave="mailHover">
          <span>hi@sparky.agency</span>
          <i></i>
        </a>        
      </div>
    </div>
    <div class="follow-us">
      <span>follow us</span>
      <i></i>
    </div>
  </section>
</template>

<script>
//import SplitText from 'SplitText'
export default {
  mounted : function(){
    var app = this;
    app.$store.commit('pageName', 'contacts');
    app.$store.commit('navigation', 'contacts');
    app.$store.commit('eyes', true);
    TweenMax.to(document.querySelectorAll('.app-social .st0'), 0.4, {fill : '#191919'});
    TweenMax.to(document.querySelectorAll('#app-navigation li i, .scroll-down .scroll-down__line i'), 0.4, {backgroundColor : '#191919'});
    TweenMax.to(document.querySelectorAll('#app-navigation li .item__name'), 0.4, {color : '#191919'});
    TweenMax.to('.app', 0.4, {backgroundColor : '#f8f8eb'})
    //var split = new SplitText(".contacts__information_address, .contacts__information_map", {type:"words"});
    
    
    
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
      TweenMax.staggerTo(document.querySelectorAll('.eye__04, .eye__09'), 0.6, {y : '0%', opacity : 1, delay : 0.4, scaleY : 1, ease: Back.easeOut.config(1.7)}, 0.25)        
        // H1 Animation //        
        
        var textList = document.querySelectorAll('.contacts__information_address > div, .contacts__information_map, .contacts__information_mail');
        var uno = new TimelineMax({ delay : 1.8});
        uno.set('.contacts__information', {visibility : 'visible'})
        .staggerFrom(textList, 0.6, {opacity:0, y : '100%', scaleY : 0.5, force3D:true, delay : 0, ease: Power4.easeOut}, 0.1)
        .to('.contacts__information_mail a i', 0.4, {scaleY : 1, ease: Power4.easeIn}, 'line')
        .to('.follow-us span', 0.7, {y : '0%', ease: Power4.easeOut}, 'line')
        .to('.follow-us i', 0.7, {width : '82px', ease: Power4.easeOut, onComplete : function(){
            app.$store.commit('scroll', true);
            app.$store.commit('pageTransition', false);
            done();
        }}, 'line');
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
                         
            }});
          }});
        //==//      
    },
    leave : function(el, done){
      var app = this;
      app.$store.commit('scroll', false);
      app.$store.commit('prevPage', 'description');
      var next = app.$route.name;
      var textList = document.querySelectorAll('.contacts__information_address > div, .contacts__information_map, .contacts__information_mail');
      if(next == 'index'){        
        new TimelineMax().staggerTo(textList, 0.6, {opacity:0, y : '-100%', scaleY : 0.5, force3D:true, delay : 0, ease: Power4.easeOut}, 0.05, 'uno')
        .to('h1 .l1 span', 0.7, {y : '100%', ease: Power4.easeInOut, onComplete : function(){
          done();
        }}, 'uno+=0.2');        
      }else{
        new TimelineMax().staggerTo(document.querySelectorAll('.eye__09, .eye__04'), 0.6, {opacity : 0, scaleY : 0.5, ease: Power4.easeIn, force3D : true}, 0.25, 'uno')
        .staggerTo(textList, 0.6, {opacity:0, y : '-100%', scaleY : 0.5, force3D:true, delay : 0, ease: Power4.easeOut}, 0.05, 'uno')
        .to('h1 .l1 span', 0.7, {y : '100%', ease: Power4.easeInOut, onComplete : function(){
          done();
        }}, 'uno+=0.2');        
        // new TimelineMax().staggerTo(document.querySelectorAll('.eye__02, .eye__07'), 0.3, {opacity : 0, scaleY : 0.5, ease: Power4.easeIn, force3D : true}, 0.1, 'uno')
        // .staggerTo(document.querySelectorAll('#app-description h1 > div, #app-description a > div'), 0.6, {opacity:0, scaleY:0, force3D:true, ease: Power4.easeOut}, 0.02, 'uno');
        // setTimeout(done, 700)
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
    mailHover : function(e){
      console.log(e);
      if(e.type == 'mouseenter'){
        TweenMax.to(e.currentTarget.querySelector('i'), 0.4, {scaleY : 0.1, ease: Power4.easeIn})
      }else{
        TweenMax.to(e.currentTarget.querySelector('i'), 0.4, {scaleY : 1, ease: Power4.easeIn})
      }
    }
  },
  watch : {
    appStart : function(val){
      var app = this;
      if(val){
        TweenMax.set(document.querySelectorAll('#app-eyes .eye__02, #app-eyes .eye__07'), {display : 'block'});
        TweenMax.fromTo('#app-eyes .eye__09', 0.9, {x : '100%', y : '-100%', scale: 0.5, rotation : -15}, {x : '0%', y : '0%', scale : 1, opacity : 1, rotation : 0, ease: Power3.easeInOut, force3D : true, delay : 1.15});        
        TweenMax.fromTo('#app-eyes .eye__04', 0.9, {x : '100%', y : '-100%', scale: 0.5, rotation : -15}, {x : '0%', y : '0%', scale : 1, opacity : 1, rotation : 0, ease: Power3.easeInOut, force3D : true, delay : 1.2});
        // H1 Animation //
        TweenMax.set('h1', {visibility : 'visible'});
        TweenMax.fromTo('h1 .l1 span', 1.2, {y:'130%'}, {y:'0%',ease: Back.easeOut.config(1.5), delay : 1.2});
          TweenMax.to('h1 .l2', 0.3, {y:'15%',ease: Power1.easeOut, delay : 1.2});
          TweenMax.to('h1 .l3', 0.4, {y:'30%',ease: Power1.easeOut, delay : 1.2});
          TweenMax.to('h1 .l4', 0.5, {y:'45%',ease: Power1.easeOut, delay : 1.2});
          TweenMax.to('h1 .l5', 0.6, {y:'60%',ease: Power1.easeOut, delay : 1.2, onComplete : function(){
            app.$store.commit('loader', false);            
            TweenMax.to('h1 .l3', 0.6, {y:'0%',ease: Power1.easeIn});
            TweenMax.to('h1 .l4', 0.5, {y:'0%',ease: Power1.easeIn});
            TweenMax.to('h1 .l5', 0.4, {y:'0%',ease: Power1.easeIn});
            TweenMax.to('h1 .l2', 0.7, {y:'0%',ease: Power1.easeIn, onComplete : function(){
              var textList = document.querySelectorAll('.contacts__information_address > div, .contacts__information_map, .contacts__information_mail');
              var uno = new TimelineMax();
              uno.set('.contacts__information', {visibility : 'visible'})
              .staggerFrom(textList, 0.6, {opacity:0, y : '100%', scaleY : 0.5, force3D:true, delay : 0, ease: Power4.easeOut}, 0.1)
              .to('.contacts__information_mail a i', 0.4, {scaleY : 1, ease: Power4.easeIn}, 'line')
              .to('.follow-us span', 0.7, {y : '0%', ease: Power4.easeOut}, 'line')
              .to('.follow-us i', 0.7, {width : '82px', ease: Power4.easeOut}, 'line');
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
      }
    }    
  }  
};
</script>

<style scoped>
.app.contacts {
  /*background-color: #f8f8eb;*/
}
#app-contacts {
    
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
  bottom: 22%;
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
  color: #191919;  
  white-space: nowrap;
  background-color: #f8f8eb;
  overflow: visible;
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
.contacts__information {
  position: fixed;
  left: 50%;
  top: 150px;
  font: 500 14px/24px 'Futura';
  visibility: hidden;
}
.contacts__information_map {
  margin-top: 24px;
}
.contacts__information_map a {
  text-decoration: none;
  color: #191919;
}
.contacts__information_mail {
  margin-top: 43px;  
}
.contacts__information_mail a {
  text-decoration: none;
  color: #191919; 
  position: relative;
  display: inline-block;
}
.contacts__information_mail a i {  
  display: block;
  height: 7px;
  width: 108%;
  background-color: #191919;
  position: absolute;
  left: 0;
  top: 24px;
  transform: scaleY(0);
  transform-origin: top;
}
.follow-us {
  position: fixed;
  left: 193px;
  bottom: 72px;
  padding-left: 105px;
  font: 500 14px/1 'Futura';
  overflow: hidden;
}
.follow-us span {
  display: inline-block;
  transform: translateY(100%);
}
.follow-us i {
  /*width: 82px;*/
  width: 0px;
  height: 1px;
  display: block;
  background-color: #191919;
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
}
</style>

