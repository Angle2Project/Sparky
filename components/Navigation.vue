<template>
  <ul id="app-navigation">
    <li v-for="(item, index) in list" :key="index" :class="item.current ? 'current' : ''" @mouseenter="hover" @mouseleave="hover">
      <nuxt-link :to="item.url">
        <div class="item__name">
          <span>{{item.name}}</span>
        </div>
        <i></i>
      </nuxt-link>
    </li>    
  </ul>
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
      list : function(){
        return this.$store.state.navigation.list;
      },
      appStartAnimation : function(){
        return this.$store.state.appStartAnimation;
      }
    },
    methods : {
      hover : function(e){
        if(this.appStartAnimation)return false;
        if(e.currentTarget.classList.contains('current'))return false;        
        var s = e.currentTarget.querySelector('span')
        var i = e.currentTarget.querySelector('i');
        var t = e.currentTarget.querySelector('.item__name');
        if(e.type == 'mouseenter'){          
          var w = s.clientWidth;          
          TweenMax.to(i, 0.2, {width : '7px'});
          TweenMax.to(t, 0.2, {width : w});
        }else{
          TweenMax.to(i, 0.2, {width : '1px'});
          TweenMax.to(t, 0.2, {width : 0});
        }
      }
    }    
  };
</script>

<style>
#app-navigation {
  width: 83px;
  position: fixed;
  right: 0;
  top: 50%;
  transform: translateY(-50%);  
  margin: 0;
  padding: 0;
  list-style: none;
  z-index: 5;
}
#app-navigation li {
  margin-bottom: 6px;
  height: 30px;
  cursor: pointer;
}
#app-navigation li .item__name {
  display: flex;
  align-items: center;
  position: absolute;
  right: calc(100% + 8px);
  height: 30px;
  font: 500 14px/1 'Futura';
  color: #191919;
  white-space: nowrap;
  overflow: hidden;  
  width: 0%;
  justify-content: flex-end;
  text-transform: lowercase;
}
#app-navigation li .item__name span {
  display: inline-block;  
  
}
#app-navigation li:last-child {
  margin-bottom: 0;
}
#app-navigation li i {
  display: block;
  background-color: #191919;
  width: 83px;
  height: 100%;
  top: 0;
  left: 0;
  transform: translateX(100%);
}
</style>

