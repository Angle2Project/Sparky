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
      <div class="start-project__h1">
        <div class="l1">
          <span>{{h1Text}}</span>
        </div>  
        <span class="l2">{{h1Text}}</span>
        <span class="l3">{{h1Text}}</span>
        <span class="l4">{{h1Text}}</span>
        <span class="l5">{{h1Text}}</span>
      </div>
      <div class="start-project__form">
        <form action="" @submit="formSubmit">
          <div class="start-project__form_row">
            <div class="start-project__form_coll">
              <div class="start-project__form_input" :class="formErrors.name ? 'error' : ''">
                <input type="text" placeholder="Your Name Company" name="name" autocomplete="off" @focus="focusError">
                <div class="start-project__form_input--bg"></div>
                <div class="start-project__form_error"></div>
                <div class="start-project__form_error--text">
                  <span>Please enter your name</span>
                </div>
              </div>
            </div>
            <div class="start-project__form_coll">
              <div class="start-project__form_input" :class="formErrors.email ? 'error' : ''">
                <input type="text" placeholder="Your E-mail" name="email" autocomplete="off" @focus="focusError">
                <div class="start-project__form_input--bg"></div>
                <div class="start-project__form_error"></div>
                <div class="start-project__form_error--text">
                  <span>Please enter your email</span>
                </div>
              </div>
            </div>
          </div>
          <div class="start-project__form_row select">
            <div class="start-project__form_select" :class="[formErrors.select ? 'error' : '', selectActive ? 'active' : '']">
              <span @click="selectClick">
                <b data-name="subject">Select Subject</b>
              </span>
              <i></i>
              <ul>
                <li class="current" @click="selectListClick">Select Subject</li>
                <li @click="selectListClick">New business</li>
                <li @click="selectListClick">General inquiry</li>
              </ul>
              <div class="start-project__form_error--text">
                <span>Please Select Subject</span>
              </div>
            </div>
          </div>
          <div class="start-project__form_row">
            <div class="start-project__form_textarea" :class="formErrors.msg ? 'error' : ''">
              <textarea name="msg" id="" placeholder="Start typing message here ..." autocomplete="off" @focus="focusError"></textarea>
              <div class="start-project__form_textarea--bg"></div>
              <div class="start-project__form_error"></div>
                <div class="start-project__form_error--text">
                  <span>Please enter your email</span>
                </div>
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
    </section>
  </template>

<script>
  export default {
    data : function(){
      return {
        hover : false,
        selectActive : false,
        h1Text : 'get in touch',
        formErrors : {
          name : false,
          email : false,
          select : false,
          msg : false
        }
      }
    },
    computed : {
      startProject : function(){
        return this.$store.state.startProject;
      },
      pageName : function(){
        return this.$store.state.pageName;
      }      
    },
    methods : {
      reset : function(){
        var app = this;
        app.h1Text = 'get in touch'
        app.formErrors.name = false;
        app.formErrors.email = false;
        app.formErrors.select = false;
        app.formErrors.msg = false;        
        document.querySelector('.start-project input[name="name"]').value = '';
        document.querySelector('.start-project input[name="email"]').value = '';        
        document.querySelector('.start-project textarea').value = '';
        document.querySelector('.start-project__form_select b').innerText = 'Select Subject';
        document.querySelectorAll('.start-project__form_select ul li').forEach( function(el, i) {
          el.classList.remove('current');
        });
        document.querySelector('.start-project__form_select ul li:first-child').classList.add('current');
      },
      startProjectHover : function(e){
        var app = this;
        var name = app.$store.state.pageName;        
        if(e.type == 'mouseenter'){
          app.hover = true;
          TweenMax.to('.start-project__button', 0.25, {scale : 1.2, ease: Power2.easeIn});
          TweenMax.to('.start-project__button_hover', 0.25, {scale : 1, ease: Power2.easeIn});
          TweenMax.to('.start-project__button_1, .start-project__button_2', 0.25, {backgroundColor : (app.startProject ? '#191919':'#f6c930'), ease: Power2.easeIn});
          TweenMax.to('.start-project__button_2', 0.25, {width : 16, ease: Power2.easeIn});
          if(name == 'intro' || name == 'description')return false;
          TweenMax.to('.start-project__text span', 0.3, {y : '0%', ease: Power2.easeIn, force3D : false});
        }else{
          app.hover = false;
          TweenMax.to('.start-project__button', 0.25, {scale : 1, ease: Power2.easeIn});
          TweenMax.to('.start-project__button_hover', 0.25, {scale : 0, ease: Power2.easeIn});
          TweenMax.to('.start-project__button_1, .start-project__button_2', 0.25, {backgroundColor : '#191919', ease: Power2.easeIt});
          TweenMax.to('.start-project__button_2', 0.25, {width : (app.startProject ? 16 : 12), ease: Power2.easeIn, onComplete : function(){
            if(!app.startProject)TweenMax.set('.start-project__button_hover', {clearProps : 'all'});            
          }});
          if(name == 'intro' || name == 'description' || app.startProject)return false;
          TweenMax.to('.start-project__text span', 0.3, {y : '100%', ease: Power2.easeIn, force3D : false});
        }        
      },
      startProjectClick : function(e){        
        var app = this;        
        if(app.startProject){
          var tlEnd = new TimelineMax({onComplete : function(){
            TweenMax.set('.start-project__form_row', {clearProps : 'all'});
            app.$store.commit('startProject', false);
          }}).staggerTo(document.querySelectorAll('.start-project__form_row'), 0.6, {opacity:0, y : '-100%', scaleY : 0.5, force3D:true, ease: Power4.easeOut}, 0.05, 'uno')
          .to('.start-project__h1 .l1 span', 0.7, {y : '100%', ease: Power4.easeInOut, onComplete : function(){
            TweenMax.set('.start-project__h1, .start-project__form', {display : 'none'})
          }}, 'uno+=0.2')
          .to('.copyright span', 0.4, {y : '100%', ease: Power2.easeOut}, 'uno+=0.2')
          .to('.start-project__text span', 0.4, {y : '100%', ease: Power4.easeIn, onComplete : function(){
            document.querySelector('.start-project__text span').innerText = 'start a project';
          }}, 'uno')
          if(app.pageName == 'intro' || app.pageName == 'description'){
            tlEnd.to('.start-project__text span', 0.4, {y : '0%', color : '#191919', ease: Power4.easeOut})          
          }          
          tlEnd.to('.start-project__bg', 0.6, {scale : 0, ease: Power3.easeIn}, 'uno+=0.7')
          .to('#app-logo .st1', 0.4, {fill : '#f6c930'}, 'uno+=0.9')
          .to(document.querySelectorAll('#app-logo .st2'), 0.7, {fill : function(){
            var color;
            if(app.pageName == 'team'){
              color = '#f8f8eb';
            }else{
              color = '#191919';
            }            
            return color;
          }}, 'uno+=0.9')
          .to('.start-project__button', 0.4, {backgroundColor : '#f6c930', ease: Power2.easeIn}, 'uno+=0.7')
          .to('.start-project__button_hover', 0.4, {backgroundColor : function(){
            var color;            
            switch (app.pageName) {
                case 'intro':
                  color = '#f0f0d9';
                  break;
                case 'description':
                  color = '#f8f8eb';
                  break;
                case 'services':
                  color = '#191919';
                  break;
                case 'clients':
                  color = '#f8f8eb';
                  break;
                case 'team':
                  color = '#191919';
                  break;
                case 'contacts':
                  color = '#f8f8eb';
                  break;
                default:
                  // statements_def
                  break;
              }
            return color;
          }, borderColor : '#f6c930', ease: Power3.easeIn, onComplete : function(){
            if(!app.hover)TweenMax.set('.start-project__button_hover', {clearProps : 'all'});
          }}, 'uno+=0.7')
          .to('.start-project__button_1, .start-project__button_2', 0.7, {backgroundColor : function(){
            return app.hover ? '#f6c930' : '#191919';            
          }, ease: Power4.easeInOut}, 'uno+=0.7')
          .to('.start-project__button_2', 0.7, {width : function(){
            return app.hover ? 16 : 12;
          }, ease: Power4.easeInOut}, 'uno+=0.7')
          .to('.start-project__button_1', 0.4, {rotation : 0, x : 0, y : 0, ease: Power4.easeInOut}, 'uno+=0.7')
          .to('.start-project__button_2', 0.4, {rotation : 0, x : 0, y : 0, ease: Power4.easeInOut}, 'uno+=0.7')

          
        }else{
          app.reset();
          app.$store.commit('startProject', true);
          var scale = (window.innerWidth / 50) * 2.55;
          var tlStart = new TimelineMax().to('.start-project__button', 0.4, {backgroundColor : '#f8f8eb', ease: Power2.easeIn}, 'uno')
          .to('#app-logo .st1', 0.4, {fill : '#f8f8eb'}, 'uno+=0.3')
          .to(document.querySelectorAll('#app-logo .st2'), 0.7, {fill : '#191919'}, 'uno+=0.3')
          .to('.start-project__button_hover', 0.4, {backgroundColor : '#f6c930', borderColor : '#f8f8eb', ease: Power3.easeIn}, 'uno')
          .to('.start-project__button_1, .start-project__button_2', 0.7, {backgroundColor : '#191919', ease: Power4.easeInOut}, 'uno')
          .to('.start-project__button_1', 0.4, {rotation : 45, x : 1, y : 3, ease: Power4.easeInOut}, 'uno')
          .to('.start-project__button_2', 0.4, {rotation : -45, x : 1, y : -3, ease: Power4.easeInOut}, 'uno')
          .to('.start-project__bg', 0.6, {scale : scale, ease: Power3.easeIn}, 'uno')
          .to('.start-project__text span', 0.4, {y : '100%', ease: Power4.easeIn, onComplete : function(){
            document.querySelector('.start-project__text span').innerText = 'close';
          }}, 'uno')          
          .to('.start-project__text span', 0.4, {y : '0%', color : '#191919', ease: Power4.easeOut})
          .set('.start-project__h1 ', {display : 'block'}, 'uno+=0.6')
          .fromTo('.start-project__h1 .l1 span', 1.2, {y:'130%'}, {y:'0%',ease: Back.easeOut.config(1.5)}, 'uno+=0.6')
          .to('.start-project__h1 .l2', 0.3, {y:'15%',ease: Power1.easeOut}, 'uno+=0.6')
          .to('.start-project__h1 .l3', 0.4, {y:'30%',ease: Power1.easeOut}, 'uno+=0.6')
          .to('.start-project__h1 .l4', 0.5, {y:'45%',ease: Power1.easeOut}, 'uno+=0.6')
          .to('.start-project__h1 .l5', 0.6, {y:'60%',ease: Power1.easeOut}, 'uno+=0.6')
          .to('.start-project__h1 .l3', 0.6, {y:'0%',ease: Power1.easeIn}, 'uno+=1.3')
          .to('.start-project__h1 .l4', 0.5, {y:'0%',ease: Power1.easeIn}, 'uno+=1.3')
          .to('.start-project__h1 .l5', 0.4, {y:'0%',ease: Power1.easeIn}, 'uno+=1.3')
          .to('.start-project__h1 .l2', 0.7, {y:'0%',ease: Power1.easeIn}, 'uno+=1.3')
          .to('.copyright span', 0.4, {y : '0%', color : '#191919', ease: Power2.easeOut}, 'uno+=1.3')
          .set('.start-project__form', {display : 'block'}, 'uno+=1.7')
          .staggerFrom(document.querySelectorAll('.start-project__form_row'), 0.6, {opacity:0, y : '100%', scaleY : 0.5, force3D:true, delay : 0, ease: Power4.easeOut}, 0.1, 'uno+=1.7')
          .set('.start-project__form_row', {clearProps : 'all'});         
        }        
      },
      selectClick : function(e){
        var app = this;        
        app.formErrors.select = false;        
        if(!app.selectActive){          
          app.selectActive = true;
          var h = (document.querySelectorAll('.start-project__form_select ul li').length * 40) + 40;
          TweenMax.to('.start-project__form_select ul', 0.4, {height : h, opacity : 1, ease: Power3.easeInOut});
        }else{
          TweenMax.to('.start-project__form_select ul', 0.4, {height : 1, opacity : 0.5, ease: Power4.easeInOut, onComplete : function(){
            app.selectActive = false;
          }});
        }        
      },
      selectListClick : function(e){ 
      var app = this;       
        var val = e.target.innerText;        
        new TimelineMax().to('.start-project__form_select b', 0.2, {scaleY : 0, onComplete : function(){
          document.querySelector('.start-project__form_select b').innerText = val;  
        }})
        .to('.start-project__form_select b', 0.2, {scaleY : 1});        
        document.querySelectorAll('.start-project__form_select ul li').forEach( function(el, i) {
          el.classList.remove('current');
        });
        e.currentTarget.classList.add('current');
        TweenMax.to('.start-project__form_select ul', 0.4, {height : 1, opacity : 1, delay : 0.2, ease: Power3.easeInOut, onComplete : function(){
          app.selectActive = false;
        }});
      },
      documentClick : function(e){
        var app = this;
        if(app.selectActive && app.closest(e.target, '.start-project__form_select') == null){
          TweenMax.to('.start-project__form_select ul', 0.4, {height : 1, opacity : 0.5, ease: Power4.easeInOut, onComplete : function(){
            app.selectActive = false;
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
      },
      formSubmit : function(e){
        var app = this;
        e.preventDefault();
        var name = e.target.querySelector('input[name="name"]').value.trim();
        var email = e.target.querySelector('input[name="email"]').value.trim();
        var subject = e.target.querySelector('[data-name="subject"]').innerText;
        var msg = e.target.querySelector('textarea').value.trim();
        if(!name.length){
          app.formErrors.name = true;
        }
        if(!email.length){
          app.formErrors.email = true;
        }
        if(subject == 'Select Subject'){
          app.formErrors.select = true;
        }
        if(!msg.length){
          app.formErrors.msg = true;
        }
        //if(!email.length || !email.length || subject == 'Select Subject' || !msg.length)return false;
        var tl = new TimelineMax().to('.start-project__h1 .l1 span', 0.7, {y : '130%', ease: Power4.easeInOut, onComplete : function(){          
          app.h1Text = 'thank you';
        }}, 'uno')
        .staggerTo(document.querySelectorAll('.start-project__form_row'), 0.6, {opacity:0, y : '-100%', scaleY : 0.5, force3D:true, ease: Power4.easeOut}, 0.05, 'uno')
        .to('.start-project__h1 .l1 span', 1.2, {y:'0%',ease: Back.easeOut.config(1.5)}, 'dos')
        .to('.start-project__h1 .l2', 0.3, {y:'15%',ease: Power1.easeOut}, 'dos')
        .to('.start-project__h1 .l3', 0.4, {y:'30%',ease: Power1.easeOut}, 'dos')
        .to('.start-project__h1 .l4', 0.5, {y:'45%',ease: Power1.easeOut}, 'dos')
        .to('.start-project__h1 .l5', 0.6, {y:'60%',ease: Power1.easeOut}, 'dos')
        .to('.start-project__h1 .l3', 0.6, {y:'0%',ease: Power1.easeIn}, 'dos+=0.7')
        .to('.start-project__h1 .l4', 0.5, {y:'0%',ease: Power1.easeIn}, 'dos+=0.7')
        .to('.start-project__h1 .l5', 0.4, {y:'0%',ease: Power1.easeIn}, 'dos+=0.7')
        .to('.start-project__h1 .l2', 0.7, {y:'0%',ease: Power1.easeIn}, 'dos+=0.7')
        
      },
      focusError : function(e){
        var app = this;
        var name = e.target.name;        
        if(app.formErrors[name])app.formErrors[name] = false;        
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
    /*transform: scale(0);*/
    position: absolute;
    right: 55px;    
    top: 55px;
  }
  .start-project__button {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: #f6c930;
    position: relative;
    cursor: pointer;    
    /*transform: scale(0);*/
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
  .start-project__h1 {
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
.start-project__h1 span {
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
.start-project__h1 .l1 {
  overflow:hidden;
  z-index: 5;  
  position: relative;
  padding-bottom: 0;
  overflow: hidden;
  background-color: #f6c930;
}
.start-project__h1 .l1 span {    
  position: static; 
  display: inline-block; 
  transform: translateY(-102%);
}
.start-project__h1 .l2 {
  z-index: 4;
}
.start-project__h1 .l3 {
  z-index: 3;
}
.start-project__h1 .l4 {
  z-index: 2;
}
.start-project__h1 .l5 {
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

.start-project__form_input.error input::-webkit-input-placeholder { /* Chrome/Opera/Safari */
  transform: scaleY(0); 
}
.start-project__form_input.error input::-moz-placeholder { /* Firefox 19+ */
  transform: scaleY(0); 
}
.start-project__form_input.error input:-ms-input-placeholder { /* IE 10+ */
  transform: scaleY(0); 
}
.start-project__form_input.error input:-moz-placeholder { /* Firefox 18- */
  transform: scaleY(0); 
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
.error .start-project__form_input--bg {
  background-color: #fff;
  opacity: 1;
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
  z-index: 5;
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
  position: relative;
  z-index: 1;
}
.start-project__form_select  b {
  display: inline-block;
  font-weight: 500;
  transition: all 400ms cubic-bezier(0.77, 0, 0.175, 1);
}
.start-project__form_select.error  b {
  transform: scaleY(0)!important;
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
.start-project__form_select.active i {
  transform: rotate(180deg);
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
  transition: background-color 400ms cubic-bezier(0.77, 0, 0.175, 1);
}
.start-project__form_select.error ul {
  background-color: #fff;
  opacity: 1!important;
}
.start-project__form_select.error i {
  border-top-color: #fff;
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

.start-project__form_textarea.error textarea::-webkit-input-placeholder { /* Chrome/Opera/Safari */
  transform: scaleY(0);
}
.start-project__form_textarea.error textarea::-moz-placeholder { /* Firefox 19+ */
  transform: scaleY(0);
}
.start-project__form_textarea.error textarea:-ms-input-placeholder { /* IE 10+ */
  transform: scaleY(0);
}
.start-project__form_textarea.error textarea:-moz-placeholder { /* Firefox 18- */
  transform: scaleY(0);
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
.error .start-project__form_textarea--bg {
  background-color: #fff;
  opacity: 1;
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
.start-project .start-project__form_error {
  position: absolute;
  top: calc(50% - 6px);
  right: 15px;
  width: 1px;
  height: 12px;
  opacity: 0;
  transition: all 400ms cubic-bezier(0.77, 0, 0.175, 1);
}
.start-project .error .start-project__form_error {
  opacity: 1;
}
.start-project .start-project__form_error::before {
  content: "";
  display: block;
  width: 1px;
  height: 8px;
  background-color: #fff;
  position: absolute;
  top: 0;
}
.start-project .start-project__form_error::after {
  content: "";
  display: block;
  width: 1px;
  height: 1px;
  background-color: #fff;
  position: absolute;
  bottom: 0;
}
.start-project__form_error--text {
  font-family: "Futura";
  font-weight: 500;
  font-size: 14px;  
  line-height: 18px;
  color: #191919;
  position: absolute;
  top: calc(50% - 9px);
  left: 0;
  z-index: 0;
  overflow: hidden;
}
.start-project__form_textarea .start-project__form_error--text {
  top: 2px;
}
.start-project__form_textarea .start-project__form_error {
  top: 5px;
}
.start-project__form_textarea:hover .start-project__form_error--text span {
  padding: 0 20px;
}
.start-project__form_error--text span {
  transform: translateY(100%);
  display: inline-block;
  transition: all 400ms cubic-bezier(0.77, 0, 0.175, 1);
  background-color: #f6c930;
}
.error .start-project__form_error--text span {
  transform: translateY(0%);
}
.start-project__form_input:hover .start-project__form_error--text span {
  padding: 0 20px;
}
</style>