<template>
  <section class="container" id="app-description">
    <h1>We provide a fresh set of eyes for powerful brands looking to <a href="">maximize moments, elevate experiences, and ignite innovation.</a></h1>
  </section>
</template>

<script>
export default {
  mounted : function(){
    var app = this;
    app.$store.commit('pageName', 'description');    
    var split = new SplitText("#app-description h1", {type:"words"});    
    //new SplitText("#app-description h1 a > div", {type:"chars"});
    console.log(split);
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
      var tl = new TimelineMax({onComplete : function(){
          TweenMax.set('#app-description h1 a', {clearProps : 'all'})
          TweenMax.set(document.querySelectorAll('#app-description h1 i'), {clearProps : 'all'});
        }});        
        document.querySelectorAll('#app-description h1 a > div').forEach( function(el, i) {
          var h = document.createElement('i');
          el.append(h)
        });
        TweenMax.set('#app-description h1', {visibility: 'visible'});
        TweenMax.set('#app-description h1', {visibility: 'visible'});
        TweenMax.set('#app-description h1 a', {color : '#191919'});
        TweenMax.set('#app-description h1 i', {height : 0});
        tl.staggerFrom(document.querySelectorAll('#app-description h1 > div, #app-description a > div'), 0.7, {opacity:0, rotationX:-80, force3D:true, transformOrigin:"top center -50", delay : 0.5, ease: Power4.easeOut}, 0.02)
        .to(document.querySelectorAll('#app-description h1 i'), 0.5, {height : '96%'}, '-=0.1')
        .to(document.querySelectorAll('#app-description h1 a'), 0.5, {color : '#f8f8eb'}, '-=0.6');
    },
    leave : function(el, done){
      TweenMax.fromTo(el, 2, {opacity : 1, scale : 1}, {opacity : 0, scale : 0.5, onComplete : function(){
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
  methods : {
    mousewheel : function(e){
      this.speed += e.deltaY;
      console.log(e)
    }
  },
  watch : {
    appStart : function(val){
      if(val){
        var tl = new TimelineMax({onComplete : function(){
          TweenMax.set('#app-description h1 a', {clearProps : 'all'})
          TweenMax.set(document.querySelectorAll('#app-description h1 i'), {clearProps : 'all'});
        }});        
        document.querySelectorAll('#app-description h1 a > div').forEach( function(el, i) {
          var h = document.createElement('i');
          el.append(h)
        });
        TweenMax.set('#app-description h1', {visibility: 'visible'});
        TweenMax.set('#app-description h1', {visibility: 'visible'});
        TweenMax.set('#app-description h1 a', {color : '#191919'});
        TweenMax.set('#app-description h1 i', {height : 0});
        tl.staggerFrom(document.querySelectorAll('#app-description h1 > div, #app-description a > div'), 0.7, {opacity:0, rotationX:-80, force3D:true, transformOrigin:"top center -50", delay : 2, ease: Power4.easeOut}, 0.02)
        .to(document.querySelectorAll('#app-description h1 i'), 0.5, {height : '96%'}, '-=0.1')
        .to(document.querySelectorAll('#app-description h1 a'), 0.5, {color : '#f8f8eb'}, '-=0.6');
      }
    }    
  }  
};
</script>

<style>
.app.description {
  background-color: #f8f8eb;
}
#app-description {
    
}
#app-description h1 {
  margin: 0;
  padding: 0;
  font: bold 2.81vw/3.8vw 'Futura Bold';
  width: 58vw;
  visibility: hidden;
  color: #191919;
  position: absolute;
  left: 75px;
  top: 49%;
}
#app-description h1 a {
  text-decoration: none;  
  position: relative;
  color: #f8f8eb;
  padding-bottom: 3px;
  transition: all 300ms ease;
}
#app-description h1 a > div i {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: calc(100% + 1vw);
  height: 96%;
  z-index: -2;
  background-color: #191919;
  transition: all 300ms ease;
}
#app-description h1 a:hover {
  color: #191919;
}
#app-description h1 a:hover div i {
  height: 3%;
}
</style>

