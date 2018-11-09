<template>
  <div class="cursor">
    <svg version="1.1" id="cursor-svg" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="40px" height="40px" viewBox="0 0 40 40" enable-background="new 0 0 40 40" xml:space="preserve">      
      <path class="state-0" fill="#F0BC44" d="M5.5,40.0000114v-8.1247196v-4.2502975v-3.3752708v-3.8115215v-2.6451015v-4.3754683v-2.9372959V7.7933025 V0.0000129l29,29L6.0833335,1.48L5.5,40.0000114z"/>
      <path class="state-1" fill="#F0BC44" d="M5.5,40.0000076V31.875288v-4.2502975v-3.3752708v-3.8115215v-2.6451015v-4.3754683v-2.9372959V7.7932982 V0.0000086l29,29h-17L5.5,40.0000076z"/>
      <path class="state-2" fill="#F0BC44" d="M16.9984341,40.0002937L16.96875,23.0221882L0,23.0112495v-6.03125l17,0.03125V0l5.9984322,0.0109375 l0.0015125,17.0002117L40,16.9987507v6.0229168l-17.0003681-0.0219059l-0.001194,16.9999447L16.9984341,40.0002937z"/>
    </svg>
    <div class="cursor__close">
      <span>Close</span>
    </div>
  </div>
</template>

<script>
  export default {
    data : function(){
      return {
        
      }
    },
    mounted : function(){
      var app = this;
      
    },
    computed : {
      appStart : function(){
        return this.$store.state.appStart;
      },
      mousemove : function(){
        return this.$store.state.mouseMove;
      },
      cursorServiseHover : function(){
        return this.$store.state.cursorServiseHover;
      },
      servicesSlider : function(){
        return this.$store.state.servicesSlider;
      }      
    },
    watch : {
      appStart : function(val){
        return false;
        if(val){
          new TimelineMax({delay : 2}).to('.cursor', 0.5, {opacity : 1}, 'uno')
          .to('#cursor-svg .state-0', 0.7, {morphSVG: '#cursor-svg .state-1', ease: Power3.easeIn}, 'uno')
        }
      },
      mousemove : function(e){
        TweenMax.set('.cursor', {x : (e.clientX - (window.innerWidth / 2) + 10), y : (e.clientY - (window.innerHeight / 2) + 10)});
      },
      cursorServiseHover : function(state){
        var app = this;        
        if(app.servicesSlider)return false;        
        if(state){
          TweenMax.to('#cursor-svg .state-0', 0.4, {morphSVG: '#cursor-svg .state-2', ease: Power4.easeIn});
          TweenMax.set('#cursor-svg', {x : -10, y : -10});
        }else{
          TweenMax.to('#cursor-svg .state-0', 0.4, {morphSVG: '#cursor-svg .state-1', ease: Power4.easeIn});
          TweenMax.set('#cursor-svg', {x : 0, y : 0});
        }
      }
    }
  };
</script>

<style scoped>
.cursor {
  width: 40px;
  height: 40px;
  left : calc(50% - 20px);
  top: calc(50% - 20px);
  position: fixed;
  z-index: 10;
  pointer-events: none;
  opacity: 0;
  transition: top 700ms ease, left 700ms ease;
}
/*.services .cursor {
  left : calc(50% - 30px);
  top: calc(50% - 30px);
}*/
.state-1,
.state-2 {
  visibility: hidden;
}
.cursor__close {
  color: #fdbf00;
  font: 500 14px/1 "Futura";
  overflow: hidden;
  position: absolute;
  top: 4px;
  left: 36px;
  width: 0;
}
.cursor__close span {
  display: inline-block;
  white-space: nowrap;
}
</style>

