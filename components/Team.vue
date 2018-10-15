<template>
  <div class="container" id="app-teamslider">
    <div class="team__list">
      <div class="item uno">
        <div class="top">
          <div class="item__wrapper">
            <div class="item__info">
              <span>The Playmaker</span>
              <b>BOS</b>
            </div>  
          </div>          
        </div>
        <div class="bottom">
          <div class="item__wrapper">
            <div class="item__info">
              <span>The Playmaker</span>
              <b>BOS</b>
            </div>
          </div>          
        </div>
      </div>
      <div class="item dos">
        <div class="top">
          <div class="item__wrapper">
            <div class="item__info">
              <span>The Playmaker</span>
              <b>BOS</b>
            </div>  
          </div>          
        </div>
        <div class="bottom">
          <div class="item__wrapper">
            <div class="item__info">
              <span>The Playmaker</span>
              <b>BOS</b>
            </div>
          </div>          
        </div>
      </div>
      <div class="item tres">
        <div class="top">
          <div class="item__wrapper">
            <div class="item__info">
              <span>The Playmaker</span>
              <b>BOS</b>
            </div>
          </div>            
        </div>
        <div class="bottom">
          <div class="item__wrapper">
            <div class="item__info">
              <span>The Playmaker</span>
              <b>BOS</b>
            </div>
          </div>          
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data : function(){
      return {
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
      }
    },
    mounted : function(){
      var app = this;
      var leader = app.pointer;
      var list = document.querySelectorAll('.team__list .item');
      list.forEach( function(el, i) {
        leader = app.startParallax(leader, el);
      });
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
            y: function x() {
              return pos.y + (leader.y - pos.y) * app.ease;
              // if(dos){
              //   return -(pos.y + (leader.y - pos.y) * app.ease);
              // }else{
              //   return pos.y + (leader.y - pos.y) * app.ease;
              // }
              
            },
          }
        });
        return pos;
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
      }
    }
  };
</script>

<style scoped>
.team__list {
  position: fixed;
  z-index: 2;
  display: flex;
  left: 25vw;
  top: 0;
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
  height: 27.8vw;
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
  bottom: 0;
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
  font: 14px/ 1 "Futura Condensed Extra Italic";
  color: #f8f8eb;
}
.team__list .item.uno .top {
  background: url("~assets/headshots-1.jpg") no-repeat center top / cover;
  /*background: #ccc;*/
  transform: translateY(-7.8vw);
}
.team__list .item.uno .bottom {
  background: url("~assets/headshots-4.jpg") no-repeat center bottom / cover;
  /*background: #ccc;*/
  transform: translateY(2.6vw);
}
.team__list .item.dos .top {
  background: url("~assets/headshots-2.jpg") no-repeat center top / cover;
  /*background: #ccc;*/
  transform: translateY(-3.3vw);
}
.team__list .item.dos .bottom {
  background: url("~assets/headshots-5.jpg") no-repeat center bottom / cover;
  /*background: #ccc;*/
  transform: translateY(7.11vw);
}
.team__list .item.tres .top {
  background: url("~assets/headshots-3.jpg") no-repeat center top / cover;
  /*background: #ccc;*/
  transform: translateY(-5.5vw);
}
.team__list .item.tres .bottom {
  background: #1f1f1f url("~assets/icon_marker_y.svg") no-repeat center / 1.3vw auto;
  /*background: #ccc;*/
  transform: translateY(5vw);
}
</style>

