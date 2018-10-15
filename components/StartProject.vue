<template>
  <section class="start-project" :class="startProject ? 'sp-active' : ''" @click="documentClick">
    <div class="start-project__nav">
      <span class="start-project__text">
        <span>start a project</span>
      </span>
      <div class="start-project__button" @mouseenter="startProjectHover" @mouseleave="startProjectHover" @click="startProjectClick">
        <i class="start-project__button_hover"></i>
        <i class="start-project__button_1"></i>
        <i class="start-project__button_2"></i>
      </div>
    </div>      
      <div class="start-project__bg"></div>
      <h1>
        <div class="l1">
          <span>get in touch</span>
        </div>  
        <span class="l2">get in touch</span>
        <span class="l3">get in touch</span>
        <span class="l4">get in touch</span>
        <span class="l5">get in touch</span>
      </h1>
      <div class="start-project__form">
        <form action="">
          <div class="start-project__form_row">
            <div class="start-project__form_coll">
              <div class="start-project__form_input">
                <input type="text" placeholder="Your Name Company">
                <div class="start-project__form_input--bg"></div>
              </div>
            </div>
            <div class="start-project__form_coll">
              <div class="start-project__form_input">
                <input type="text" placeholder="Your E-mail">
                <div class="start-project__form_input--bg"></div>
              </div>
            </div>
          </div>
          <div class="start-project__form_row">
            <div class="start-project__form_select">
              <span @click="selectClick">
                <b>Select Subject</b>
              </span>
              <i></i>
              <ul>
                <li class="current" @click="selectListClick">Select Subject</li>
                <li @click="selectListClick">New business</li>
                <li @click="selectListClick">General inquiry</li>
              </ul>
            </div>
          </div>
          <div class="start-project__form_row">
            <div class="start-project__form_textarea">
              <textarea name="" id="" placeholder="Start typing message here ..."></textarea>
              <div class="start-project__form_textarea--bg"></div>
            </div>
          </div>
          <div class="start-project__form_row">
            <div class="start-project__form_button">
              <button>Send Request</button>
              <div class="start-project__form_button--bg"></div>
            </div>
          </div>
        </form>
      </div>
      <div class="start-project__copyright">© 2018 SPARKY</div>
    </section>
  </template>

<script>
  export default {
    data : function(){
      return {

      }
    },
    computed : {
      startProject : function(){
        return this.$store.state.startProject;
      }
    },
    methods : {
      startProjectHover : function(e){
        var app = this;
        var name = app.$store.state.pageName;        
        if(e.type == 'mouseenter'){
          TweenMax.to('.start-project__button', 0.25, {scale : 1.2, ease: Power2.easeIn});
          TweenMax.to('.start-project__button_hover', 0.25, {scale : 1, ease: Power2.easeIn});
          TweenMax.to('.start-project__button_1, .start-project__button_2', 0.25, {backgroundColor : (app.startProject ? '#191919':'#f6c930'), ease: Power2.easeIn});
          TweenMax.to('.start-project__button_2', 0.25, {width : 16, ease: Power2.easeIn});
          if(name == 'intro' || name == 'description')return false;
          TweenMax.to('.start-project__text span', 0.3, {y : '0%', ease: Power2.easeIn, force3D : false});
        }else{
          TweenMax.to('.start-project__button', 0.25, {scale : 1, ease: Power2.easeIn});
          TweenMax.to('.start-project__button_hover', 0.25, {scale : 0, ease: Power2.easeIn});
          TweenMax.to('.start-project__button_1, .start-project__button_2', 0.25, {backgroundColor : '#191919', ease: Power2.easeIt});
          TweenMax.to('.start-project__button_2', 0.25, {width : (app.startProject ? 16 : 12), ease: Power2.easeIn});
          if(name == 'intro' || name == 'description' || app.startProject)return false;
          TweenMax.to('.start-project__text span', 0.3, {y : '100%', ease: Power2.easeIn, force3D : false});
        }        
      },
      startProjectClick : function(e){        
        var app = this;
        if(app.startProject){
          app.$store.commit('startProject', false);
        }else{
          app.$store.commit('startProject', true);
          TweenMax.to('.start-project__button', 0.4, {backgroundColor : '#f8f8eb', ease: Power2.easeIn})
          TweenMax.to('.start-project__button_hover', 0.4, {backgroundColor : '#f6c930', borderColor : '#f8f8eb', ease: Power3.easeIn});
          TweenMax.to('.start-project__button_1, .start-project__button_2', 0.7, {backgroundColor : '#191919', ease: Power4.easeInOut});
          TweenMax.to('.start-project__button_1', 0.4, {rotation : 45, x : 1, y : 3, ease: Power4.easeInOut});
          TweenMax.to('.start-project__button_2', 0.4, {rotation : -45, x : 1, y : -3, ease: Power4.easeInOut});        
          var scale = (window.innerWidth / 50) * 2.55;
          TweenMax.to('.start-project__bg', 0.4, {scale : scale, ease: Power3.easeIn});
          new TimelineMax().to('.start-project__text span', 0.4, {y : '100%', ease: Power4.easeIn, onComplete : function(){
            document.querySelector('.start-project__text span').innerText = 'close';
          }})
          .to('.start-project__text span', 0.4, {y : '0%', color : '#191919', ease: Power4.easeOut})
        }        
      },
      selectClick : function(e){
        var app = this;
        if(!document.querySelector('.start-project__form_select').classList.contains('active')){
          document.querySelector('.start-project__form_select').classList.add('active');
          var h = (document.querySelectorAll('.start-project__form_select ul li').length * 40) + 40;
          TweenMax.to('.start-project__form_select ul', 0.4, {height : h, opacity : 1, ease: Power3.easeInOut});
        }else{
          TweenMax.to('.start-project__form_select ul', 0.4, {height : 1, opacity : 0.5, ease: Power4.easeInOut, onComplete : function(){
            document.querySelector('.start-project__form_select').classList.remove('active');
          }});
        }
      },
      selectListClick : function(e){        
        var val = e.target.innerText;
        console.log(val);
        new TimelineMax().to('.start-project__form_select b', 0.2, {scaleY : 0, onComplete : function(){
          document.querySelector('.start-project__form_select b').innerText = val;  
        }})
        .to('.start-project__form_select b', 0.2, {scaleY : 1});        
        document.querySelectorAll('.start-project__form_select ul li').forEach( function(el, i) {
          el.classList.remove('current');
        });
        e.currentTarget.classList.add('current');
        TweenMax.to('.start-project__form_select ul', 0.4, {height : 1, opacity : 1, delay : 0.2, ease: Power3.easeInOut, onComplete : function(){
          document.querySelector('.start-project__form_select').classList.remove('active');
        }});
      },
      documentClick : function(e){
        var app = this;
        if(document.querySelector('.start-project__form_select').classList.contains('active') && app.closest(e.target, '.start-project__form_select') == null){
          TweenMax.to('.start-project__form_select ul', 0.4, {height : 1, opacity : 0.5, ease: Power4.easeInOut, onComplete : function(){
            document.querySelector('.start-project__form_select').classList.remove('active');
          }});
        }        
      },
      closest : function(el, selector){
        var matchesFn;
        // find vendor prefix
        ['matches','webkitMatchesSelector','mozMatchesSelector','msMatchesSelector','oMatchesSelector'].some(function(fn) {
            if (typeof document.body[fn] == 'function') {
                matchesFn = fn;
                return true;
            }
            return false;
        })

        var parent;

        // traverse parents
        while (el) {
            parent = el.parentElement;
            if (parent && parent[matchesFn](selector)) {
                return parent;
            }
            el = parent;
        }

        return null;
      }
    }
  };
</script>

<style scoped>
  .start-project {    
    position: fixed;  
    width: 100%;
    z-index: 3;
  }
  .sp-active.start-project {
    height: 100%;
  }
  .start-project__nav {
    display: flex;
    align-items: center;
    position: fixed;
    top: 55px;
    right: 55px;
    transform: rotate(-90deg);
    z-index: 3;
    transform-origin: calc(100% - 25px);
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
  .start-project__bg {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: #f6c930;    
    transform: scale(0);
    position: absolute;
    right: 58px;    
    top: 55px;
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
  h1 {
  margin: 0;
  padding: 0;
  font-family: "Futura Condensed Extra Italic";
  font-size: 9.4vw;
  line-height: 8.5vw;
  font-weight: 100;
  font-style: italic;
  text-transform: uppercase;
  position: absolute;
  left: 60px;
  top: calc((50vh + (50vh - 70px) / 2) - 4.25vw);
  letter-spacing: -0.2vw;
  z-index: 1;
  display: none;
}
h1 span {
  display: inline-block;  
  padding: 0px 1vw;
  position: absolute;
  top: 0;
  left: 0;
  color: #191919;
  white-space: nowrap;
  background-color: #f6c930;
  overflow: visible;
}
h1 .l1 {
  overflow:hidden;
  z-index: 5;  
  position: relative;
  padding-bottom: 0;
  overflow: hidden;
  background-color: #f6c930;
}
h1 .l1 span {    
  position: static; 
  display: inline-block; 
  transform: translateY(-102%);
}
h1 .l2 {
  z-index: 4;
}
h1 .l3 {
  z-index: 3;
}
h1 .l4 {
  z-index: 2;
}
h1 .l5 {
  z-index: 1;
}
.start-project__form {
  width: 37.5vw;
  position: fixed;
  left: 50vw;
  top: 145px;
  display: none;
}
.start-project__form_row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 17px;
}
.start-project__form_coll {
  width: 46%;
}
.start-project__form_input {
  position: relative;
  height: 40px;
}
.start-project__form_input input {
  width: 100%;
  height: 100%;  
  font-family: "Futura";
  font-weight: 500;
  font-size: 14px;  
  color: #191919;
  border: none;
  background-color: transparent;
  outline: none;
  transition: all 400ms cubic-bezier(0.77, 0, 0.175, 1);
  z-index: 2;
  position: relative;
}
.start-project__form_input input:hover {
  padding-left: 18px;
}
.start-project__form_input input:focus {
  padding-left: 18px;
  color: #f8f8eb;
}
.start-project__form_input input::-webkit-input-placeholder { /* Chrome/Opera/Safari */
  color: #191919;
  transition: all 400ms cubic-bezier(0.77, 0, 0.175, 1);
}
.start-project__form_input input::-moz-placeholder { /* Firefox 19+ */
  color: #191919;
  transition: all 400ms cubic-bezier(0.77, 0, 0.175, 1);
}
.start-project__form_input input:-ms-input-placeholder { /* IE 10+ */
  color: #191919;
  transition: all 400ms cubic-bezier(0.77, 0, 0.175, 1);
}
.start-project__form_input input:-moz-placeholder { /* Firefox 18- */
  color: #191919;
  transition: all 400ms cubic-bezier(0.77, 0, 0.175, 1);
}
.start-project__form_input input:focus::-webkit-input-placeholder { /* Chrome/Opera/Safari */
  color: #f8f8eb;
}
.start-project__form_input input:focus::-moz-placeholder { /* Firefox 19+ */
  color: #f8f8eb;
}
.start-project__form_input input:focus:-ms-input-placeholder { /* IE 10+ */
  color: #f8f8eb;
}
.start-project__form_input input:focus:-moz-placeholder { /* Firefox 18- */
  color: #f8f8eb;
}
.start-project__form_input--bg {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 1px;
  background-color: #191919;
  opacity: 0.5;
  transition: all 400ms cubic-bezier(0.77, 0, 0.175, 1);
}
.start-project__form_input input:focus+.start-project__form_input--bg {
  height: 100%;
  z-index: 1;
  opacity: 1;
}
.start-project__form_select {
  width: 100%;
  height: 40px;
  position: relative;
}
.start-project__form_select span {
  font-family: "Futura";
  font-weight: 500;
  font-size: 14px;  
  color: #191919;
  display: flex;
  height: 100%;
  align-items: center;
  transition: all 400ms cubic-bezier(0.77, 0, 0.175, 1);
  cursor: default;
}
.start-project__form_select  b {
  display: inline-block;
  font-weight: 500;
}
.start-project__form_select i {
  display: block;
  width: 0;
  height: 0;
  border-left: 4px solid transparent;
  border-right: 4px solid transparent;
  border-top: 4px solid #191919;
  position: absolute;
  right: 0;
  top: calc(50% - 2px);
  transition: all 400ms cubic-bezier(0.77, 0, 0.175, 1);
}
.start-project__form_select.active {
  z-index: 3;
}
.start-project__form_select:hover span,
.start-project__form_select.active span {
  padding-left: 18px;
}
.start-project__form_select:hover i,
.start-project__form_select.active i {
  right: 18px;
}
.start-project__form_select ul {
  padding: 0;
  margin: 0;
  list-style: none;
  background-color: #191919;
  position: absolute;
  top: 40px;
  left: 0;
  width: 100%;
  height: 1px;
  opacity: 0.5;
  overflow: hidden;  
}
.start-project__form_select ul li {
  height: 40px;
  font-family: "Futura";
  font-weight: 500;
  font-size: 14px;  
  color: #f8f8eb;
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: all 400ms ease;
  margin-left: 20px;
  margin-right: 20px;  
  position: relative;
  transition: all 400ms cubic-bezier(0.77, 0, 0.175, 1);
}
.start-project__form_select ul li::before {
  content: "";
  display: block;
  width: 10px;
  height: 10px;
  background-repeat: no-repeat;
  background-position: 0 50%;
  background-image: url('~assets/icon_check.svg');
  background-size: 10px auto;
  transition: all 400ms cubic-bezier(0.77, 0, 0.175, 1);
  position: absolute;
  left: 0;
  top: 15px;
  transform: scaleY(0);
}
.start-project__form_select ul li:first-child {
  margin-top: 20px;
}
.start-project__form_select ul li:last-child {
  margin-bottom: 20px;
}
.start-project__form_select ul li:not(.current):hover {
  color: #f6c930;
}
.start-project__form_select ul li.current {
  padding: 0 18px;    
}
.start-project__form_select ul li.current::before {
  transform: scaleY(1);
}
.start-project__form_textarea {
  width: 100%;  
  position: relative;
}
.start-project__form_textarea textarea {
  width: 100%;
  height: 60px;
  resize: none;
  font-family: "Futura";
  font-weight: 500;
  font-size: 14px;  
  line-height: 18px;
  color: #191919;
  border: none;
  outline: none;
  background-color: transparent;
  z-index: 2;
  position: relative;
  transition: all 400ms cubic-bezier(0.77, 0, 0.175, 1);
}
.start-project__form_textarea textarea:hover {
  padding-left: 18px;
}
.start-project__form_textarea textarea:focus {
  padding-left: 18px;
  color: #f8f8eb;
  height: 80px;
}
.start-project__form_textarea textarea::-webkit-input-placeholder { /* Chrome/Opera/Safari */
  color: #191919;
  transition: all 400ms cubic-bezier(0.77, 0, 0.175, 1);
}
.start-project__form_textarea textarea::-moz-placeholder { /* Firefox 19+ */
  color: #191919;
  transition: all 400ms cubic-bezier(0.77, 0, 0.175, 1);
}
.start-project__form_textarea textarea:-ms-input-placeholder { /* IE 10+ */
  color: #191919;
  transition: all 400ms cubic-bezier(0.77, 0, 0.175, 1);
}
.start-project__form_textarea textarea:-moz-placeholder { /* Firefox 18- */
  color: #191919;
  transition: all 400ms cubic-bezier(0.77, 0, 0.175, 1);
}
.start-project__form_textarea textarea:focus::-webkit-input-placeholder { /* Chrome/Opera/Safari */
  color: #f8f8eb;
}
.start-project__form_textarea textarea:focus::-moz-placeholder { /* Firefox 19+ */
  color: #f8f8eb;
}
.start-project__form_textarea textarea:focus:-ms-input-placeholder { /* IE 10+ */
  color: #f8f8eb;
}
.start-project__form_textarea textarea:focus:-moz-placeholder { /* Firefox 18- */
  color: #f8f8eb;
}
.start-project__form_textarea--bg {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 1px;
  background-color: #191919;
  opacity: 0.5;
  transition: all 400ms cubic-bezier(0.77, 0, 0.175, 1);
  z-index: 0.5;
}
.start-project__form_textarea textarea:focus+.start-project__form_textarea--bg {
  height: 100%;
  z-index: 1;
  opacity: 1;
}
.start-project__form_button {
  position: relative;
  padding-bottom: 7px;
  cursor: pointer;
}
.start-project__form_button button {
  font-family: "Futura";
  font-weight: 500;
  font-size: 14px;  
  line-height: 24px;
  color: #191919;
  background-color: transparent;
  border: none;
  outline: none;
  padding: 0;
  text-align: left;  
  cursor: pointer;
}
.start-project__form_button--bg {
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
.start-project__form_button:hover button+.start-project__form_button--bg {
  transform: scaleY(0.1);
}
.start-project__copyright {
  font-family: "Futura";
  font-weight: 500;
  font-size: 14px;  
  line-height: 1;
  color: #191919;
  text-transform: uppercase;
  position: fixed;
  right: 80px;
  bottom: calc(80px - 8px);
}
</style>