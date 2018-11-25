<template>
  <div class="container" id="app-loader">
    <div class="wrapper">
      <div class="loader">
      <svg version="1.1" id="eyes" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
         width="160px" height="100px" viewBox="0 0 160 100" style="enable-background:new 0 0 160 100;" xml:space="preserve">
      <style type="text/css">
        #eyes .st0{fill:#EFEFD8;}
        #eyes .st1{fill:#181919;}
        #eyes .st2{fill:#FFFFFF;}
        .rt-15, .rb-15, .lt-15, .lb-15,
        .rt-30, .rb-30, .lt-30, .lb-30,
        .rt-50, .rb-50, .lt-50, .lb-50, .rp-50, .lp-50,
        .rt-70, .rb-70, .lt-70, .lb-70, .rp-70, .lp-70,
        .rt-100, .rb-100, .lt-100, .lb-100, .rp-100, .lp-100, .lg-100, .rg-100,
        .lp-120, .rp-120, .rg-120 {
          visibility: hidden;
        }
      </style>
      <path class="st0" d="M122,0c-21,0-38,22.4-38,50s17,50,38,50s38-22.4,38-50S143,0,122,0L122,0z"/>

      <!-- RIGHT PUPIL -->
      <path class="st1 rp-0" d="M136,58.6c-4.1,0-7.5,4.5-7.5,10s3.4,10,7.5,10s7.5-4.5,7.5-10S140.1,58.6,136,58.6z"/>
      <path class="st1 rp-50" d="M128.5,48.6c-8.3,0-15,9-15,20s6.7,20,15,20s15-9,15-20S136.7,48.6,128.5,48.6z"/>
      <path class="st1 rp-100" d="M121.6,30c-8.3,0-15,9-15,20s6.7,20,15,20s15-9,15-20S129.9,30,121.6,30z"/>
      <path class="st1 rp-120" d="M111,22.5c-11.4,0-20.7,12.3-20.7,27.5s9.2,27.5,20.7,27.5s20.7-12.3,20.7-27.5S122.4,22.5,111,22.5z"/>
      <!-- / -->

      <path class="st0" d="M38.3,0c-21,0-38,22.4-38,50s17,50,38,50s38-22.4,38-50S59.3,0,38.3,0L38.3,0z"/>

      <!-- LEFT PUPIL -->
      <path class="st1 lp-0" d="M52.5,58.6c-4.1,0-7.5,4.5-7.5,10s3.4,10,7.5,10s7.5-4.5,7.5-10S56.7,58.6,52.5,58.6z"/>
      <path class="st1 lp-50" d="M45.2,48.6c-8.3,0-15,9-15,20s6.7,20,15,20s15-9,15-20S53.5,48.6,45.2,48.6z"/>
      <path class="st1 lp-100" d="M38.4,30c-8.3,0-15,9-15,20s6.7,20,15,20s15-9,15-20S46.7,30,38.4,30z"/>
      <path class="st1 lp-120" d="M62.1,44c-3.5,0-6.3,2.7-6.3,6s2.8,6,6.3,6c3.5,0,6.3-2.7,6.3-6S65.6,44,62.1,44z"/>

      <!-- / -->

      <!-- LEFT GLARE -->
      <ellipse class="st2 lg-0" cx="53.3" cy="70.2" rx="3" ry="4"/>
      <ellipse class="st2 lg-100" cx="46.5" cy="51.6" rx="3" ry="4"/>

      <!-- RIGHT GLARE -->
      <ellipse class="st2 rg-0" cx="136.4" cy="70.2" rx="3" ry="4"/>
      <ellipse class="st2 rg-100" cx="129.5" cy="51.6" rx="3" ry="4"/>
      <polygon class="st2 rg-120" points="106.9,34.1 92.8,51.6 101.8,49.5 97.7,62.2 112.1,43.7 103.4,45.4 "/>
      <g>
        
        <!-- RIGHT TOP -->
        <path class="st1 rt-0" d="M160,50c0-27.6-17-50-38-50S84,22.4,84,50c0,3.4,0.3,6.8,0.8,10c0,0-0.8,8,37.2,8s37.2-8,37.2-8 C159.7,56.8,160,53.4,160,50z"/>
        <path class="st1 rt-15" d="M160,50c0-27.6-17-50-38-50S84,22.4,84,50c0,3.4,0.3,6.8,0.8,10c0,0-0.8,8,37.2,8s37.2-8,37.2-8 C159.7,56.8,160,53.4,160,50z"/>
        <path class="st1 rt-30" d="M160,50c0-27.6-17-50-38-50S84,22.4,84,50c0,3.4,0.3,6.8,0.8,10c0,0-0.8,4,37.2,4s37.2-4,37.2-4 C159.7,56.8,160,53.4,160,50z"/>
        <path class="st1 rt-50" d="M160,50c0-27.6-17-50-38-50S84,22.4,84,50c0,3.4,0.3,6.8,0.8,10c0,0-0.8-25.2,37.2-25.2S159.2,60,159.2,60 C159.7,56.8,160,53.4,160,50z"/>
        <path class="st1 rt-70" d="M160,50c0-27.6-17-50-38-50S84,22.4,84,50c0,3.4,0.3,6.8,0.8,10c0,0-0.8-37.3,37.2-37.3S159.2,60,159.2,60 C159.7,56.8,160,53.4,160,50z"/>
        <path class="st0 rt-100" d="M160,50c0-27.6-17-50-38-50S84,22.4,84,50c0,3.4,0.3,6.8,0.8,10c0,0-0.8-60,37.2-60s37.2,60,37.2,60 C159.7,56.8,160,53.4,160,50z"/>

        <!-- / -->

        <!-- LEFT TOP -->
        <path class="st1 lt-0" d="M76.3,50c0-27.6-17-50-38-50s-38,22.4-38,50c0,3.4,0.3,6.8,0.8,10c0,0-0.8,8,37.2,8s37.2-8,37.2-8 C76,56.8,76.3,53.4,76.3,50z"/>
        <path class="st1 lt-15" d="M76.3,50c0-27.6-17-50-38-50s-38,22.4-38,50c0,3.4,0.3,6.8,0.8,10c0,0-0.8,8,37.2,8s37.2-8,37.2-8 C76,56.8,76.3,53.4,76.3,50z"/>
        <path class="st1 lt-30" d="M76.3,50c0-27.6-17-50-38-50s-38,22.4-38,50c0,3.4,0.3,6.8,0.8,10c0,0-0.8,4,37.2,4s37.2-4,37.2-4 C76,56.8,76.3,53.4,76.3,50z"/>
        <path class="st1 lt-50" d="M76.3,50c0-27.6-17-50-38-50s-38,22.4-38,50c0,3.4,0.3,6.8,0.8,10c0,0-0.8-25.2,37.2-25.2S75.5,60,75.5,60 C76,56.8,76.3,53.4,76.3,50z"/>
        <path class="st1 lt-70" d="M76.3,50c0-27.6-17-50-38-50s-38,22.4-38,50c0,3.4,0.3,6.8,0.8,10c0,0-0.8-37.3,37.2-37.3S75.5,60,75.5,60 C76,56.8,76.3,53.4,76.3,50z"/>
        <path class="st0 lt-100" d="M76.3,50c0-27.6-17-50-38-50s-38,22.4-38,50c0,3.4,0.3,6.8,0.8,10c0,0-0.8-60,37.2-60s37.2,60,37.2,60 C76,56.8,76.3,53.4,76.3,50z"/>

        <!-- / -->

        <!-- RIGHT BOTTOM -->
        <path class="st1 rb-0" d="M122,100c18.4,0,33.7-17.2,37.2-40c0,0,0.8,5-37.2,5s-37.2-5-37.2-5C88.3,82.8,103.6,100,122,100z"/>
        <path class="st1 rb-15" d="M122,100c18.4,0,33.7-17.2,37.2-40c0,0,0.8,11-37.2,11S84.8,60,84.8,60C88.3,82.8,103.6,100,122,100z"/>
        <path class="st1 rb-30" d="M122,100c18.4,0,33.7-17.2,37.2-40c0,0,0.8,15-37.2,15S84.8,60,84.8,60C88.3,82.8,103.6,100,122,100z"/>
        <path class="st1 rb-50" d="M122,100c18.4,0,33.7-17.2,37.2-40c0,0,0.8,17-37.2,17S84.8,60,84.8,60C88.3,82.8,103.6,100,122,100z"/>
        <path class="st1 rb-70" d="M122,100c18.4,0,33.7-17.2,37.2-40c0,0-0.7,25-37.2,25c-36.4,0-37.2-25-37.2-25C88.3,82.8,103.6,100,122,100z"/>
        <path class="st0 rb-100" d="M122,100c18.4,0,33.7-17.2,37.2-40C159.2,60,152.8,100,122,100c-30.5,0-37.2-40-37.2-40 C88.3,82.8,103.6,100,122,100z"/>

        <!-- / -->


        <!-- LEFT BOTTOM -->
        <path class="st1 lb-0" d="M38.3,100c18.4,0,33.7-17.2,37.2-40c0,0,0.8,5-37.2,5C0,65,1.1,60,1.1,60C4.6,82.8,19.9,100,38.3,100z"/>
        <path class="st1 lb-15" d="M38.3,100c18.4,0,33.7-17.2,37.2-40c0,0,0.8,11-37.2,11C0,71,1.1,60,1.1,60C4.6,82.8,19.9,100,38.3,100z"/>
        <path class="st1 lb-30" d="M38.3,100c18.4,0,33.7-17.2,37.2-40c0,0,0.8,15-37.2,15C0,75,1.1,60,1.1,60C4.6,82.8,19.9,100,38.3,100z"/>
        <path class="st1 lb-50" d="M38.3,100c18.4,0,33.7-17.2,37.2-40c0,0,0.8,17-37.2,17C0,77,1.1,60,1.1,60C4.6,82.8,19.9,100,38.3,100z"/>
        <path class="st1 lb-70" d="M38.3,100c18.4,0,33.7-17.2,37.2-40c0,0-1.1,25-37.2,25C1.6,85,1.1,60,1.1,60C4.6,82.8,19.9,100,38.3,100z"/>
        <path class="st0 lb-100" d="M38.3,100c18.4,0,33.7-17.2,37.2-40C75.5,60,70.2,100,38.3,100c-33,0-37.2-40-37.2-40 C4.6,82.8,19.9,100,38.3,100z"/>

        <!-- / -->

      </g>
      </svg>
      <div class="loader__percent">{{percentFixed}}%</div>      
    </div>
    <div class="loader__performance">{{performance}}</div>
    </div>
    <div class="loader__bg"></div>
  </div>
</template>

<script>
  export default {
    data : function(){
      return {
        percent : 0,
        performance : '',
        performanceDesck : 'Hover on eyes for animation',
        performanceMobile : 'Tap on eyes for animation'
      }
    },
    computed : {
      percentFixed : function() {
          return this.percent.toFixed(0);
      },
      mobile : function(){
        return this.$store.state.mobile;
      },
      resize : function(){
        return this.$store.state.resize;
      }
    },
    mounted : function(){
      var app = this;      
      if(app.mobile){
        app.performance = app.performanceMobile;
      }else{
        app.performance = app.performanceDesck;
      }
      var ww = Math.pow(window.innerWidth, 2)
      var wh = Math.pow(window.innerHeight, 2)      
      var r = Math.sqrt(ww + wh) * 2;
      TweenMax.set('.loader__bg', {width : r, height : r, bottom : -(r/2), left : -(r/2)});
      var yt = 1;
      var ye;
      MorphSVGPlugin.convertToPath("ellipse, polygon");
      TweenMax.set('.loader', {opacity: 0});
      TweenMax.set('#eyes', {scale: 0});
      TweenMax.to('.loader', 1, {opacity: 1, onComplete : function(){         
        TweenMax.to('#eyes', 0.5, {scale: 1, ease: Back.easeOut.config(1.7)}); 
        TweenMax.to(app.$data, 0.5, {percent: 15, ease: Power0.easeNone, onComplete : function(){
         TweenMax.to('#eyes .rt-0', 0.5, {morphSVG: '#eyes .rt-15', ease: Power3.easeOut});
         TweenMax.to('#eyes .rb-0', 0.5, {morphSVG: '#eyes .rb-15', ease: Power3.easeOut});
         TweenMax.to('#eyes .lt-0', 0.5, {morphSVG: '#eyes .lt-15', ease: Power3.easeOut});
         TweenMax.to('#eyes .lb-0', 0.5, {morphSVG: '#eyes .lb-15', ease: Power3.easeOut});         
         TweenMax.to(app.$data, 0.5, {percent: 30, ease: Power0.easeNone, onComplete : function(){
            TweenMax.to('#eyes .rt-0', 0.5, {morphSVG: '#eyes .rt-30', ease: Power3.easeOut});
            TweenMax.to('#eyes .rb-0', 0.5, {morphSVG: '#eyes .rb-30', ease: Power3.easeOut});
            TweenMax.to('#eyes .lt-0', 0.5, {morphSVG: '#eyes .lt-30', ease: Power3.easeOut});
            TweenMax.to('#eyes .lb-0', 0.5, {morphSVG: '#eyes .lb-30', ease: Power3.easeOut});
            TweenMax.to(app.$data, 0.5, {percent: 50, ease: Power0.easeNone, onComplete : function(){
              TweenMax.to('#eyes .rt-0', 0.5, {morphSVG: '#eyes .rt-50', ease: Power3.easeOut});
              TweenMax.to('#eyes .rb-0', 0.5, {morphSVG: '#eyes .rb-50', ease: Power3.easeOut});
              TweenMax.to('#eyes .lt-0', 0.5, {morphSVG: '#eyes .lt-50', ease: Power3.easeOut});
              TweenMax.to('#eyes .lb-0', 0.5, {morphSVG: '#eyes .lb-50', ease: Power3.easeOut});
              TweenMax.to('#eyes .rp-0', 0.5, {morphSVG: '#eyes .rp-50', ease: Power3.easeOut});
              TweenMax.to('#eyes .lp-0', 0.5, {morphSVG: '#eyes .lp-50', ease: Power3.easeOut});
              TweenMax.to(app.$data, 0.5, {percent: 70, ease: Power0.easeNone, onComplete : function(){
                TweenMax.to('#eyes .rt-0', 0.5, {morphSVG: '#eyes .rt-70', ease: Power3.easeOut});
                TweenMax.to('#eyes .rb-0', 0.5, {morphSVG: '#eyes .rb-70', ease: Power3.easeOut});
                TweenMax.to('#eyes .lt-0', 0.5, {morphSVG: '#eyes .lt-70', ease: Power3.easeOut});
                TweenMax.to('#eyes .lb-0', 0.5, {morphSVG: '#eyes .lb-70', ease: Power3.easeOut});
                TweenMax.to('.loader__performance', 1, {opacity : 2});                
                TweenMax.to(app.$data, 0.5, {percent: 100, ease: Power0.easeNone, onComplete : function(){
                  TweenMax.to('#eyes .rt-0', 0.5, {morphSVG: '#eyes .rt-100', ease: Power3.easeOut});
                  TweenMax.to('#eyes .rb-0', 0.5, {morphSVG: '#eyes .rb-100', ease: Power3.easeOut});
                  TweenMax.to('#eyes .lt-0', 0.5, {morphSVG: '#eyes .lt-100', ease: Power3.easeOut});
                  TweenMax.to('#eyes .lb-0', 0.5, {morphSVG: '#eyes .lb-100', ease: Power3.easeOut});
                  TweenMax.to(['#eyes .rt-0', '#eyes .lt-0', '#eyes .rb-0', '#eyes .lb-0'], 0.7, {opacity: 0});
                  TweenMax.to('#eyes .rp-0', 0.5, {morphSVG: '#eyes .rp-100', ease: Power3.easeOut});
                  TweenMax.to('#eyes .lp-0', 0.5, {morphSVG: '#eyes .lp-100', ease: Power3.easeOut});
                  TweenMax.to('#eyes .lg-0', 0.5, {morphSVG: '#eyes .lg-100', ease: Power3.easeOut});
                  TweenMax.to('#eyes .rg-0', 0.5, {morphSVG: '#eyes .rg-100', ease: Power3.easeOut});
                  TweenMax.to(app.$data, 0.5, {percent: 120, ease: Power0.easeNone, onComplete : function(){                    
                    TweenMax.to(['#eyes .lt-0', '#eyes .lb-0', '#eyes  .lg-0'], 0.5, {opacity: 1});
                    TweenMax.to('.lg-0', 0.5, {opacity: 0});
                    TweenMax.to('#eyes .lt-0', 0.5, {morphSVG: '#eyes .lt-70', ease: Power3.easeOut});
                    TweenMax.to('#eyes .lb-0', 0.5, {morphSVG: '#eyes .lb-70', ease: Power3.easeOut});
                    TweenMax.to('#eyes .lp-0', 0.5, {morphSVG: '#eyes .lp-120', ease: Power3.easeOut});
                    TweenMax.to('#eyes .rp-0', 0.5, {morphSVG: '#eyes .rp-120', ease: Power3.easeOut});
                    TweenMax.to('#eyes .rg-0', 0.5, {morphSVG: '#eyes .rg-120', ease: Power3.easeOut});
                    TweenMax.to('.loader__bg', 1, {scale : 0, delay : 1, ease: Power3.easeInOut});
                    TweenMax.to('.wrapper', 0.3, {scale : 0, ease: Power2.easeInOut, delay : 0.9});
                    TweenMax.set([document.querySelectorAll('.team__list .uno .top, .team__list .uno .bottom'), document.querySelectorAll('.team__list .dos .top, .team__list .dos .bottom'), document.querySelectorAll('.team__list .tres .top, .team__list .tres .bottom')], {height : '0vw'});
                    app.$store.commit('teamSlider', false);                    
                    app.$store.commit('appStart', true);
                  }});
                }});
              }});
            }});
         }});
        }});
      }});
    },
    watch : {
      resize : function(e){        
        var ww = Math.pow(window.innerWidth, 2);
        var wh = Math.pow(window.innerHeight, 2);      
        var r = Math.sqrt(ww + wh) * 2;
        TweenMax.set('.loader__bg', {width : r, height : r, bottom : -(r/2), left : -(r/2)});
      }
    }
  };
</script>

<style scoped>
.wrapper {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;  
  z-index: 10;
  position: relative;
}
.loader {
  opacity: 0;
  position: relative;
}
.loader__percent {
  font-family: 'Futura Condensed Extra';
  font-weight: 800;
  font-style: italic;
  font-size: 14px;
  line-height: 1;
  text-align: center;
  margin: 35px 0 0 0;
  padding: 0;  
} 
.loader__performance {
  font-family: 'Futura';
  font-weight: 500;
  font-size: 14px;
  line-height: 1;
  position: fixed;
  bottom: calc(((100vh / 2) - 77px) / 2);
  left: 50%;
  transform: translateX(-50%);
  opacity: 0;
  white-space: nowrap;
}
.loader__bg {
  background-color: #fff;
  width: 5000px;
  height: 5000px;
  border-radius: 50%;
  position: fixed;
  bottom: -2500px;
  left: -2500px;  
}
@media screen and (max-width: 768px) {
  
}
@media screen and (max-width: 480px) {
  .loader__performance {
    bottom: calc(25vh - 25.5px);
  }
}
</style>

