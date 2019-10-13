<template>
  <div id="app">

<div class="contact">
      <h4 class="bigcard wow fadeInRight">contact nous</h4>

      <div class="card  wow bounceInDown">
        <form id="gform" method="POST" class="pure-form pure-form-stacked" data-email="from_email@example.com"
          action="https://script.google.com/macros/s/AKfycbyC8aZeEJAJXgd5R3m0ujkVWWBrP3vQeVdZME0YBr0sqIyj1t_Z/exec">
		  
          <div class="leftbox wow slideInLeft" data-wow-delay="1s">
            <textarea name="message" COLS="35" ROWS="20" placeholder="Your message" id="message" required></textarea>

          </div>
          <div class="rightbox wow slideInRight" data-wow-delay="1s">
            <div class="send">
              <input class="sendbutton" type="submit" value="Send">
            </div>
            <div class="line">
              <div id="input">
                <input type="text" placeholder="Name" id="name" name="name" >
                <input type="email" name="email" placeholder="E-mail" id="email" required>
              </div>
            </div>
          </div>
        </form>
      </div>
		</div>

  </div>
</template>

<style scoped>
.bigcard{
  text-align: center;
}

.contact {
	margin: auto;
    background:#3CB371;
    width: 1536px;
    height: 754px;
}

.contact p {
	text-align: center;
	font-family: helvetica, arial;
	font-size: 16px;
	font-weight: 200;
  color: white;
}


.card{
background: white;
	margin: auto;
	height: 400px;
	width: 650px;
	border: solid 3px black;
	position: relative;
	
}

.leftbox{
	float: left;
	width: 49%;
	overflow: hidden;
	
}

textarea {
	margin: 20px;
	border:none;
	resize: none; 
	font-size: 12px;
font-family: helvetica, arial;
}



.rightbox {
	float: right;
	width: 50%;

}


.send input{
	float: right;
	display: block;
	margin: 20px;
	height: 90px;
	width: 70px;
	background-color: #404040;
	color: white;
	border-style: none;
	border-radius: 5px;
	font-size: 16px;
	font-weight: bold;
	font-family: helvetica, arial;
	letter-spacing: 2px;

}

.line {
	margin-top: 10%;
	height: 340px;
	border-left: solid 1px black;
}

.input {
	padding-top: 180px;
}

#input input {
	margin: 20px 20px 40px 30px;
	display: block;
	width: 265px;
	font-size: 16px;
	border: none;
	border-bottom: dotted 2px black;
font-family: helvetica;
}
</style>