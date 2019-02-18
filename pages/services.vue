<template>
  <section id="app-services" :class="currentSlide">   
    <section class="bg__top"></section> 
    <h1>
      <div class="l1">
        <span>
          <i>what </i>
          <i>we do</i>
        </span>
      </div>  
      <span class="l2">
        <i>what </i>
        <i>we do</i>
      </span>
      <span class="l3">
        <i>what </i>
        <i>we do</i>
      </span>
      <span class="l4">
        <i>what </i>
        <i>we do</i>
      </span>
      <span class="l5">
        <i>what </i>
        <i>we do</i>
      </span>
    </h1>
    <h2 class="mm" @mouseenter="serviceHover($event, 'mm')" @mouseleave="serviceHover($event, 'mm')" @click="serviceDetails($event, 'mm')">
      <div class="stroke">
        <div class="stroke__wrapper">
          <span>MAXIMIZE</span>
          <span>MOMENTS</span>
        </div>        
      </div>        
      <div class="fill">
        <div class="l1">
          <div class="bg"></div>
          <div class="show-more">
            <span>{{mmShowMore}}</span>
          </div>
          <div class="row">
            <div class="start">M</div>
            <div class="end">
              <div>AXIMIZE</div>
            </div>
          </div>
          <div class="row dos">
            <div class="start">M</div>
            <div class="end">
              <div>OMENTS</div>
            </div>
          </div>          
        </div>
      </div>        
      <div class="l2">
        <span>M</span>
        <span>M</span>
      </div>
      <div class="l3">
        <span>M</span>
        <span>M</span>
      </div>
      <div class="l4">
        <span>M</span>
        <span>M</span>
      </div>
      <div class="l5">
        <span>M</span>
        <span>M</span>
      </div>
    </h2>

    <h2 class="ee" @mouseenter="serviceHover($event, 'ee')" @mouseleave="serviceHover($event, 'ee')" @click="serviceDetails($event, 'ee')">
      <div class="stroke">
        <div class="stroke__wrapper">
          <span>ELEVATE</span>
          <span>EXPERIENCES</span>
        </div>        
      </div>        
      <div class="fill">
        <div class="l1">
          <div class="bg"></div>
          <div class="show-more">
            <span>{{eeShowMore}}</span>
          </div>
          <div class="row">
            <div class="start">E</div>
            <div class="end">
              <div>LEVATE</div>
            </div>
          </div>
          <div class="row dos">
            <div class="start">E</div>
            <div class="end">
              <div>XPERIENCES</div>
            </div>
          </div>          
        </div>
      </div>        
      <div class="l2">
          <span>E</span>
          <span>E</span>
        </div>
        <div class="l3">
          <span>E</span>
          <span>E</span>
        </div>
        <div class="l4">
          <span>E</span>
          <span>E</span>
        </div>
        <div class="l5">
          <span>E</span>
          <span>E</span>
        </div>
    </h2>

    <h2 class="ii" @mouseenter="serviceHover($event, 'ii')" @mouseleave="serviceHover($event, 'ii')" @click="serviceDetails($event, 'ii')">
      <div class="stroke">
        <div class="stroke__wrapper">
          <span>Ignite</span>
          <span>Innovation</span>
        </div>        
      </div>        
      <div class="fill">
        <div class="l1">
          <div class="bg"></div>
          <div class="show-more">
            <span>{{iiShowMore}}</span>
          </div>
          <div class="row">
            <div class="start">I</div>
            <div class="end">
              <div>gnite</div>
            </div>
          </div>
          <div class="row dos">
            <div class="start">I</div>
            <div class="end">
              <div>nnovation</div>
            </div>
          </div>
        </div>
      </div>        
      <div class="l2">
        <span>I</span>
        <span>I</span>
      </div>
      <div class="l3">
        <span>I</span>
        <span>I</span>
      </div>
      <div class="l4">
        <span>I</span>
        <span>I</span>
      </div>
      <div class="l5">
        <span>I</span>
        <span>I</span>
      </div>
    </h2>

    <section class="slider mm">
      <h3>Capitalize on your brandʼs calendar with crystal clear channel alignment, cohesive creative, and thoughtful campaign execution.</h3>
      <div class="slider__list_description">
        <span>Creative Direction</span>
        <span>Narrative Development</span>
        <span>SEO</span>
        <span>Social Media Marketing</span>
        <span>Content Marketing Strategy</span>
        <span>Art Direction</span>        
      </div>      
    </section>
    <section class="slider ee">
      <h3>Heighten your brandʼs digital DNA by enhancing content, visuals, interactivity, and usability.</h3>
      <div class="slider__list_description">
        <span>UI/UX Design</span>
        <span>Art & Copy</span>
        <span>A/B/n & MVT Testing</span>
        <span>Conversion Rate Optimization</span>
        <span>Product Merchandising</span>
        <span>Product Roadmapping</span>        
      </div>      
    </section>
    <section class="slider ii">
      <h3>Arm your organization with the tools needed to take big swings, fail fast, learn quickly, and use data as a guiding light.</h3>
      <div class="slider__list_description">
        <span>Strategic Consulting</span>
        <span>Platform Architecture</span>
        <span>Future-proofing</span>
        <span>eCom Merchandising & Technology</span>
      </div>      
    </section>
    
    <section class="slider__close" @click="sliderClose" v-show="servicesSlider"></section>
    <div class="slider__close_mobile" @click="sliderClose">
        <i></i>
        <i></i>
      </div>
    <section class="slider__scroll-down" @click="nextPrevSlide" :class="servicesSlider ? 'active' : ''">
      <i class="slider__scroll-down_line">
        <i></i>
      </i>
      <span class="slider__scroll-down_text">
        <span>{{prevNextText}}</span>
      </span>
    </section>
    <!-- <section class="bg__right"></section>
    <section class="bg__bottom"></section> -->
  </section>
</template>

<script>
export default {
  mounted : function(){
    var app = this;    
    app.$store.commit('pageName', 'services');
    app.$store.commit('navigation', 'expertise');
    app.$store.commit('services', app);
    app.$store.commit('eyes', false);    
    TweenMax.to('.app', 0.4, {backgroundColor : '#f8f8eb', onComplete : function(){
      var split = new SplitText(".slider h3", {type:"words"});      
    }});
    if(window.innerWidth <= 768 && window.innerWidth > 480){      
      app.screen = 'tablet';
    }else if(window.innerWidth <= 480){      
      app.screen = 'mobile';
      TweenMax.to('#app-logo .st2', 0.4, {opacity : 0});
    }else{
      app.screen = 'descktop';
    }    
  },  
  data : function(){
    return {
      slider : false,
      sliderTransition : false,      
      servicesStartAnimation : true,      
      mmShowMore : 'expand',
      eeShowMore : 'expand',
      iiShowMore : 'expand',
      currentSlide : '',
      h2Hover : false,
      screen : null,      
      prevNextText : 'next service'
    }
  },
  head : function(){
    return {
      title : 'Our Services | Sparky',
      meta: [        
        { hid: 'description', name: 'description', content: 'We provide brands with fresh eyes and strategic consulting in UX/design, inbound marketing, product merchandising, conversion rate optimization, and more.' }
      ]
    }
  },
  transition : {    
    mode : 'out-in',
    css : false,
    enter : function(el, done){
      var app = this;
      var dobbleTitle = window.innerWidth <= 768;
      var mobile = app.$store.state.mobile;      
      //app.$store.commit('appStartAnimation', true);            
      var h2Delay = 0.7;
      app.$store.commit('eyes', false);
      // Background animation //
      TweenMax.to(document.querySelectorAll('.app-social .st0'), 0.4, {fill : '#f8f8eb', ease: Power4.easeInOut, delay : 0});
      TweenMax.to(document.querySelectorAll('#app-logo .st2'), 0.7, {fill : '#191919'});
      TweenMax.to(document.querySelectorAll('#app-navigation li i, .scroll-down .scroll-down__line i'), 0.4, {backgroundColor : '#f8f8eb', delay : 0.4});
      TweenMax.to(document.querySelectorAll('#app-navigation li .item__name, .start-project__text, .scroll-down__text'), 0.4, {color : '#f8f8eb'});
      TweenMax.to('.bg__right', 0.7, {width : mobile ? '84px' : '160px', ease: Power4.easeInOut});
      // if(app.$store.state.prevPage == 'index' || app.$store.state.prevPage == 'description'){
      //   TweenMax.set('.bg__bottom', {width : '100%', x : '-160px'});
      // }      
      TweenMax.to('.bg__bottom', 0.7, {height : dobbleTitle ? '70%' : '63%', ease: Power4.easeInOut, onComplete : function(){
        //TweenMax.to('#cursor-svg .state-0', 0.4, {morphSVG: '#cursor-svg .state-2', ease: Power4.easeIn});
        //TweenMax.to('#cursor-svg', 0.4, {x : -10, y : -10, ease: Power4.easeIn});
        TweenMax.set('.bg__top, h1', {visibility : 'visible'});        
        // H1 Animation //
        TweenMax.fromTo('h1 .l1 span', 1.2, {y:'-130%'}, {y:'0%',ease: Back.easeOut.config(dobbleTitle ? 1.1 : 1.5), delay : 0});
        TweenMax.to('h1 .l2', 0.3, {y:(dobbleTitle ? '-15%' : '-15%'),ease: Power1.easeOut, delay : 0});
        TweenMax.to('h1 .l3', 0.4, {y:(dobbleTitle ? '-25%' : '-30%'),ease: Power1.easeOut, delay : 0});
        TweenMax.to('h1 .l4', 0.5, {y:(dobbleTitle ? '-33%' : '-45%'),ease: Power1.easeOut, delay : 0});
        TweenMax.to('h1 .l5', 0.6, {y:(dobbleTitle ? '-39%' : '-45%'),ease: Power1.easeOut, delay : 0, onComplete : function(){
          TweenMax.to('.scroll-down__text span, .start-project__text span', 0.5, {y : '100%'});
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
        TweenMax.to('h2.mm .l2', 0.3, {x:(dobbleTitle ? '65%':'145%'),ease: Power1.easeOut, delay : h2Delay,  force3D: false});
        TweenMax.to('h2.mm .l3', 0.4, {x:(dobbleTitle ? '115%':'185%'),ease: Power1.easeOut, delay : h2Delay,  force3D: false});
        TweenMax.to('h2.mm .l4', 0.5, {x:(dobbleTitle ? '155%':'220%'),ease: Power1.easeOut, delay : h2Delay,  force3D: false});
        TweenMax.to('h2.mm .l5', 0.6, {x:(dobbleTitle ? '185%':'253%'),ease: Power1.easeOut, delay : h2Delay,  force3D: false, onComplete : function(){            
          TweenMax.to('h2.mm .l3', 0.6, {x:'0%',ease: Power1.easeIn,  force3D: false});
          TweenMax.to('h2.mm .l4', 0.5, {x:'0%',ease: Power1.easeIn,  force3D: false});
          TweenMax.to('h2.mm .l5', 0.4, {x:'0%',ease: Power1.easeIn,  force3D: false});
          TweenMax.to('h2.mm .l2', 0.7, {x:'0%',ease: Power1.easeIn,  force3D: false, onComplete : function(){
            TweenMax.set('h2.mm .l1', {overflow : 'visible'});
            TweenMax.to('h2.mm .show-more span', 0.5, {y : '0%', delay : 0.1,  force3D: false});
            TweenMax.set(document.querySelectorAll('h2.mm .l2, h2.mm .l3, h2.mm .l4, h2.mm .l5, h2.mm .bg'), {visibility : 'hidden'});
            // document.querySelectorAll('h2.mm .l2, h2.mm .l3, h2.mm .l4, h2.mm .l5, h2.mm .bg').forEach( function(el, i) {
            //   el.remove();
            // });
          }});
        }});
        //==//
        //EE          
        TweenMax.to(document.querySelectorAll('h2.ee .start'), 1.2, {x : 0,ease: Back.easeOut.config(1), delay : h2Delay, force3D: false});
        TweenMax.to('h2.ee .l2', 0.3, {x:(dobbleTitle ? '-60%':'-170%'),ease: Power1.easeOut, delay : h2Delay, force3D: false});
        TweenMax.to('h2.ee .l3', 0.4, {x:(dobbleTitle ? '-110%':'-230%'),ease: Power1.easeOut, delay : h2Delay, force3D: false});
        TweenMax.to('h2.ee .l4', 0.5, {x:(dobbleTitle ? '-155%':'-285%'),ease: Power1.easeOut, delay : h2Delay, force3D: false});
        TweenMax.to('h2.ee .l5', 0.6, {x:(dobbleTitle ? '-195%':'-335%'),ease: Power1.easeOut, delay : h2Delay, force3D: false, onComplete : function(){                                    
          TweenMax.to('h2.ee .l3', 0.6, {x:'0%',ease: Power1.easeIn, force3D: false});
          TweenMax.to('h2.ee .l4', 0.5, {x:'0%',ease: Power1.easeIn, force3D: false});
          TweenMax.to('h2.ee .l5', 0.4, {x:'0%',ease: Power1.easeIn, force3D: false});
          TweenMax.to('h2.ee .l2', 0.7, {x:'0%',ease: Power1.easeIn, force3D: false, onComplete : function(){              
            TweenMax.set('h2.ee .l1', {overflow : 'visible'});
            TweenMax.to('h2.ee .show-more span', 0.5, {y : '0%', delay : 0.1, force3D: false});
            TweenMax.set(document.querySelectorAll('h2.ee .l2, h2.ee .l3, h2.ee .l4, h2.ee .l5, h2.ee .bg'), {visibility : 'hidden'});
            // document.querySelectorAll('h2.ee .l2, h2.ee .l3, h2.ee .l4, h2.ee .l5, h2.ee .bg').forEach( function(el, i) {
            //   el.remove();
            // });
          }});
        }});
        //==//
        //II
        TweenMax.to(document.querySelectorAll('h2.ii .start'), 1.2, {x : 0,ease: Back.easeOut.config(1), delay : h2Delay, force3D: false});
        TweenMax.to('h2.ii .l2', 0.3, {x:(dobbleTitle ? '15%' : '90%'),ease: Power1.easeOut, delay : h2Delay, force3D: false});
        TweenMax.to('h2.ii .l3', 0.4, {x:(dobbleTitle ? '70%' : '158%'),ease: Power1.easeOut, delay : h2Delay, force3D: false});
        TweenMax.to('h2.ii .l4', 0.5, {x:(dobbleTitle ? '117%' : '220%'),ease: Power1.easeOut, delay : h2Delay, force3D: false});
        TweenMax.to('h2.ii .l5', 0.6, {x:(dobbleTitle ? '157%' : '270%'),ease: Power1.easeOut, delay : h2Delay, force3D: false, onComplete : function(){            
          TweenMax.to('h2.ii .l3', 0.6, {x:'0%',ease: Power1.easeIn, force3D: false});
          TweenMax.to('h2.ii .l4', 0.5, {x:'0%',ease: Power1.easeIn, force3D: false});
          TweenMax.to('h2.ii .l5', 0.4, {x:'0%',ease: Power1.easeIn, force3D: false});
          TweenMax.to('h2.ii .l2', 0.7, {x:'0%',ease: Power1.easeIn, force3D: false, onComplete : function(){              
            TweenMax.set('h2.ii .l1', {overflow : 'visible'});
            TweenMax.to('h2.ii .show-more span', 0.5, {y : '0%', delay : 0.1, force3D: false});            
            TweenMax.set(document.querySelectorAll('h2.ii .l2, h2.ii .l3, h2.ii .l4, h2.ii .l5, h2.ii .bg'), {visibility : 'hidden'});
            // document.querySelectorAll('h2.ii .l2, h2.ii .l3, h2.ii .l4, h2.ii .l5, h2.ii .bg').forEach( function(el, i) {
            //   el.remove();
            // });               
            app.$store.commit('appStartAnimation', false);
            app.$store.commit('scroll', true);
            app.$store.commit('pageTransition', false);
            app.$store.state.services.servicesStartAnimation = false;
          }});
        }});
        //==//
      }});
    },
    leave : function(el, done){
      var app = this;
      app.$store.commit('scroll', false);
      app.$store.commit('prevPage', 'services');
      var next = app.$route.name;      
      var tl = new TimelineMax();
      tl.to(document.querySelectorAll('#app-logo .st2'), 0.7, {fill : '#191919', ease: Power4.easeIn}, 'uno')
        .to('#cursor-svg', 0.7, {rotation : 0, ease: Power4.easeIn}, 'uno')
        .to('.cursor__close', 0.6, {width : 0}, 'uno')
        .to('#cursor-svg', 0.4, {x : 0, y : 0, ease: Power4.easeIn}, 'rotate')
        .to('#cursor-svg .state-0', 0.4, {morphSVG: '#cursor-svg .state-1', ease: Power4.easeIn}, 'rotate')
        .to('h1 .l1 span', 0.7, {y : '100%', ease: Power4.easeIn}, 'uno')
        .to(document.querySelectorAll('h2 .fill'), 0.7, {height : '0vw', ease: Power4.easeIn, force3D: false}, 'uno');
      if(next == 'index' || next == 'description' || next == 'contacts' || next == 'clients'){
        tl.to('.bg__right', 0.7, {width : '0px', ease: Power4.easeInOut}, 'uno+=0.5')
        .to('.bg__bottom', 0.7, {width : '100%', height : '0%', ease: Power4.easeInOut, onComplete : done}, 'uno+=0.5')
        .to(document.querySelectorAll('.app-social .st0, #app-logo .st2'), 0.4, {fill : '#191919', ease: Power4.easeInOut}, 'uno+=0.5')
        .to(document.querySelectorAll('#app-navigation li i, .scroll-down .scroll-down__line i'), 0.4, {backgroundColor : '#191919'}, 'uno+=0.9')
        .to(document.querySelectorAll('#app-navigation li .item__name, .start-project__text, .scroll-down__text'), 0.4, {color : '#191919'}, 'uno+=0.9');
        //if(!app.servicesSlider)tl.to('#app-navigation li.current .item__name', 0.4, {color : '#fff'});
        setTimeout(function(){
          app.$store.commit('pageName', next);
        }, 900)
      }      
      if(next == 'team'){
        setTimeout(function(){
          done();
        }, 700)
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
    appStartAnimation : function(){
      return this.$store.state.appStartAnimation;
    },
    servicesSlider : function(){
      return this.$store.state.servicesSlider;
    },
    mobile : function(){
      return this.$store.state.mobile;
    },
    touchevent : function(){
      return this.$store.state.touchevent;
    },
    resize : function(){
      return this.$store.state.resize;
    }
  },
  methods : {
    serviceHover : function(e, name){
      var app = this;
      var dobbleTitle = window.innerWidth <= 768;
      if(app.servicesSlider || app.appStartAnimation || app.servicesStartAnimation ||  app.sliderTransition || app.currentSlide == name || app.touchevent)return false;
      if(e.type == 'mouseenter'){
        app.h2Hover = true;
        TweenMax.to('#cursor-svg .state-0', 0.4, {morphSVG: '#cursor-svg .state-2', ease: Power4.easeIn});
        TweenMax.set('#cursor-svg', {x : -10, y : -10});
        TweenMax.to(e.target.querySelector('.show-more span'), 0.7, {opacity : 0, force3D: false});          
        if(name == 'mm')TweenMax.to(e.target.querySelector('.l1'), 0.7, {left : '1vw', ease: Power2.easeInOut, force3D: false});
        if(name == 'ee')TweenMax.to(e.target.querySelector('.l1'), 0.7, {right : function(){
          var r;
          if(dobbleTitle){
            if(app.mobile){
              r = '0px';
            }else{
              r = '40px'
            }
          }else{
            r = '70px'
          }
          return r;
        }, ease: Power2.easeInOut, force3D: false});
        if(name == 'ii' && dobbleTitle)TweenMax.to(e.target.querySelector('.l1'), 0.7, {left : '1vw', ease: Power2.easeInOut, force3D: false});
        e.target.querySelectorAll('.end').forEach( function(el, i) {
          var w = 100 / (window.window.innerWidth / el.querySelector('div').clientWidth);          
          TweenMax.to(el, 0.7, {width : w+'vw', ease: Power4.easeInOut, force3D: true});
        });        
      }else{        
        app.h2Hover = false;
        TweenMax.to('#cursor-svg .state-0', 0.4, {morphSVG: '#cursor-svg .state-1', ease: Power4.easeIn});
        TweenMax.set('#cursor-svg', {x : 0, y : 0});
        TweenMax.to(e.target.querySelector('.show-more span'), 0.5, {opacity : 1, force3D: false});        
        if(name == 'mm')TweenMax.to(e.target.querySelector('.l1'), 0.7, {left : function(){
          var l;
          if(dobbleTitle){
            if(app.mobile){
              l = '84px';
            }else{
              l = '160px'
            }
          }else{
            l = '11vw'
          }
          return l;          
        }, ease: Power3.easeInOut, force3D: false});
        if(name == 'ee')TweenMax.to(e.target.querySelector('.l1'), 0.7, {right : app.mobile ? '84px' : '160px', ease: Power3.easeInOut, force3D: false});        
        if(name == 'ii' && dobbleTitle)TweenMax.to(e.target.querySelector('.l1'), 0.7, {left : app.mobile ? '84px' : '160px', ease: Power2.easeInOut, force3D: false});
        e.target.querySelectorAll('.end').forEach( function(el, i) {          
          TweenMax.to(el, 0.7, {width : '0vw', ease: Power4.easeInOut, force3D: true});
        });
      }
    },
    sliderClose : function(e){
      var app = this;
      var dobbleTitle = window.innerWidth <= 768;
      if(app.servicesSlider && !app.sliderTransition){        
        app.sliderTransition = true;
        app.currentSlide = '';
        TweenMax.to('.slider__close_mobile i:first-child', 0.7, {height : '0px', ease: Power4.easeIn});
        TweenMax.to('.slider__close_mobile i:last-child', 0.7, {width : '0px', ease: Power4.easeIn});
        var tl = new TimelineMax({onComplete : function(){
          setTimeout(function(){
            TweenMax.set(document.querySelectorAll('#app-navigation li i, .scroll-down .scroll-down__line i'), {backgroundColor : '#f8f8eb'});
            TweenMax.set(document.querySelectorAll('#app-navigation li .item__name'), {clearProps : 'all'});
            TweenMax.set(document.querySelectorAll('#app-navigation li .item__name'), {color : '#f8f8eb'});

            var tl2 = new TimelineMax();
            TweenMax.set('#app-navigation li.current .item__name span', {y : '100%'});
            TweenMax.set('#app-navigation li.current .item__name', {width : 'auto', x : function(i, el){
              return el.querySelector('span').clientWidth + 16;
            }});
            tl2.staggerFromTo(document.querySelectorAll('#app-navigation li i'), 0.2, {x : 83}, {x : 0}, 0.09)
            .staggerFromTo(document.querySelectorAll('#app-navigation li i'), 0.2, {width : 83}, {cycle:{
              width : function(i, el){
                return el.parentNode.classList.contains('current') ? 83 : 1;
              }
            }}, 0.09, '-=0.47')
            .to('#app-navigation li .item__name span', 0.2, {y : '0%'})
          }, 100);
          // Sider render //
          app.$store.commit('navigationType', {state : 'app', current : 'expertise'});

          
        }});
        tl.staggerTo(document.querySelectorAll('#app-navigation li i'), 0.2, {width : 83}, 0.09, 'uno')
        tl.staggerTo(document.querySelectorAll('#app-navigation li .item__name span'), 0.2, {y : '100%'}, 0.09, 'uno')
        .staggerTo(document.querySelectorAll('#app-navigation li i'), 0.2, {x : 83}, 0.09, '-=0.2');
        
        prevNextLine.addCallback(function(){
          app.$store.commit('servicesSlider', false);
          prevNextLine.stop();
          TweenMax.to('.slider__scroll-down .slider__scroll-down_text span', 0.8, {y : '100%', ease: Power4.easeIn, onComplete : function(){
            TweenMax.set('.slider__scroll-down .slider__scroll-down_line', {left : '0%'});
            TweenMax.set('.slider__scroll-down .slider__scroll-down_text', {x : 0});
            scrollDownTL.play();
          }});          
        });

        new TimelineMax().to(document.querySelectorAll('.slider, h2'), 0.4, {opacity : 0}, 'uno')
        .to(document.querySelectorAll('#app-logo .st2'), 0.7, {fill : '#191919', ease: Power4.easeIn}, 'uno')
        .to('#cursor-svg', 0.7, {rotation : 0, ease: Power4.easeIn}, 'uno')
        .to('.cursor__close', 0.6, {width : 0}, 'uno')
        .to('#cursor-svg', 0.4, {x : 0, y : 0, ease: Power4.easeIn}, 'rotate')
        .to('#cursor-svg .state-0', 0.4, {morphSVG: '#cursor-svg .state-1', ease: Power4.easeIn}, 'rotate')
        .to('.bg__bottom', 0.7, {height : dobbleTitle ? '70%' : '63%', ease: Power4.easeIn, onComplete : function(){          
          var h2Delay = 0.7;
          TweenMax.set(document.querySelectorAll('.slider, .slider__list_description span, h2, h2 *'), {clearProps : 'all'});
          TweenMax.set('.bg__top', {clearProps : 'z-index'});
          TweenMax.set('h1', {clearProps : 'z-index'});
          TweenMax.set(document.querySelectorAll('h2'), {visibility : 'visible'});          
          //MM
          TweenMax.to(document.querySelectorAll('h2.mm .start'), 1.2, {x : 0,ease: Back.easeOut.config(1), delay : h2Delay, force3D: false});
          TweenMax.to('h2.mm .l2', 0.3, {x:(dobbleTitle ? '65%':'145%'),ease: Power1.easeOut, delay : h2Delay,  force3D: false});
          TweenMax.to('h2.mm .l3', 0.4, {x:(dobbleTitle ? '115%':'185%'),ease: Power1.easeOut, delay : h2Delay,  force3D: false});
          TweenMax.to('h2.mm .l4', 0.5, {x:(dobbleTitle ? '155%':'220%'),ease: Power1.easeOut, delay : h2Delay,  force3D: false});
          TweenMax.to('h2.mm .l5', 0.6, {x:(dobbleTitle ? '185%':'253%'),ease: Power1.easeOut, delay : h2Delay,  force3D: false, onComplete : function(){            
            TweenMax.to('h2.mm .l3', 0.6, {x:'0%',ease: Power1.easeIn,  force3D: false});
            TweenMax.to('h2.mm .l4', 0.5, {x:'0%',ease: Power1.easeIn,  force3D: false});
            TweenMax.to('h2.mm .l5', 0.4, {x:'0%',ease: Power1.easeIn,  force3D: false});
            TweenMax.to('h2.mm .l2', 0.7, {x:'0%',ease: Power1.easeIn,  force3D: false, onComplete : function(){
              TweenMax.set('h2.mm .l1', {overflow : 'visible'});
              TweenMax.to('h2.mm .show-more span', 0.5, {y : '0%', delay : 0.1,  force3D: false});
              TweenMax.set(document.querySelectorAll('h2.mm .l2, h2.mm .l3, h2.mm .l4, h2.mm .l5, h2.mm .bg'), {visibility : 'hidden'});
              // document.querySelectorAll('h2.mm .l2, h2.mm .l3, h2.mm .l4, h2.mm .l5, h2.mm .bg').forEach( function(el, i) {
              //   el.remove();
              // });
            }});
          }});
          //==//
          //EE          
          TweenMax.to(document.querySelectorAll('h2.ee .start'), 1.2, {x : 0,ease: Back.easeOut.config(1), delay : h2Delay, force3D: false});
          TweenMax.to('h2.ee .l2', 0.3, {x:(dobbleTitle ? '-60%':'-170%'),ease: Power1.easeOut, delay : h2Delay, force3D: false});
          TweenMax.to('h2.ee .l3', 0.4, {x:(dobbleTitle ? '-110%':'-230%'),ease: Power1.easeOut, delay : h2Delay, force3D: false});
          TweenMax.to('h2.ee .l4', 0.5, {x:(dobbleTitle ? '-155%':'-285%'),ease: Power1.easeOut, delay : h2Delay, force3D: false});
          TweenMax.to('h2.ee .l5', 0.6, {x:(dobbleTitle ? '-195%':'-335%'),ease: Power1.easeOut, delay : h2Delay, force3D: false, onComplete : function(){                                    
            TweenMax.to('h2.ee .l3', 0.6, {x:'0%',ease: Power1.easeIn, force3D: false});
            TweenMax.to('h2.ee .l4', 0.5, {x:'0%',ease: Power1.easeIn, force3D: false});
            TweenMax.to('h2.ee .l5', 0.4, {x:'0%',ease: Power1.easeIn, force3D: false});
            TweenMax.to('h2.ee .l2', 0.7, {x:'0%',ease: Power1.easeIn, force3D: false, onComplete : function(){              
              TweenMax.set('h2.ee .l1', {overflow : 'visible'});
              TweenMax.to('h2.ee .show-more span', 0.5, {y : '0%', delay : 0.1, force3D: false});
              TweenMax.set(document.querySelectorAll('h2.ee .l2, h2.ee .l3, h2.ee .l4, h2.ee .l5, h2.ee .bg'), {visibility : 'hidden'});
              // document.querySelectorAll('h2.ee .l2, h2.ee .l3, h2.ee .l4, h2.ee .l5, h2.ee .bg').forEach( function(el, i) {
              //   el.remove();
              // });
            }});
          }});
          //==//
          //II
          TweenMax.to(document.querySelectorAll('h2.ii .start'), 1.2, {x : 0,ease: Back.easeOut.config(1), delay : h2Delay, force3D: false});
          TweenMax.to('h2.ii .l2', 0.3, {x:(dobbleTitle ? '15%' : '90%'),ease: Power1.easeOut, delay : h2Delay, force3D: false});
          TweenMax.to('h2.ii .l3', 0.4, {x:(dobbleTitle ? '70%' : '158%'),ease: Power1.easeOut, delay : h2Delay, force3D: false});
          TweenMax.to('h2.ii .l4', 0.5, {x:(dobbleTitle ? '117%' : '220%'),ease: Power1.easeOut, delay : h2Delay, force3D: false});
          TweenMax.to('h2.ii .l5', 0.6, {x:(dobbleTitle ? '157%' : '270%'),ease: Power1.easeOut, delay : h2Delay, force3D: false, onComplete : function(){            
            TweenMax.to('h2.ii .l3', 0.6, {x:'0%',ease: Power1.easeIn, force3D: false});
            TweenMax.to('h2.ii .l4', 0.5, {x:'0%',ease: Power1.easeIn, force3D: false});
            TweenMax.to('h2.ii .l5', 0.4, {x:'0%',ease: Power1.easeIn, force3D: false});
            TweenMax.to('h2.ii .l2', 0.7, {x:'0%',ease: Power1.easeIn, force3D: false, onComplete : function(){              
              TweenMax.set('h2.ii .l1', {overflow : 'visible'});
              TweenMax.to('h2.ii .show-more span', 0.5, {y : '0%', delay : 0.1, force3D: false});              
              TweenMax.set(document.querySelectorAll('h2.ii .l2, h2.ii .l3, h2.ii .l4, h2.ii .l5, h2.ii .bg'), {visibility : 'hidden'});
              app.sliderTransition = false;
                // document.querySelectorAll('h2.ii .l2, h2.ii .l3, h2.ii .l4, h2.ii .l5, h2.ii .bg').forEach( function(el, i) {
                //   el.remove();
                // });                              
            }});
          }});
          //==//
        }}, 'uno');


      }
      
    },
    serviceDetails : function(e, name, nav){
      var app = this;
      var currentTarget = e.currentTarget;
      var dobbleTitle = window.innerWidth <= 768;
      if((app.servicesSlider && !nav) || app.sliderTransition || app.servicesStartAnimation || app.currentSlide == name)return false;
      app.sliderTransition = true;      
      // RIP Slider 
      if(!app.servicesSlider){
        app.$store.commit('servicesSlider', true);        
        app.currentSlide = name;
        // Slider Init //
        TweenMax.set('.bg__top, h1', {zIndex : 0, delay : 0.3});
        var openSlide = new TimelineMax({onComplete : function(){          
          app.$store.commit('navigationType', {state : 'slider', current : name});

          TweenMax.to('#cursor-svg', 0.6, {rotation : 45});
          TweenMax.to('.cursor__close', 0.6, {width : function(i, el){            
            var w = el.querySelector('span').clientWidth;
            return w;
          }});
          TweenMax.set(document.querySelectorAll('.show-more span'), {opacity : 0});
          TweenMax.set('h2.mm .l1', {left : dobbleTitle ? '42px' : '80px'});
          TweenMax.set('h2.ee .l1', {left : dobbleTitle ? '42px' : '75px', right : 'auto'});
          TweenMax.set('h2.ii .l1', {left : dobbleTitle ? '42px' : '75px', x : 0});
          TweenMax.set(document.querySelectorAll('h2 .l1 .end'), {width : function(i, el){
            var w = 100 / (window.window.innerWidth / el.querySelector('div').clientWidth);
            return w+'vw'
          }});

          setTimeout(function(){
            TweenMax.set(document.querySelectorAll('#app-navigation li i, .scroll-down .scroll-down__line i'), {backgroundColor : '#f8f8eb'});
            TweenMax.set(document.querySelectorAll('#app-navigation li .item__name'), {color : '#f8f8eb'});
            TweenMax.set(document.querySelectorAll('#app-navigation li .item__name span'), {y : '100%'});
            var menuSlide = new TimelineMax();
            menuSlide.staggerFromTo(document.querySelectorAll('#app-navigation li i'), 0.2, {x : 83}, {x : 0}, 0.09, 'uno')
            .staggerFromTo(document.querySelectorAll('#app-navigation li i'), 0.2, {width : 83}, {cycle:{
              width : function(i, el){            
                return el.parentNode.classList.contains('current') ? 83 : 1;
              }
            }}, 0.09, '-=0.47')
            .to(document.querySelectorAll('#app-navigation li .item__name'), 0.2, {width : function(i, el){
              return el.querySelector('span').clientWidth;
            }, x : function(i, el){
              return el.querySelector('span').clientWidth + 16;
            }}, 'uno')
            .to(document.querySelectorAll('#app-navigation li .item__name span'), 0.2, {y : '0%'});
          }, 100);

          
          var slideRender = new TimelineMax();
          slideRender.set('h2.'+name+' .fill', {top : dobbleTitle ? '-0.3vw' : 0})
          slideRender.set('h2.'+name+' .l1', {top :  0})
          .to('h2.'+name+' .fill', 0.7, {height: dobbleTitle ? '24vw' : '7.8vw', ease: Power2.easeIn, force3D : true}, 'uno')
          .set('h2.'+name+' .stroke', {opacity : 0.15})
          .set('h2.'+name+' .fill, h2.'+name+' .l1', {clearProps : 'top'})
          .to('h2.'+name+' .fill', 0.7, {height: '0vw', ease: Power2.easeOut, force3D : true})
          .set('.slider.'+name, {visibility : 'visible'})
          .staggerFrom(document.querySelectorAll('.slider.'+name+' h3 div'), 0.7, {opacity:0, rotationX:-80, force3D:true, transformOrigin:"top center -50", ease: Power4.easeOut}, 0.02, '-=0.2')
          .set(document.querySelectorAll('.slider.'+name+' .slider__list_description span'), {visibility : 'visible', onComplete : function(){
            app.sliderTransition = false;
            if(name == 'ii'){
              app.prevNextText = 'prev service';
              TweenMax.set('.slider__scroll-down .slider__scroll-down_text', {x : -42});
              TweenMax.set('.slider__scroll-down .slider__scroll-down_line', {left : '75%'});
              prevNextLine = new TimelineMax({repeat : -1}).fromTo('.slider__scroll-down .slider__scroll-down_line i' , 0.8, {x : '-100%'}, {x : '0%', ease: Power4.easeIn})
              .to('.slider__scroll-down .slider__scroll-down_line i' , 0.8, {x : '100%', ease: Power4.easeIn});
              TweenMax.to('.slider__scroll-down_text span', 0.8, {y : '0%', ease: Power4.easeIn});
            }else{
              app.prevNextText = 'next service';
              prevNextLine = new TimelineMax({repeat : -1}).fromTo('.slider__scroll-down .slider__scroll-down_line i' , 0.8, {x : '100%'}, {x : '0%', ease: Power4.easeIn})
              .to('.slider__scroll-down .slider__scroll-down_line i' , 0.8, {x : '-100%', ease: Power4.easeIn});              
              TweenMax.to('.slider__scroll-down_text span', 0.8, {y : '0%', ease: Power4.easeIn});
            }
            if(dobbleTitle && app.$store.state.touchevent){
              TweenMax.to('.slider__close_mobile i:first-child', 0.7, {height : '40px', ease: Power4.easeIn});
              TweenMax.to('.slider__close_mobile i:last-child', 0.7, {width : '40px', ease: Power4.easeIn});
            }
          }}, '-=0.25')
          .staggerFrom(document.querySelectorAll('.slider.'+name+' .slider__list_description span'), 0.3, {opacity:0, rotationX:-160, force3D:true, transformOrigin:"top center -20", ease: Power4.easeOut}, 0.05, '-=0.3');
          
          
        }});
        if(!app.h2Hover){
          TweenMax.to('#cursor-svg .state-0', 0.4, {morphSVG: '#cursor-svg .state-2', ease: Power4.easeIn});
          TweenMax.to('#cursor-svg', 0.4, {x : -10, y : -10, ease: Power4.easeIn});
          openSlide.to(currentTarget.querySelector('.show-more span'), 0.7, {opacity : 0, force3D: false}, 'uno')
          if(name == 'mm')TweenMax.to(currentTarget.querySelector('.l1'), 0.7, {left : '1vw', ease: Power2.easeInOut, force3D: false});
          if(name == 'ee')TweenMax.to(currentTarget.querySelector('.l1'), 0.7, {right : function(){
            var r;
            if(dobbleTitle){
              if(app.mobile){
                r = '0px';
              }else{
                r = '40px'
              }
            }else{
              r = '70px'
            }
            return r;
          }, ease: Power2.easeInOut, force3D: false});
          if(name == 'ii' && dobbleTitle)TweenMax.to(currentTarget.querySelector('.l1'), 0.7, {left : '1vw', ease: Power2.easeInOut, force3D: false});
          openSlide.to(currentTarget.querySelectorAll('.end'), 0.7, {width : function(i, el){
            var w = 100 / (window.window.innerWidth / el.querySelector('div').clientWidth);
            return w+'vw'
          }, ease: Power4.easeInOut, force3D: false}, 'uno');
        }
        openSlide.to(document.querySelectorAll('h2 .fill'), 0.7, {height: '0vw', ease: Power2.easeIn}, 'dos')
        .set(document.querySelectorAll('h2'), {bottom : app.mobile ? '42px' : '144px', y : '0'})        
        .to(document.querySelectorAll('#app-logo .st2'), 0.4, {fill : '#f0f0d9', delay : 0.5}, 'dos')
        .to('.bg__bottom', 0.7, {height : '100%', ease: Power2.easeIn}, 'dos')
        .staggerTo(document.querySelectorAll('#app-navigation li i'), 0.1, {width : 83}, 0.05, 'dos')
        .staggerTo(document.querySelectorAll('#app-navigation li i'), 0.1, {x : 83}, 0.05, '-=0.77');
      }else{    
      // LIVE Slider
        // Navigation        
        TweenMax.to('#app-navigation li.current i', 0.7, {width : 1, ease: Power4.easeInOut});
        TweenMax.to('#app-navigation li[data-name="'+name+'"] .item__name', 0.7, {x : function(i, el){
          return el.querySelector('span').clientWidth + 16;
        }, ease: Power4.easeInOut});
        TweenMax.to('#app-navigation li[data-name="'+name+'"] i', 0.7, {width : 83, ease: Power4.easeInOut});
        app.$store.commit('navigationType', {state : 'slider', current : name});
        //TweenMax.to('.cursor', 0.7, {rotation : 45, ease: Power4.easeInOut});


        if(name == 'ii'){                    
          prevNextLine.addCallback(function(){
            prevNextLine.stop();
            prevNextLine = new TimelineMax({repeat : -1}).fromTo('.slider__scroll-down .slider__scroll-down_line i' , 0.8, {x : '-100%'}, {x : '0%', ease: Power4.easeIn})
            .to('.slider__scroll-down .slider__scroll-down_line i' , 0.8, {x : '100%', ease: Power4.easeIn});            
          });
          TweenMax.to('.slider__scroll-down .slider__scroll-down_text span', 0.8, {y : '100%', ease: Power4.easeIn, onComplete : function(){
            app.prevNextText = 'prev service';
            TweenMax.to('.slider__scroll-down .slider__scroll-down_line', 0.7, {left : '75%', ease: Power4.easeInOut, onComplete : function(){
              TweenMax.to('.slider__scroll-down_text span', 0.8, {y : '0%', ease: Power4.easeIn});
            }});
            TweenMax.set('.slider__scroll-down .slider__scroll-down_text', {x : -42});
          }});
        }else{
          if(app.currentSlide == 'ii'){
            prevNextLine.addCallback(function(){            
              prevNextLine.stop();
              prevNextLine = new TimelineMax({repeat : -1}).fromTo('.slider__scroll-down .slider__scroll-down_line i' , 0.8, {x : '100%'}, {x : '0%', ease: Power4.easeIn})
              .to('.slider__scroll-down .slider__scroll-down_line i' , 0.8, {x : '-100%', ease: Power4.easeIn});            
            });
            TweenMax.to('.slider__scroll-down .slider__scroll-down_text span', 0.8, {y : '100%', ease: Power4.easeIn, onComplete : function(){
              app.prevNextText = 'next service';
              TweenMax.to('.slider__scroll-down .slider__scroll-down_line', 0.7, {left : '0%', ease: Power4.easeInOut, onComplete : function(){
                TweenMax.to('.slider__scroll-down_text span', 0.8, {y : '0%', ease: Power4.easeIn});
              }});
              TweenMax.set('.slider__scroll-down .slider__scroll-down_text', {x : 0});  
            }});
          }         
          
        }

        // Transition
        var transitionSlider = new TimelineMax({onComplete : function(){
          app.sliderTransition = false;
          app.currentSlide = name;          
          app.$store.commit('scroll', true);
        }});
        transitionSlider.to(document.querySelectorAll('.slider'), 0.4, {opacity : 0}, 'uno')
        .set(document.querySelectorAll('.slider, .slider__list_description span'), {visibility : 'hidden', clearProps : 'opacity'})
        .to('h2.'+app.currentSlide+' .stroke', 0.7, {height: '0vw', ease: Power2.easeIn}, 'uno')
        .set('h2.'+app.currentSlide+' .stroke', {clearProps: 'all'})
        transitionSlider.set('h2.'+name+' .fill', {top : dobbleTitle ? '-0.3vw' : 0})
        transitionSlider.set('h2.'+name+' .l1', {top :  0})
        .to('h2.'+name+' .fill', 0.7, {height:  dobbleTitle ? '24vw' : '7.8vw', ease: Power2.easeIn})
        .set('h2.'+name+' .stroke', {opacity : 0.15})
        .set('h2.'+name+' .fill, h2.'+name+' .l1', {clearProps : 'top'})
        .to('h2.'+name+' .fill', 0.7, {height: '0vw', ease: Power2.easeOut})
        .set('.slider.'+name, {visibility : 'visible'})
        .staggerFrom(document.querySelectorAll('.slider.'+name+' h3 div'), 0.7, {opacity:0, rotationX:-80, force3D:true, transformOrigin:"top center -50", ease: Power4.easeOut}, 0.02, '-=0.2')
        .set(document.querySelectorAll('.slider.'+name+' .slider__list_description span'), {visibility : 'visible'}, '-=0.25')
        .staggerFrom(document.querySelectorAll('.slider.'+name+' .slider__list_description span'), 0.3, {opacity:0, rotationX:-160, force3D:true, transformOrigin:"top center -20", ease: Power4.easeOut}, 0.05, '-=0.3');
      }          
    },
    nextPrevSlide : function(e){
      var app = this;
      var name = app.currentSlide;
      switch (name) {
        case 'mm':
          app.$store.commit('scroll', false);
          document.querySelector('#app-navigation [data-name="ee"]').click();
          break;
        case 'ee':
          app.$store.commit('scroll', false);
          document.querySelector('#app-navigation [data-name="ii"]').click();                  
          break;
        case 'ii':
          app.$store.commit('scroll', false);
          document.querySelector('#app-navigation [data-name="ee"]').click();
        break;
        default:
          // statements_def
          break;
      }
    }
  },
  watch : {
    appStart : function(val){
      var app = this;
      var h2Delay = 0.7;
      var dobbleTitle = window.innerWidth <= 768;      
      if(val){                
        // Background animation //
        TweenMax.to(document.querySelectorAll('.app-social .st0'), 0.4, {fill : '#f8f8eb'});
        TweenMax.to(document.querySelectorAll('#app-navigation li i, .scroll-down .scroll-down__line i'), 0.4, {backgroundColor : '#f8f8eb'});
        TweenMax.to(document.querySelectorAll('#app-navigation li .item__name, .start-project__text, .scroll-down__text'), 0.4, {color : '#f8f8eb'});
        TweenMax.to('.bg__right', 0.7, {width : app.mobile ? '84px' : '160px', ease: Power4.easeOut, delay : 1.5});
        TweenMax.set('.bg__bottom', {width : '100%'});
        TweenMax.to('.bg__bottom', 0.7, {height : dobbleTitle ? '70%' : '63%', ease: Power4.easeOut, delay : 1.5, onComplete : function(){
          TweenMax.set('.bg__top, h1', {visibility : 'visible'});
          // H1 Animation //
          TweenMax.fromTo('h1 .l1 span', 1.2, {y:'-130%'}, {y:'0%',ease: Back.easeOut.config(dobbleTitle ? 1.1 : 1.5), delay : 0});
          TweenMax.to('h1 .l2', 0.3, {y:(dobbleTitle ? '-15%' : '-15%'),ease: Power1.easeOut, delay : 0});
          TweenMax.to('h1 .l3', 0.4, {y:(dobbleTitle ? '-25%' : '-30%'),ease: Power1.easeOut, delay : 0});
          TweenMax.to('h1 .l4', 0.5, {y:(dobbleTitle ? '-33%' : '-45%'),ease: Power1.easeOut, delay : 0});
          TweenMax.to('h1 .l5', 0.6, {y:(dobbleTitle ? '-39%' : '-45%'),ease: Power1.easeOut, delay : 0, onComplete : function(){            
            app.$store.commit('loader', false);
            TweenMax.to('h1 .l3', 0.6, {y:'0%',ease: Power1.easeIn});
            TweenMax.to('h1 .l4', 0.5, {y:'0%',ease: Power1.easeIn});
            TweenMax.to('h1 .l5', 0.4, {y:'0%',ease: Power1.easeIn});
            TweenMax.to('h1 .l2', 0.7, {y:'0%',ease: Power1.easeIn, onComplete : function(){
              
            }});
          }});
          //==//

          TweenMax.set(document.querySelectorAll('h2'), {visibility : 'visible'})          
          // H2 Animation //          
          //MM
          TweenMax.to(document.querySelectorAll('h2.mm .start'), 1.2, {x : 0,ease: Back.easeOut.config(1), delay : h2Delay, force3D: false});
          TweenMax.to('h2.mm .l2', 0.3, {x:(dobbleTitle ? '65%':'145%'),ease: Power1.easeOut, delay : h2Delay,  force3D: false});
          TweenMax.to('h2.mm .l3', 0.4, {x:(dobbleTitle ? '115%':'185%'),ease: Power1.easeOut, delay : h2Delay,  force3D: false});
          TweenMax.to('h2.mm .l4', 0.5, {x:(dobbleTitle ? '155%':'220%'),ease: Power1.easeOut, delay : h2Delay,  force3D: false});
          TweenMax.to('h2.mm .l5', 0.6, {x:(dobbleTitle ? '185%':'253%'),ease: Power1.easeOut, delay : h2Delay,  force3D: false, onComplete : function(){
            TweenMax.to('h2.mm .l3', 0.6, {x:'0%',ease: Power1.easeIn,  force3D: false});
            TweenMax.to('h2.mm .l4', 0.5, {x:'0%',ease: Power1.easeIn,  force3D: false});
            TweenMax.to('h2.mm .l5', 0.4, {x:'0%',ease: Power1.easeIn,  force3D: false});
            TweenMax.to('h2.mm .l2', 0.7, {x:'0%',ease: Power1.easeIn,  force3D: false, onComplete : function(){
              TweenMax.set('h2.mm .l1', {overflow : 'visible'});
              TweenMax.to('h2.mm .show-more span', 0.5, {y : '0%', delay : 0.1,  force3D: false});
              TweenMax.set(document.querySelectorAll('h2.mm .l2, h2.mm .l3, h2.mm .l4, h2.mm .l5, h2.mm .bg'), {visibility : 'hidden'});
              // document.querySelectorAll('h2.mm .l2, h2.mm .l3, h2.mm .l4, h2.mm .l5, h2.mm .bg').forEach( function(el, i) {
              //   el.remove();
              // });
            }});
          }});
          //==//
          //EE                    
          TweenMax.to(document.querySelectorAll('h2.ee .start'), 1.2, {x : 0,ease: Back.easeOut.config(1), delay : h2Delay, force3D: false});
          TweenMax.to('h2.ee .l2', 0.3, {x:(dobbleTitle ? '-60%':'-170%'),ease: Power1.easeOut, delay : h2Delay, force3D: false});
          TweenMax.to('h2.ee .l3', 0.4, {x:(dobbleTitle ? '-110%':'-230%'),ease: Power1.easeOut, delay : h2Delay, force3D: false});
          TweenMax.to('h2.ee .l4', 0.5, {x:(dobbleTitle ? '-155%':'-285%'),ease: Power1.easeOut, delay : h2Delay, force3D: false});
          TweenMax.to('h2.ee .l5', 0.6, {x:(dobbleTitle ? '-195%':'-335%'),ease: Power1.easeOut, delay : h2Delay, force3D: false, onComplete : function(){
            TweenMax.to('h2.ee .l3', 0.6, {x:'0%',ease: Power1.easeIn, force3D: false});
            TweenMax.to('h2.ee .l4', 0.5, {x:'0%',ease: Power1.easeIn, force3D: false});
            TweenMax.to('h2.ee .l5', 0.4, {x:'0%',ease: Power1.easeIn, force3D: false});
            TweenMax.to('h2.ee .l2', 0.7, {x:'0%',ease: Power1.easeIn, force3D: false, onComplete : function(){              
              TweenMax.set('h2.ee .l1', {overflow : 'visible'});
              TweenMax.to('h2.ee .show-more span', 0.5, {y : '0%', delay : 0.1, force3D: false});
              TweenMax.set(document.querySelectorAll('h2.ee .l2, h2.ee .l3, h2.ee .l4, h2.ee .l5, h2.ee .bg'), {visibility : 'hidden'});
              // document.querySelectorAll('h2.ee .l2, h2.ee .l3, h2.ee .l4, h2.ee .l5, h2.ee .bg').forEach( function(el, i) {
              //   el.remove();
              // });
            }});
          }});
          //==//
          //II
          TweenMax.to(document.querySelectorAll('h2.ii .start'), 1.2, {x : 0,ease: Back.easeOut.config(1), delay : h2Delay, force3D: false});
          TweenMax.to('h2.ii .l2', 0.3, {x:(dobbleTitle ? '15%' : '90%'),ease: Power1.easeOut, delay : h2Delay, force3D: false});
          TweenMax.to('h2.ii .l3', 0.4, {x:(dobbleTitle ? '70%' : '158%'),ease: Power1.easeOut, delay : h2Delay, force3D: false});
          TweenMax.to('h2.ii .l4', 0.5, {x:(dobbleTitle ? '117%' : '220%'),ease: Power1.easeOut, delay : h2Delay, force3D: false});
          TweenMax.to('h2.ii .l5', 0.6, {x:(dobbleTitle ? '157%' : '270%'),ease: Power1.easeOut, delay : h2Delay, force3D: false, onComplete : function(){            
            TweenMax.to('h2.ii .l3', 0.6, {x:'0%',ease: Power1.easeIn, force3D: false});
            TweenMax.to('h2.ii .l4', 0.5, {x:'0%',ease: Power1.easeIn, force3D: false});
            TweenMax.to('h2.ii .l5', 0.4, {x:'0%',ease: Power1.easeIn, force3D: false});
            TweenMax.to('h2.ii .l2', 0.7, {x:'0%',ease: Power1.easeIn, force3D: false, onComplete : function(){
              TweenMax.set('h2.ii .l1', {overflow : 'visible'});
              TweenMax.to('h2.ii .show-more span', 0.5, {y : '0%', delay : 0.1, force3D: false});              
              TweenMax.set(document.querySelectorAll('h2.ii .l2, h2.ii .l3, h2.ii .l4, h2.ii .l5, h2.ii .bg'), {visibility : 'hidden'});
              // document.querySelectorAll('h2.ii .l2, h2.ii .l3, h2.ii .l4, h2.ii .l5, h2.ii .bg').forEach( function(el, i) {
              //   el.remove();
              // });              
              scrollDownTL = new TimelineMax({repeat : -1}).fromTo('.scroll-down .scroll-down__line i' , 0.8, {x : '100%'}, {x : '0%', ease: Power4.easeIn})              
              .to('.scroll-down .scroll-down__line i' , 0.8, {x : '-100%', ease: Power4.easeIn})
              .addCallback(function(){                
                if(app.$store.state.scrollDownHover || (app.$store.state.servicesSlider && app.mobile))scrollDownTL.pause();
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
                  app.$store.state.services.servicesStartAnimation = false;
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
                new TimelineMax().set('.cursor', {scale : 0, opacity : 1})
                .set('#cursor-svg .state-0', {morphSVG: '#cursor-svg .state-1'})                
                .to('.cursor', 0.7, {scale: 1, ease: Power3.easeIn})
              }});
            }});
          }});
          //==//
        }});
        //==//
      }
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
    screen : function(screen){
      var app = this;
      if(app.servicesStartAnimation)return false;
      switch (screen) {
        case 'descktop':
          TweenMax.to('#app-logo .st2', 0.4, {opacity : 1});
          if(app.servicesSlider){
            TweenMax.set(document.querySelectorAll('h2'), {'bottom' : '144px'});
            TweenMax.set(document.querySelectorAll('h2 .l1'), {'left' : '75px'});
            TweenMax.set(document.querySelectorAll('h2 .l1 .end'), {width : function(i, el){
              var w = 100 / (window.window.innerWidth / el.querySelector('div').clientWidth);
              return w+'vw'
            }});
          }else{
            TweenMax.set('.bg__bottom', {height : '63%'});
            TweenMax.set('.bg__right', {width : '160px'});
            TweenMax.set(document.querySelectorAll('h2 .l1'), {clearProps : 'all'})
            TweenMax.set(document.querySelectorAll('h2 .l1'), {overflow : 'visible'})
          }          
          break;
        case 'tablet':
          TweenMax.to('#app-logo .st2', 0.4, {opacity : 1});
          if(app.servicesSlider){
            TweenMax.set(document.querySelectorAll('h2'), {'bottom' : '144px'});
            TweenMax.set(document.querySelectorAll('h2 .l1'), {'left' : '75px'});
            TweenMax.set(document.querySelectorAll('h2 .l1 .end'), {width : function(i, el){
              var w = 100 / (window.window.innerWidth / el.querySelector('div').clientWidth);
              return w+'vw'
            }});
          }else{
            TweenMax.set('.bg__bottom', {height : '70%'});
            TweenMax.set('.bg__right', {width : '160px'});  
            TweenMax.set(document.querySelectorAll('h2 .l1'), {clearProps : 'all'})
            TweenMax.set(document.querySelectorAll('h2 .l1'), {overflow : 'visible'})
          }          
          break;
        case 'mobile':
          TweenMax.to('#app-logo .st2', 0.4, {opacity : 0});
          if(app.servicesSlider){
            TweenMax.set('.bg__right', {width : '84px'}); 
            TweenMax.set(document.querySelectorAll('h2 .l1'), {'left' : '42px'});
            TweenMax.set(document.querySelectorAll('h2'), {'bottom' : '42px'});
            TweenMax.set(document.querySelectorAll('h2 .l1 .end'), {width : function(i, el){
              var w = 100 / (window.window.innerWidth / el.querySelector('div').clientWidth);
              return w+'vw'
            }});
          }else{
            TweenMax.set('.bg__bottom', {height : '70%'});
            TweenMax.set('.bg__right', {width : '84px'}); 
            TweenMax.set(document.querySelectorAll('h2 .l1'), {clearProps : 'all'})
            TweenMax.set(document.querySelectorAll('h2 .l1'), {overflow : 'visible'})
          }          
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
.app.services {
  /*background-color: #f8f8eb;*/
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
  z-index: 3;
  visibility: hidden;
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
  font-family: "Futura Condensed Extra Italic";
  font-size: 9.4vw;
  line-height: 7.3vw;
  font-weight: 100;
  font-style: italic;
  text-transform: uppercase;   
  position: fixed;
  right: 160px;
  bottom: 63%; 
  letter-spacing: -0.5vw;
  z-index: 3;
  visibility: hidden;
}
h1 span {
  display: inline-block;  
  padding: 0px 0.7vw 0 0;
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
  font-family: "Futura Condensed Extra";
  font-size: 9.4vw;
  line-height: 7.8vw;
  font-weight: 800;
  font-style: italic;
  text-transform: uppercase;
  color: #f8f8eb;
  white-space: nowrap;    
  display: flex;
  width: 100vw;
  height: 7.8vw;
  visibility: hidden;
  cursor: pointer;  
  z-index: 2;
}
h2 .stroke {
  position: absolute;
  bottom: 0;
  color: #191919!important;
  text-shadow:-1px -1px 0 #f8f8eb, 1px -1px 0 #f8f8eb, -1px 1px 0 #f8f8eb, 1px 1px 0 #f8f8eb;
  opacity: 0;
  height: 7.8vw;
  width: 100%;
  overflow: hidden;
}
h2 .stroke__wrapper {
  position: absolute;
  left: 0;
  bottom: 0;
  transform: skew(-9deg);
}
h2 .stroke span {
  display: inline-block;
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
  z-index: 1;
  transform: skew(9deg);
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
h2 .row {
  display: inline-flex;
}
h2 .l1 {
  display: inline-flex;
  margin-top: 0;  
  position: relative;
  overflow: hidden;
  transform: skew(-9deg);
  height: 7.8vw;
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
h2 .l2 span:last-child {
  display: none;
}
h2 .l3 span:last-child {
  display: none;
}
h2 .l4 span:last-child {
  display: none;
}
h2 .l5 span:last-child {
  display: none;
}

h2.mm {
  position: fixed;
  justify-content: flex-start;  
  bottom: calc(63% - 7.3vw);
  /*padding-left: 11vw;*/
}
.mm h2.mm {
  z-index: 1;
}
h2.mm .stroke__wrapper {
  left: 80px;  
}
h2.mm .show-more {
  right: -60px;
  bottom: 3.1vw;
}
h2.mm .fill {  
  left: 0;
}
h2.mm .l1 {
  position: absolute;
  bottom: 0;
  left: 11vw;
  padding-left: 2vw;
  margin-left: -2vw;
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
  /*padding-right: calc(170px - 1vw);*/
  position: fixed;
  bottom: calc(63% - 14.4vw);
}
.ee h2.ee {
  z-index: 1;
}
h2.ee.next {
  bottom: 80px;
  transform: translateY(50%);
}
h2.ee .stroke__wrapper {  
  left: 75px;
}
h2.ee .show-more {
  left: -60px;
  bottom: 3.5vw;
}
h2.ee .fill {
  text-align: right;  
  right: 0;
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
  right: 160px;
}
h2.ee.next .l1 {
  right: 50%;
  transform: translateX(50%);
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
.ii h2.ii {
  z-index: 1;
}
h2.ii .stroke__wrapper {
  transform: translateX(0) skew(-9deg);
  left: 75px;
}
h2.ii .show-more {
  right: -60px;
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


.slider {  
  position: fixed;
  top: 50%;
  left: 143px;    
  z-index: 1;  
  transform: translateY(-50%);  
  color: #f0f0d9;
  visibility: hidden;
}
.slider.mm {
  width: 66vw;
}
.slider.ee {
  width: 66vw;
}
.slider.ii {
  width: 66vw;
}
.slider__list {
  margin: 0;
  padding: 0;
  list-style: none;
  color: #f0f0d9;  
}
.slider h3 {
  margin: 0 0 43px 0;
  padding: 0;
  font: bold 36px/46px 'Futura Bold';  
  letter-spacing: 1px;
  overflow: hidden;  
  /*font: bold 2.8vw/1 'Futura Bold';*/
}
.slider h3 span {
  display: inline-block;
  transform: translateY(110%);
}
.slider__list_description {
  margin: 0 0 -36px 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
}
.slider__list_description span {
  display: inline-block;
  background: url('~assets/icon_marker_y.svg') no-repeat left center / auto 11px;
  font: 500 14px/1 'Futura';  
  margin-right: 36px;
  margin-bottom: 26px;
  padding-left: 23px;
  letter-spacing: 0.5px;
  visibility: hidden;
  white-space: nowrap;
}

.slider__list_description li {
  font: 500 14px/1 'Futura';  
  margin-right: 36px;
  margin-bottom: 36px;
  display: inline-flex;
  align-items: center;
  letter-spacing: 0.5px;
  visibility: hidden;
  white-space: nowrap;
  /*background: url('/img/icon_marker_y.svg') no-repeat left center / auto 11px;*/
}
.slider__list_description li img {
  height: 11px;  
  margin-right: 15px;
}
.slider__close {
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;  
  z-index: 2;
}
.slider__close_mobile {
  position: absolute;
  top: calc(80px - 40px);
  left: calc(50% - 40px);  
  width: 80px;
  height: 80px;
  transform: rotate(45deg);
  z-index: 5;
}
.slider__close_mobile i:first-child {
  width: 6px;
  height: 0px;
  background-color: #f6bd00;  
  display: block;
  position: absolute;
  top: 50%;
  left: calc(50% - 3px);
  transform: translateY(-50%);
}
.slider__close_mobile i:last-child {
  width: 0px;
  height: 6px;
  background-color: #f6bd00;  
  display: block;
  position: absolute;
  left: 50%;
  top: calc(50% - 3px);
  transform: translateX(-50%);

}
.slider__scroll-down {
    display: none;
    align-items: center;
    position: fixed;
    right: 36px;
    bottom: 151px;
    transform: rotate(-90deg);
    transform-origin: right bottom;
    padding-left: 42px;
    z-index: 5;
    cursor: pointer;
  }
  .slider__scroll-down .slider__scroll-down_line {
    display: block;
    width: 30px;
    height: 7px;    
    position: absolute;
    top: 50%;    
    left: 0;
    overflow: hidden;
    transform: translateY(-12%);
  }
  .slider__scroll-down .slider__scroll-down_line i {
    display: block;
    width: 100%;
    height: 100%;
    background-color: #f8f8eb;
    transform: translate3d(100%, 0, 0);
    position: absolute;
    left: 0;
    top: 0;
  }
  .slider__scroll-down .slider__scroll-down_text {
    font: 500 14px/1.3 'Futura';
    color: #f8f8eb;
    display: inline-block;
    overflow: hidden;
    position: relative;
    top: 1px;
  }
  .slider__scroll-down .slider__scroll-down_text span {
    transform: translateY(100%);
    display: inline-block;
  }

@media screen and (max-width: 768px) {
  #app-services .bg__top {
    bottom: 70%;
  }
  h1 {
    font-size: 15.6vw;
    line-height: 11.9vw;
    bottom: 70%;
  }
  h1 i {
    display: block;
  }
  h1 span {
    padding: 0px 0.8vw 0 0;
    text-align: right;
  }
  h2 {
    font-size: 15.6vw;
    line-height: 12.3vw;
    height: 23.7vw;
  }
  h2 .fill {    
    height: 24vw;    
  }
  h2 .l1 {
    height: 24vw;
    flex-direction: column;
  }
  h2 .row.dos {
    margin-left: 2vw;
    margin-top: -0.7vw;
  }
  h2 span {
    margin-top: 0;
  }
  h2.mm {
    bottom: calc(70% - 23.6vw);
  }
  h2.ee {
    bottom: calc(70% - 46.6vw);
  }
  h2.ii {
    bottom: calc(70% - 69.8vw);
  }
  h2.mm .show-more,
  h2.ee .show-more,
  h2.ii .show-more {
    bottom: calc(11.8vw - 4px);
  }
  h2.mm .l2,
  h2.mm .l3,
  h2.mm .l4,
  h2.mm .l5 {    
    line-height: 11.8vw;
    left: 160px;
  }
  h2.ee .l2,
  h2.ee .l3,
  h2.ee .l4,
  h2.ee .l5 {    
    line-height: 11.8vw;
    bottom: auto;
    right: 160px;
    background-color: transparent;
  }
  h2.ii .l2,
  h2.ii .l3,
  h2.ii .l4,
  h2.ii .l5 {    
    line-height: 11.8vw;
    left: 160px;
    bottom: auto;
    background-color: transparent;
    padding-right: 0.7vw;
    transform: translateX(0%) skew(-9deg);
  }
  h2.ee .l2 span,
  h2.ee .l3 span,
  h2.ee .l4 span,
  h2.ee .l5 span {
    background-color: #191919;    
  }
  h2.ii .l2 span,
  h2.ii .l3 span,
  h2.ii .l4 span,
  h2.ii .l5 span {
    background-color: #191919;
    width: 80%;
  }
  h2 .l2 span:last-child {
    display: block;
    margin-left: 2vw;
  }
  h2 .l3 span:last-child {
    display: block;
    margin-left: 2vw;
  }
  h2 .l4 span:last-child {
    display: block;
    margin-left: 2vw;
  }
  h2 .l5 span:last-child {
    display: block;
    margin-left: 2vw;
  }
  h2 .l2 {
    display: inline-flex;
    flex-direction: column;
  }
  h2 .l3 {
    display: inline-flex;
    flex-direction: column;
  }
  h2 .l4 {
    display: inline-flex;
    flex-direction: column;
  }
  h2 .l5 {
    display: inline-flex;
    flex-direction: column;
  }
  h2.mm .bg {
    bottom: 0;
  }
  h2.mm .l1 {
    left: 160px;
  }
  h2.ii .l1 {
    left: 160px;
    transform: translateX(0%) skew(-9deg)

  }
  h2.ee .bg {
    height: 51%;
    top: 0;        
  }
  h2.ee .bg::before {
    content: "";
    width: 100%;
    height: 110%;
    background-color: #191919;
    position: absolute;
    bottom: -100%;
    left: 2vw;
  }
  h2.ii .bg {
    height: 51%;
    top: 0;
    width: 80%;
  }
  h2.ii .bg::before {
    content: "";
    width: 100%;
    height: 105%;
    background-color: #191919;
    position: absolute;
    bottom: -100%;
    left: 2vw;
  }
  h2 .stroke {    
    height: 25vw;    
  }
  h2 .stroke__wrapper {
    height: 24vw;
  }
  h2 .stroke span {
    display: block;
  }
  h2.mm .stroke span:last-child {
    margin-left: 2vw;
    margin-top: -0.5vw;
  }
  h2.ee .stroke span:last-child {
    margin-left: 2vw;
    margin-top: -0.5vw;
  }
  h2.ii .stroke span:last-child {
    margin-left: 2vw;
    margin-top: -0.5vw;
  }  
  .slider {
    left: 160px;    
    right: 160px;
  }
  .slider.mm {
    width: auto;
  }
  .slider.ee {
    width: auto;
  }
  .slider.ii {
    width: auto;
  }
}

@media screen and (max-width: 480px) {
  h1 {
    right: 84px;
  } 
  h2.mm .stroke__wrapper {
    left: 42px;
    bottom: 0vw;
  }
  h2.ee .stroke__wrapper {
    left: 42px;
    bottom: 0vw;
  }
  h2.ii .stroke__wrapper {
    transform: translateX(0) skew(-9deg);
    left: 42px;
    bottom: 0vw;
  }
  h2.mm .l1 {
    left: 84px;
  }
  h2.ee .l1 {
    right: 84px;
  }
  h2.ii .l1 {
    left: 84px;
    transform: translateX(0%) skew(-9deg);
  }   
  h2.mm .l2,
  h2.mm .l3,
  h2.mm .l4,
  h2.mm .l5 {          
    left: 84px;
  }
  h2.ee .l2,
  h2.ee .l3,
  h2.ee .l4,
  h2.ee .l5 {          
    right: 84px;      
  }
  h2.ii .l2,
  h2.ii .l3,
  h2.ii .l4,
  h2.ii .l5 {          
    left: 84px;      
  }
  .slider__scroll-down {
    display: flex;    
  }
  .slider {
    left: 42px;
    right: 42px;
  }
  .slider h3[data-v-c0f5c252] {
    margin: 0 0 43px 0;
    padding: 0;
    font: bold 24px/30px 'Futura Bold';
    letter-spacing: 1px;
    overflow: hidden; 
  }
  .slider__scroll-down {
    z-index: 0;
  }
  .slider__scroll-down.active {
    z-index: 2;
  }
  .slider__list_description span {    
    margin-right: 26px;
    margin-bottom: 12px;
    padding-left: 18px;
  }
  .slider__list_description {
    margin: 0 0 -36px 42px;    
  }  
  .slider__close_mobile {    
    top: calc(42px - 40px);
    left: calc(50% - 40px);
  }
}
</style>

