<template>
  <div id="app">
<ul>
	<li>
		<h2>Frontend</h2>
    <p style="width:80%" data-value="80">HTML5</p>
		<progress max="100" value="80" class="html5">
			<div class="progress-bar">
				<span style="width: 80%">80%</span>
			</div>
		</progress>
		
	
    <p style="width:60%" data-value="60">CSS3</p>
		<progress max="100" value="60" class="css3">
			<div class="progress-bar">
				<span style="width: 60%">60%</span>
			</div>
		</progress>
		
    <p style="width:70%" data-value="70">jQuery</p>
		<progress max="100" value="70" class="css3">
			<div class="progress-bar">
				<span style="width: 70%">50%</span>
			</div>
		</progress>

     <p style="width:50%" data-value="50">javascript</p>
		<progress max="100" value="50" class="jquery">
			<div class="progress-bar">
				<span style="width: 50%">50%</span>
			</div>
		</progress>

    <p style="width:60%" data-value="50">sass</p>
		<progress max="100" value="60" class="jquery">
			<div class="progress-bar">
				<span style="width: 60%">60%</span>
			</div>
		</progress>
		
  <p style="width:90%" data-value="90">bootstrap</p>
		<progress max="100" value="90" class="html5">
			<div class="progress-bar">
				<span style="width: 90%">90%</span>
			</div>
		</progress>


    <p style="width:50%" data-value="50">javascript</p>
		<progress max="100" value="50" class="jquery">
			<div class="progress-bar">
				<span style="width: 50%">50%</span>
			</div>
		</progress>
		
    <h2></h2> 
    	<h2>cmd</h2>
    <p style="width:55%" data-value="55">Wordpress</p>
		<progress max="100" value="55" class="jquery">
			<div class="progress-bar">
				<span style="width: 75%">55%</span>
			</div>
		</progress>

    <h2></h2>
    	<h2>Design</h2>

     <p style="width:30%" data-value="30">Photoshop</p>
		<progress max="100" value="30" class="jquery">
			<div class="progress-bar">
				<span style="width: 30%">30%</span>
			</div>
		</progress>

     <p style="width:35%" data-value="35">Illustrator</p>
		<progress max="100" value="35" class="jquery">
			<div class="progress-bar">
				<span style="width: 35%">35%</span>
			</div>
		</progress>
    	 
		
	</li>
	<li>
		<h2>Backend</h2>
		
    <p style="width:75%" data-value="75">java</p>
		<progress max="100" value="75" class="php">
			<div class="progress-bar">
				<span style="width: 75%">75%</span>
			</div>
		</progress>
		
	
    <p style="width:80%" data-value="65">PHP</p>
		<progress max="100" value="80" class="php">
			<div class="progress-bar">
				<span style="width: 80%">80%</span>
			</div>
		</progress>
		
	
    <p style="width:65%" data-value="35">java 2EE</p>
    <progress max="100" value="65" class="node-js">
			<div class="progress-bar">
				<span style="width: 65%">65%</span>
			</div>
		</progress>
    
    <p style="width:60%" data-value="60">Laravel</p>
    <progress max="100" value="60" class="node-js">
			<div class="progress-bar">
				<span style="width: 60%">60%</span>
			</div>
		</progress>	

    <p style="width:40%" data-value="40">Vue.js</p>
    <progress max="100" value="40" class="jquery">
			<div class="progress-bar">
				<span style="width: 60%">40%</span>
			</div>
		</progress>	
     <h2></h2>
    	<h2>Base de Données</h2>
    <p style="width:55%" data-value="55">SQL </p>
		<progress max="100" value="55" class="jquery">
			<div class="progress-bar">
				<span style="width: 55%">55%</span>
			</div>
		</progress>

     <p style="width:75%" data-value="75">MYSQL</p>
		<progress max="100" value="75" class="php">
			<div class="progress-bar">
				<span style="width: 75%">75%</span>
			</div>
		</progress>

     <p style="width:40%" data-value="40">ORACLE</p>
		<progress max="100" value="40" class="jquery">
			<div class="progress-bar">
				<span style="width: 40%">40%</span>
			</div>
		</progress>


    <h2></h2>
    	<h2>	Méthodes d’analyse </h2>

     <p style="width:55%" data-value="55">UML</p>
		<progress max="100" value="55" class="jquery">
			<div class="progress-bar">
				<span style="width: 55%">55%</span>
			</div>
		</progress>

     <p style="width:50%" data-value="50">Merise</p>
		<progress max="100" value="50" class="jquery">
			<div class="progress-bar">
				<span style="width: 50%">50%</span>
			</div>
		</progress>
    	 
		
	</li>
</ul>

  </div>
</template>

<style scoped>
@import url(https://fonts.googleapis.com/css?family=Expletus+Sans);

* { 
	box-sizing: border-box;
  padding: 0;
  margin: 0;
}

body {
margin: 50px auto 0;
max-width: 800px;
font-family: "Expletus Sans", sans-serif;
}

li {

	width: 50%;
	float: left;
	list-style-type: none;
	
	padding-right: 5.3333333%;
}

li:nth-child(even) { margin-bottom: 5em;}

h2 {
	margin: 0 0 1.5em;
	border-bottom: 1px solid #ccc;
	
	padding: 0 0 .25em;
}



progress[value] {

	appearance: none;
	
	border: none;
	
	
	width: 100%; height: 20px;
	
	  background-color: whiteSmoke;
	  border-radius: 3px;
	  box-shadow: 0 2px 3px rgba(0,0,0,.5) inset;
	
	color: royalblue;
	
	position: relative;
	margin: 0 0 1.5em; 
}



progress[value]::-webkit-progress-bar {
	background-color: whiteSmoke;
	border-radius: 3px;
	box-shadow: 0 2px 3px rgba(0,0,0,.5) inset;
}

progress[value]::-webkit-progress-value {
	position: relative;
	
	background-size: 35px 20px, 100% 100%, 100% 100%;
	border-radius:3px;
	

	animation: animate-stripes 5s linear infinite;
}

@keyframes animate-stripes { 100% { background-position: -100px 0; } }


progress[value]::-webkit-progress-value:after {
	content: '';
	position: absolute;
	
	width:5px; height:5px;
	top:7px; right:7px;
	
	background-color: white;
	border-radius: 100%;
}

progress[value]::-moz-progress-bar {
	background-image:
	-moz-linear-gradient( 135deg,
													 transparent,
													 transparent 33%,
													 rgba(0,0,0,.1) 33%,
													 rgba(0,0,0,.1) 66%,
													 transparent 66%),
    -moz-linear-gradient( top,
														rgba(255, 255, 255, .25),
														rgba(0,0,0,.2)),
     -moz-linear-gradient( left, #09c, #f44);
	
	background-size: 35px 20px, 100% 100%, 100% 100%;
	border-radius:3px;
	

}


.progress-bar {
	background-color: whiteSmoke;
	border-radius: 3px;
	box-shadow: 0 2px 3px rgba(0,0,0,.5) inset;

	width: 100%; height:20px;
}

.progress-bar span {
	background-color: royalblue;
	border-radius: 3px;
	
	display: block;
	text-indent: -9999px;
}

p[data-value] { 
  
  position: relative; 
  color: black
}


p[data-value]:after {
	content: attr(data-value) '%';
	position: absolute; right:0;
}





.html5::-webkit-progress-value,
.python::-webkit-progress-value  {
	background-image:
	-webkit-linear-gradient( 135deg,
													 transparent,
													 transparent 33%,
													 rgba(0,0,0,.1) 33%,
													 rgba(0,0,0,.1) 66%,
													 transparent 66%),
    -webkit-linear-gradient( top,
														rgba(255, 255, 255, .25),
														rgba(0,0,0,.2)),
     -webkit-linear-gradient( left, #09c, #f44);
}

.css3::-webkit-progress-value,
.php::-webkit-progress-value 
{
	background-image:
	-webkit-linear-gradient( 135deg,
													 transparent,
													 transparent 33%,
													 rgba(0,0,0,.1) 33%,
													 rgba(0,0,0,.1) 66%,
													 transparent 66%),
    -webkit-linear-gradient( top,
														rgba(255, 255, 255, .25),
														rgba(0,0,0,.2)),
     -webkit-linear-gradient( left, #09c, #ff0);
}

.jquery::-webkit-progress-value,
.node-js::-webkit-progress-value 
{
	background-image:
	-webkit-linear-gradient( 135deg,
													 transparent,
													 transparent 33%,
													 rgba(0,0,0,.1) 33%,
													 rgba(0,0,0,.1) 66%,
													 transparent 66%),
    -webkit-linear-gradient( top,
														rgba(255, 255, 255, .25),
														rgba(0,0,0,.2)),
     -webkit-linear-gradient( left, #09c, #690);
}

.html5::-moz-progress-bar,
.php::-moz-progress-bar {

	background-image:
	-moz-linear-gradient( 135deg,
													 transparent,
													 transparent 33%,
													 rgba(0,0,0,.1) 33%,
													 rgba(0,0,0,.1) 66%,
													 transparent 66%),
    -moz-linear-gradient( top,
														rgba(255, 255, 255, .25),
														rgba(0,0,0,.2)),
     -moz-linear-gradient( left, #09c, #f44);
}

.css3::-moz-progress-bar,
.php::-moz-progress-bar {


	background-image:
	-moz-linear-gradient( 135deg,
													 transparent,
													 transparent 33%,
													 rgba(0,0,0,.1) 33%,
													 rgba(0,0,0,.1) 66%,
													 transparent 66%),
    -moz-linear-gradient( top,
														rgba(255, 255, 255, .25),
														rgba(0,0,0,.2)),
     -moz-linear-gradient( left, #09c, #ff0);
}

.jquery::-moz-progress-bar,
.node-js::-moz-progress-bar {

	background-image:
	-moz-linear-gradient( 135deg,
													 transparent,
													 transparent 33%,
													 rgba(0,0,0,.1) 33%,
													 rgba(0,0,0,.1) 66%,
													 transparent 66%),
    -moz-linear-gradient( top,
														rgba(255, 255, 255, .25),
														rgba(0,0,0,.2)),
     -moz-linear-gradient( left, #09c, #690);
}

</style>