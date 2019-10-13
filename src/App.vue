<template>
  <div id="app">

<navbar/>


  <router-view></router-view>
<headsocial/>

  </div>
</template>




<script>

import navbar from './components/navbar.vue';
import headsocial from './components/headsocial.vue';

import Darkmode from 'darkmode-js';
new Darkmode().showWidget();



export default {

  name: 'app',
  components: {
  navbar,
  headsocial
  }
}



</script>



<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
body {
    background: -webkit-linear-gradient(90deg, #16222A 10%, #3A6073 90%); /* Chrome 10+, Saf5.1+ */
    background:    -moz-linear-gradient(90deg, #16222A 10%, #3A6073 90%); /* FF3.6+ */
    background:     -ms-linear-gradient(90deg, #16222A 10%, #3A6073 90%); /* IE10 */
    background:      -o-linear-gradient(90deg, #16222A 10%, #3A6073 90%); /* Opera 11.10+ */
    background:         linear-gradient(90deg, #16222A 10%, #3A6073 90%); /* W3C */     
  }
  .parent2 {
    top:15px;
    left:15px;
    position:fixed;
   display:block;
    width:100px;
    height:100px;
    background-color:transparent;
    border-radius:50%;
    z-index:20;
    -webkit-box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.75);
  -moz-box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.75);
  box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.75);
  }
  .test1 {
    width:60%;
    height:60%;
    background-color:dimGray;
    border-radius:50%;
    position:absolute;
    color:white;
    text-align:center;
    line-height:70px;
      top:25%;
    left:25%;
    z-index:19;
    transition: all 500ms cubic-bezier(0.680, -0.550, 0.265, 1.550);
      position:absolute;
  }
  .test2 {
    width:60%;
    height:60%;
    background-color:dimGray;
    border-radius:50%;
    position:absolute;
    color:white;
    text-align:center;
    line-height:70px;
      top:25%;
    left:25%;
    z-index:19;
    transition: all 500ms cubic-bezier(0.680, -0.550, 0.265, 1.550) .2s;
  }
  .test3 {
    width:60%;
    height:60%;
    background-color:dimGray;
    border-radius:50%;
    position:absolute;
    color:white;
    text-align:center;
    line-height:70px;
      top:25%;
    left:25%;
    transition: all 500ms cubic-bezier(0.680, -0.550, 0.265, 1.550) .4s;  
  }
    .test4 {
    width:60%;
    height:60%;
    background-color:dimGray;
    border-radius:50%;
    position:absolute;
    color:white;
    text-align:center;
    line-height:70px;
    top:25%;
    left:25%;
    transition: all 500ms cubic-bezier(0.680, -0.550, 0.265, 1.550) .6s;  
  }
  .mask2 {
    top:15px;
    left:15px;
    width:100px;
    height:100px;
    background:darkSlateGray;
    border-radius:50%;
    position:absolute;
    z-index:21;
    color:white;
    text-align:center;
    line-height:120px;
    cursor:pointer;
    position:fixed;
  }

*,
*::before,
*::after {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
  line-height: 1.15;
  -webkit-text-size-adjust: 100%;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}

article, aside, figcaption, figure, footer, header, hgroup, main, nav, section {
  display: block;
}

body {
  margin: 0;
  font-family: "Lato", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #212529;
  text-align: left;
  background-color: #fff;
}
header{
  height: 754px!important;

}


.masthead .masthead-avatar {
    width: 15rem;
}


p{
  color:white; 
  font-family: "Courier";
  font-size: 20px;
  margin: 10px 0 0 10px;
  white-space: nowrap;
  overflow: hidden;
  width: 30em;
  animation: type 4s steps(60, end); 
}

p:nth-child(2){
  animation: type2 8s steps(60, end);
}

p a{
  color: lime;
  text-decoration: none;
}

span{
  animation: blink 1s infinite;
}

@keyframes type{ 
  from { width: 0; } 
} 

@keyframes type2{
  0%{width: 0;}
  50%{width: 0;}
  100%{ width: 100; } 
} 

@keyframes blink{
  to{opacity: .0;}
}

::selection{
  background: black;
}





</style>



