<template>
  <section id="app-services-slider">
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
  </section>
</template>

<script>
  export default {
    mounted : function(){
      var app = this;      
    },
    data : function() {
      return {

      }
    },
    computed : {
      
    },
    methods : {
      
    }    
  };
</script>

<style>
#app-services-slider {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
}
h2 {
  margin: 0;
  padding: 0;  
  font-family:  "Futura Condensed Extra";
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

