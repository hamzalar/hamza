<template>

<div class="icon-bar">
  <a href="https://www.facebook.com/tommes.bichri" class="facebook"><i class="fa fa-facebook"></i></a> 
  <a href="https://www.instagram.com/lar_lar0/" class="google"><i class="fa fa-instagram"></i></a> 
  <a href="https://twitter.com/hamza14630843" class="twitter"><i class="fa fa-twitter"></i></a> 
  <a href="https://www.linkedin.com/in/hamza-bichri-914753194/" class="linkedin"><i class="fa fa-linkedin"></i></a>
  <a href="#" class="youtube"><i class="fa fa-youtube"></i></a> 
</div>


</template>


<style scoped>

.icon-bar {
  position: fixed;
  top: 50%;
  -webkit-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
}

.icon-bar a {
  display: block;
  text-align: center;
  padding: 16px;
  transition: all 0.3s ease;
  color: white;
  font-size: 20px;
}

.icon-bar a:hover {
  background-color: #000;
}

.facebook {
  background: #3B5998;
  color: white;
}

.twitter {
  background: #55ACEE;
  color: white;
}

.google {
  background: #dd4b39;
  color: white;
}

.linkedin {
  background: #007bb5;
  color: white;
}

.youtube {
  background: #bb0000;
  color: white;
}

.content {
  margin-left: 75px;
  font-size: 30px;
}

</style>


