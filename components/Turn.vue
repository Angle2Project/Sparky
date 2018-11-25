<template>
  <div class="mobile-turn" v-show="active">
    <div class="mobile-turn__message">
      <div class="mobile-turn__message_img">
        <img src="~assets/turn.svg">
      </div>
      <div class="mobile-turn__message_text">Please turn your device</div>
    </div>
  </div>  
</template>

<script>
  export default {
    mounted : function(){
      var app = this;
      var h = window.innerHeight;
      if(window.orientation == 90 || window.orientation == -90){
        if(h < 480)app.active = true;
      }else{
        app.active = false;
      }
    },
    data : function(){
      return {
        active : false
      }
    },
    methods : {
      show : function(){

      },
      hide : function(){

      }
    },
    computed : {
      mobile : function(){
        return this.$store.state.mobile;
      },
      resize : function(){
        return this.$store.state.resize;
      }      
    },
    watch : {
      resize : function(e){
        var app = this;        
        var h = window.innerHeight;
        setTimeout(function(){          
          if(window.orientation == 90 || window.orientation == -90){
            if(h < 480)app.active = true;
          }else{
            app.active = false;
          }
        }, 100);
      }
    }
  };
</script>

<style scoped>
.mobile-turn {
  width: 100vw;
  height: 100vh;  
  background-color: #f8f8eb;
  position: absolute;  
  z-index: 10;  
}
.mobile-turn__message {
  position: absolute;
  background-color: #f8f8eb;  
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
}
.mobile-turn__message_img img {
  width: 115px;
  height: 115px;
}
.mobile-turn__message_text {
  font-family: "Futura";
  font-weight: 500;
  font-size: 14px;  
  line-height: 1;
  color: #191919;
  margin-top: 42px;
  margin-bottom: -10px;
}
</style>

