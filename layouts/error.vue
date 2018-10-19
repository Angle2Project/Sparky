<template>
  <div class="app-error">
    <div class="error__logo">
    	<img src="~assets/error-logo.svg" alt="">
    </div>
    <div class="error__text">
    	<span>The page you were looking for doesn't exist.</span>
    </div>
    <div class="error__back">
    	<div class="error__link">
			<a href="/">Send Request</a>
			<div class="error__link_bg"></div>
		</div>
    </div>
    <div class="follow-us">
      <span>follow us</span>
      <i></i>
    </div>
  </div>
</template>

<script>
export default {
  props: ['error'],
  mounted : function(){
    var app = this;
    app.$store.commit('pageName', 'error-page');    
    app.$store.commit('eyes', false);
    TweenMax.to('.app', 0.4, {backgroundColor : '#f0f0d9'})
  },
  computed : {    
    appStart : function(){
      return this.$store.state.appStart;
    }
  },
  watch : {
  	appStart : function(val){
  		var app = this;
  		if(val){
  			new TimelineMax({onComplete : function(){
  				app.$store.commit('loader', false);
  			}}).set('.app-error', {visibility : 'visible', delay : 2})
  			.from('.error__logo', 0.7, {scale : 0,  ease: Back.easeOut.config(1.7)}, 'uno')
  			.staggerFrom(document.querySelectorAll('.error__text span, .error__link'), 0.7, {opacity : 0, y : '100%', ease: Power4.easeOut}, 0.1, 'uno+=0.5')
  			.to('.contacts__information_mail a i', 0.4, {scaleY : 1, ease: Power4.easeIn}, 'line')
			.to('.follow-us span', 0.7, {y : '0%', ease: Power4.easeOut}, 'line+=0.5')
			.to('.follow-us i', 0.7, {width : '82px', ease: Power4.easeOut}, 'line+=0.5')
			.to('.copyright span', 0.7, {y : '0%', ease: Power4.easeOut}, 'line')
			.to(document.querySelectorAll('.app-social a'), 0.5, {y : 0}, 'line')
			.to('.app-logo svg', 0.5, {y : 0}, 'line')
			.to('.start-project__button', 0.5, {scale : 1, delay : 0.1}, 'line')


  		}
  	}
  }
}
</script>

<style>
	.app-error {
		width: 100%;
		height: 100%;
		font-family: "Futura";
		font-weight: 500;
		font-size: 14px;  
		line-height: 24px;
		color: #191919;	
		visibility: hidden;	 
	}
	.error__logo {
		width: 31.25vw;
		position: absolute;
		left: calc(50% - 15.625vw);
		top: 50%;
		transform: translateY(-90%);		
	}
	.error__text {
		position: absolute;
		left: 50%;
		top: 50%;
		transform: translateY(130%);		
	}
	.error__text span {
		display: inline-block;
	}
	.error__back {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translateY(260%);
	}
	.error__link {		
		padding-bottom: 7px;
		cursor: pointer;
		display: inline-block;
}
	.error__link a {		
		color: #191919;
		background-color: transparent;
		border: none;
		outline: none;
		padding: 0;
		text-align: left;  
		cursor: pointer;
		text-decoration: none;
	}
	.error__link_bg {
		display: block;
		height: 7px;
		width: 108%;
		background-color: #191919;
		position: absolute;
		left: 0;
		top: 24px;  
		transform: scaleY(1);  
		transform-origin: top;
		transition: all 400ms cubic-bezier(0.77, 0, 0.175, 1);
	}
	.error__link:hover a+.error__link_bg {
		transform: scaleY(0.1);
	}
	.follow-us {
		position: fixed;
		left: 193px;
		bottom: 72px;
		padding-left: 105px;
		font: 500 14px/1 'Futura';
		overflow: hidden;
	}
	.follow-us span {
		display: inline-block;
		transform: translateY(100%);
	}
	.follow-us i {
		/*width: 82px;*/
		width: 0px;
		height: 1px;
		display: block;
		background-color: #191919;
		position: absolute;
		left: 0;
		top: 50%;
		transform: translateY(-50%);
	}

</style>