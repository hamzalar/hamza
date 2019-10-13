<template>
  <div id="app">
  <div class="container">
    
    <div class="header align-items-center justify-content-center">
      
      <div class="row">
      
        <div class="menu col-6">
          <div class="text col-12">
            <div class="top_text">
              <span>salut je suis </span>
            </div>
            <div class="center_text">
              <span>hamza bichri</span>
            </div>
            <div class="bottom_text">
              <span>devlopper web</span>
            </div>
            
          
            <div class="my_info">
              <a class="btn" href="https://drive.google.com/file/d/1f72wG-lfO_LImxkLgxeXU1rTndTMJGgc/view?usp=sharing" target="block">Download CV <i class="fa fa-arrow-down"></i></a>
             <button class="btn"><router-link to="contact">Contact <i class="fa fa-arrow-right"></i></router-link></button>
            </div> 
            
          </div>
          
        
        </div>
        
        <div class="photo_frame col-5">
           <div class="photo">
             <img src="../assets/hamza.jpg">
          </div>
        </div>
        
      </div>
      
    </div>
    
    
    <div class="about_me">
      <div class="title">
        <h2>À PROPOS DE MOI</h2>
      </div>
      
      <div class="row">
        <div class="about_text col-md-8">
      
          <div class="my_info">
              <a class="btn" href="https://drive.google.com/file/d/1f72wG-lfO_LImxkLgxeXU1rTndTMJGgc/view?usp=sharing" target="block">Download CV<i class="fa fa-arrow-down"></i></a>

          </div>
       </div>
        <div class="portfolio col-md-4 col-sm-12">
          <span class="size_45">"</span>
        
<span>
            <b class="size_32">confiance</b> volontaire <b class="size_24">polyvalent </b> patient 
            <b class="size_34">secure</b> Curieux <b class="size_25">Optimiste</b>Rigoureuxl 
            <b class="size_22">free</b>
          </span>
        <span style="font-size: 25px">"</span>
        </div>
      </div>
      
    </div>
    
  
    
   
 

   

<div class="get_in_touch col-12">
    <div class="title">
        <h2>mes project</h2>
      </div>

<div class="row">
  

  
  <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
    <center>
    <div class="displayWrapper">
      <div class="displayBox">
        <img src="../assets/gestionpersonne.png" alt="image1"/>
      	Desktop Application avec JAVA et SQL pour  application gestion des personnes
      </div>
    </div>
      <h4>project de gerer des personnes</h4>
    </center>
  
  </div>
  
  <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
    <center>
    <div class="displayWrapper">
      <div class="displayBox">
        <img src="../assets/bangsong.png" alt="image1"/>
        	Desktop Application avec JAVA et SQL pour une Banque du sang
      </div>
    </div>
      <h4>project Banque du sang</h4>
    </center>
  </div>
    
  <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
    <center>
    <div class="displayWrapper">
      <div class="displayBox">
        <img src="../assets/html.png" alt="image1"/>
        tamplete animate avec html et css
      </div>
    </div>
      <h4> template</h4>
    </center>
  </div>
  
  <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
    <center>
    <div class="displayWrapper">
      <div class="displayBox">
        <img src="../assets/web.jpg" alt="image1"/>
        	blog avec laravel, MYSQL, jQuery et Apache XAMP - 2019
      </div>
    </div>
      <h4>blog</h4>
    </center>
  </div>
  

 <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
    <center>
    <div class="displayWrapper">
      <div class="displayBox">
        <img src="../assets/ecare.jpg" alt="image1"/>
      Conception et réalisation d’un site web eCommerce avec PHP, MYSQL, Javascript, jQuery et Apache XAMP - 2019
      </div>
    </div>
      <h4>site eCommerce </h4>
    </center>
  </div>


   <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
    <center>
    <div class="displayWrapper">
      <div class="displayBox">
        <img src="../assets/html.jpg" alt="image1"/>
         tamplete animate avec html et css et jQuery
      </div>
    </div>
      <h4> template  </h4>
    </center>
  </div>
    
</div>




      
    </div>


  </div>
  

  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Raleway');

html , body
{
  height:100%;
  width:100%;
  background:#f1f1f1;
  font-family: 'Raleway', sans-serif;
  overflow-x:hidden;
}

.titleBlock
{
  width:70%;
  margin-left:15%;
}

.Sitetitle:before
{
  content:"";
  width:50px;
  height:2px;
  background:#000;
  position: absolute;
  margin-top:18px;
  margin-left:-60px;
}

.Sitetitle:after
{
  content:"";
  width:50px;
  height:2px;
  background:#000;
  position: absolute;
  margin-top:18px;
  margin-left:8px;
}

.displayWrapper
{
  box-shadow: 0 0 15px rgba(0,0,0,0.6);
  padding: 10px;
  width:320px;
  margin-top:20px;
}
.displayBox
{
  width:300px;
  height:300px;
  overflow: hidden;   
}
.displayBox img
{
  width:100%;
  -webkit-transition: all 5s ease;
    transition: all 5s ease;
  position:relative;
}
.displayBox img:hover
{
  cursor:pointer;
   transform: translateY(-83.7%);
}


.container{
  padding-left: 90px;
  padding-right: 90px;
}

.row{
  margin: 0px;
  padding: 0px;
}

.header{
  margin-top: 100px;
}

.menu .text{
  margin-left: 10%;
  position: absolute;
  display: block;
  position: absolute;
  top:20%;
  z-index: 2;
}

.menu .text .top_text{
  font-size: 19px;
  text-transform: uppercase; 
  font-weight: bold;
  letter-spacing: 2px;
}

.menu .text .center_text{
  font-size: 59px;
  font-weight: bold;
  letter-spacing: 5px; 
}

.menu .text .bottom_text{
  font-size: 30px;
}

/* my_info */
.menu .my_info{
  z-index: 2;
  position: absolute; 
}

.photo_frame{
  position: relative;
  border: 8px solid;
  height: 75vh;
  border-radius: 10px;
}

.photo_frame .photo img{
  width: 100%;
  height: 74vh;
  object-fit: cover;
  position: absolute;
  right: 3vw;
  bottom: 2vh;
  z-index: 1;
  border-radius: 10px;
}

.my_info{
  margin-top: 20px;  
}

.my_info button{
  margin-right: 5px;
  border-radius: 0;
  padding: 3px;
  background: transparent;
  border-bottom: 1px solid black;
}

.my_info button:hover{
  color: white;
  background: rgba(0,0,0,0.8);
  padding: 3px;
  border-radius: 3px;
  border-bottom: none;
}

/*About me*/
.about_me{
  margin-top: 60px;
}

.about_me .title{
  margin-bottom: 30px;
}

.about_me .portfolio{
  border-left: 1px solid;
}

.about_text{
  padding-left: 5px;
}

.size_32{
  font-size:32px;
}

.size_24{
  font-size: 24px;
}

.size_26{
  font-size: 26px;
}

.size_34{
  font-size: 34px;
}

.size_22{
  font-size: 22px;
}

.size_25{
  font-size: 25px;
}

.size_45{
    font-size: 45px;
  }

/* My skills */
.my_skills{
  margin-top: 100px;
}

.my_skills .title{
  margin-bottom: 50px;
}

.my_skills .row .skill{
  padding: 5px;
}

.my_skills .row .skill_body{
  padding: 2px;
  border-radius: 5px;
  margin: 0px;
  border: 1px solid rgba(0,0,0,0.2);
  min-height: 135px;
}
.my_skills .row .skill .row .image{
  padding: 0px;
}

.my_skills .row .skill .row .image img{
  padding: 2px;
  width: 100%;
}

.my_skills .row .skill .row .desc{
  padding: 0px 4px 4px 4px;
  font-size: 14px;
}

/* button holder */

.load_more_buttons{
  text-align: center;
}


/* Portfolio */

.works{
  margin-top: 100px;
  padding: 0px;
}

.works .labels{
  margin-top: 50px;
  color: rgba(0,0,0,0.6);
}

.works .labels .row .label_name{
  font-weight: bold;
}

.works .labels .row .label{
  margin: 0px;
}

.works .labels .row .label_name:hover{
  text-decoration: underline;
  cursor: pointer;
}

.works .labels .row .label_count{
  font-size: 10px;
  font-weight: bold;
  position: absolute;
  top: -10px;
  margin-left: 6px;
}

.works .display_box{
  margin-top: 25px;
}

.works .display_box .display_menu{
  text-align: right;
  margin-top: -25px;
  margin-bottom: 20px;
}

.works .display_box .projects_holder{
  padding: 0px;
}

.works .display_box .projects_holder .project{
  background-size: contain;
  height: 180px;
  border-radius: 5px;
  margin-bottom: 30px;
}

.works .display_box .projects_holder .project .project_body{
  height: 180px;
  border-radius: 5px;
}

.works .display_box .projects_holder .project .project_info{
  color: #fff;
  top: auto;
  bottom: auto;
  width: 90%;
  margin-left: 5%;
  margin-right: 5%;
  padding: 10px;
  z-index: 2;
}

.works .display_box .projects_holder .project .project_info .title a{
  color: #fff;
}

.works .display_box .projects_holder .project:hover .project_body{
  box-shadow: 2px 5px 20px 8px rgba(145, 145, 145, .8);
}



/* Contact me */
.get_in_touch{
  padding: 0px;
  margin-top: 100px;
}

.get_in_touch textarea{
  width: 100%;
  border-radius: 5px;
  border: 1px solid rgba(0,0,0,.2)
}

.get_in_touch input{
  border-radius: 5px;
  width: 100%;
  border: 1px solid rgba(0,0,0,.3);
}



@media(max-width: 812px){
  
  .container{
    padding: 1%;
  }
  
  .photo_frame .photo img{
    height: 30vh;
  }
  
  .photo_frame{
    height: 30vh;
    border: 5px solid;
  }
  
  .menu{
    padding: 0px;
  }
  
  .menu .text{
    padding: 0px;
    margin-left: 1%;
  }
  
  .menu .text .top_text{
    font-size: 13px;
  }
  
  .menu .text .center_text{
    font-size: 28px;
  }
  
  .menu .text .bottom_text{
    font-size: 15px;
  }
  
  .my_info button{
    font-size: 11px;
    font-weight:bold;
  }
  
  .about_me .about_text{
    font-size: 12px;
  }
  
  .skill_body .title h4{
    font-size: 12px;
  }
  
  .my_skills .row .skill .row .desc {
    font-size: 10px;
  }
  
  .my_skills .row .skill_body {
    min-height: 140px;
  }
  
  .my_skills .row .skill .row .image img{
    width: 30px;
    height: 30px;
  }
  
  .works .display_box .projects_holder .project .project_body .project_info{
    padding: 2px;
  }
  
  .works .display_box .projects_holder .project .project_info .title h3{
    font-size: 1rem;
  }
  
  .works .display_box .projects_holder .project .project_info .date{
    font-size: 11px;
  }
  
  .works .display_box .projects_holder .project .project_info .desc{
    font-size: 10px;
  }
  
  .size_32{
    font-size:22px;
  }

  .size_24{
    font-size: 14px;
  }

  .size_26{
    font-size: 16px;
  }

  .size_34{
    font-size: 24px;
  }

  .size_22{
    font-size: 12px;
  }

  .size_25{
    font-size: 15px;
  }

  .size_45{
      font-size: 25px;
   }
  
  .about_me .portfolio{
    border-left: none;
    margin-top: 20px;
  }
  
}

@media(max-width: 1024px){
  .photo_frame{
    height: 36vh;
  }
      .photo_frame .photo img{
        height: 35vh;
      }
}






  

</style>