<template>
  <div class="app" :class="pageName">
    <loader v-if="loader"/>
    <eyes/>
    <navigation />

    <section class="app-logo">
      <nuxt-link to="/">
        <img src="img/logo_sparky_black_bg.svg" alt="">
      </nuxt-link>
    </section>

    <section class="app-social">
      <a href="">
        <svg version="1.1" id="icon-twitter" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="16px" height="14px" viewBox="0 0 16 14" style="enable-background:new 0 0 16 14;" xml:space="preserve">          
          <g>
            <g>
              <path class="st0" d="M15.6,0.4c-0.6,0.4-1.3,0.7-2.1,0.8c-0.6-0.7-1.5-1.1-2.4-1.1c-1.8,0-3.3,1.5-3.3,3.5c0,0.3,0,0.5,0.1,0.8
                C5.3,4.3,2.9,2.9,1.2,0.8C0.9,1.3,0.8,1.9,0.8,2.5c0,1.2,0.6,2.3,1.5,2.9c-0.5,0-1-0.2-1.5-0.4l0,0c0,1.7,1.1,3.1,2.6,3.4
                C3.1,8.5,2.8,8.5,2.5,8.5c-0.2,0-0.4,0-0.6-0.1c0.4,1.4,1.6,2.4,3.1,2.4c-1.1,0.9-2.5,1.5-4.1,1.5c-0.3,0-0.5,0-0.8,0
                c1.5,1,3.2,1.6,5,1.6c6,0,9.3-5.3,9.3-9.8c0-0.1,0-0.3,0-0.4c0.6-0.5,1.2-1.1,1.6-1.8c-0.6,0.3-1.2,0.5-1.9,0.5
                C14.8,1.9,15.3,1.2,15.6,0.4z"/>
            </g>
          </g>
        </svg>
      </a>
      <a href="">
        <svg version="1.1" id="icon-facebook" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="9px" height="16px" viewBox="0 0 9 16" style="enable-background:new 0 0 9 16;" xml:space="preserve">          
          <g>
            <path id="f_1_" class="st0" d="M5.7,16V8.7h2.4l0.4-2.8H5.7V4c0-0.8,0.2-1.4,1.4-1.4h1.5V0.1C8.4,0.1,7.5,0,6.5,0
              C4.3,0,2.8,1.3,2.8,3.8v2.1H0.3v2.8h2.5V16H5.7z"/>
          </g>
        </svg>
      </a>
      <a href="">
        <svg version="1.1" id="icon-instagram" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="16px" height="16px" viewBox="0 0 16 16" style="enable-background:new 0 0 16 16;" xml:space="preserve">          
          <g>
            <g>
              <path class="st0" d="M8,5.3C6.5,5.3,5.3,6.5,5.3,8s1.2,2.7,2.7,2.7s2.7-1.2,2.7-2.7S9.5,5.3,8,5.3z"/>
              <path class="st0" d="M11,0H5C2.2,0,0,2.2,0,5v6c0,2.8,2.2,5,5,5h6c2.8,0,5-2.2,5-5V5C16,2.2,13.8,0,11,0z M8,12.1
                c-2.3,0-4.1-1.8-4.1-4.1c0-2.3,1.8-4.1,4.1-4.1s4.1,1.8,4.1,4.1C12.1,10.3,10.3,12.1,8,12.1z M12.2,4.7c-0.5,0-1-0.4-1-1
                c0-0.5,0.4-1,1-1c0.6,0.1,1,0.5,1,1S12.8,4.7,12.2,4.7z"/>
            </g>
          </g>
        </svg>
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
      loader : function(){
        return this.$store.state.loader;
      }
    },
    methods : {
      startProjectHover : function(e){
        if(e.type == 'mouseenter'){
          TweenMax.to('.start-project__button', 0.4, {scale : 1.2, ease: Power4.easeInOut});
          TweenMax.to('.start-project__button_hover', 0.4, {scale : 1, ease: Power4.easeInOut});
          TweenMax.to('.start-project__button_1, .start-project__button_2', 0.4, {backgroundColor : '#f6c930', ease: Power4.easeInOut});
          TweenMax.to('.start-project__button_2', 0.4, {width : 16, ease: Power4.easeInOut});
        }else{
          TweenMax.to('.start-project__button', 0.4, {scale : 1, ease: Power4.easeInOut});
          TweenMax.to('.start-project__button_hover', 0.4, {scale : 0, ease: Power4.easeInOut});
          TweenMax.to('.start-project__button_1, .start-project__button_2', 0.4, {backgroundColor : '#191919', ease: Power4.easeInOut})
          TweenMax.to('.start-project__button_2', 0.4, {width : 12, ease: Power4.easeInOut});
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
    z-index: 1;
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
    z-index: 1;
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
  .app-social #icon-twitter .st0,
  .app-social #icon-facebook .st0,
  .app-social #icon-instagram .st0 {
    fill:#191919;
    transition: all 200ms ease;
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
    z-index: 1;
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
  .description .start-project__button_hover {
    background-color: #f8f8eb;
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

