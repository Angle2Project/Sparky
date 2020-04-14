<template>
  <section class="container" id="app-contacts">
    <h1>
      <div class="l1">
        <span>
          <i>get </i>
          <i>in touch</i>
        </span>
      </div>  
      <span class="l2">
        <i>get </i>
        <i>in touch</i>
      </span>
      <span class="l3">
        <i>get </i>
        <i>in touch</i>
      </span>
      <span class="l4">
        <i>get </i>
        <i>in touch</i>
      </span>
      <span class="l5">
        <i>get </i>
        <i>in touch</i>
      </span>
    </h1>      
    <div class="contacts__information">
      <div class="contacts__information_address">
        <div>83 Morse Street - 8AA</div>
        <div>Norwood, MA 02062</div>
        <div>(617) 716-1444</div>
      </div>
      <div class="contacts__information_map">
        <a target="_blank" href="https://www.google.com/maps/place/83+Morse+St+%238AA,+Norwood,+MA+02062,+USA/@42.1709515,-71.2082846,17z/data=!3m1!4b1!4m5!3m4!1s0x89e47e3b5e1585cd:0xae65e5ec83d71288!8m2!3d42.1709475!4d-71.2060959?hl=en">view on google map</a>
      </div>
      <div class="contacts__information_mail">
        <a href="mailto:yo@sparky.us" @mouseenter="mailHover" @mouseleave="mailHover">
          <span>yo@sparky.us</span>
          <i></i>
        </a>        
      </div>
    </div>
    <!-- <div class="follow-us">
      <span>follow us</span>
      <i></i>
    </div> -->
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
    TweenMax.to('#eye__04 .st2', 0.4, {fill : '#f8f8eb'});
    TweenMax.to(document.querySelectorAll('#app-navigation li i, .scroll-down .scroll-down__line i'), 0.4, {backgroundColor : '#191919'});
    TweenMax.to(document.querySelectorAll('#app-navigation li .item__name'), 0.4, {color : '#191919'});
    TweenMax.to('.app', 0.4, {backgroundColor : '#f8f8eb'});
    if(app.mobile)TweenMax.set('.eye__11', {opacity : 0, scaleY : 0.5});
    if(window.innerWidth <= 480){           
      TweenMax.to('#app-logo .st2', 0.4, {opacity : 1});
    }
    //var split = new SplitText(".contacts__information_address, .contacts__information_map", {type:"words"});
    
    
    
  },
  data : function(){
    return {
      
    }
  },
  head : function(){
    return {
      title : 'Contact Us | Sparky',
      meta: [        
        { hid: 'description', name: 'description', content: 'Get in touch with us today to learn more about Sparky and how we can help your brand!'}
      ]
    }
  },
  transition : {    
    mode : 'out-in',
    css : false,
    enter : function(el, done){
      var app = this;
      var dobbleTitle = (window.innerWidth <= 768 && window.innerWidth > 480);
      app.$store.state.scrollDownHover = true;      
      TweenMax.staggerTo(document.querySelectorAll('.eye__11, .eye__09'), 0.6, {y : '0%', opacity : 1, delay : 0.4, scaleY : 1, ease: Back.easeOut.config(1.7)}, 0.25)        
        // H1 Animation //
        
        var textList = document.querySelectorAll('.contacts__information_address > div, .contacts__information_map, .contacts__information_mail');
        var uno = new TimelineMax({ delay : 1.8});
        uno.set('.contacts__information', {visibility : 'visible'})
        .staggerFrom(textList, 0.6, {opacity:0, y : '100%', scaleY : 0.5, force3D:true, delay : 0, ease: Power4.easeOut}, 0.1)
        .to('.contacts__information_mail a i', 0.4, {scaleY : 1, ease: Power4.easeIn}, 'line')
        .to('.follow-us span', 0.7, {y : '0%', ease: Power4.easeOut}, 'line')
        .to('.copyright span', 0.7, {y : '0%', ease: Power4.easeOut}, 'line')
        if(app.$store.state.mobile){
          TweenMax.set(document.querySelectorAll('.app-social a'), {y : '100%'});
          TweenMax.set('.app-social', {display : 'flex'})
          TweenMax.set('.app-social a', {y : '100%'});
        }
        uno.to(document.querySelectorAll('.app-social a'), 0.5, {y : '0%'}, 'line')
        .to('.follow-us i', 0.7, {width : '82px', ease: Power4.easeOut, onComplete : function(){
            app.$store.commit('scroll', true);
            app.$store.commit('pageTransition', false);
            TweenMax.set('.scroll-down', {display : 'none'});
            done();
        }}, 'line');
        TweenMax.set('h1', {visibility : 'visible', delay : 0.4});
        TweenMax.fromTo('h1 .l1 span', 1.2, {y:'130%'}, {y:'0%',ease: Back.easeOut.config(dobbleTitle ? 1.1 : 1.5), delay : 0.4});
          TweenMax.to('h1 .l2', 0.3, {y:dobbleTitle ? '15%' : '15%',ease: Power1.easeOut, delay : 0.4});
          TweenMax.to('h1 .l3', 0.4, {y:dobbleTitle ? '27%' : '30%',ease: Power1.easeOut, delay : 0.4});
          TweenMax.to('h1 .l4', 0.5, {y:dobbleTitle ? '38%' : '45%',ease: Power1.easeOut, delay : 0.4});
          TweenMax.to('h1 .l5', 0.6, {y:dobbleTitle ? '46%' : '60%',ease: Power1.easeOut, delay : 0.4, onComplete : function(){            
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
        if(app.$store.state.mobile){
          TweenMax.set('.eye__09', {opacity : 0, scaleY : 0.5});
          TweenMax.to('.eye__11', 0.6, {opacity : 0, scaleY : 0.5, ease: Power4.easeIn, force3D : true})
        }
        var uno = new TimelineMax().staggerTo(textList, 0.6, {opacity:0, y : '-100%', scaleY : 0.5, force3D:true, delay : 0, ease: Power4.easeOut}, 0.05, 'uno')
        .to('h1 .l1 span', 0.7, {y : '100%', ease: Power4.easeInOut, onComplete : function(){
          TweenMax.set('.scroll-down', {display : 'flex'});
          scrollDownTL = new TimelineMax({repeat : -1}).fromTo('.scroll-down .scroll-down__line i' , 0.8, {x : '100%'}, {x : '0%', ease: Power4.easeIn})
          .to('.scroll-down .scroll-down__line i' , 0.8, {x : '-100%', ease: Power4.easeIn})
          .addCallback(function(){
            if(app.$store.state.scrollDownHover || (app.$store.state.servicesSlider && app.$store.state.mobile))scrollDownTL.pause();
          });
          app.$store.state.scrollDownHover = false;
          TweenMax.to('#eye__04 .st2', 0.4, {fill : '#f0f0d9'});
          done();
        }}, 'uno+=0.2')        
        .to('.follow-us span', 0.7, {y : '100%', ease: Power4.easeOut}, 'uno+=0.2')
        .to('.copyright span', 0.7, {y : '100%', ease: Power4.easeOut}, 'uno+=0.2')
        .to('.follow-us i', 0.7, {width : '0px', ease: Power4.easeOut}, 'uno+=0.2')
        if(app.$store.state.mobile){          
          uno.to('.app-social a', 0.7, {y : '100%', ease: Power4.easeOut, onComplete : function(){
            TweenMax.set('.app-social', {clearProps : 'all'})
            TweenMax.set('.app-social a', {y : '0%'});
          }}, 'uno+=0.2')
        }
      }else{
        var uno = new TimelineMax().staggerTo(document.querySelectorAll('.eye__09, .eye__11'), 0.6, {opacity : 0, scaleY : 0.5, ease: Power4.easeIn, force3D : true}, 0.25, 'uno')
        .staggerTo(textList, 0.6, {opacity:0, y : '-100%', scaleY : 0.5, force3D:true, delay : 0, ease: Power4.easeOut}, 0.05, 'uno')
        .to('h1 .l1 span', 0.7, {y : '100%', ease: Power4.easeInOut, onComplete : function(){
          TweenMax.set('.scroll-down', {display : 'flex'});
          scrollDownTL = new TimelineMax({repeat : -1}).fromTo('.scroll-down .scroll-down__line i' , 0.8, {x : '100%'}, {x : '0%', ease: Power4.easeIn})
          .to('.scroll-down .scroll-down__line i' , 0.8, {x : '-100%', ease: Power4.easeIn})
          .addCallback(function(){
            if(app.$store.state.scrollDownHover)scrollDownTL.pause();
          });
          app.$store.state.scrollDownHover = false;
          TweenMax.to('#eye__04 .st2', 0.4, {fill : '#f0f0d9'});
          done();
        }}, 'uno+=0.2')
        .to('.follow-us span', 0.7, {y : '100%', ease: Power4.easeOut}, 'uno+=0.2')
        .to('.copyright span', 0.7, {y : '100%', ease: Power4.easeOut}, 'uno+=0.2')
        .to('.follow-us i', 0.7, {width : '0px', ease: Power4.easeOut}, 'uno+=0.2')
        if(app.$store.state.mobile){          
          uno.to('.app-social a', 0.7, {y : '100%', ease: Power4.easeOut, onComplete : function(){
            TweenMax.set('.app-social', {clearProps : 'all'})
            TweenMax.set('.app-social a', {y : '0%'});
          }}, 'uno+=0.2')
        }
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
    },
    mobile : function(){
      return this.$store.state.mobile;
    },
    servicesSlider : function(){
      return this.$store.state.servicesSlider;
    }
  },
  methods : {
    mailHover : function(e){      
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
      var dobbleTitle = (window.innerWidth <= 768 && window.innerWidth > 480);
      if(val){
        TweenMax.set(document.querySelectorAll('#app-eyes .eye__11, #app-eyes .eye__09'), {display : 'block'});
        TweenMax.fromTo('#app-eyes .eye__09', 0.9, {x : '100%', y : '-100%', scale: 0.5, rotation : -15}, {x : '0%', y : '0%', scale : 1, opacity : 1, rotation : -14, ease: Power3.easeInOut, force3D : true, delay : 1.15});        
        TweenMax.fromTo('#app-eyes .eye__11', 0.9, {x : '100%', y : '-100%', scale: 0.5, rotation : -15}, {x : '0%', y : '0%', scale : 1, opacity : 1, rotation : -25, ease: Power3.easeInOut, force3D : true, delay : 1.2});
        // H1 Animation //
        TweenMax.set('h1', {visibility : 'visible'});
        TweenMax.fromTo('h1 .l1 span', 1.2, {y:'130%'}, {y:'0%',ease: Back.easeOut.config(dobbleTitle ? 1.1 : 1.5), delay : 1.2});
          TweenMax.to('h1 .l2', 0.3, {y:dobbleTitle ? '15%' : '15%',ease: Power1.easeOut, delay : 1.2});
          TweenMax.to('h1 .l3', 0.4, {y:dobbleTitle ? '27%' : '30%',ease: Power1.easeOut, delay : 1.2});
          TweenMax.to('h1 .l4', 0.5, {y:dobbleTitle ? '38%' : '45%',ease: Power1.easeOut, delay : 1.2});
          TweenMax.to('h1 .l5', 0.6, {y:dobbleTitle ? '46%' : '60%',ease: Power1.easeOut, delay : 1.2, onComplete : function(){            
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
              .to('.follow-us i', 0.7, {width : '82px', ease: Power4.easeOut}, 'line')
              .to('.copyright span', 0.7, {y : '0%', ease: Power4.easeOut}, 'line');


              
              // scrollDownTL = new TimelineMax({repeat : -1}).fromTo('.scroll-down .scroll-down__line i' , 0.8, {x : '100%'}, {x : '0%', ease: Power4.easeIn})
              // .to('.scroll-down .scroll-down__line i' , 0.8, {x : '-100%', ease: Power4.easeIn})
              // .addCallback(function(){
              //   if(app.$store.state.scrollDownHover)scrollDownTL.pause();
              // });

              
              if(app.mobile)TweenMax.set('.app-social', {display : 'flex'})
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
  padding: 0px 2vw 0 0;
  position: absolute;
  bottom: 0;
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
  padding-top: 2vw;
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

@media screen and (max-width: 768px) {
  h1 i {
    display: block;
  }
  h1 {
    font-size: 15.6vw;
    line-height: 12vw;
    bottom: 160px;
  }
  h1 .l1 {
    /*padding-top: 2vw;    */
  }
  h1 span {
    /*padding: 1vw 1vw 1vw 0;*/
    padding: 0px 2vw 1.3vw 0;
  }
  .contacts__information {
    top: auto;
    bottom: calc(50% + 7px);
  }
}

@media screen and (max-width: 480px) {
  .follow-us {
    display: none;
  }
  h1 {
    font-size: 12.8vw;
    left: calc(42px - 1vw);
    bottom: 84px;
  }
  h1 i {
    display: inline;
  }
  .contacts__information {
    left: 42px;
    bottom: auto;
    top: 28%;
  }
  h1 span {
    /*padding: 1vw 1vw 1vw 0;*/
    padding: 0px 2vw 0vw 0;
  }  
}
</style>