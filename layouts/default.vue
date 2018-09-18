<template>
  <div class="app" :class="pageName">
    <loader v-if="loaderLive"/>
    <eyes/>
    <navigation />

    <section class="app-logo">
      <nuxt-link to="/">
        <img src="img/logo_sparky_black_bg.svg" alt="">
      </nuxt-link>
    </section>

    <section class="app-social">
      <a href="">
        <img src="img/twitter.svg" alt="">
      </a>
      <a href="">
        <img src="img/facebook.svg" alt="">
      </a>
      <a href="">
        <img src="img/instagram.svg" alt="">
      </a>
    </section>

    <section class="scroll-down">
      <i></i>
      <span class="scroll-down__text">
        <span>scroll down</span>
      </span>
    </section>

    <section class="start-project">      
      <span class="start-project__text">
        <span>start a project</span>
      </span>
      <div class="start-project__button" @mouseenter="startProjectHover" @mouseleave="startProjectHover">
        <i class="start-project__button_hover"></i>
        <i class="start-project__button_1"></i>
        <i class="start-project__button_2"></i>
      </div>
    </section>

    
    <nuxt :class="pageName"/>
  </div>
</template>


<script>
  import loader from '~/components/Loader.vue';
  import eyes from '~/components/Eyes.vue';
  import navigation from '~/components/Navigation.vue';
  
  export default {
    components: {      
      loader,
      eyes,
      navigation
    },
    data : function(){
      return {
        
      }
    },    
    mounted : function(){
      var app = this;
      console.log(this);      
    },
    computed : {
      appStart : function(){
        return this.$store.state.appStart;
      },
      pageName : function(){
        return this.$store.state.pageName;
      },
      loaderLive : function(){
        return this.$store.state.loaderLive;
      }
    },
    methods : {
      startProjectHover : function(e){
        if(e.type == 'mouseenter'){
          TweenMax.to('.start-project__button', 0.2, {scale : 1.2});
          TweenMax.to('.start-project__button_hover', 0.2, {scale : 1});
          TweenMax.to('.start-project__button_1, .start-project__button_2', 0.2, {backgroundColor : '#f6c930'});
          TweenMax.to('.start-project__button_2', 0.2, {width : 16});
        }else{
          TweenMax.to('.start-project__button', 0.2, {scale : 1});
          TweenMax.to('.start-project__button_hover', 0.2, {scale : 0});
          TweenMax.to('.start-project__button_1, .start-project__button_2', 0.2, {backgroundColor : '#191919'})
          TweenMax.to('.start-project__button_2', 0.2, {width : 12});
        }
      }
    },
    watch : {      
      
    }    
    
  };
</script>

<style>
  .app {
    background: #f0f0d9;
    width: 100vw;
    height: 100vh;
  }
  #app-loader {
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 10;
  }
  .app-logo {
    width: 190px;
    position: fixed;
    top: 50px;
    left: 55px;
    overflow: hidden;
  }
  .app-logo img {
    width: 100%;
    transform: translateY(110%);
  }
  .app-social {
    display: flex;
    align-items: center;
    position: fixed;
    left: 62px;
    bottom: 64px;
    overflow: hidden;
  }
  .app-social a {
    margin-right: 5px;
    width: 36px;
    height: 30px;
    transition: background-color 300ms ease;
    display: inline-block;
    transform: translateY(100%);
    display: inline-flex;
    justify-content: center;
    align-items: center;
  }
  .app-social a:hover {
    background-color: #ffca04;
  }
  .scroll-down {
    display: flex;
    align-items: center;
    position: fixed;
    right: 76px;
    bottom: 174px;
    transform: rotate(-90deg);
    transform-origin: right bottom;
    padding-left: 42px;
  }
  .scroll-down i {
    display: block;
    width: 0;
    height: 7px;
    background-color: #191919;    
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-12%);
  }
  .scroll-down .scroll-down__text {
    font: 500 14px/1 'Futura';
    color: #191919;
    display: inline-block;
    overflow: hidden;
  }
  .scroll-down .scroll-down__text span {
    transform: translateY(100%);
    display: inline-block;
  }
  .start-project {
    display: flex;
    align-items: center;
    position: fixed;
    top: 102px;
    right: 11px;
    transform: rotate(-90deg);
  }
  .start-project .start-project__text {
    font: 500 14px/1 'Futura';
    margin-right: 13px;
    overflow: hidden;
  }
  .start-project .start-project__text span {
    display: inline-block;
    transform: translateY(100%);
  }
  .start-project__button {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: #f6c930;
    position: relative;
    cursor: pointer;    
    transform: scale(0);
  }
  .start-project__button_hover {
    content: "";
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    border: 1px solid #f6c930;
    position: absolute;
    top: 0;
    left: 0;
    transform: scale(0);     
  }
  .intro .start-project__button_hover {
    background-color: #f0f0d9;
  }
  .start-project__button_1 {
    display: block;
    width: 16px;
    height: 1px;
    background-color: #191919;
    position: absolute;
    left: 16px;
    top: 22px;    
  }
  .start-project__button_2 {
    display: block;
    width: 12px;
    height: 1px;
    background-color: #191919;
    position: absolute;
    right: 18px;
    top: 28px;    
  }  
</style>

