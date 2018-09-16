<template>
  <ul id="app-navigation">
    <li>
      <span></span>
    </li>
    <li>
      <span></span>
    </li>
    <li>
      <span></span>
    </li>
    <li>
      <span></span>
    </li>
    <li>
      <span></span>
    </li>
    <li>
      <span></span>
    </li>
  </ul>
</template>

<script>
  export default {
    data : function() {
      return {

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
}
#app-navigation li {
  margin-bottom: 6px;
  height: 30px;    
}
#app-navigation li span {
  display: block;
  height: 30px;
  width: 1px;
  background-color: #191919;
}
#app-navigation li:last-child {
  margin-bottom: 0;
}
#app-navigation li.current {
  width: 100%;
}
</style>

