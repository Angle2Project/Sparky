<template>
  <div class="container" id="app-teamslider">
    <div class="team__list swiper-container">
      <div class="swiper-wrapper">
      <div class="item uno swiper-slide">
        <div class="top" @click="position('top')">
          <div class="item__wrapper">
            <div class="item__info">
              <span>Ian Rich</span>
              <b>CEO</b>
            </div>  
          </div>          
        </div>
        <div class="bottom" @click="position('bottom')">
          <div class="item__wrapper">
            <div class="item__info">
              <span>Allie Radler</span>
              <b>Digital Marketing Manager</b>
            </div>
          </div>          
        </div>
        <!-- <div class="bottom" @click="position('bottom')">
          <div class="item__wrapper">
            <div class="item__info">
              <span>Derek Spychalla</span>
              <b>Design Director</b>
            </div>
          </div>          
        </div> -->
      </div>
      <div class="item dos swiper-slide">
        <div class="top" @click="position('top')">
          <div class="item__wrapper">
            <div class="item__info">
              <span>Meaghan Wingert</span>
              <b>Consumer Experience Director</b>
            </div>  
          </div>          
        </div>


        <div class="bottom temporary-mobile" @click="position('top')">
          <div class="item__wrapper">
            <div class="item__info">
              <span>Gilbert</span>
              <b>Director of High Fives</b>
            </div>
          </div>            
        </div>
        <div class="bottom vacancy temporary-desck" @click="position('bottom')">
          <a href="https://www.linkedin.com/company/yosparky/" target="_blank">
            <div class="item__wrapper">
              <div class="item__info">
                <span>Want to join our team?</span>              
              </div>
              <div>              
                <div class="vacancy__link">
                  <span>Opportunities</span>
                  <div class="vacancy__link_bg"></div>
                </div>
              </div>
            </div>
          </a>          
        </div>


      </div>
      <div class="item tres swiper-slide">
        <div class="top vacancy temporary-mobile" @click="position('bottom')">
          <a href="https://www.linkedin.com/company/yosparky/" target="_blank">
            <div class="item__wrapper">
              <div class="item__info">
                <span>Want to join our team?</span>              
              </div>
              <div>              
                <div class="vacancy__link">
                  <span>Opportunities</span>
                  <div class="vacancy__link_bg"></div>
                </div>
              </div>
            </div>
          </a>          
        </div>
        <div class="top temporary-desck" @click="position('top')">
          <div class="item__wrapper">
            <div class="item__info">
              <span>Gilbert</span>
              <b>Director of High Fives</b>
            </div>
          </div>            
        </div>
        
      </div>
    </div>
  </div>
  </div>
</template>

<script>
  import Swiper from 'swiper';
  export default {
    data : function(){
      return {
        swiper : null,        
        ease : 0.1, 
        pointer : {
          y : 0
        }  
      }
    },
    computed : {
      parallax : function(){      
        return this.$store.state.mouseMove;
      },
      appStart : function(){
        return this.$store.state.appStart;
      },
      teamSlider : function(){
        return this.$store.state.teamSlider;
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
      var leader = app.pointer;
      var list = document.querySelectorAll('.team__list .item');
      //var list = document.querySelectorAll('.team__list .item .top');
      list.forEach( function(el, i) {        
        leader = app.startParallax(leader, el);
      });      
      if(app.mobile){
        app.swiper = new Swiper('.team__list.swiper-container', {          
          direction: 'horizontal',          
          slidesPerView: 'auto',
          freeMode : true,
          speed: 700,
          watchOverflow : true
          //spaceBetween: 1
        });
      }
    },
    methods : {
      startParallax : function(leader, el){
        var app = this;
        TweenMax.set(el, {y : 0});
        var pos = el._gsTransform;
        TweenMax.to(el, 10, {
          y: 0,
          repeat: -1,
          modifiers: {
            y: function () {
              //return false;
              if(app.mobile)return false;
              return pos.y + (leader.y - pos.y) * app.ease;              
            },
          }
        });
        return pos;
      },
      position : function(pos){
        var app = this;
        if(window.innerWidth > 768){
          if(pos == 'top'){
            app.$store.commit('teamSliderPosition', 'top');
          }else if(pos == 'bottom'){
            app.$store.commit('teamSliderPosition', 'bottom');
          }
        }        
      }
    },
    watch : {
      parallax : function(e){              
        var app = this;
        if(app.teamSlider && app.appStart){
          var rootY = -((window.innerHeight / 2)  - e.clientY);
          var moveY = (17.7/100) * (100 / ((window.innerHeight / 2) / rootY));
          var y = (window.innerWidth / 100) * moveY;                
          app.pointer.y = -y;          
        }        
      },
      mobile : function(val){
        var app = this;        
        if(app.teamSlider){
          var w = window.innerWidth;
          if(val){
            TweenMax.to('#app-logo .st2', 0.4, {opacity : 0});
            app.swiper = new Swiper('.team__list.swiper-container', {
              direction: 'horizontal',
              slidesPerView: 'auto',
              freeMode : true,
              speed: 700,
              watchOverflow : true
              //spaceBetween: 1
            });
            TweenMax.set('.team__list .item', {clearProps : 'all'});
            var list = document.querySelectorAll('.team__list .uno .top, .team__list .uno .bottom, .team__list .dos .top, .team__list .dos .bottom, .team__list .tres .top, .team__list .tres .bottom');            
            TweenMax.staggerTo(list, 0.8, {height : '100%', ease: Power4.easeOut}, 0.14);
          }else{
            
            TweenMax.to('#app-logo .st2', 0.4, {opacity : 1});
            app.swiper.destroy(false);
            var list = [document.querySelectorAll('.team__list .uno .top, .team__list .uno .bottom'), document.querySelectorAll('.team__list .dos .top, .team__list .dos .bottom'), document.querySelectorAll('.team__list .tres .top, .team__list .tres .bottom')];
            TweenMax.staggerTo(list, 0.8, {height : '27.8vw', ease: Power4.easeOut}, 0.14);
          }
        }        
        
      }      
    }
  };
</script>

<style scoped>
.swiper-container {
  overflow: visible;
}
.team__list {
  position: fixed;
  z-index: 2;
  display: flex;
  right: 160px;
  top: 50%;  
  margin-top: -13.9vw;
  height: 100%;
}
.team__list .item {  
  position: relative;
  margin-right: 0.55vw;  
  width: 20.5vw;  
}
.team__list .item:last-child {
  margin-right: 0;
}
.team__list .item .item__wrapper {
  width: 100%;
  height: 100%;
  position: relative;
}
.team__list .item .top {
  width: 100%;
  height: 27.8vw;
  position: absolute;
  left: 0;
  top: 0;
  overflow: hidden;
}
.team__list .item .bottom {
  width: 100%;
  height: 27.8vw;
  position: absolute;
  left: 0;
  top: calc(27.8vw + 6vw);
  overflow: hidden;
}
.team__list .item .top .item__info {
  position: absolute;
  bottom: 2.25vw;
  left: 2.25vw;
}
.team__list .item .bottom .item__info {
  position: absolute;
  top: 2.25vw;
  left: 2.25vw;
}
.team__list .item span {
  font: 500 14px/1 'Futura';
  color: #f8f8eb;
  display: block;
  margin-bottom: 2px;
}
.team__list .item b {  
  font-family: "Futura Condensed Extra Italic";
  font-size: 14px;
  line-height: 1;
  font-weight: 100;
  font-style: italic;  
  color: #f8f8eb;
}
.team__list .item.uno .top {
  background: url("~assets/headshots-1.jpg") no-repeat center top / cover;
  /*background: #ccc;*/
  transform: translateY(-3.3vw);
}
.team__list .item.uno .bottom {
  background: url("~assets/headshots-5.jpg") no-repeat center bottom / cover;
  /*background: #ccc;*/
  transform: translateY(-3.3vw);
}
.team__list .item.dos .top {
  background: url("~assets/headshots-2.jpg") no-repeat center top / cover;
  /*background: #ccc;*/
  transform: translateY(3.3vw);
}
.team__list .item.dos .bottom {
  /* background: url("~assets/headshots-5.jpg") no-repeat center bottom / cover; */
  /*background: #ccc;*/
  background: #1f1f1f url("~assets/icon_marker_y.svg") no-repeat center / 1.3vw auto;
  transform: translateY(3.3vw);
}
.team__list .item.tres .top {
  background: url("~assets/headshots-3.jpg") no-repeat center top / cover;
  /*background: #ccc;*/
  /*transform: translateY(-5.5vw);*/
}
.team__list .item.tres .bottom {
  background: #1f1f1f url("~assets/icon_marker_y.svg") no-repeat center / 1.3vw auto;
  /*background: #ccc;*/
  /*transform: translateY(5vw);*/
}
.vacancy__link {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding-bottom: 7px;
  cursor: pointer;
  margin-top: 30px;
}
.vacancy__link span {
  font-family: "Futura";
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
  color: #f8f8eb;
  text-decoration: none;
  display: inline-block;
}
.vacancy__link_bg {
  display: block;
  height: 7px;
  width: 108%;
  background-color: #f8f8eb;
  position: absolute;
  left: 0;
  top: 24px;  
  transform: scaleY(1);  
  transform-origin: top;  
  transition: all 400ms cubic-bezier(0.77, 0, 0.175, 1);
}
.vacancy .item__wrapper:hover .vacancy__link_bg {
  transform: scaleY(0.1);
}
.temporary-mobile {
  display: none;
}

@media screen and (max-width: 768px) {
  .team__list {
    left: 80px;
    height: 50%;
    top: 50%;
    transform: translateY(-50%);
    margin-top: 0;
  }
  .team__list .item {
    flex-grow: 1;
  }
  .team__list .item .top {
  width: 100%;
  height: 27.8vw;
  position: absolute;
  left: 0;
  top: 0;
  overflow: hidden;
}
.team__list .item .bottom {
  width: 100%;
  height: 27.8vw;
  position: absolute;
  left: 0;
  bottom: 0;
  top: auto;
  overflow: hidden;
}
.team__list .item .top .item__info {
  position: absolute;
  bottom: 2.25vw;
  left: 2.25vw;
}
.team__list .item .bottom .item__info {
  position: absolute;
  top: 2.25vw;
  left: 2.25vw;
}
.team__list .item span {
  font: 500 14px/1 'Futura';
  color: #f8f8eb;
  display: block;
  margin-bottom: 2px;
}
.team__list .item b {  
  font-family: "Futura Condensed Extra Italic";
  font-size: 14px;
  line-height: 1;
  font-weight: 100;
  font-style: italic;  
  color: #f8f8eb;
}
.team__list .item.uno .top {
  /* background: url("~assets/headshots-1.jpg") no-repeat center top / cover; */
  /*background: #ccc;*/
  transform: translateY(-7.8vw);
}
.team__list .item.uno .bottom {
  /* background: url("~assets/headshots-4.jpg") no-repeat center bottom -1.5vw / cover; */
  /*background: #ccc;*/
  transform: translateY(2.6vw);
}
.team__list .item.dos .top {
  /* background: url("~assets/headshots-2.jpg") no-repeat center top / cover; */
  /*background: #ccc;*/
  transform: translateY(-3.3vw);
}
.team__list .item.dos .bottom {
  /* background: url("~assets/headshots-5.jpg") no-repeat center bottom -1.5vw / cover; */
  /*background: #ccc;*/
  transform: translateY(7.11vw);
}
.team__list .item.tres .top {
  /* background: url("~assets/headshots-3.jpg") no-repeat center top / cover; */
  /*background: #ccc;*/
  transform: translateY(-5.5vw);
}
.team__list .item.tres .bottom {
  /* background: #1f1f1f url("~assets/icon_marker_y.svg") no-repeat center / 1.3vw auto; */
  /*background: #ccc;*/
  transform: translateY(5vw);
}

}

@media screen and (max-width: 480px) {
  .swiper-container {
    overflow: hidden;
  } 
  .team__list {
    width: calc(100% - 42px);
    right: auto;
    top: calc(100px + 25vw);
    bottom: 114px;
    left: 42px;
    height: auto;
    transform: translateY(0);
    overflow: hidden;
    display: block;
  }
  .team__list .item {    
    display: flex;
    width: auto;
    margin: 0;
  }
  .team__list .item .top,
  .team__list .item .bottom {
    width: calc((90vh - 25vw - 100px - 114px) / 1.2);
    height: 91vw;
    position: relative!important;
    transform: translateY(0)!important;
    margin-right: 10px;
  }
  .team__list .item.tres .bottom {
    background-size: 4vw auto;
    background-position: center top;
  }
  .team__list .item.tres .bottom {
      background-position: center;
  }
  .team__list .item .top .item__info,
  .team__list .item .bottom .item__info {
    top: auto;
    bottom: 2.5vw;
  }
  .team__list .item.uno .bottom {
    /* background: url("~assets/headshots-4.jpg") no-repeat center top / cover; */
    /*background: #ccc;*/
    transform: translateY(2.6vw);
  }
  .team__list .item.dos .bottom {
    background: url("~assets/headshots-3.jpg") no-repeat center top / cover;
    /* background: url("~assets/headshots-5.jpg") no-repeat center top / cover; */
    /*background: #ccc;*/
    transform: translateY(7.11vw);
  }
  .team__list .item.tres .top {
    background: #1f1f1f;
  }
  .temporary-mobile {
    display: block;
  }
  .temporary-desck {
    display: none;
  }

}
</style>